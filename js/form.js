const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const checkedbox = document.querySelector(".row")



//The function which is responsible for creating the error elements to add on our site
function showError(input,message){
  const errorElement = document.createElement("div");
  errorElement.className="errors";
  errorElement.textContent = message;
  input.parentElement.appendChild(errorElement);
  input.classList.add("error-input")
}

//Event listener for our form

form.addEventListener("submit", function (e) {
e.preventDefault();

//validness check
let valid = true;
//removes the elements which have the errors class.
document.querySelectorAll(".errors").forEach(e => e.remove());

//now we remove the error-input class from the other elements.
document.querySelectorAll(".error-input")
    .forEach(e => e.classList.remove("error-input"))

//now the input validation checks
if(fname.value.trim() === ''){
  showError(fname,"First name is required");
  valid = false;
}
if(lname.value.trim() === ''){
  showError(lname,"Last name is required")
  valid = false;
}
if(password.value.length < 8 || password.value.trim() == ''){
  showError(password,"Password must be at least 8 characters long")
  
}

if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())){
  showError(email,"Please enter a valid Email")
  valid = false;
}


const checkedCount = document.querySelectorAll('.row input[type="checkbox"]:checked').length;
if(checkedCount < 3){
  showError(checkedbox,"Check at least 3 technologies")
  valid = false;
}

if(valid){
  document.getElementById("form-container").style.display = "none"
  document.getElementById("game").style.display = "block"
}
});


