var testResults = function(one, two){
return one + two;


}

$(document).ready(function(){
  $(".start").click(function(){
    $("#test").fadeToggle("slow");
  });

  $("form#test").submit(function(event){
    var Que1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Que2 = parseInt($("input:radio[name=Q2]:checked").val());
    var result = testResults(Que1, Que2);

    $("#display").text("Your score is:" + result);

    event.preventDefault();
    $(".finalResult").show();
  });
});
