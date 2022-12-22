// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// TODO: popup window asking the number of characters for a password betwenen 8 and 128 
// TODO: ask if they would like uppercase letters in the password
// TODO: ask if they want numbers in their password
//  TODO: ask if they want special characters in their password
//  TODO:  create random number generator to pick values for their selection of characters
// TODO: convert number values to characters chosen
//  TODO: after all prompts are completed generate password with at least one character from each selected string
//  TODO: display generated password

 function writePassword() {
   const lowercaseCharacters = "abcdefghijjlmnopqrstuvwxyz";
   var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numCharacters = "1234567890";
   var specialCharacters = "?/>.<,:;][}{=+-_)(!@#$%^&*`~";
   var randomPassword = "";
   var userSelect = prompt ("pick a number between 8 and 128 for your password length") 
  if (confirm("would you like uppercase letters in your password? ")== true){
    + uppercaseCharacters
  } else {
    !uppercaseCharacters
  }
  
  if (confirm("would you like numbers in your password?") == true){
    + numCharacters;
  } else {
    !numCharacters;
  }
  if (confirm("would you like special characters in your password") == true){
    + specialCharacters;
  } else {
    !specialCharacters;
  }
  for (var i=0, n=lowercaseCharacters.length; i<length; ++i){
    randomPassword += lowercaseCharacters(Math.random() * n);
  } return randomPassword
  var passwordText = document.querySelector("#password");
    
    

}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword)

