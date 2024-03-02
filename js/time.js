const date = document.querySelector("#time span:first-child");
const time = document.querySelector("#time span:last-child");

function currentTime() {
  const currendDate = new Date();
  const year = currendDate.getFullYear();
  const month = String(currendDate.getMonth()).padStart(2, "0");
  const day = String(currendDate.getDate()).padStart(2, "0");
  const hour = String(currendDate.getHours()).padStart(2, "0");
  const minute = String(currendDate.getMinutes()).padStart(2, "0");
  const second = String(currendDate.getSeconds()).padStart(2, "0");
  date.innerText = `${year}년 ${month}월 ${day}일`;
  time.innerText = `${hour}:${minute}:${second}`;
}
currentTime();
setInterval(currentTime, 1000);
