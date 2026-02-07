

function startGame(){
document.getElementById("title-screen").style.display = "none";
document.getElementById("game").style.display = "block";
document.getElementById("time").style.display = "block";
}

function makeChoice(choice) {
const storyText = document.getElementById("story-text");
if (choice === "up") {
storyText.innerText =
"You sit up, already tired. The day hasn’t even started yet. Maybe some fresh air would be nice.";
    
    stress = Math.min(stress - 5, maxStress);
    updateStressBar();
    localStorage.setItem("stress", stress);
    setTimeout(function(){
        window.location.href = "outside.html"
    }, 3000);
}
if (choice === "snooze") {
storyText.innerText =
"You close your eyes. Just five more minutes. Just this once.";
    stress = Math.min(stress + 5, maxStress);
    updateStressBar();
}
}

let stress = localStorage.getItem("stress");

if (stress === null) {
    stress = 20; // starting value
} else {
    stress = Number(stress);
}
const maxStress = 100;
let prepared = false;
updateStressBar();
localStorage.setItem("stress", stress);
const examButton = document.getElementById("examButton");
const studyButton = document.getElementById("studyButton");
const leaveButton = document.getElementById("leaveButton");


//increase the stress
function takeExam() {
    if (prepared){
        prepared = false;
        document.getElementById("timer").textContent = "10:00 am";
        examButton.disabled = true
    }
    else{
        stress = Math.min(stress + 20, maxStress);
        document.getElementById("timer").textContent = "9:00 am";
        examButton.disabled = true
        studyButton.disabled = true
    }
    updateStressBar();
}

//decrease the stress
function study() {
    prepared = true;
    stress = Math.max(stress - 15, 0);
    document.getElementById("timer").textContent = "9:00 am";
    studyButton.disabled = true;
    updateStressBar();
}

//leaving school


//Updating the stress bad and addding colors on certain range
function updateStressBar() {
  const bar = document.getElementById("stress-bar");
  bar.style.width = stress + "%";

  if (stress < 40) {
    bar.style.backgroundColor = "green";
  } else if (stress < 70) {
    bar.style.backgroundColor = "yellow";
  } else {
    bar.style.backgroundColor = "red";
  }
}

function walk(){
    stress = Math.min(stress - 3, maxStress);
    updateStressBar();
}

function restart(){
    window.location.href = "home.html"
}

function school(){
    window.location.href = "school.html"
    stress = Math.min(stress + 10, maxStress);
    updateStressBar();
}


