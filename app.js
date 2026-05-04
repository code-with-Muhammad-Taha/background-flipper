let colors = [
  "green", "red", "blue", "yellow", "skyblue",
  "lightblue", "gray", "purple", "pink", "black",
  "orange", "white", "brown", "lightbrown",
  "magenta", "teal", "cyan"
];

let text = document.getElementById("colorName");
let button = document.getElementById("btn");
let bodyTag = document.getElementsByTagName("body")[0];

button.addEventListener("click", changeColor);

function changeColor() {
  let randomNum = Math.floor(Math.random() * colors.length);
  let selectedColor = colors[randomNum];

  bodyTag.style.backgroundColor = selectedColor;

  text.innerText = selectedColor.toUpperCase();

  if (selectedColor === "black") {
    text.style.color = "white";
  } else {
    text.style.color = "black";
  }
}