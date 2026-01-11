const canvas = document.querySelector(".canvas");
const gridSize = 30;

for (let i = 0; i < gridSize; i++) {
  const columnDiv = document.createElement("div");
  columnDiv.className = "column";
  for (let i = 0; i < gridSize; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "black";
    });
    columnDiv.appendChild(box);
  }
  canvas.appendChild(columnDiv);
}

const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  const allBoxes = canvas.querySelectorAll(".box");
  allBoxes.forEach((box) => {
    box.style.backgroundColor = "transparent";
  });
});
