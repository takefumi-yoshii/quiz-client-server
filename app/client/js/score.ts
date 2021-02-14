import type { ResultResponse } from "../../types";
// ______________________________________________________
//
let tryCount = 0;
let correctCount = 0;
// ______________________________________________________
//
function setScore(tryCount: number, correctCount: number) {
  document.getElementById("tryCount")!.innerHTML = `${tryCount}`;
  document.getElementById("correctCount")!.innerHTML = `${correctCount}`;
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
