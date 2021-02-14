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
];
