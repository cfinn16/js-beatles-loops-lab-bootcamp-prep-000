// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = {};
  
  for (let i = 0; i < 4; i++) {
    arr.unshift(`musicians[i] + " plays " + instruments[i]`);
  }
  return arr;
}