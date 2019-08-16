//run function off of a hidden counter keep to instruct which question to follow
var gameHidden = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
function initialize(){
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
        b:"grenade launcher",
        c:"cqc",
        d:"connect remote to port 2 so he doesn't controll then have fun",
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

function renderQuestion() {
    $(".question").empty();
    for (var i = 0; i < movies.length; i++) {
      var a = $("<button>");
      a.addClass("movie");
      // Adding a data-attribute
      a.attr("data-name", movies[i]);
      // Providing the initial button text
      a.text(movies[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
  }

function game(){
    //each question will be nested into an if and ran after
    if(){
        
    }
    if(){
    }
    if(){   
    }
    if(){

    }
    if(){
        
    }
    if(){
        
    }
    if(){
        
    }
    if(){
        
    }

}
