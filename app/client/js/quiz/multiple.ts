import type { MultipleQuiz, ResultResponse } from "../../../types";
import { postAnswer } from "../fetchers";
// ______________________________________________________
//
export function setQuiz(data: MultipleQuiz) {
  document.getElementById("quiz")!.innerHTML = `${data.quiz_body}（複数回答）`;
  document.getElementById("choices")!.innerHTML = data.quiz_choices
    .map(
      (choice) =>
        `<li>
          <input
            type="checkbox"
            name="quiz-${choice.value}"
            id="quiz-${choice.value}"
            value="${choice.value}"
          />
          <label for="quiz-${choice.value}">${choice.text}</label>
        </li>`
    )
    .join("\n");
}
// ______________________________________________________
//
function getInputAnswers() {
  const arr = Array.from(document.forms[0].elements) as HTMLFormElement[];
  return [...arr]
    .map((elm) => ({
      value: elm.value as string,
      checked: elm.checked as boolean,
    }))
    .filter((elm) => elm.checked)
    .map((elm) => Number(elm.value));
}
// ______________________________________________________
//
export async function checkAnswer(
  currentQuizId: string
): Promise<ResultResponse> {
  const answers = getInputAnswers();
  if (!answers.length) {
    return { result: false, error: "選択してください" };
  }
  try {
    return postAnswer(answers, currentQuizId);
  } catch {
    return { result: false, error: "エラーが発生しました" };
  }
}
