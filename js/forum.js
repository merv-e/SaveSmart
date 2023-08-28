// Form Elements
const form_comment = document.getElementById("form_comment");
const form_contact = document.getElementById("form_contact");
const userComment = document.getElementById("userComment");
const name = document.getElementById("name"); // Add this line
const email = document.getElementById("email"); // Add this line
const message = document.getElementById("message"); // Add this line

// Comment Button Event Listener
form_comment.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const commentValue = userComment.value.trim();
  
  if (commentValue !== "") {
    const newComment = document.createElement("div");
    newComment.className = "comment";
    newComment.innerHTML = `
      <img src="../imgs/user.png" alt="User 2">
      <p>${commentValue}</p>
    `;

    const commentsContainer = document.querySelector(".comments-section");
    commentsContainer.appendChild(newComment);
    
    userComment.value = ""; // Clear the input field
    
    alert("Thank you for your comment! You can find more comments above.");
  }
});

// Contact Form Submit Event Listener
form_contact.addEventListener("submit", function (e) {
  e.preventDefault();

  name.value = "";
  email.value = "";
  message.value = "";
  
  alert("Thank you for your message! We will answer you as soon as possible.");
});

