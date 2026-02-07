

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
    sessionStorage.setItem("stress", stress);
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

if (choice === "doomscroll") {
storyText.innerText =
"You get on social media and flick through posts. Strangely, your efforts to relax are overshadowed by a lingering anxiety.";
stress = Math.min(stress + 10, maxStress);
    updateStressBar();
    window.location.href = "homenight.html"
    done();
}
if (choice === "sleep") {
storyText.innerText =
"You close your eyes and your body relaxes. You've earned this";
stress = Math.min(stress - 5, maxStress);
    updateStressBar();
    window.location.href = "homenight.html"
    done();
}

if (choice === "study") {
storyText.innerText =
"Your mind is jumbled from sleep depreivation. But hey, at least you're ahead of the game.";
stress = Math.min(stress + 5, maxStress);
    updateStressBar();
    window.location.href = "homenight.html"
    done();
}
}



/////////////////////////////////////////////////////////////////////////////////
let stress = sessionStorage.getItem("stress");

if (stress === null) {
    stress = 20; // starting value
} else {
    stress = Number(stress);
}
const maxStress = 100;
let prepared = false;
updateStressBar();
sessionStorage.setItem("stress", stress);
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
/////////////////////////////////////////////////////////////////////////////////



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

function goToNight(choice){
    document.getElementById("game").style.display = "none";
    document.getElementById("night").style.display = "block";

    document.getElementById("time").innerText = "9:30 pm";

    document.body.style.backgroundImage = "url('night_bedroom.jpg')";



    if (choice === "doomscroll") {
    storyText.innerText =
    "You get on social media and flick through posts. Strangely, your efforts to relax are overshadowed by a lingering anxiety.";
    stress = Math.min(stress + 10, maxStress);
        updateStressBar();
        window.location.href = "homenight.html"
        done();
    }
    if (choice === "sleep") {
    storyText.innerText =
    "You close your eyes and your body relaxes. You've earned this";
    stress = Math.min(stress - 5, maxStress);
        updateStressBar();
        window.location.href = "homenight.html"
        done();
    }

    if (choice === "study") {
    storyText.innerText =
    "Your mind is jumbled from sleep depreivation. But hey, at least you're ahead of the game.";
    stress = Math.min(stress + 5, maxStress);
        updateStressBar();
        window.location.href = "homenight.html"
        done();
    }
}


//leaving school
function leave(){
    window.location.href = "homenight.html"
    goToNight();
}


function done(){
    if(stress >= 50){
        window.location.href = "shradha.html"
    }
    else {
        window.location.href = "asma.html"
    }
}