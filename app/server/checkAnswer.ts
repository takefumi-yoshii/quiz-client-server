import type { Quiz, Answer } from "../types";

export function checkAnswer(quiz: Quiz, answer: Answer) {
  switch (quiz.type) {
    case "alternative":
      if (typeof answer !== "number") {
        throw new Error("400");
      }
      return answer === quiz.answer_value;
    case "multiple":
      if (!Array.isArray(answer) || typeof answer[0] !== "number") {
        throw new Error("400");
      }
      return answer.toString() === quiz.quiz_choices.toString();
    case "written":
      if (typeof answer !== "string") {
        throw new Error("400");
      }
      return answer === quiz.answer_value;
  }
}
