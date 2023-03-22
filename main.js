//범용성이 뛰어남 연결할 방법은 많음

/*-const time = document.querySelector(".time");
const newDate = new Date();

const hours = newDate.getHours();
const minutes = newDate.getMinutes();
const seconds = newDate.getSeconds();

time.innerText = hours + ":" + minutes + ":" + seconds; -*/

//함수 만들겨

function getTime() {
  const time = document.querySelector(".time");
  const newDate = new Date();

  //const hours = newDate.getHours();
  //const minutes = newDate.getMinutes();
  //let seconds = newDate.getSeconds();
  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  if (seconds.toString().length === 1) {
    seconds = "0" + seconds;
  }

  //time.innerText = hours + ":" + minutes + ":" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
