const HIDDEN = "hidden"

function toCreateAccount(event){
    event.preventDefault();
    loginContainer.classList.add(HIDDEN);
    createContainer.classList.remove(HIDDEN);
    loginInputs.forEach(inputElement => {
        inputElement.value = "";
    })
    loginTails.forEach(inputElement =>{
        inputElement.classList.remove(VALID);
        inputElement.classList.remove(INVALID);
    })
} 

function toLogin(event){
    event.preventDefault();
    createContainer.classList.add(HIDDEN);
    loginContainer.classList.remove(HIDDEN);
    signupInputs.forEach(inputElement => {
        inputElement.value = "";
    })
    signupTails.forEach(inputElement =>{
        inputElement.classList.remove(VALID);
        inputElement.classList.remove(INVALID);
    })
}

linkCreateAccount.addEventListener("click", toCreateAccount);
linkLogin.addEventListener("click", toLogin);

