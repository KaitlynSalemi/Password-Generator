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

// if the user chooses any of the given characters concat those characters into the array of arrays. If the user confirms no for all characters then, alert "please select atleast one" and bring them through the choices again
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
      compilePassword();
    }
    else {
    alert("Please select at least one of the four criteria");
    confirms();
    }
  }
  // console.log(chosenChar);

// loop the random number function for each character of the password
// Length (must be between 8 and 128 characters)
// present the password in the textarea
  function compilePassword() {
    var textArea = document.querySelector("#password");
    
    var passwordText = "";
    
    for (var i = 0; i < 15; i++) {
        passwordText+=chosenChar[generatePassword()]
    };
    textArea.textContent = passwordText;
  }
  // console.log(compilePassword);

// randomly choose a character from the array of chosen characters 
  function generatePassword() {
    return Math.floor(Math.random() * chosenChar.length);
  }
  // console.log(generatePassword);

// when the user clicks the Generate Password button the generatePassword function will execute
  var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", compilePassword);

// let the copy button copy the random password to the users clip board 
  function copyToClipboard() {
    var textArea = document.querySelector("#password");
    textArea.select();

    document.execCommand("copy");

    alert("Your password has been copied to your Clipboard!");
  }
  let copyBtn = document.querySelector("#copy");
  copyBtn.addEventListener("click", copyToClipboard);