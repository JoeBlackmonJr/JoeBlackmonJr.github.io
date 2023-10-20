/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  };
  

  // Game Item Objects
  var walker = {
    positionX:  0,
     speedX: 0,
     positionY: 0,
     speedY:  0,
    }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
$(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }

    if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker.speedX = -5;
    }

    else if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker.speedX = 5;
    }

    else if (event.which === KEY.UP) {
      console.log("up pressed");
      walker.speedY = -5;
    }

    else if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker.speedY = 5;
    }
  }



  function handleKeyUp(event) {
    if (event.which === KEY.ENTER) {
      console.log("enter pressed");
    }

    if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker.speedX = 0;
    }

    else if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker.speedX = 0;
    }

    else if (event.which === KEY.UP) {
      console.log("up pressed");
      walker.speedY = 0;
    }

    else if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem() {
walker.positionX += walker.speedX
walker.positionY += walker.speedY
}

 function redrawGameItem() {
$('#walker').css('left', walker.positionX);
$('#walker').css('top', walker.positionY);
}
 
function wallCollision() {
  var boardWidth = $('#board').width() - 50
  var boardHeight = $('#board').height()
  if(walker.positionX > boardWidth) {
    walker.speedX = walker.speedX - 5
  }

  if(walker.positionX < 0){
    walker.speedX = walker.speedX + 5
  }

  if(walker.positionY > boardWidth) {
    walker.speedY = walker.speedY - 5
  }

  if(walker.positionY < 0){
    walker.speedY = walker.speedY + 5
  }
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
