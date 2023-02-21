// Assignment Code

// (initial comment) I need a way to prompt the user with password length (8-128), lowercase, uppercase, numeric, and/or special characters.


let lenValueHolder = 0; // will hold the value of password length.
let passwordIngredients = ''; // will hold all strings of character types user wants incorperated in generated password.
let compPasswordTemp = [];  // will hold all the random elements for generated password
let compleatedPassword = ''; // will hold the final results for generated password.

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
  
  while (Len >= 8 && Len <= 128){ // as long as the Len is within the acceptable password length range, proceed with these confirms.
    lenValueHolder = Len;

    let lowerProm = confirm('Would you like your password to include lowercase letters?');
    if (lowerProm == true){
      // if user selects 'ok', the contents of lowerString is made available to the password generator.
      passwordIngredients += lowerString;
    }
    let upperProm = confirm('Would you like your password to include uppercase letters?');
    if (upperProm == true){
      // if user selects 'ok', the contents of upperString is made available to the password generator. 
      passwordIngredients += upperString;
    }
    let numProm = confirm('Would you like your password to include numbers?');
    if (numProm == true){
      // if user selects 'ok', the contents of numString is made available to the password generator.
      passwordIngredients += numString;
    }
    let specProm = confirm('Would you like your password to include special characters?');
    if(specProm == true){
      // if user selects 'ok', the contents of specialString is made available to the password generator.
      passwordIngredients += specialString;
    }
    if(lowerProm == false && upperProm == false && numProm == false && specProm == false){
      // if no character type was selected (if all confirms returned false), throw this alert and return nothing to the screen.
      window.alert('No character type was selected. Please retry generating a password with at least one character type.');
      return '';
    }
    //return lenValueHolder;  // testing if lenValueHolder returns only the desired password length.
    //retrun passwordIngredients;   // testing if passwordIngredients holds only confirms that return a true value.
    
   
    
    
    // separate string into individual characters placed in array.
    let sepIngredients = passwordIngredients.split("");
    // return sepIngredients; // testing that string was made into an array.
    
    

    // this loop will run until i reaches the desired password length.
    for (let i = 0; i < lenValueHolder; i++){

      // refreshes the array with all new elements so that each increment of lenValueHolder has a full pool of characters for true random.
      let temp = [...sepIngredients];

      // push a random element from sepIngredients into compPasswordTemp every time the loop runs until the loop counter ends.
      compPasswordTemp.push(temp.splice(Math.floor(Math.random() * temp.length), 1) [0]);

    }
    
    // this will return the randomly selected elements for the generated password back into a string for the finished product!
    compleatedPassword = compPasswordTemp.join("");
    return compleatedPassword;
  }

}


// Write password to the #password input
function writePassword() {
  
  var password = generatePassword(); // (initial comment) generatePassword doesnt currently exist. 
  var passwordText = document.querySelector("#password"); // (initial comment) #password is an id in the html file. This id displays the password onto the page where the id is located.

  passwordText.value = password; 
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  
