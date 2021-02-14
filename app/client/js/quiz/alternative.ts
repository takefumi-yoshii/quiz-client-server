import type { AlternativeQuiz, ResultResponse } from "../../../types";
import { postAnswer } from "../fetchers";
// ______________________________________________________
//
export function setQuiz(data: AlternativeQuiz) {
  document.getElementById("quiz")!.innerHTML = `${data.quiz_body}（択一回答）`;
  document.getElementById("choices")!.innerHTML = data.quiz_choices
    .map(
      (choice) =>
        `<li>
          <input
            type="radio"
            name="quiz"
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
function getInputAnswer() {
  const arr = Array.from(document.forms[0].elements) as HTMLFormElement[];
  return [...arr]
    .map((elm) => ({
      value: elm.value as string,
      checked: elm.checked as boolean,
    }))
    .find((elm) => elm.checked);
}
// ______________________________________________________
//
export async function checkAnswer(
  currentQuizId: string
): Promise<ResultResponse> {
  const answer = getInputAnswer();
  if (!answer) {
    return { result: false, error: "選択してください" };
  }
  try {
    return postAnswer(Number(answer.value), currentQuizId);
  } catch {
    return { result: false, error: "エラーが発生しました" };
  }
}
