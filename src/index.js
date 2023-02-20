function present() {
  let containerElement = document.querySelector("#container");
  containerElement.innerHTML = "";
}
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", present);
