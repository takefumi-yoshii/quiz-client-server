import type { AlternativeQuiz, MultipleQuiz, WrittenQuiz } from "../../types";
// ______________________________________________________
//
export function setAlternativeQuiz(data: AlternativeQuiz) {
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
export function setMultipleQuiz(data: MultipleQuiz) {
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
export function setWrittenQuiz(data: WrittenQuiz) {
  document.getElementById("quiz")!.innerHTML = `${data.quiz_body}（筆記回答）`;
  document.getElementById("choices")!.innerHTML = `
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
export function setScore(tryCount: number, correctCount: number) {
  document.getElementById("tryCount")!.innerHTML = `${tryCount}`;
  document.getElementById("correctCount")!.innerHTML = `${correctCount}`;
}
