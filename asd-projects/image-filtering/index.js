// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify)
  applyFilterNoBackground(decreaseBlue)
  applyFilterNoBackground(increaseGreenByBlue)


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j];
      var rgbNumbers = rgbStringToArray(rgbString);
      filterFunction(rgbNumbers);
      image[i][j] = rgbArrayToString(rgbNumbers);
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0]
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      var rgbString = image[i][j];
      var rgbNumbers = rgbStringToArray(rgbString);
      if (backgroundColor !== rgbString){
      filterFunction(rgbNumbers);
      image[i][j] = rgbArrayToString(rgbNumbers);
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num){
  return Math.min(Math.max(num, 0), 255);
}


// TODO 3: Create reddify function
function reddify(jArray){
  jArray[0]= 200;
}


// TODO 6: Create more filter functions
function decreaseBlue(bArray) {
  bArray[2] = bArray[2] - 50;
 bArray[2] = keepInBounds(bArray[2]);
}

function increaseGreenByBlue(gArray){
  gArray[1] = keepInBounds(gArray[2] + gArray[1]);
}
// CHALLENGE code goes below here
