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
        
    },
    Question2: {
        read: "how to beat Psycho Mantis MGs1",
        a: "nothing",
        b: "grenade launcher",
        c: "cqc",
        d: "connect remote to port 2 so he doesn't controll then have fun",
    },
    Question3: {
        read: "Blue guy with cannon for an arm",
        a: "john goodman",
        b: "Metroid",
        c: "mario",
        d: "Mega Man",
    },
    Question4: {
        read: "First true Br style game that began the flood of the genre",
        a: "pub G",
        b: "fortnite",
        c: "H1Z1",
        d: "Arma III",
    },
    Questions5: {
        read: "burst rifle name in Halo 2",
        a: "battle rifle",
        b: "needler",
        c: "hand Cannon",
        d: "M4",
    },
    Question6: {
        read: "Mario is an ______ plumber",
        a: "american",
        b: "jewish",
        c: "italian",
        d: "spanish",
    },
    Questions7: {
        read: "In a MOBA the center lane player is called",
        a: "mid player",
        b: "attack",
        c: "carry",
        d: "farmer",
    },
    Questions8: {
        read: "the bolt action sniper in Counter Strike Global defense",
        a: "AWP",
        b: "M249",
        c: "Intervention",
        d: "M1",
    }

}

function renderQuestion1() {
    $(".question").empty();
    var Qs = $("<h3>");
    var A1 = $("<button>");
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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
    var A1 = $("<button>");
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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
    var A1 = $("<button>");
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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
    var A1 = $("<button>")4
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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
    var A1 = $("<button>");
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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
    var A1 = $("<button>");
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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
    var A1 = $("<button>");
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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
    var A1 = $("<button>");
    var A2 = $("<button>");
    var A3 = $("<button>");
    var A4 = $("<button>");
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

