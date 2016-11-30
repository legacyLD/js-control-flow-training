console.log("login.js loaded");
var userLogin = {userName: "Picard", userPassword: "teaearlgreyhot"}
var login = function() {
  if (userLogin){
    for (i = 0; i < 3; i++) {
      var ejectWarpCore = prompt("enter command authorization code for Picard to eject warp core")
      if (ejectWarpCore===userLogin.userPassword){
      alert("warp core ejection in progress, all hands brace for impact")
      break;
    } else if (i<2){
      alert("please re-enter command authorization code for Picard to eject warp core")
    } else if (i=2) {
      alert("I'm sorry, you're all going to die now")
      }
    }
  }
}
login();
