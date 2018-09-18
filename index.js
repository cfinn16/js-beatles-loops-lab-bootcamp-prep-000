// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for (var i = 0; i < 4; i++) {
    arr.splice(0, 0, `musicians[i] + " plays " + instruments[i]`);
  }
  return arr;
}