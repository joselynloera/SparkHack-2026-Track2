
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
    setTimeout(function(){
        window.location.href = "outside.html"
    }, 5000);
    stress = Math.min(stress - 20, maxStress);
    updateStressBar();
}
if (choice === "snooze") {
storyText.innerText =
"You close your eyes. Just five more minutes. Just this once.";
    setTimeout(function(){
        window.location.href = "home.html"
    }, 5000);
    stress = Math.min(stress - 20, maxStress);
    updateStressBar();
}
}

let stress = 0;
const maxStress = 100;
let prepared = false;
let leave = false;


//increase the stress
function takeExam() {
    if (prepared){
        prepared = false;
    }
    else{
        stress = Math.min(stress + 20, maxStress);
    }
    updateStressBar();


}

//decrease the stress
function study() {
    prepared = true;
    stress = Math.max(stress - 15, 0);
    updateStressBar();
}

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
    stress = Math.min(stress - 20, maxStress);
    updateStressBar();
    setTimeout(function(){
        window.location.href = "school.html"
    }, 5000);
}

function restart(){
    window.location.href = "home.html"
}

function school(){
    window.location.href = "school.html"
}