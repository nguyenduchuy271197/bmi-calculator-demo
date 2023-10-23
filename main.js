const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const calcBtnEl = document.querySelector("#calc-btn");
const resetBtnEl = document.querySelector("#reset-btn");

calcBtnEl.addEventListener("click", function () {
  const weight = parseFloat(weightEl.value);
  const height = parseFloat(heightEl.value);

  const bmi = calcBMI(weight, height);

  renderBMIResult(bmi);
});

resetBtnEl.addEventListener("click", function () {
  weightEl.value = "";
  heightEl.value = "";
  resetBMIResult();
  weightEl.focus();
});

function calcBMI(weight, height, fractionDigits = 2) {
  return (weight / (height / 100) ** 2).toFixed(fractionDigits);
}

function renderBMIResult(bmi) {
  const bmiResultEl = document.querySelector("#bmi-result");

  bmiResultEl.innerHTML = `
        <div class="alert alert-success" role="alert">
            Your BMI is ${bmi}
        </div>
    `;
}

function resetBMIResult() {
  const bmiResultEl = document.querySelector("#bmi-result");
  bmiResultEl.innerHTML = "";
}
