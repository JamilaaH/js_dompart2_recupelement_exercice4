//1
let myRed = document.getElementsByClassName('redPurple');
console.log(myRed);

// 2
let myRedSelector = document.querySelectorAll('.redPurple');
console.log(myRedSelector);

// 3
let selectH1 = document.querySelectorAll('h1.redPurple')
console.log(selectH1);

// 4
let allSelect = document.querySelectorAll("li,p,span");
console.log(allSelect);

// 5
let allSelect2 = document.querySelectorAll("li.important,p ");
console.log(allSelect2);

//6
let selectRed = document.querySelectorAll("h1.redPurple ,span.redPurple");
console.log(selectRed);