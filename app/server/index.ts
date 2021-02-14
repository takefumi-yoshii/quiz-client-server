import express from "express";
import { quizList } from "./quizList";
import { checkAnswer } from "./checkAnswer";
import path from "path";
// ______________________________________________________
//
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public/")));
app.set("view engine", "ejs");
// ______________________________________________________
//
app.get("/", (req, res) => {
  res.render("./index.ejs");
});

app.get("/api/quiz", (req, res) => {
  const target = (Math.random() * quizList.length) >> 0;
  res.send(quizList[target]);
});

app.post("/api/answer", (req, res) => {
  if (!req.body || !req.body.quiz_id || req.body.answer === undefined) {
    res.status(400);
    res.send({ error: "不正なリクエストです" });
    return;
  }
  const quiz = quizList.find((quiz) => quiz.id === req.body.quiz_id);
  if (!quiz) {
    res.status(400);
    res.send({ error: "存在しないクイズです" });
    return;
  }
  try {
    const result = checkAnswer(quiz, req.body.answer);
    res.send({ result });
  } catch (err) {
    res.status(400);
    res.send({ error: "不正な回答形式です" });
  }
});
// ______________________________________________________
//
app.listen(8080, () => {
  console.log("server start at http://localhost:8080/");
});
