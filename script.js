const sucessCard = document.querySelector(".sucess__card");
const signUpCard = document.querySelector(".sign-up__card");
const emailInput = document.querySelector("#email-input")
const errorLabel = document.querySelector(".error-email-input")
const buttonSubmit = document.querySelector("#submit-button")
const registeredEmail = document.querySelector("#registered-email")
const dismissButton = document.querySelector("#dismiss")

function errorValidation () {
  emailInput.classList.add("error-input")
  emailInput.style.borderColor = "hsl(4, 80%, 80%)"
  emailInput.style.color = "hsl(4, 80%, 80%)"
  errorLabel.style.display = "block"
}

function sucessValidation () {
  emailInput.classList.remove("error-input")
  emailInput.style.borderColor = "rgb(196, 196, 196)"
  emailInput.style.color = "#000"

  errorLabel.style.display = "none"
  sucessCard.style.display = "flex"
  signUpCard.style.display = "none"
}

function changeState () {
  emailInput.classList.remove("error-input")
  emailInput.style.borderColor = "rgb(196, 196, 196)"
  emailInput.style.color = "#000"
  errorLabel.style.display = "none"
}

function emailValidation (email) {
  validator.isEmail(email) ? sucessValidation() : errorValidation()
} 

buttonSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  emailValidation(emailInput.value)
  registeredEmail.innerText = emailInput.value
})

dismissButton.addEventListener("click", (e) => {
  e.preventDefault()
  sucessCard.style.display = "none"
  signUpCard.style.display = "flex"
})
