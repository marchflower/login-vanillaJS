const nameValidation = /^[a-z0-9_-]{2,20}$/;
const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const pwdValidation = /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[~,!,@,#,$,*,(,),=,+,_,.,|]).*$/;

function isValidName(input){
    if (nameValidation.test(input.value.trim())) {
        return true;
    }
    else{
        return false;
    }
}

function isValidEmail(input){
    if (emailValidation.test(input.value.trim())) {
        return true;
    }
    else{
        return false;
    }
}

function isValidPwd(input){
    if (pwdValidation.test(input.value.trim())) {
        return true;
    }
    else{
        return false;
    }
}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            console.log(e.target.id);
            if (e.target.id === "signupUsername" && !isValidName(e.target)) {
                setInputError(inputElement, "Unvalid Username");
            }
            else if (e.target.id === "signupEmail" && !isValidEmail(e.target)) {
                setInputError(inputElement, "Unvalid Email");
            }
            else if (e.target.id === "signupPwd" && !isValidPwd(e.target)) {
                setInputError(inputElement, "Unvalid Password");
            }
            else if (e.target.id === "signupConfPwd") {
                const signupPwd = document.querySelector("#signupPwd").value;
                if (e.target.value !== signupPwd){
                    setInputError(inputElement, "Passwords do not match");
                }
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});