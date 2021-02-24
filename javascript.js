$(document).ready(function() {
// 0a. load local storage

// 0b. get time/display day
let currentDay = moment().format("dddd, MMM, Do");
console.log("currentDay", currentDay);
$("#currentDay").text(currentDay);

// 0c. color timeblocks (past/future)
let middle = $(".description");

// 1. user click timeblock
let planner = {
    eightToNine: "",
    nineToTen: "",
    tenToEleven: "",
    elevenToTwelve: "",
    twelveToOne: "",
    oneToTwo: "",
    twoToThree: "",
    threeToFour: "",
    fourToFive: ""
};
let keyList = ["eightToNine", "nineToTen", "tenToEleven", "elevenToTwelve", "twelveToOne", "oneToTwo", "twoToThree", "threeToFour", "fourToFive"];
//  1a. field to type in (forms)
// 2. saves when save button clicked
$(".saveBtn").on("click", function() {
    let i = parseInt(this.value);
    let key = keyList[i];
    planner[key] = middle[i].textContent;
    localStorage.setItem("time", JSON.stringify(planner));
});

//   2a. onclick save-button
//   2b. save in object property
//   2c. store object in local storage


JSON.parse(localStorage.getItem("location"));

for (let i = 0; i < 9; i++) {
        let currentTime = parseInt(moment().format("h"));
    if (currentTime < 8) {
        currentTime += 12;
    }
    
    let adj = i + 8;
    if (currentTime > adj) {
        middle[i].classList.add("past");
    }
    else if (currentTime === adj) {
        middle[i].classList.add("present");
    }
    else {
        middle[i].classList.add("future");
    }
}

});