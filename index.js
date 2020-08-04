const body = document.querySelector("body");
const containerDiv = document.createElement("div");
containerDiv.classList.add("container");
body.appendChild(containerDiv);
const multiButton = document.createElement("button");
multiButton.setAttribute("type", "button");
multiButton.setAttribute("name", "multi");
multiButton.innerText = "Create a new etch-a-sketch";
containerDiv.insertAdjacentElement("beforebegin", multiButton);

function createAttachListenDiv(basicClass, hoverClass, parentDiv) {
  const div = document.createElement("div");
  div.classList.add(basicClass);
  div.addEventListener("mouseenter", () => {
    div.classList.add(hoverClass);
  })
  parentDiv.appendChild(div);
}

function createEmptyGrid(parentDiv) {
  const rows = prompt("Number of rows (16 to 64):", 16);
  const columns = prompt("Number of columns (16 to 64):", 16);
  for (let i = 1; i <= rows*columns; i++) {
    createAttachListenDiv("square", "highlighted", parentDiv);
  }
  parentDiv.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  parentDiv.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  parentDiv.style.border = "1px solid rgba(255, 192, 203, 0.795)";
}

multiButton.addEventListener("click", () => {
  containerDiv.innerHTML = "";
  createEmptyGrid(containerDiv);
  if (containerDiv.innerHTML === "") {
    multiButton.innerText = "Create a new etch-a-sketch";
  } else {
    multiButton.innerText = "Clear";
  }
});
