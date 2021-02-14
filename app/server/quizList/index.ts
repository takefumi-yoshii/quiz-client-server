import type { Quiz } from "../../types";
import { alternativeQuizList } from "./alternativeQuizList";
import { multipleQuizList } from "./multipleQuizList";
import { writtenQuizList } from "./writtenQuizList";
export const quizList: Quiz[] = [
  ...alternativeQuizList,
  ...multipleQuizList,
  ...writtenQuizList,
];
