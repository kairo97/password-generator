// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// done. popup window asking the number of characters for a password betwenen 8 and 128 
// done. ask if they would like uppercase letters in the password
// done. ask if they want numbers in their password
// done. ask if they want special characters in their password
//  TODO:  create random number generator to pick values for their selection of characters
// TODO: convert number values to characters chosen
//  TODO: after all prompts are completed generate password with at least one character from each selected string
//  TODO: display generated password

generateBtn.addEventListener("click", writePassword);
var passwordText = document.querySelector("#password");

   var lowercaseCharacters = "abcdefghijjlmnopqrstuvwxyz";
   var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numCharacters = "1234567890";
   var specialCharacters = "?/>.<,:;][}{=+-_)(!@#$%^&*`~";
   var avaliableChars = "";
   var randomPassword = "";
   avaliableChars.concat(lowercaseCharacters)
function writePassword(){
   var userSelect = prompt ("pick a number between 8 and 128 for your password length(in numerals, not text)") 
   var userSelect = Number(userSelect);
   if (userSelect == null){
     return}
     else {
      userSelect.length;}
  if (confirm("would you like uppercase letters in your password? ")== true){
    avaliableChars.concat(uppercaseCharacters);
  } else {
    !uppercaseCharacters;}
  if (confirm("would you like numbers in your password?") == true){
    avaliableChars.concat(numCharacters);
  } else {
    !numCharacters;}
  if (confirm("would you like special characters in your password") == true){
    avaliableChars.concat(specialCharacters);
  } else {
    !specialCharacters;}
      for( var i; i <= userSelect.length; i++){
        var randomNumber = Math.floor(Math.random() * userSelect.length);
        randomPassword += avaliableChars.substring(randonNumber, randomNumber +1)
      }
       document.getElementById("password").value = randomPassword;
      }
      // cannot figure out how to display the password on the page