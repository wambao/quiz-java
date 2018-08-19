var testResults = function(one, two ,three, four, five){

      return one + two + three + four + five;

};




$(document).ready(function(){
  $(".start").click(function(){
    $("#test").fadeIn("slow");
    $("#intro").fadeOut("slow");
    $(".panel").fadeOut("slow");

  });

  $("button#grey").click(function(){
    $("body").removeClass();
    $("body").addClass("grey-background");
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("form#test").submit(function(event){
    var que1 = parseInt($("input:radio[name=Q1]:checked").val());
     if($("input:radio[name=Q1]:checked").length == 0){
       $('#q1').text("An answer is required");
               return false;
     }
    var que2 = parseInt($("input:radio[name=Q2]:checked").val());
      if($("input:radio[name=Q2]:checked").length == 0){
        $('#q2').text("An answer is required");
              return false;
    }
    var que3 = parseInt($("input:radio[name=Q3]:checked").val());
      if($("input:radio[name=Q3]:checked").length == 0){
        $('#q3').text("An answer is required");
              return false;
    }
    var que4 = parseInt($("input:radio[name=Q4]:checked").val());
      if($("input:radio[name=Q4]:checked").length == 0){
        $('#q4').text("An answer is required");
              return false;
    }
    var que5 = parseInt($("input:radio[name=Q5]:checked").val());
      if($("input:radio[name=Q5]:checked").length == 0){
        $('#q5').text("An answer is required");
              return false;
    }
    var result = testResults(que1, que2, que3, que4, que5);

    $("#display").text("Your score is: " + result + " /25");

    event.preventDefault();
    $("#test").fadeOut();
    $(".finalResult").show();
  });
});
