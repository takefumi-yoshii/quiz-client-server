import type { QuizType } from "../../types";
import * as alternative from "./quiz/alternative";
import * as multiple from "./quiz/multiple";
import * as written from "./quiz/written";
import { fetchQuiz } from "./fetchers";
import { updateScore } from "./score";
// ______________________________________________________
//
let currentQuizId: string | null = null;
let currentQuizType: QuizType | null = null;
// ______________________________________________________
//
async function getQuiz() {
  const data = await fetchQuiz();
  if (data.error) return alert(data.error);
  if (!data.quiz) return alert("クイズが取得できませんでした");
  const { quiz } = data;
  currentQuizId = quiz.id;
  currentQuizType = quiz.type;
  switch (quiz.type) {
    case "alternative":
      return alternative.setQuiz(quiz);
    case "multiple":
      return multiple.setQuiz(quiz);
    case "written":
      return written.setQuiz(quiz);
  }
}
// ______________________________________________________
//
async function checkAnswer(event: Event) {
  event.preventDefault();
  if (currentQuizId === null) {
    return alert("クイズを取得してください");
  }
  switch (currentQuizType) {
    case "alternative":
      return updateScore(await alternative.checkAnswer(currentQuizId));
    case "multiple":
      return updateScore(await multiple.checkAnswer(currentQuizId));
    case "written":
      return updateScore(await written.checkAnswer(currentQuizId));
  }
}
// ______________________________________________________
//
document.getElementById("btn")!.addEventListener("click", getQuiz);
document.getElementById("form")!.addEventListener("submit", checkAnswer);
