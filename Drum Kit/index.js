var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
console.log(this);



  });

}



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

















// function add(num1, num2) {
// return num1 + num2;
// }
//
// function subtract(num1, num2) {
// return num1 - num2;
// }
//
// function multiply(num1, num2) {
// return num1 * num2;
// }
//
// function divide(num1, num2) {
// return num1 / num2;
// }
//
// function calculator(num1, num2, operator) {
// return operator(num1, num2);
// }

// Construtor Function
// function HouseKeeper(yearsOfExperience,name, cleaningRepertoire){
//   this.yearsOfExperience = yearsOfExperience;
//   this.name = name;
//   this.cleaningRepertoire = cleaningRepertoire;
// }
// var houseKeeper1 = new HouseKeeper(9,"Tom",["lobby","bedroom"]);
