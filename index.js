// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArray = {};
  
  for (i = 0; i < 4; i++) {
    newArray.pop(musicians[i] + " plays " + instruments[i]);
  }
  return newArray;
}