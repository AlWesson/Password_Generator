// Assignment Code

// (initial comment) I need a way to prompt the user with password length (8-128), lowercase, uppercase, numeric, and/or special characters.


var generateBtn = document.querySelector("#generate"); // (initial comment)  This is the id for the red Generate Password button.




// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // (initial comment) generatePassword doesnt currently exist. 
  var passwordText = document.querySelector("#password"); // (initial comment) #password is an id in the html file. This id displays the password onto the page where the id is located.

  passwordText.value = password; //
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // 
