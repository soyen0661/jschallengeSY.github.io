const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function randomBackground() {
  const image = images[Math.floor(Math.random() * images.length)];
  const background = document.createElement("img");
  background.src = `img/${image}`;
  document.body.appendChild(background);
}
randomBackground();
setInterval(randomBackground, 100000);
