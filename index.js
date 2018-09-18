// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  
  for (var i = 3; i > -1; i--) {
    arr.unshift(musicians[i] + " plays " + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var arr = [];
  
  var i = 0;
  while (i < facts.length) {
  arr.unshift(facts[i] + "!!!");  
  i++;
}

return arr;
}