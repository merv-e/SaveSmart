document.addEventListener('DOMContentLoaded', function () {
  const tips = [
    { title: "Plan your meals", text: "Switching to online grocery shopping means that you can carefully compare the prices of the products you add to your basket, make the most of offers and not be tempted into buying snacks to eat the minute you leave the store! You can also make the most of meal-planning tools like Lolipop to buy only exactly what you need. Explore meal options that are tasty, healthy and kind to your savings. Cook in bulk so you can reduce cooking time and food waste, and freeze leftovers for later." },
    { title: "Cashback apps", text: "Consider using cashback apps for your purchases! Cash back apps are an easy way to save money and earn money back on everyday purchases. The best cash back apps are free and can be a great tool to add to your regular personal finance routine. So if you're not using these cash rewards apps, you're missing out on free money" },
    { title: "Save on electricity", text: "Save on electricity bills by turning off lights. Try to only heat the room you're in or the rooms you use regularly. The same idea applies in hot weather. Turn off air-conditioning when you're out. Set the overall temperature 1 °C warmer to cut bills by up to 10%." },
    { title: "Shop during sales", text: "The end-of-season sales provide the perfect opportunity to buy ahead for next year. With so many items discounted, you may find key pieces that will be in trend in a few months. Buying your clothes and accessories ahead of time ensures that you'll stay on top of trends, saving you money in the future." },
    // Add more tips here
  ];

  const tipTitle = document.getElementById('tipTitle');
  const tipText = document.getElementById('tipText');
  const nextTipButton = document.getElementById('nextTipButton');

  let tipIndex = 0;

  nextTipButton.addEventListener('click', function () {
    tipIndex = (tipIndex + 1) % tips.length; // Loop back to the start if all tips have been shown
    tipTitle.textContent = tips[tipIndex].title;
    tipText.textContent = tips[tipIndex].text;
  });
});





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
