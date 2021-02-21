$(document).ready(function() {
// 0a. load local storage
// localStorage.setItem("location", JSON.stringify("planner"));
// JSON.parse(localStorage.getItem("location"));

// 0b. get time/display day
let currentDay = moment().format("dddd, MMM, Do");
console.log("currentDay", currentDay);
$("#currentDay").text(currentDay);

// 0c. color timeblocks (past/future)

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
//  1a. field to type in (forms)
// 2. saves when save button clicked
//   2a. onclick save-button
//   2b. save in object property
//   2c. store object in local storage
});