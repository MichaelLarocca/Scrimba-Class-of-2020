//target all the buttons
const infoButtons = document.querySelectorAll(".btn-info")

//function to toggle the class "closed" on the "card" div
function toggleInfo(event) {
  event.target.parentNode.classList.toggle("closed")
}

//add event listnener to the buttons
infoButtons.forEach(button => button.addEventListener("click", toggleInfo))