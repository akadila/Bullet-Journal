import './style.scss';

var jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
var hobbies = ["Games", "Lecture", "Plan", "Art du Fil", "Sorties", "Shopping"];
var bullets = "<input type ='checkbox'/>";
var app = document.getElementById("app");

var j = '<div class="jours">';
jours.forEach(function (day) {
  j += `<div class="jour">${day}</div>`;
});
j += "</div>";

/* for (var jour of jours) {
  console.log(jour);
} */
var left = '<div class="left">';
left += '<div> Activities</div>';
hobbies.forEach(function (hobby) {
  left += `<div class="hobbies">${hobby}<div></div></div>`;
});

left += "</div>";

var blt = '<div class="blt">';
for (var i = 0; i < 42; i++) {
  blt += bullets;
}
blt += "</div>";

var right = `<div class='right'>${j}${blt}</div>`;
app.innerHTML = left + right;
/* for (var jour of jours) {
  console.log(jour);
} */

/* var balise = "toto";
console.log(basil);
var toto = function (x) { return x * 2; };
var arr = [1, 2, 3];
var arr2 = arr.map(function (x) {}); */
