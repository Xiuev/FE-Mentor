//grab input field and button
let emailInput = document.getElementById("email");
let notiBtn = document.querySelector("button");
let errorText = document.querySelector(".email-error");
//let emailBorder = document.querySelector("#email");

notiBtn.addEventListener("click", checkEmail);
function checkEmail(event) {
  event.preventDefault();
  let emailPtrn = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  //let userInput = emailInput.value.trim();
  if (!emailPtrn.test(emailInput.value)) {
    emailInput.style.border = "1.5px solid red";
    errorText.textContent = "Please provide a valid email address";
  } else if (emailInput.value === "") {
    emailInput.style.border = "1.5px solid red";
    errorText.textContent = "Please enter an email";
  } else {
    emailInput.style.border = "1.5px solid hsl(223, 100%, 88%)";
    errorText.textContent = "";
  }
}
