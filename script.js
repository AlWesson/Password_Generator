// Assignment Code

// (initial comment) I need a way to prompt the user with password length (8-128), lowercase, uppercase, numeric, and/or special characters.


let lenHolder = 0;
let specialString = "!`~@#$%^&*()_-+=|/?><:;{}[]'.,"; // need to find a way to include " and \.
let lowerString = "abcdefghijklmnopqrstuvwxyz";
let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numString = "0123456789";

let generateBtn = document.querySelector("#generate"); // (initial comment)  This is the id for the red Generate Password button.

function generatePassword() {
  let Len = prompt("What is your desired password length? (Note: Password must be between 8-128 characters.)");
  if (Len < 8 && Len > 0){
    // if prompt input is less than 8, this alert will pop up.
    window.alert('Sorry, your password must be more than 8 characters. Please retry password generation.');
    }
  
    if (Len > 128){ 
    // if prompt input is greater than 128, this alert will pop up.
    window.alert('Sorry, your password has too many characters. Please retry password generation.');
    
  }
    // if cancel, print nothing.
  if (Len == null){
    return '';
  }

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // (initial comment) generatePassword doesnt currently exist. 
  var passwordText = document.querySelector("#password"); // (initial comment) #password is an id in the html file. This id displays the password onto the page where the id is located.

  passwordText.value = password; //
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // 
