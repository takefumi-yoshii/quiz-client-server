import type { QuizType, ResultResponse } from "../../types";
import { fetchQuiz } from "./fetchers";
import {
  setScore,
  setAlternativeQuiz,
  setMultipleQuiz,
  setWrittenQuiz,
} from "./domSetters";
import {
  checkAlternativeQuiz,
  checkMultipleQuiz,
  checkWrittenQuiz,
} from "./postAnswer";
// ______________________________________________________
//
// State
//
let currentQuizId: string | null = null;
let currentQuizType: QuizType | null = null;
let tryCount = 0;
let correctCount = 0;
// ______________________________________________________
//
// Get Quiz
//
async function getQuiz() {
  const data = await fetchQuiz();
  if (data.error) return alert(data.error);
  if (!data.quiz) return alert("エラーが発生しました");
  currentQuizId = data.quiz.id;
  currentQuizType = data.quiz.type;
  switch (data.quiz.type) {
    case "alternative":
      return setAlternativeQuiz(data.quiz);
    case "multiple":
      return setMultipleQuiz(data.quiz);
    case "written":
      return setWrittenQuiz(data.quiz);
  }
}
// ______________________________________________________
//
function handleCheck(res: ResultResponse) {
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
async function handleSubmit(event: Event) {
  event.preventDefault();
  if (currentQuizId === null) {
    return alert("クイズを取得してください");
  }
  switch (currentQuizType) {
    case "alternative":
      return handleCheck(await checkAlternativeQuiz(currentQuizId));
    case "multiple":
      return handleCheck(await checkMultipleQuiz(currentQuizId));
    case "written":
      return handleCheck(await checkWrittenQuiz(currentQuizId));
  }
}
// ______________________________________________________
//
document.getElementById("btn")!.addEventListener("click", getQuiz);
document.getElementById("form")!.addEventListener("submit", handleSubmit);
setScore(tryCount, correctCount);
