var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    alert("I got clicked");
    //What to do when click detected.
  });

}


function add(num1, num2){
  return num1+num2;
}

function multiply(num1, num2){
  return num1+num2;
}

function calculator(num1,num2,operator){
  return operator(num1,num2);
}
