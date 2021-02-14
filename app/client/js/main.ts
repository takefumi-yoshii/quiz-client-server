import type { Quiz, QuizType, ResultResponse } from "../../types";
import * as alternative from "./quiz/alternative";
import * as multiple from "./quiz/multiple";
import * as written from "./quiz/written";
import { fetchQuiz } from "./fetchers";
// ______________________________________________________
//
let currentQuizId: string | null = null;
let currentQuizType: QuizType | null = null;
let tryCount = 0;
let correctCount = 0;
// ______________________________________________________
//
function setQuiz(quiz: Quiz) {
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
async function getQuiz() {
  const data = await fetchQuiz();
  if (data.error) return alert(data.error);
  if (!data.quiz) return alert("クイズが取得できませんでした");
  setQuiz(data.quiz);
}
// ______________________________________________________
//
function setScore(tryCount: number, correctCount: number) {
  document.getElementById("tryCount")!.innerHTML = `${tryCount}`;
  document.getElementById("correctCount")!.innerHTML = `${correctCount}`;
}
// ______________________________________________________
//
function handleCheckResponse(res: ResultResponse) {
  if (res.error) {
    return alert(res.error);
  }
  tryCount++;
  if (res.result) {
    correctCount++;
  }
  setScore(tryCount, correctCount);
  alert(res.result ? "正解！" : "不正解…");
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
      return handleCheckResponse(await alternative.checkAnswer(currentQuizId));
    case "multiple":
      return handleCheckResponse(await multiple.checkAnswer(currentQuizId));
    case "written":
      return handleCheckResponse(await written.checkAnswer(currentQuizId));
  }
}
// ______________________________________________________
//
document.getElementById("btn")!.addEventListener("click", getQuiz);
document.getElementById("form")!.addEventListener("submit", checkAnswer);
setScore(tryCount, correctCount);
