export type QuestionType = "alternative" | "multiple" | "written";
export type Choice = { value: number; text: string };

export type AlternativeQuestion = {
  id: string;
  type: "alternative";
  quiz_body: string;
  quiz_choices: Choice[];
  answer_value: number;
};

export type MultipleQuestion = {
  id: string;
  type: "multiple";
  quiz_body: string;
  quiz_choices: Choice[];
  answer_values: number[];
};

export type WrittenQuestion = {
  id: string;
  type: "written";
  quiz_body: string;
  answer_value: string;
};

export type Quiz = AlternativeQuestion | MultipleQuestion | WrittenQuestion;
export type Answer = number | number[] | string;
