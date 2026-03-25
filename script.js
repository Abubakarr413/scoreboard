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

