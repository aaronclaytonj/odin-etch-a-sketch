const gridSizeBtn = document.querySelector(".gridSizeBtn");

gridSizeBtn.addEventListener("click", function (event) {
  let choice = parseInt(prompt("Choose grid size! (max 80)"));
  if (choice > 80) {
    choice = 80;
  }
  const container = document.querySelector(".container");
  container.remove();

  gridSetup(choice);
});

function gridSetup(numPerRow) {
  let container = document.createElement("div");
  container.classList.add("container");
  document.body.appendChild(container);
  const sizeOfPage = getComputedStyle(container).maxWidth;

  let total = numPerRow * numPerRow + numPerRow;
  for (let i = 1; i < total; i++) {
    let div = document.createElement("div");
    if (i % (numPerRow + 1) == 0) {
      div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      div.style.cssText = `border: 1px solid black; height: calc((${sizeOfPage} /${numPerRow}) - 2px); width: calc((${sizeOfPage} /${numPerRow}) - 2px);`;
    }
    div.addEventListener("mouseenter", function (event) {
      event.target.style.backgroundColor = "red";
      // setTimeout(() => {
      //   event.target.style.backgroundColor = "";
      // }, 500);
    });

    container.appendChild(div);
  }
}

gridSetup(16);
