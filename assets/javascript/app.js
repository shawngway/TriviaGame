//run function off of a hidden counter keep to instruct which question to follow
var gameHidden = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;


function initialize() {
    gameHidden = 0;
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}
var Questions = {
    Question1: {
        read: "Best Gears of War",
        a: "Gears 1",
        b: "Gears 2",
        c: "Gears 3",
        d: "Gears 4",
        //a

    },
    Question2: {
        read: "how to beat Psycho Mantis MGs1",
        a: "nothing",
        b: "grenade launcher",
        c: "cqc",
        d: "connect remote to port 2 so he doesn't controll then have fun",
        //d
    },
    Question3: {
        read: "Blue guy with cannon for an arm",
        a: "john goodman",
        b: "Metroid",
        c: "mario",
        d: "Mega Man",
        //d
    },
    Question4: {
        read: "First true Br style game that began the flood of the genre",
        a: "pub G",
        b: "fortnite",
        c: "H1Z1",
        d: "Arma III",
        //c
    },
    Questions5: {
        read: "burst rifle name in Halo 2",
        a: "battle rifle",
        b: "needler",
        c: "hand Cannon",
        d: "M4",
        //a
    },
    Question6: {
        read: "Mario is an ______ plumber",
        a: "american",
        b: "jewish",
        c: "italian",
        d: "spanish",
        //c
    },
    Questions7: {
        read: "In a MOBA the center lane player is called",
        a: "mid player",
        b: "attack",
        c: "carry",
        d: "farmer",
        //a
    },
    Questions8: {
        read: "the bolt action sniper in Counter Strike Global defense",
        a: "AWP",
        b: "M249",
        c: "Intervention",
        d: "M1",
        //a
    }

}

