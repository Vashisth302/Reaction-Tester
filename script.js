const box = document.getElementById("box");
const result = document.getElementById("result");
const startBtn = document.getElementById("startBtn");

let startTime, endTime;
let timeoutId = null;

// Show the box after a random delay
function showBoxAfterDelay() {
  const delay = Math.random() * 2000 + 1000; // 1s to 3s
  timeoutId = setTimeout(() => {
    setBoxPosition();
    box.style.backgroundColor = getRandomColor();
    box.style.display = "block";
    startTime = new Date().getTime();
  }, delay);
}

// Position the box randomly
function setBoxPosition() {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;
  box.style.left = `${Math.random() * maxX}px`;
  box.style.top = `${Math.random() * maxY}px`;
}

// Generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Start the test
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  result.textContent = "";
  box.style.display = "none";
  clearTimeout(timeoutId);
  showBoxAfterDelay();
});

// Handle box click
box.addEventListener("click", () => {
  endTime = new Date().getTime();
  const reactionTime = ((endTime - startTime) / 1000).toFixed(3);

  box.style.display = "none";
  result.textContent = `⏱️ Your reaction time: ${reactionTime} seconds`;

  // Re-show start button after 1 second
  setTimeout(() => {
    startBtn.style.display = "inline-block";
  }, 1000);
});
