let firstNameInput = document.getElementById("fname");
let lastNameInput = document.getElementById("lname");
let submitBtn = document.getElementById("submit");
let fnameDiv = document.querySelector(".fname-prt");
let lnameDiv = document.querySelector(".lname-prt");
let emailDiv = document.querySelector(".email-prt");
let emailInput = document.getElementById("email");
let qryTypeDiv = document.querySelector(".q-type");
let qryInputRadio = document.getElementsByClassName("radioInput");
let qryInputRadioArry = [...qryInputRadio];
let msgDiv = document.querySelector(".msg-prt");
let msgInput = document.querySelector("#msg");
let consentDiv = document.querySelector(".consent");
let consentInput = document.querySelector("#consent");
const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
submitBtn.addEventListener("click", checkFormSubmit);

function checkFormSubmit(e) {
  let emptyMsg = "This Field is required";
  //check if fields empty, create element,append, style
  e.preventDefault();
  //clear existing error messages before validtion.
  fnameDiv.querySelectorAll("p").forEach((p) => p.remove());
  lnameDiv.querySelectorAll("p").forEach((p) => p.remove());
  emailDiv.querySelectorAll("p").forEach((p) => p.remove());
  qryTypeDiv.querySelectorAll("p").forEach((p) => p.remove());
  msgDiv.querySelectorAll("p").forEach((p) => p.remove());
  consentDiv.querySelectorAll("p").forEach((p) => p.remove());
  //check if fields empty
  if (firstNameInput.value.trim() === "") {
    let emptyFname = document.createElement("p");
    emptyFname.textContent = emptyMsg;
    emptyFname.classList.add("err-clr");
    fnameDiv.appendChild(emptyFname);
  }
  if (lastNameInput.value.trim() === "") {
    let emptyLname = document.createElement("p");
    emptyLname.textContent = emptyMsg;
    emptyLname.classList.add("err-clr");
    lnameDiv.appendChild(emptyLname);
  }

  if (emailInput.value.trim() === "") {
    // check for bad email input
    let emailTypeMsg = "Enter valid Email Address";
    let emptyEmail = document.createElement("p");
    emptyEmail.textContent = emptyMsg;
    emptyEmail.classList.add("err-clr");
    emailDiv.appendChild(emptyEmail);
    console.log("cant leave it empty!");
  } else if (!validEmail.test(emailInput.value)) {
    let invalidEmail = document.createElement("p");
    invalidEmail.textContent = "Enter a valid email address!";
    invalidEmail.classList.add("err-clr");
    emailDiv.appendChild(invalidEmail);
  }

  /*if (qryInputRadioArry.value.forEach((r) => r.checked === false)) {
    console.log("CHECK A RADIO");
  }*/
  let isChecked = false;
  for (let i = 0; i < qryInputRadioArry.length; i++) {
    if (qryInputRadioArry[i].checked === true) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    //make msg appear below radio
    let emptyQry = document.createElement("p");
    emptyQry.textContent = "Please select a query type";
    emptyQry.classList.add("err-clr");
    qryTypeDiv.appendChild(emptyQry);
  }

  if (msgInput.value.trim() === "") {
    let emptyMsgBlank = document.createElement("p");
    emptyMsgBlank.textContent = emptyMsg;
    emptyMsgBlank.classList.add("err-clr");
    msgDiv.appendChild(emptyMsgBlank);
  }

  if (consentInput.checked === false) {
    //make msg appear below checkbox
    const consentMsg = "To submit this form,please consent to being contacted";
    let consentNotClicked = document.createElement("p");
    consentNotClicked.textContent = consentMsg;
    consentNotClicked.classList.add("err-clr");
    consentDiv.appendChild(consentNotClicked);
  } else {
    showToast();
  }
}
function showToast() {
  const toast = document.querySelector(".toast");
  toast.classList.add("show");

  //hide toast after 3 seconds
  setTimeout(function () {
    toast.classList.remove("show");
  }, 3000);
}
function qryToggle() {
  // try to optomize with array/loop?
  //let genRadio = document.querySelector("#genRadioBtn");
  //let suppRadio = document.querySelector("#suppRadioBtn");
  let genContainer = document.querySelector(".genContainer");
  let suppContainer = document.querySelector(".suppContainer");
  let radioInputs = document.querySelectorAll(".radioInput");

  //let isRadioChecked = false;
  for (let i = 0; i < radioInputs.length; i++) {
    if (
      genContainer.contains(radioInputs[i]) &&
      radioInputs[i].checked === true
    ) {
      genContainer.style.background = "hsl(148, 38%, 91%)";
    } else if (
      suppContainer.contains(radioInputs[i]) &&
      radioInputs[i].checked === true
    ) {
      suppContainer.style.background = "hsl(148, 38%, 91%)";
    }
  }
}
