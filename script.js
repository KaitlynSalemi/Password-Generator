// style - make sure its responsive 
  let h1 = document.querySelector("h1");

  h1.setAttribute("style", "text-align: center;");

// character Arrays 
let specialChar = ['"', '!', '#', '$', '%', '&', '(', ')', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '~', ' '];
let numChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let lowerCaseChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// array of the arrays
let chosenChar = [];

// ask about password criteria, put it in a function, but define the variable globally first 
var specialQ;
var numQ;
var lowerCaseQ;
var upperCaseQ;

function confirms(){
  specialQ = confirm("Would you like to use special characters for your password? OK for yes. Cancel for no");
  numQ = confirm("Would you like to use numbers for your password? OK for yes. Cancel for no");
  lowerCaseQ = confirm("Would you like to use lowercase letters for your password? OK for yes. Cancel for no");
  upperCaseQ = confirm("Would you like to use uppercase letters in your password? OK for yes. Cancel for no");
  passwordChar();
}
confirms();

// if false for all criteria, alert "please select atleast one" and bring them through the choices again
function passwordChar(){
  if (specialQ || numQ || lowerCaseQ || upperCaseQ){
    if (specialQ){
      chosenChar = chosenChar.concat(specialChar)
    }
    if (numQ){
      chosenChar = chosenChar.concat(numChar)
    }
    if (lowerCaseQ){
      chosenChar = chosenChar.concat(lowerCaseChar)
    }
    if (upperCaseQ){
      chosenChar = chosenChar.concat(upperCaseChar)
    }
  }
  else {
  alert("Please select at least one of the four criteria");
  confirms();
  }
}
console.log(chosenChar);


// randomly create a password useing the criteria given by the user
function generatePassword() {

}
generatePassword();
// this will be used eventually, but instead of alert use the text area
for (var i = 0; i < characterArrays.length; i++) {
  alert(characterArrays[i]);
}

// Length (must be between 8 and 128 characters)
var randomChar = Math.floor(Math.random() * 128) + 1;

// when the user clicks the Generate Password button the generatePassword function will execute
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// put the generated password in the text area

// make a copy button 

// let the copy button copy the random password to the users clip board 
function copyToClipboard() {

  }

// ----------- leftover given code (doesn't make sense yet)

  // Write password to the #password input
  function generatePassword() {
    var password = makePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
  }

  

  // BONUS EVENT LISTENER
