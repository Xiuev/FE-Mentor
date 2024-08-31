// I want to iterate over each div element,
// check if there there is a question there.(h3)
//if exists a question create p element with answer.
//grab elements
let answers = document.getElementsByClassName("response");
let plusButtons = document.getElementsByClassName("plus");
console.log(answers);
console.log(plusButtons);
function showAnswers(event) {
  //check if display === none for each item
  let clickedButton = event.target;
  //turn plusButtons collection into array --> finds the index of the clicked button
  let index = Array.from(plusButtons).indexOf(clickedButton);

  //toggle display for correspnding answer
  if (
    answers[index].style.display === "none" ||
    answers[index].style.display === ""
  ) {
    answers[index].style.display = "block";
    clickedButton.src = "/assets/images/icon-minus.svg";
  } else {
    answers[index].style.display = "none";
    clickedButton.src = "/assets/images/icon-plus.svg";
  }
}
//loop thru collection of elements
//add the event listener to each element individually.
for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", showAnswers);
}
