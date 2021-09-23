const loginForm = document.querySelector(".form#login")
const loginUsername = loginForm.querySelector("#username")
const loginPwd =loginForm.querySelector("#password")

loginUsername.addEventListener("blur", e =>{
    if (e.target.value.length < 3){
        loginUsername.classList.add("form__input--error");
    } else{
        loginUsername.classList.remove("form__input--error");
    }
})

loginUsername.addEventListener("mouseover", e => {
    if (loginUsername.classList.contains("form__input--error")){
        loginUsername.setAttribute("title", "Unvalid username");
    } else {
        loginUsername.setAttribute("title", "");
    }
})

