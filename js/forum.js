// the form of the comment section
const form_comment = document.getElementById("form_comment");
const comment_button = document.getElementById("comment_button");
const userComment = document.getElementById("userComment");

// the form of the contact section
const form_contact = document.getElementById("form_contact");
//...

comment_button.addEventListener("click", function (e) {
    e.preventDefault();
    alert(" Your comment is submitted. Thank you!");
    // if nothing is written in the comment section, user shouldn't be able to submit it.
    // after comment is submitted, clear what's written in the comment section.
    //similar functionality should be added to contact-form 
});

const comment = userComment.addEventListener("keypress", function (e) {
  const catchComment = e.target.value;
  console.log(catchComment);
  console.log(catchComment.length);
});
