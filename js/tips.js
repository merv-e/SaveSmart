function share() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let tip = prompt("What tip would you like to share?");

  if (name < 1) {
    alert("Thank you for sharing your tip!");
  } else alert("Thank you " + name + ", for sharing your tip!");
}

let shareTips = document.querySelector(".share-tips");
shareTips.addEventListener("click", share);
