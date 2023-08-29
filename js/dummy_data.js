const dummy_data = [
  {
    name: "Julia",
    id: "58cDd4",
    budget: 2000,
    dailyGoal: 20,
    monthlyGoal: 600,
  },
  {
    name: "Gabriel",
    id: "8p4s7Qa",
    budget: 5000,
    dailyGoal: 20,
    monthlyGoal: 600,
  },
  {
    name: "Fatima",
    id: "214adee",
    budget: 1500,
    dailyGoal: 5,
    monthlyGoal: 300,
  },
  {
    name: "Yuzuki",
    id: "5h8E4g",
    budget: 10000,
    dailyGoal: 100,
    monthlyGoal: 3000,
  },
];

const numOfUsers = dummy_data.length;
const login = document.getElementById("login");
const userName = document.getElementById("username");
const goalBar = document.getElementById("goalbar");
const dailyGoal = document.getElementById("dailyGoal");
const monthlyGoal = document.getElementById("monthlyGoal");

login.addEventListener("click", function () {
  let generateRandomNumber = Math.floor(Math.random() * numOfUsers);

  let userInfo = dummy_data[generateRandomNumber];

  userName.innerHTML = "Hello " + userInfo.name + "!";

});



