// remove disabled from the submit button
function submitEnabled() {
  document.getElementById("submit").removeAttribute("disabled");
}

let firstNameCheck = null;
let lastNameCheck = null;

// verify first name box has a user input, if so update firstNameCheck
function firstInput() {
  let firstName = document.getElementById("first-name").value.length;
  if (firstName != 0) {
    firstNameCheck = document.getElementById("first-name");
  }
  return firstNameCheck;
}

// verify last name box has a user input, if so update lastNameCheck
function lastInput() {
  let lastName = document.getElementById("last-name").value.length;
  if (lastName != 0) {
    lastNameCheck = document.getElementById("last-name");
  }
  return lastNameCheck;
}

// enable submit button if first name and last name have at least 1 character input in each
function activate() {
    firstInput();
    lastInput();
  if (firstNameCheck != null && lastNameCheck != null) {
    submitEnabled();
  } else {
    return;
  }
}

//display email input onclick of newsletter checkbox
function showEmailInput(){
  const isDisplayed = document.getElementById("email");
  if(isDisplayed.style.display === "none"){
    isDisplayed.style.display = "block";
  } else {
    isDisplayed.style.display = "none";
  };
}

//assigning variables and making a POST request to placeholder API 

function SendIt(){
  const checkboxButton = document.getElementById("newsletter").checked;
  const firstNameInput = document.getElementById("first-name").value;
  const lastNameInput = document.getElementById("last-name").value;
  const userEmail = document.getElementById("email").value;
  const userComment = document.getElementById("comment").value;

  if(checkboxButton){
    fetch('https://jsonplaceholder.typicode.com/users', {method: 'POST', body: {firstNameInput, lastNameInput, userEmail, userComment}})
  } else {
    fetch('https://jsonplaceholder.typicode.com/users', {method: 'POST', body: {firstNameInput, lastNameInput, userComment}})
  };
  
}