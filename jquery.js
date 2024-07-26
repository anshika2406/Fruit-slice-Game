var playing = false;
var score ;
var trialsleft;
var fruitsarray=['apple','banana','grapes','mango' ,'guava','pineapple'];
var step;
var action;

$(function(){

        // click on reset button
     $("#startreset").on('click',function(){

      // we are playing
      if(playing == true){

         // reload page
         location.reload(); 
      }
     else{

      //we are npt playing
      playing = true;// game initiated

// set score to 0
score=0;
$("#scorevalue").html(score);

     
   
//  show trials left

$("#trialsleft").show();
// intialising with 3
trialsleft=3;
addHearts();

// hide gameover box

$("#gameover").hide();
// change button text to reset game

$("#startreset").html("Reset Game");

// start sending fruits
startAction();
  
       }
     });


  $("#fruit1").on('mouseover',function(){
score++ ;
//updating the score
$("#scorevalue").html(score);

//$("#slicesound")[0].play();
document.getElementById("slicesound").play();

// stop fruit
clearInterval(action);

// hide fruit(slice fruit)
$("#fruit1").hide("explode",100);

// set new fruit

setTimeout(startAction,300);


 
  }) ;  


 // function for heart

 function addHearts(){
  $("#trialsleft").empty();
    for(i =0;i<trialsleft;i++){

        // append is used to show image in box
        $("#trialsleft").append( '<img src= "Images/Heart.png" class="heart">');
      }

    }

    // function for sending fruits

   function startAction(){

    // generate fruit

   $("#fruit1").show();
   chooseFruit();

   // to give random position to your fruit
   $("#fruit1").css({
    'left':Math.round( 550*Math.random()),'top':-50
   });
    
// random step

 step =  1+ Math.round(5*Math.random());

 // Move friut dowm by one step
 action =setInterval(function(){
  $("#fruit1").css('top',$("#fruit1").position().top + step);

  // check if fruit is low

  if($("#fruit1").position().top > $("#fruitContainer").height())
  {
    // check if any trials is left
    if(trialsleft >1){

      $("#fruit1").show();
      chooseFruit();
   
      // to give random position to your fruit
      $("#fruit1").css({
       'left':Math.round( 550*Math.random()),'top':-50
      });
    
// random step

 step =  1+ Math.round(5*Math.random());

   // reduce no of trials 
   trialsleft--;

   addHearts();


    }

    else{
      // show game over
      playing=false;// we are not playing anymore

     $("#startreset").html("Start Game") ;// changed button to start game

     $("#gameover").show();
     $("#gameover").html('<p>Game Over ! </p> <p>Your score is ' + score +'</p>' );

     $("#trialsleft").hide();

     stopAction();




    }
  }


 },10);
   }   

   // for generating random fruit
 
  function chooseFruit(){
   $("#fruit1").attr('src','Images/' +  fruitsarray[ Math.round(6*Math.random())] + '.png');
   }

   // stop dropping fruits
   function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
   }
  });