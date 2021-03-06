import type { WrittenQuiz, ResultResponse } from "../../../types";
import { postAnswer } from "../fetchers";
// ______________________________________________________
//
export function setQuiz(data: WrittenQuiz) {
  const $quiz = document.getElementById("quiz");
  const $choices = document.getElementById("choices");
  if (!$quiz || !$choices) {
    throw new Error("Not found #quiz or #choices");
  }
  $quiz.innerHTML = `${data.quiz_body}（筆記回答「？」に該当する答えを記入）`;
  $choices.innerHTML = `
  <li>
    <input
      type="text"
      name="quiz"
      id="quiz"
    />
  </li>`;
}
// ______________________________________________________
//
function getInputAnswer() {
  const arr = Array.from(document.forms[0].elements) as HTMLFormElement[];
  return [...arr].map((elm) => elm.value)[0];
}
// ______________________________________________________
//
export async function checkAnswer(
  currentQuizId: string
): Promise<ResultResponse> {
  const answer = getInputAnswer();
  if (!answer.length) {
    return { result: false, error: "入力してください" };
  }
  try {
    return postAnswer(answer, currentQuizId);
  } catch {
    return { result: false, error: "エラーが発生しました" };
  }
}