function renderQuestion1() {
    $(".question").empty();
    var Qs = $("<h3>");
    A1 = $("<button class='Q1 a1'>");
    A2 = $("<button class='Q1 b1'>");
    A3 = $("<button class='Q1 c1'>");
    A4 = $("<button class='Q1 d1'>");
    Qs.text(Questions.Question1.read);
    A1.text(Questions.Question1.a);
    A2.text(Questions.Question1.b);
    A3.text(Questions.Question1.c);
    A4.text(Questions.Question1.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
function renderQuestion2() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button class='Q2 a2'>");
    var A2 = $("<button class='Q2 b2'>");
    var A3 = $("<button class='Q2 c2'>");
    var A4 = $("<button class='Q2 d2'>");
    Qs.text(Questions.Question2.read);
    A1.text(Questions.Question2.a);
    A2.text(Questions.Question2.b);
    A3.text(Questions.Question2.c);
    A4.text(Questions.Question2.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
function renderQuestion3() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button class='Q3 a3'>");
    var A2 = $("<button class='Q3 b3'>");
    var A3 = $("<button class='Q3 c3'>");
    var A4 = $("<button class='Q3 d3'>");
    Qs.text(Questions.Question3.read);
    A1.text(Questions.Question3.a);
    A2.text(Questions.Question3.b);
    A3.text(Questions.Question3.c);
    A4.text(Questions.Question3.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
function renderQuestion4() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button class='Q4 a4'>");
    var A2 = $("<button class='Q4 b4'>");
    var A3 = $("<button class='Q4 c4'>");
    var A4 = $("<button class='Q4 d4'>");
    Qs.text(Questions.Question4.read);
    A1.text(Questions.Question4.a);
    A2.text(Questions.Question4.b);
    A3.text(Questions.Question4.c);
    A4.text(Questions.Question4.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
function renderQuestion5() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button class='Q5 a5'>");
    var A2 = $("<button class='Q5 b5'>");
    var A3 = $("<button class='Q5 c5'>");
    var A4 = $("<button class='Q5 d5'>");
    Qs.text(Questions.Question5.read);
    A1.text(Questions.Question5.a);
    A2.text(Questions.Question5.b);
    A3.text(Questions.Question5.c);
    A4.text(Questions.Question5.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
function renderQuestion6() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button class='Q6 a6'>");
    var A2 = $("<button class='Q6 b6'>");
    var A3 = $("<button class='Q6 c6'>");
    var A4 = $("<button class='Q6 d6'>");
    Qs.text(Questions.Question6.read);
    A1.text(Questions.Question6.a);
    A2.text(Questions.Question6.b);
    A3.text(Questions.Question6.c);
    A4.text(Questions.Question6.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
function renderQuestion7() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button class='Q7 a7'>");
    var A2 = $("<button class='Q7 b7'>");
    var A3 = $("<button class='Q7 c7'>");
    var A4 = $("<button class='Q7 d7'>");
    Qs.text(Questions.Question7.read);
    A1.text(Questions.Question7.a);
    A2.text(Questions.Question7.b);
    A3.text(Questions.Question7.c);
    A4.text(Questions.Question7.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
function renderQuestion8() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button class='Q8 a8'>");
    var A2 = $("<button class='Q8 b8'>");
    var A3 = $("<button class='Q8 c8'>");
    var A4 = $("<button class='Q8 d8'>");
    Qs.text(Questions.Question8.read);
    A1.text(Questions.Question8.a);
    A2.text(Questions.Question8.b);
    A3.text(Questions.Question8.c);
    A4.text(Questions.Question8.d);
    $(".question").append(Qs);
    $(".question").append(A1);
    $(".question").append(A2);
    $(".question").append(A3);
    $(".question").append(A4);

}
console.log(correct);

renderQuestion1();
$(".a1").on("click", function () {
    if (gameHidden === 0) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        console.log("gameHidden: " + gameHidden);
        renderQuestion2();
    }

});//correct
$(".b1").on("click", function (){
    if (gameHidden === 0) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion2();
    }

});
$(".c1").on("click", function (){
    if (gameHidden === 0) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion2();
    }

});
$(".d1").on("click", function (){
    if (gameHidden === 0) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion2();
    }

});

$(".a2").on("click", function () {
    console.log("working");
    if (gameHidden === 1) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion3();
    }

});
$(".b2").on("click", function () {
    console.log("working");
    if (gameHidden === 1) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion3();
    }

});
$(".c2").on("click", function () {
    console.log("working");
    if (gameHidden === 1) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion3();
    }

});
$(".d2").on("click", function () {
    console.log("working");
    if (gameHidden === 1) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        renderQuestion3();
    }

}); //correct
$(".a3").on("click", function () {
    console.log("working");
    if (gameHidden === 2) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion4();
    }

});
$(".b3").on("click", function () {
    console.log("working");
    if (gameHidden === 2) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion4();
    }

});
$(".c3").on("click", function () {
    console.log("working");
    if (gameHidden === 2) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion4();
    }

});
$(".d3").on("click", function () {
    console.log("working");
    if (gameHidden === 2) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        renderQuestion4();
    }

}); //correct
$(".a4").on("click", function () {
    console.log("working");
    if (gameHidden === 1) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion5();
    }

});
$(".b4").on("click", function () {
    console.log("working");
    if (gameHidden === 1) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion5();
    }

});
$(".c4").on("click", function () {
    console.log("working");
    if (gameHidden === 3) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        renderQuestion5();
    }

});//correct
$(".d4").on("click", function () {
    console.log("working");
    if (gameHidden === 3) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion5();
    }

});
$(".a5").on("click", function () {
    console.log("working");
    if (gameHidden === 4) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        renderQuestion6();
    }

});//correct
$(".b5").on("click", function () {
    console.log("working");
    if (gameHidden === 4) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion6();
    }

});
$(".c5").on("click", function () {
    console.log("working");
    if (gameHidden === 4) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion6();
    }

});
$(".d5").on("click", function () {
    console.log("working");
    if (gameHidden === 4) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion6();
    }

}); 
$(".a6").on("click", function () {
    console.log("working");
    if (gameHidden === 5) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion7();
    }

});
$(".b6").on("click", function () {
    console.log("working");
    if (gameHidden === 5) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion7();
    }

});
$(".c6").on("click", function () {
    console.log("working");
    if (gameHidden === 5) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        renderQuestion7();
    }

});//correct
$(".d6").on("click", function () {
    console.log("working");
    if (gameHidden === 5) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion7();
    }

});
$(".a7").on("click", function () {
    console.log("working");
    if (gameHidden === 6) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        renderQuestion8();
    }

});//correct
$(".b7").on("click", function () {
    console.log("working");
    if (gameHidden === 6) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion8();
    }

});
$(".c7").on("click", function () {
    console.log("working");
    if (gameHidden === 6) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion8();
    }

});
$(".d7").on("click", function () {
    console.log("working");
    if (gameHidden === 6) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        renderQuestion8();
    }

}); 
$(".a8").on("click", function () {
    console.log("working");
    if (gameHidden === 7) {
        gameHidden++;
        correct++;
        console.log("correct: " + correct);
        //end screen
    }

});//correct
$(".b8").on("click", function () {
    console.log("working");
    if (gameHidden === 7) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        //end screen
    }

});
$(".c8").on("click", function () {
    console.log("working");
    if (gameHidden === 7) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        //end screeb
    }

});
$(".d8").on("click", function () {
    console.log("working");
    if (gameHidden === 7) {
        gameHidden++;
        incorrect++;
        console.log("incorrect: " + incorrect);
        //end screen
    }

});



// function timeConverter(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);
  
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
  
//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
  
//     return minutes + ":" + seconds;
//   }



