//grab elements
let reactIcon = document.getElementById("icon-react");
let reactText = document.querySelector("#react-text");
let reactNum = document.querySelector(".nr1");

let memIcon = document.getElementById("icon-mem");
let memText = document.querySelector("#mem-text");
let memNum = document.querySelector(".nr2");

let verbalIcon = document.getElementById("icon-verbal");
let verbalText = document.querySelector("#verb-text");
let verbalNum = document.querySelector(".nr3");

let visualIcon = document.getElementById("icon-visual");
let visualText = document.querySelector("#visual-text");
let visualNum = document.querySelector(".nr4");

fetch("data.json") //returns promise, promise in pending state when request is sent.
  .then((response) => response.json())
  .then((data) => {
    //reaction
    reactIcon.src = data[0].icon;
    reactText.textContent = data[0].category;
    reactNum.textContent = data[0].score;
    //Memoery
    memIcon.src = data[1].icon;
    memText.textContent = data[1].category;
    memNum.textContent = data[1].score;
    //verbal
    verbalIcon.src = data[2].icon;
    verbalText.textContent = data[2].category;
    verbalNum.textContent = data[2].score;
    //visual
    visualIcon.src = data[3].icon;
    visualText.textContent = data[3].category;
    visualNum.textContent = data[3].score;
    console.log(data);
  })
  .catch((error) => console.error("Error:", error));
