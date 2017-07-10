/* global $ */

$(document).ready(function(){
  console.log("Neet!");
  var grid = function(rows){
    for(var i = 0; i < rows; i++){
    $("table").append("<tr class='row'></tr>");  
    };   
    
    for(var x = 0; x < rows; x++){
    $(".row").append("<td class='col'></td>");
    };
  
  
  var heightWidth = Math.floor(600/rows);
  $(".col").height(heightWidth).width(heightWidth);
   
  };      
      grid(65);
      
  $(".col").hover(function(){
    $(this).css("background", "white");
  });
  $("#reset").click(function(){
    $(".col").css("background", "black");
  }); 
  
  $("#wildCard").click(function(){
    $(".col").hover(function(){
      $(this).css("background", "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
    });
  });
  
  $("#wht").click(function(){
    $(".col").hover(function(){
      $(this).css("background", "white");
    });
  });
  
  $("#rCg").click(function(){
    var red = Math.floor(Math.random()*255);
    var green = Math.floor(Math.random()*255);
    var blue = Math.floor(Math.random()*255);
    $(".col").hover(function() {
       $(this).css("background", "rgb("+red+","+green+","+blue+")"); 
    });
  });
  
  $("#sub").click(function() {
    if($("#size").val() < 0 || $("#size").val() > 66){
      alert("Please choose between 1 and 64");
    } else{
      $(".row").remove();
      $(".col").remove();
      grid($("#size").val());}
      $(".col").hover(function() {
        $(this).css("background", "white"); 
    });
  });
  
  $("#def").click(function() {
    $(".row").remove();
    $(".col").remove();
    grid(65);
    $(".col").hover(function() {
      $(this).css("background", "white"); 
    });
  });
  
});
    
    
   
