console.log("sing.js loaded");
var song = function() {
  for (x=5; x>0; x--) {
    if (x>2) {
      console.log(x + " bottles of beer on the wall, "+x+" bottles of beer!Take one down and pass it around, "+(x-1)+" bottles of beer on the wall!");
    } else if (x===2) {
      console.log(x + " bottles of beer on the wall, "+x+" bottles of beer!Take one down and pass it around, "+(x-1)+" bottle of beer on the wall!");
    } else if (x===1) {
      console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.");
      break;
    }
  }
}
song();
