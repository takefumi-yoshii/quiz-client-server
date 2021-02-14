import type { AlternativeQuiz } from "../../types";

export const alternativeQuizList: AlternativeQuiz[] = [
  {
    id: "0000",
    type: "alternative",
    quiz_body: "次のうち、プリミティブ型ではないものはどれか？",
    quiz_choices: [
      {
        value: 0,
        text: "boolean 型",
      },
      {
        value: 1,
        text: "void 型",
      },
      {
        value: 2,
        text: "undefined 型",
      },
      {
        value: 3,
        text: "null 型",
      },
    ],
    answer_value: 1,
  },
  {
    id: "0001",
    type: "alternative",
    quiz_body: "次のうち、リテラル型として推論されないものはどれか？",
    quiz_choices: [
      {
        value: 0,
        text: "const value = 0",
      },
      {
        value: 1,
        text: "const value = true",
      },
      {
        value: 2,
        text: "const value = 'message'",
      },
      {
        value: 3,
        text: "const value = null",
      },
    ],
    answer_value: 3,
  },
];
