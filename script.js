// Assignment Code

// I need a way to prompt the user with password length (8-128), lowercase, uppercase, numeric, and/or special characters.


var generateBtn = document.querySelector("#generate"); //




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password; //
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // 
