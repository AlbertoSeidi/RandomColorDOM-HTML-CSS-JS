function color() {
  const back = document.querySelector("body");
  const button = document.querySelector("button");
  const span = document.getElementById("hex");
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  back.style.backgroundColor = `#${randomColor}`;
  button.style.backgroundColor = `#${randomColor}`;
  span.innerHTML = `#${randomColor}`;
}
