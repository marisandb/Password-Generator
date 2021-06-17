//password length prompt
function passLength () {
let length = "";
length = window.prompt("Choose a password length between 8 and 128 characters");
if (length === null || length === " " || length < 8 || length > 128) {
  alert("Please choose a password length between 8 and 128 characters")
  return passLength();
}
else{
  return length;
}
};


function characters() {
  
  let lowercase, uppercase, numbers, symbols;
  let chars = "";

  while (!lowercase && !uppercase && !numbers && !symbols) {
    window.alert("Please choose one of the following options for your password.")
    lowercase = window.confirm("Would you like to include lowercase characters in your password?")
    uppercase = window.confirm("Would you like to include uppercase characters in your password?")
    numbers = window.confirm("Would you like to include numbers in your password?")
    symbols = window.confirm("Would you like to include symbols/special characters in your password?")

    if (lowercase) {
      chars += "abcdefghijklmnopqrstuvwxyz"
    }
    if(uppercase) {
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(numbers) {
      chars += "0123456789"
    }
    if(symbols) {
      chars += "!@#$%^&*()+-?/;:<>=[]{}_`~\|., "
    }
  }
  return chars;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let passwordLength = passLength();
  let chars = characters();
  let character = chars.split('');
  let password = "";

  for (i = 0; i < passwordLength; i++){
    let generator = Math.floor(Math.random() *chars.length)
    password += (character[generator])
  }

  let passwordText = document.querySelector("#password");
  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
