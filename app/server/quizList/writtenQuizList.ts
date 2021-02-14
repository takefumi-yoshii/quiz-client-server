import type { WrittenQuiz } from "../../types";

export const writtenQuizList: WrittenQuiz[] = [
  {
    id: "2000",
    type: "written",
    quiz_body: " 真偽知を表現する型は「？」型である。",
    answer_value: "boolean",
  },
  {
    id: "2001",
    type: "written",
    quiz_body: "Literal 型を用いて推論を導く共用体を「？」共用体と呼ぶ。",
    answer_value: "判別",
  },
  {
    id: "2002",
    type: "written",
    quiz_body:
      "暗黙的な any 型を禁止するためには、コンパイラーオプションの「？」を true に設定する。",
    answer_value: "noImplicitAny",
  },
];
