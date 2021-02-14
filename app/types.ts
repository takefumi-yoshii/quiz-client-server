export type QuizType = "alternative" | "multiple" | "written";
export type Choice = { value: number; text: string };
export type ResultResponse = { result: boolean; error?: string };
export type QuizResponse = { quiz?: Quiz; error?: string };

export type AlternativeQuiz = {
  id: string;
  type: "alternative";
  quiz_body: string;
  quiz_choices: Choice[];
  answer_value: number;
};

export type MultipleQuiz = {
  id: string;
  type: "multiple";
  quiz_body: string;
  quiz_choices: Choice[];
  answer_values: number[];
};

export type WrittenQuiz = {
  id: string;
  type: "written";
  quiz_body: string;
  answer_value: string;
};

export type Quiz = AlternativeQuiz | MultipleQuiz | WrittenQuiz;
export type Answer = number | number[] | string;
