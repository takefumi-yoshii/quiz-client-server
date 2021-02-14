import { postAnswer } from "./fetchers";
import {
  getInputRadioAnswer,
  getInputCheckboxAnswers,
  getInputTextAnswer,
} from "./domGetters";
import type { ResultResponse } from "../../types";
// ______________________________________________________
//
export async function checkAlternativeQuiz(
  currentQuizId: string
): Promise<ResultResponse> {
  const answer = getInputRadioAnswer();
  if (!answer) {
    return { result: false, error: "選択してください" };
  }
  try {
    return postAnswer(Number(answer.value), currentQuizId);
  } catch {
    return { result: false, error: "エラーが発生しました" };
  }
}
// ______________________________________________________
//
export async function checkMultipleQuiz(
  currentQuizId: string
): Promise<ResultResponse> {
  const answers = getInputCheckboxAnswers();
  if (!answers.length) {
    return { result: false, error: "選択してください" };
  }
  try {
    return postAnswer(answers, currentQuizId);
  } catch {
    return { result: false, error: "エラーが発生しました" };
  }
}
// ______________________________________________________
//
export async function checkWrittenQuiz(
  currentQuizId: string
): Promise<ResultResponse> {
  const answer = getInputTextAnswer();
  if (!answer.length) {
    return { result: false, error: "入力してください" };
  }
  try {
    return postAnswer(answer, currentQuizId);
  } catch {
    return { result: false, error: "エラーが発生しました" };
  }
}
