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
async function startQuiz() {
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
async function checkAnswer() {
  if (currentQuizId === null) {
    return alert("クイズを取得してください");
  }
  switch (currentQuizType) {
    case "alternative":
      updateScore(await alternative.checkAnswer(currentQuizId));
      break;
    case "multiple":
      updateScore(await multiple.checkAnswer(currentQuizId));
      break;
    case "written":
      updateScore(await written.checkAnswer(currentQuizId));
      break;
  }
  startQuiz();
}
// ______________________________________________________
//
function handleClickStart() {
  const $container = document.getElementById("container");
  if (!$container) {
    throw new Error("Not found #container");
  }
  $container.classList.add("isStart");
  startQuiz();
}
function handleSubmitForm(event: Event) {
  event.preventDefault();
  checkAnswer();
}
function main() {
  const $btnStart = document.getElementById("btnStart");
  const $form = document.getElementById("form");
  if (!$btnStart || !$form) {
    throw new Error("Not found #btnStart or #form");
  }
  $btnStart.addEventListener("click", handleClickStart);
  $form.addEventListener("submit", handleSubmitForm);
}
window.addEventListener("load", main);
