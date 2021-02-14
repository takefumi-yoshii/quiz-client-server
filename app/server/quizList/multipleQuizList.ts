import type { MultipleQuiz } from "../../types";

export const multipleQuizList: MultipleQuiz[] = [
  {
    id: "1000",
    type: "multiple",
    quiz_body: "次のうち、リテラル型として推論されないものはどれか？",
    quiz_choices: [
      {
        value: 0,
        text: "let value = 0",
      },
      {
        value: 1,
        text: "let value = 0 as number",
      },
      {
        value: 2,
        text: "let value = 0 as const",
      },
      {
        value: 3,
        text: "const value = 0",
      },
    ],
    answer_values: [0, 1],
  },
  {
    id: "1001",
    type: "multiple",
    quiz_body:
      "`function fn&lt;T extends { type?: string }&gt;(arg: T): void` という関数があるとする。次のうちコンパイルエラーになるものはどれか？",
    quiz_choices: [
      {
        value: 0,
        text: "fn({ type: 'text' })",
      },
      {
        value: 1,
        text: "fn({ type: 0 })",
      },
      {
        value: 2,
        text: "fn({})",
      },
      {
        value: 3,
        text: "fn()",
      },
    ],
    answer_values: [1, 3],
  },
  {
    id: "1002",
    type: "multiple",
    quiz_body: "次のうち、never 型になるものはどれか？",
    quiz_choices: [
      {
        value: 0,
        text: "type T = void & undefined",
      },
      {
        value: 1,
        text: "type T = string & undefined",
      },
      {
        value: 2,
        text: "type T = unknown & undefined",
      },
      {
        value: 3,
        text: "type T = string & number",
      },
    ],
    answer_values: [1, 3],
  },
];
