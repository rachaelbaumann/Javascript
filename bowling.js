// var score = 0;
// for (var i = 1; i <= 10; i++) {
//     var score = Math.floor(Math.random() * 11);
//     console.log(score);
//     }

var scores = [];

for (var i = 0; i < 11; i++) {
  scores.push(Math.floor(Math.random() * 11));
}
console.log(scores);

var test = 100;

function getScores() {
document.getElementById("scores").innerHTML = scores;

document.getElementById("test").innerHTML = test;