
function isValidEmail(input){
    if (emailValidation.test(input.value.trim())) {
        return true;
    }else{
        return false;
}}

function isValidPwd(input){
    if (pwdValidation.test(input.value.trim())) {
        return true;
    }else{
        return false;
}}

function updateValidInvalid(element, flag){
    element.classList.remove(VALID);
    element.classList.remove(INVALID);

    element.classList.add(flag);
}

function checkLoginValid(){
    let checkValid = true;
    if (!isValidEmail(loginEmailInput)) {
        updateValidInvalid(loginEmailTailIcon, INVALID);
        checkValid = false;
    }else {
        updateValidInvalid(loginEmailTailIcon, VALID);
    }
    if (!isValidPwd(loginPasswordInput)) {
        updateValidInvalid(loginPasswordTailIcon, INVALID);
        checkValid = false;
    }
    else {
        updateValidInvalid(loginPasswordTailIcon, VALID);
    }
    return checkValid;
}

loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const loginValid = checkLoginValid();

    if (loginValid) {
        const email = loginEmailInput.value;
        const password = loginPasswordInput.value;
        console.log(email, password)
    }
})
