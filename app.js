const container = document.querySelector(".container");
const sizeOfPage = getComputedStyle(container).maxWidth;
let numPerRow = 16;

for (let i = 1; i < numPerRow * numPerRow; i++) {
  let div = document.createElement("div");
  if (i % (numPerRow + 1) == 0) {
    div.style.cssText = "border: 0; height: 0; width: 100%";
  } else {
    div.style.cssText = `border: 1px solid black; height: calc((${sizeOfPage} /${numPerRow}) - 2px); width: calc((${sizeOfPage} /${numPerRow}) - 2px);`;
  }
  div.addEventListener("mouseenter", function (event) {
    event.target.style.backgroundColor = "red";
    setTimeout(() => {
      event.target.style.backgroundColor = "";
    }, 200);
  });

  container.appendChild(div);
}
