// ______________________________________________________
//
// Fetchers
//
function fetchQuiz() {
  return fetch("/api/quiz")
    .then((data) => data.json())
    .catch((err) => console.log(err));
}
function postAnswer(answer) {
  return fetch("/api/answer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      quiz_id: currentQuizId,
      answer,
    }),
  });
}
// ______________________________________________________
//
// State
//
let currentQuizId = null;
let currentQuizType = null;
let tryCount = 0;
let correctCount = 0;
// ______________________________________________________
//
// DOM Setters
//
function setScore() {
  document.getElementById("tryCount").innerHTML = tryCount;
  document.getElementById("correctCount").innerHTML = correctCount;
}
function setAlternativeQuiz(data) {
  document.getElementById("quiz").innerHTML = data.quiz_body;
  document.getElementById("choices").innerHTML = data.quiz_choices
    .map(
      (choice) =>
        `<li>
          <input
            type="radio"
            name="quiz"
            id="quiz-${choice.value}"
            value="${choice.value}"
          />
          <label for="quiz-${choice.value}">${choice.text}</label>
        </li>`
    )
    .join("\n");
}
// ______________________________________________________
//
// DOM Getters
//
function getInputRadioAnswer() {
  return [...document.form.elements]
    .map((elm) => ({
      value: elm.value,
      checked: elm.checked,
    }))
    .find((elm) => elm.checked);
}
// ______________________________________________________
//
// Get Quiz
//
async function getQuiz() {
  const data = await fetchQuiz();
  currentQuizId = data.id;
  currentQuizType = data.type;
  switch (currentQuizType) {
    case "alternative":
      setAlternativeQuiz(data);
      break;
  }
}
// ______________________________________________________
//
// Post Answer
//
async function checkAlternativeQuiz() {
  const answer = getInputRadioAnswer();
  if (!answer) return alert("選択してください");
  try {
    const data = await postAnswer(Number(answer.value)).then((data) =>
      data.json()
    );
    tryCount++;
    if (data.result) {
      correctCount++;
    }
    alert(data.result ? "正解！" : "不正解…");
    setScore();
  } catch {
    alert("エラーが発生しました");
  }
}
// ______________________________________________________
//
async function handleSubmit(event) {
  event.preventDefault();
  switch (currentQuizType) {
    case "alternative":
      checkAlternativeQuiz();
      break;
  }
}
// ______________________________________________________
//
document.getElementById("btn").addEventListener("click", getQuiz);
document.getElementById("form").addEventListener("submit", handleSubmit);
setScore();
