$(document).ready(function(){
  // $("h1").addClass("big-title margin-50");
// $("h1").hasClass("margin-50")
// $("button").html("<em>Hey</em>")
// $("a").attr("href","https://yahoo.com")
// $("h1").css("color","purple");


// Javascript
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click",function(){
//     document.querySelector("h1").style.color = "purple";
//   })
// }

//Jquery
// $("button").click(function(){
//   $("h1").css("color","purple");
// })

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

$("h1").on("mouseover",function(){
  $("h1").css("color","purple");
})


})
