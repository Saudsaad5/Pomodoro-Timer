const timer = document.getElementById("timer");
const timeDisplay = document.getElementById("timeDisplay");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const workBtn = document.getElementById("work");
const shortBtn = document.getElementById("short");
const longBtn = document.getElementById("long");
let timerInterval = null;
let timeLeft = 25 * 60; 
const durations = {
  work: 25 * 60,
  short: 5 * 60,
  long: 15 * 60
};


function updateDisplay() {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    timeDisplay.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  }
  
function startTimer() {
  if (timerInterval === null) {
      timerInterval = setInterval(() =>{
        timeLeft -= 1
        updateDisplay()
    },1000)
  }
}

function pauseTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer(){
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  updateDisplay();
}

function switchMode(mode) {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = durations[mode];
  updateDisplay()
  setActiveMode(mode)
}

function setActiveMode(mode) {
  [workBtn, shortBtn, longBtn].forEach(btn => btn.classList.remove("active"));
  document.getElementById(mode).classList.add("active");
}



startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
workBtn.addEventListener("click", () => switchMode("work"));
shortBtn.addEventListener("click", () => switchMode("short"));
longBtn.addEventListener("click", () => switchMode("long"));