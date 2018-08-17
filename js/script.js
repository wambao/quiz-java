var testResults = function(one, two ,three, four, five){
return one + two + three + four + five;


}

$(document).ready(function(){
  $(".start").click(function(){
    $("#test").fadeToggle("slow");
  });

  $("form#test").submit(function(event){
    var Que1 = parseInt($("input:radio[name=Q1]:checked").val());
    var Que2 = parseInt($("input:radio[name=Q2]:checked").val());
    var Que3 = parseInt($("input:radio[name=Q3]:checked").val());
    var Que4 = parseInt($("input:radio[name=Q4]:checked").val());
    var Que5 = parseInt($("input:radio[name=Q5]:checked").val());
    var result = testResults(Que1, Que2, Que3, Que4, Que5);

    $("#display").text("Your score is:" + result);

    event.preventDefault();
    $(".finalResult").show();
  });
});
