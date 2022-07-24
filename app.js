function submitEnabled(){
    document.getElementById("submit").removeAttribute("disabled");
}; 

function changeSubmit(){
    let firstName = document.getElementById("first-name").value.length;
    let lastName = document.getElementById("last-name").value.length;
    if(firstName >= 1 && lastName >=1){
        return submitEnabled();
    };
}

const firstNameCheck = document.getElementById("first-name")
const lastNameCheck = document.getElementById("last-name")

firstNameCheck.onkeydown = changeSubmit;
lastNameCheck.onkeydown = changeSubmit;