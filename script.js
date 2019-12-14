// style - make sure its responsive 
  let h1 = document.querySelector("h1");

  h1.setAttribute("style", "text-align: center;");

// character Arrays 
let specialChar = [" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
let numChar = ["0123456789"];
let lowerCaseChar = ["abcdefghijklmnopqrstuvwxyz"];
let upperCaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

// ask about password criteria 
let specialQ = confirm("Would you like to use special characters for your password? OK for yes. Cancel for no");
let numQ = confirm("Would you like to use numbers for your password? OK for yes. Cancel for no");
let lowerCaseQ = confirm("Would you like to use lowercase letters for your password? OK for yes. Cancel for no");
let upperCaseQ = confirm("Would you like to use uppercase letters in your password? OK for yes. Cancel for no");

// if false for all criteria, alert "please select atleast one" and bring them through the choices again
if ((specialQ || numQ || lowerCaseQ || upperCaseQ) === false){
  alert("Please select atleast one of the four criteria");
}

// randomly create a password useing the criteria given by the user
function generatePassword() {

}

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
