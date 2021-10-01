const loginContainer = document.querySelector(".container#login");
const linkForgot = loginContainer.querySelector("#linkForgot");
const linkCreateAccount = loginContainer.querySelector("#linkCreateAccount");

const createContainer = document.querySelector(".container#createAccount");
const linkLogin = createContainer.querySelector("#linkLogin");

const HIDDEN = "hidden"

function toCreateAccount(event){
    event.preventDefault();
    loginContainer.classList.add(HIDDEN);
    createContainer.classList.remove(HIDDEN);
} 

function toLogin(event){
    event.preventDefault();
    createContainer.classList.add(HIDDEN);
    loginContainer.classList.remove(HIDDEN);
}

linkCreateAccount.addEventListener("click", toCreateAccount);
linkLogin.addEventListener("click", toLogin);

