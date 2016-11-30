console.log("security_questions.js loaded");
var securityQuestions = {questionOne: "a", questionTwo: "b", questionThree: "c"};
var security = function() {
  var a = prompt("What is the first letter of the alphabet?")
  if (a===securityQuestions.questionOne){
  var b = prompt("What is the second letter of the alphabet?");
  }
  if (b===securityQuestions.questionTwo) {
  var c = prompt("What is the third letter of the alphabet?")
  }
  if (c===securityQuestions.questionThree) {
  alert("awesome, you are hella smart!")
  }
  else {alert("sorry, go away!")};
}
security();
