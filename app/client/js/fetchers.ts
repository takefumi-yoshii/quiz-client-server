import type { Answer, QuizResponse, ResultResponse } from "../../types";
// ______________________________________________________
//
// Fetchers
//
export async function fetchQuiz(): Promise<QuizResponse> {
  const quiz = await fetch("/api/quiz")
    .then((data) => data.json())
    .catch((error) => ({ error }));
  if (quiz.error) {
    return { error: "エラーが発生しました" };
  }
  return { quiz };
}
// ______________________________________________________
//
export function postAnswer(
  answer: Answer,
  quizId: string
): Promise<ResultResponse> {
  return fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quiz_id: quizId,
      answer,
    }),
  }).then((data) => data.json());
}
