import type { ResultResponse } from "../../types";
// ______________________________________________________
//
let tryCount = 0;
let correctCount = 0;
// ______________________________________________________
//
function setScore(tryCount: number, correctCount: number) {
  const $tryCount = document.getElementById("tryCount");
  const $correctCount = document.getElementById("correctCount");
  if (!$tryCount || !$correctCount) {
    throw new Error("Not found #tryCount or #correctCount");
  }
  $tryCount.innerHTML = `${tryCount}`;
  $correctCount.innerHTML = `${correctCount}`;
}
// ______________________________________________________
//
export function updateScore(res: ResultResponse) {
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
setScore(tryCount, correctCount);
