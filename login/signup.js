
function isValidEmail(input){
    if (emailValidation.test(input.value.trim())) {
        return true;
    }else{
        return false;
}}

function isValidName(input){
    if (nameValidation.test(input.value.trim())) {
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

function isValidPwdConfirm(input){
    if (input.value.trim() == signupPasswordInput.value) {
        return true;
    }
    else{
        return false;
}}

function updateValidInvalid(element, flag){
    element.classList.remove(VALID);
    element.classList.remove(INVALID);

    element.classList.add(flag);
}

function checkSignupValid(){
    let checkValid = true;
    if (!isValidEmail(signupEmailInput)) {
        updateValidInvalid(signupEmailTailIcon, INVALID);
        checkValid = false;
    }else {
        updateValidInvalid(signupEmailTailIcon, VALID);
    }
    if (!isValidName(signupUsernameInput)) {
        updateValidInvalid(signupUsernameTailIcon, INVALID);
        checkValid = false;
    }else {
        updateValidInvalid(signupUsernameTailIcon, VALID);
    }
    if (!isValidPwd(signupPasswordInput)) {
        updateValidInvalid(signupPasswordTailIcon, INVALID);
        checkValid = false;
    }else {
        updateValidInvalid(signupPasswordTailIcon, VALID);
    }
    if (!isValidPwdConfirm(signupPasswordConfirmInput)) {
        updateValidInvalid(signupPasswordConfirmTailIcon, INVALID);
        checkValid = false;
    }else {
        updateValidInvalid(signupPasswordConfirmTailIcon, VALID);
    }
    return checkValid;
}

signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const signupValid = checkSignupValid();

    if (signupValid) {
        const email = signupEmailInput.value;
        const nickName = signupUsernameInput.value;
        const password = signupPasswordInput.value;
        // console.log(email, nickName, password)
        createUser(email, nickName, password);
    }
})