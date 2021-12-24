const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorChangeBtn = document.querySelector("button");
colorChangeBtn.addEventListener("click", handleChangeBackgroundColor);

function handleChangeBackgroundColor() {
  const bodyColor = document.querySelector("body");
  let color1 = colors[Math.floor(Math.random() * colors.length)];
  let color2 = colors[Math.floor(Math.random() * colors.length)];
  console.log(color1, color2);

  bodyColor.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

// --모범답안

// function handleClick() {
//   const a = colors[Math.floor(Math.random() * colors.length)];
//   const b = colors[Math.floor(Math.random() * colors.length)];
//   if (a === b) {
//     return handleClick();
//   }
//   document.body.style.background = `linear-gradient(to left, ${a}, ${b})`;
// }
