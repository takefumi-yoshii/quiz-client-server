// ______________________________________________________
//
export function getInputRadioAnswer() {
  const arr = Array.from(document.forms[0].elements) as HTMLFormElement[];
  return [...arr]
    .map((elm) => ({
      value: elm.value as string,
      checked: elm.checked as boolean,
    }))
    .find((elm) => elm.checked);
}
// ______________________________________________________
//
export function getInputCheckboxAnswers() {
  const arr = Array.from(document.forms[0].elements) as HTMLFormElement[];
  return [...arr]
    .map((elm) => ({
      value: elm.value as string,
      checked: elm.checked as boolean,
    }))
    .filter((elm) => elm.checked)
    .map((elm) => Number(elm.value));
}
// ______________________________________________________
//
export function getInputTextAnswer() {
  const arr = Array.from(document.forms[0].elements) as HTMLFormElement[];
  return [...arr].map((elm) => elm.value)[0];
}
