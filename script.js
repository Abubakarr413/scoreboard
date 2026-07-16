let homeScore = 0;
let awayScore = 0;

const homeScoreElement = document.getElementById("home-score");
const awayScoreElement = document.getElementById("away-score");

const onePointBtn = document.getElementById("1pointbtn");
const twoPointBtn = document.getElementById("2pointbtn");
const threePointBtn = document.getElementById("3pointbtn");

const awayOnePointBtn = document.getElementById("away-1pointbtn");
const awayTwoPointBtn = document.getElementById("away-2pointbtn");
const awayThreePointBtn = document.getElementById("away-3pointbtn");

onePointBtn.addEventListener("click", () => {
    homeScore += 1;
    homeScoreElement.textContent = homeScore;
});

twoPointBtn.addEventListener("click", () => {
    homeScore += 2;
    homeScoreElement.textContent = homeScore;
});

threePointBtn.addEventListener("click", () => {
    homeScore += 3;
    homeScoreElement.textContent = homeScore;
});

awayOnePointBtn.addEventListener("click", () => {
    awayScore += 1;
    awayScoreElement.textContent = awayScore;
});

awayTwoPointBtn.addEventListener("click", () => {
    awayScore += 2;
    awayScoreElement.textContent = awayScore;
});

awayThreePointBtn.addEventListener("click", () => {
    awayScore += 3;
    awayScoreElement.textContent = awayScore;
});


function resetScores() {
    homeScore = 0;
    awayScore = 0;
    homeScoreElement.textContent = homeScore;
    awayScoreElement.textContent = awayScore;
}

// Timer functionality
const QUARTER_TIME = 12 * 60; 
let timeRemaining = QUARTER_TIME;
let timerInterval = null;

// DOM Elements
const clockDisplay = document.getElementById('game-timer');
const startButton = document.getElementById('start-btn');
const stopButton = document.getElementById('stop-btn');
const resetButton = document.getElementById('reset-btn');

// Formats seconds into MM:SS format
function updateClockDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  
  // Pads single digits with a leading zero (e.g., "05")
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');
  
  clockDisplay.textContent = `${paddedMinutes}:${paddedSeconds}`;
}

// Logic handled on every clock tick
function tick() {
  if (timeRemaining > 0) {
    timeRemaining--;
    updateClockDisplay();
  } else {
    // End of the quarter logic
    clearInterval(timerInterval);
    timerInterval = null;
    alert("Buzz! End of the quarter.");
  }
}


// Initialize the clock display on page load
updateClockDisplay();

// Event Listeners for Game Controls
startButton.addEventListener('click', () => {
  // Prevent duplicate intervals if clicked multiple times
  if (timerInterval === null) {
    timerInterval = setInterval(tick, 1000);
  }
});

stopButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null; // Clear tracking state to allow restart
});

resetButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timeRemaining = QUARTER_TIME;
  updateClockDisplay();
});

// Quarter functionality
let quarter = 1;
const quarterElement = document.getElementById("quarter");
const nextQuarterBtn = document.getElementById("next-quarter-btn");

//try to figure out why quarter does not display 2 but jumps to 3 when next quarter button is clicked
function nextQuarter() {
    if (quarter <= 3) {
        quarter+=1  ;
        quarterElement.textContent = quarter;
        clearInterval(timerInterval);
        timerInterval = null;
        timeRemaining = QUARTER_TIME;
        updateClockDisplay(); // Update the clock display
    } else {
        alert("Game Over! All quarters completed.");
        quarter = 1; // Reset quarter for a new game
    }
}

nextQuarterBtn.addEventListener("click", nextQuarter);  