//  updating daily or monthly goals

// inputs
const inputDailyGoal = document.getElementById("input-update-daily-target");
const inputMonthlylyGoal = document.getElementById(
  "input-update-monthly-target"
);

//buttons
const btnDailyGoal = document.getElementById("btn-update-daily-target");
const btnMonthlylyGoal = document.getElementById("btn-update-monthly-target");

// text that will be updated if target is changed.
const dailyGoal = document.getElementById("dailyGoal");
const monthlyGoal = document.getElementById("monthlyGoal");


// TODOS
//reset the input
// let the user know that these changes are applied.

const updateDaily = inputDailyGoal.addEventListener("keyup", function (ev) {
  // Capture the number in the input once the button is clicked.
  const inputValue = ev.target.value;
  
  btnDailyGoal.addEventListener("click", function (ev) {
    // prevent the default behaviour to occur which is refreshing the page once the form is submitted. In this particular case we don't want that to happen.
    ev.preventDefault();

    // the captured number is going to update the text (daily goal)
    dailyGoal.innerHTML = `${inputValue} €`;
  });
});


const updateMonthly = inputMonthlylyGoal.addEventListener("keyup", function (ev) {
  const inputValue = ev.target.value;

  btnMonthlylyGoal.addEventListener("click", function (ev) {
    ev.preventDefault();
    monthlyGoal.innerHTML = `${inputValue} €`;
  });
});


