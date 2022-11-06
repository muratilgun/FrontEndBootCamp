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
