// Assignment Code

// (initial comment) I need a way to prompt the user with password length (8-128), lowercase, uppercase, numeric, and/or special characters.


let lenValueHolder = 0; // will hold the value of password length.
let passwordIngredients = '';
let specialString = "!`~@#$%^&*()_-+=|/?><:;{}[]'.,"; // need to include " and \.
let lowerString = "abcdefghijklmnopqrstuvwxyz";
let upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numString = "0123456789";

let generateBtn = document.querySelector("#generate"); // (initial comment)  This is the id for the red Generate Password button.

function generatePassword() {
  let Len = prompt("What is your desired password length? (Note: Password must be between 8-128 characters.)");
  if (Len < 8 && Len > 0){
    // if prompt input is less than 8, this alert will pop up.
    window.alert('Sorry, your password must be more than 8 characters. Please retry password generation.');
    return '';
    }
  
    if (Len > 128){ 
    // if prompt input is greater than 128, this alert will pop up.
    window.alert('Sorry, your password has too many characters. Please retry password generation.');
    return ''; 
  }
    // if cancel, return nothing.
  if (Len == null){
    return '';
  }
  while (Len >= 8 && Len <= 128){ // as long as the Len is within the acceptable password length, proceed with these confirms.
    lenValueHolder = Len;

    let lowerProm = confirm('Would you like your password to include lowercase letters?');
    if (lowerProm = true){
      // if user selects 'ok', the contents of lowerString is made available to the password generator.
      passwordIngredients += lowerString;
    }
    let upperProm = confirm('Would you like your password to include uppercase letters?');
    if (upperProm = true){
      // if user selects 'ok', the contents of upperString is made available to the password generator. 
      passwordIngredients += upperString;
    }
    let numProm = confirm('Would you like your password to include numbers?');
    if (numProm = true){
      // if user selects 'ok', the contents of numString is made available to the password generator.
      passwordIngredients += numString;
    }
    let specProm = confirm('Would you like your password to include special characters?');
    if(specProm = true){
      // if user selects 'ok', the contents of specialString is made available to the password generator.
      passwordIngredients += specialString;
    }
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
