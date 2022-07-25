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
