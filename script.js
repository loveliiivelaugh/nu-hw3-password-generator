// Assignment Code
var generateBtn = document.querySelector("#generate");

//assign two changeable variables, one to hold an empty string of characters and the other a 0 to hold the desired length of the password
let characters = '';
let length = 0;

//lengthPrompt, function handles the prompt and assigning the answer to the length vairable
const lengthPrompt = () => {
  const passwordLength = parseInt(prompt(
    "Please enter the length you would like your password to be?\n(Must be between 8 and 128 characters."
    ));
    if (passwordLength < 8) {
      alert("Please enter a password length greater than 8 characters.");
    } 
    else if (passwordLength > 128) {
      alert("Please enter a password length less than 128 charaters.");
    }
    length = passwordLength;
};
//setLowerCase, checks if lowercase is true, (if we want lowercase characters in our password) if it is true then add all lowercase characters to our empty characters string
const setLowerCase = isLowerCase => {
  if (isLowerCase) { characters += 'abcdefghijklmnopqrstuvwxyz'; }
  return '';
};

//lowercasePrompt, function handles the prompt and assigning the answer to the lowercase vairable.
const lowercasePrompt = () => {
  const answer = prompt(
    "Would you like lowercase characters in your password?",
    "yes"
  );
  if ( answer.toLowerCase() === "yes" || "no" ) {
    switch (answer) {
      case "yes":
        lowercase = true;
        break;
      case "no":
        lowercase = false;
        break;
    } 
  } else {
    alert("You must enter either yes or no.");
  }
  
  setLowerCase(lowercase);
  return lowercase;
};
//setUpperCase, checks if uppercase is true, (if we want uppercase characters in our password) if it is true then add all uppercase characters to our empty characters string.
const setUpperCase = isUpperCase => {
  if (isUpperCase) { characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; }
  return '';
};

//uppercasePrompt, function handles the prompt and assigning the answer to the uppercase vairable.
const uppercasePrompt = () => {
  const answer = prompt(
    "Would you like uppercase characters in your password?",
    "yes"
  );
  if ( answer.toLowerCase() === "yes" || "no" ) {
    switch (answer) {
      case "yes":
        uppercase = true;
        break;
      case "no":
        uppercase = false;
        break;
    }
  } else {
    alert("You must enter either yes or no.")
  }
  setUpperCase(uppercase);
  return uppercase;
};
//setNumber, checks if isNumeric is true, (if we want numeric characters in our password) if it is true then add all numeric characters to our empty characters string.
const setNumber = isNumeric => {
  if (isNumeric) { characters += '0123456789'; }
  return '';
};

//numbersPrompt, function handles the prompt and assigning the answer to the numbers vairable.
const numbersPrompt = () => {
  const answer = prompt(
    "Would you like numbers in your password?",
    "yes"
  );
  if ( answer.toLowerCase() === "yes" || "no" ) {
    switch (answer) {
      case "yes":
        numbers = true;
        break;
      case "no":
        numbers = false;
        break;
    }
  } else {
    alert("You must enter either yes or no.");
  }
  setNumber(numbers);
  return numbers;
};
//setSymbols, checks if isSymbol is true, (if we want symbol characters in our password) if it is true then add all symbol characters to our empty characters string.
const setSymbols = isSymbol => {
  if (isSymbol) { characters += '!@#$%^&*()<>,.?/[]{}-=_+|/'; }
  return '';
};

//symbolsPrompt, function handles the prompt and assigning the answer to the symbols vairable
const symbolsPrompt = () => {
  const answer = prompt(
    "Would you like symbols in your password?",
    "yes"
  );
  if ( answer.toLowerCase() === "yes" || "no" ) {
    switch (answer) {
      case "yes":
        symbols = true;
        break;
      case "no":
        symbols = false;
        break;
    }
  } else {
    alert("You must enter either yes or no.");
  }
  setSymbols(symbols);
  return symbols;
};

//getRandomInteger, function that returns a random integer between 0 and the length of characters we have in our characters string.
const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//passwordCharacters, function that uses the length of characters and the content of characters to generate a password.
const passwordCharacters = () => {
  let password = ''; //assign an empty password string to hold a place to start building the password.
  if (characters.length) { //if the length of characters is greater than 0 then run the next block of code.
    for (let i = 0; i < length; i++) { //for loop, one liner to assign an incrementor to loop through the following code block as many times as the desired length of the generated password being held in the global length variable.
      password += characters[getRandomInteger(0, characters.length - 1)]; //for each loop we want to add one random character from our global characters variable to our new password string variable selecting the characters randomly with the getRandomInteger function using [brackets] to select a character at the index of characters allowing us to build a random password using the desired character types.
    }
    //after password is built
    characters = '';//clear characters string.
    length = 0;//clear length.
    return password;//return the newly generated password.
  }
};

//validateInput, function to validate the generated password with desired criteria.
const validateInput = (password) => {
  //validate the password here
  return password;
};

//generatePassword, function that calls functions in order that generate and validate the password.
const generatePassword = () => {

  const validatedPassword = validateInput(passwordCharacters());

  return validatedPassword;
};

// Write password to the #password input.
function writePassword() {
  
  lengthPrompt();//prompt function that asks and sets the desired password length.
  lowercasePrompt();//prompt function that asks if we would like lowercase character types in our desired password.
  uppercasePrompt();//prompt function that asks if we would like uppercase character types in our desired password.
  symbolsPrompt();//prompt function that asks if we would like symbol character types in our desired password.
  numbersPrompt();//prompt function that asks if we would like number character types in our desired password.

  const passwordText = document.querySelector("#password"); //assign the html element with the id="password" to a variable.

  passwordText.value = generatePassword(); //set the value of passwordText to the newly generated password returned by the generatePassword() function.
}

// Add event listener to generate button.
generateBtn.addEventListener("click", writePassword);
