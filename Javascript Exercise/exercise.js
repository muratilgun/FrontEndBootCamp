alert("Hello");
alert("World");

window.alert('Hello world!');

// https://github.com/rwaldron/idiomatic.js


typeof(23);
typeof('Hello world!');
typeof(true);


function test(){
  var a = "3";
  var b = "8";
}
var c = a;
a= b;
b= c;


console.log("a is "+ a);
console.log("b is "+ b);




var gameLevel = 1;
gameLevel = 2;
gameLevel = 3;

alert("Your level is currently: "+ gameLevel);




alert("hello" + "world");

//
// var message = "Hello";
// var name = "Murat";
//
// alert(message + "there," + " "+ name);


// var tweet = prompt("Compose your tweet:");
//var tweetCount = tweet.length;
// alert("You have written"+ tweet.length +" characters, you have "+ (140 - tweet.length) + " characters remaining.");
//
// var namee = "Murat";
// namee.slice(0,1);


 var tweet = prompt("Compose your tweet:");
 // var tweetUnder140  = tweet.slice(0,140);
 alert(tweet.slice(0,140));


var name = prompt("What is your name?");
var firstChar = name.slice(0,1);
var upperCaseFirstChar  = firstChar.toUpperCase();
var restOfName=  name.slice(1,name.length);
restOfName = restOfName.toLowerCase();
var capitalisedName=  upperCaseFirstChar + restOfName;
alert("Hello" + capitalisedName);


var dogAge =prompt("How old is your dog?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog is" + humanAge + "yers old in human years.");


// function getMilk(money){
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   var numberOfBottles = Math.floor(money/1.5);
//   console.log("buy"+numberOfBottles+"Milk");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }
//
// getMilk(2);


function lifeInWeeks(age){
  var yearsRemaining = 90 - age;
  var days = yearsRemaining * 365;
  var weeks = yearsRemaining * 52;
  var months = yearsRemaining *  12;
  console.log("You have"+days+" days,"+weeks +" weeks, and"+months+" months left.");
}


function getMilk(money, costPerBottle){
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("buy"+ calcBottles(money,costPerBottle) + " bottles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
  return calcChange(money,costPerBottle);
}

function calcBottles(startingMoney,costPerBottle){
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);
  return numberOfBottles;
}

function calcChange(startingAmount,costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}


var change  = getMilk(4);
console.log("Hello master, here is your " + getMilk(5,1.5) + " change.");


//Bmi Calculator
function bmiCalculator(weight,height){
  return weight / Math.pow(height,2);

}

console.log(bmiCalculator(65,1.8));


var n = Math.random();
n = n * 6;
n = Math.floor(n);

console.log(n);

promt("What is your name?");
promt("What is their name?");


var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
  alert("Your love score is" + loveScore+"%" + "You love each other like Kanye love Kanye.");
}
if (loveScore > 30 && loveScore <= 70){
  alert("Your love score is " +loveScore +"%");
}
if (loveScore <= 30) {
  alert("Your love score is " +loveScore +"%" + " You go together like oil and water.");
}


function bmiCalculator (weight, height) {

    var interpretation = (weight / Math.pow (height,2));

    if (interpretation <= 18.5) {

        return  "Your BMI is "+interpretation+", so you are underweight." ;

    }

    else if (interpretation > 18.5 && interpretation <= 24.9){

        return  "Your BMI is "+interpretation+", so you have a normal weight." ;

    }

    else if (interpretation > 24.9){

        return  "Your BMI is "+interpretation+", so you are overweight." ;

    }

    return interpretation;

}


function isLeap(year){
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";
      }else {
        return "Not leap year.";
      }
    }else {
      return "Not leap year.";
    }
  }else {
    return "Not leap year.";
  }

}


var guestList = ["Ahmet","Mehmet","Pam","Jack","Lara","Jason"];
// console.log(guestList[0]);
var guestName = prompt("What is your name?");
if (guestList.includes(guestName)) {
    alert("Welcome!");
}else{
    alert("Sorry, maybe next time.");
}


// FizBuzz
// var output = [];
// var count = 1;
// function fizzBuzz() {
//         if (count % 3 === 0 &&count % 5 === 0) {
//     output.push("FizzBuzz");
//
//         }
//  else   if (count % 3 === 0) {
//     output.push("Fizz");
//     }
//     else  if (count % 5 === 0) {
//     output.push("Buzz");
//
//     }
//   else{
//     output.push(count);
//
//
//   }
//     console.log(output);
//
//     count++;
//
// }

var names = ['Name1','Name2','Name3','Name4','Name5','Name6','Name7'];
function whosPaying(names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];
    return randomPerson + " is going to buy lunch today!";
}

// While Loop

var output = [];
var count = 1;
function fizzBuzz() {

    while (count <=100) {

        if (count % 3 === 0 &&count % 5 === 0) {
    output.push("FizzBuzz");

        }
 else   if (count % 3 === 0) {
    output.push("Fizz");
    }
    else  if (count % 5 === 0) {
    output.push("Buzz");

    }
  else{
    output.push(count);


  }

    count++;

    }
    console.log(output);

}


function beer() {
    var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}
}


function fibonacciGenerator(n){
var output = [];
if(n === 1)
{
  output[0];
}
else if (n === 2) {
  output[0,1];
}
else {
  output[0,1];
  for (var i = 2; i < n; i++) {
    output.push(output[output.length-2] + output[output.length-1]);
  }

}
return output;
}
