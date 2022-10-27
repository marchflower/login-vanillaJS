const loginContainer = document.querySelector(".container#login");
const loginForm = loginContainer.querySelector(".form");
const loginBtn = loginContainer.querySelector(".btn");
const linkForgot = loginContainer.querySelector("#linkForgot");
const linkCreateAccount = loginContainer.querySelector("#linkCreateAccount");

const createContainer = document.querySelector(".container#createAccount");
const signupForm = createContainer.querySelector(".form");
const signupBtn = createContainer.querySelector(".btn");
const linkLogin = createContainer.querySelector("#linkLogin");

const loginEmail = loginContainer.querySelector(".email");
const loginPassword = loginContainer.querySelector(".password");

const loginEmailInput = loginEmail.querySelector(".input");
const loginPasswordInput = loginPassword.querySelector(".input");
const loginEmailTailIcon = loginEmail.querySelector(".tailIcon");
const loginPasswordTailIcon = loginPassword.querySelector(".tailIcon");
const loginInputs = loginContainer.querySelectorAll(".input");
const loginTails = loginContainer.querySelectorAll(".tailIcon");

const signupEmail = createContainer.querySelector(".email");
const signupUsername = createContainer.querySelector(".username");
const signupPassword = createContainer.querySelector(".password");
const signupPasswordConfirm = createContainer.querySelector(".password-confirm");
const signupInputs = createContainer.querySelectorAll(".input");
const signupTails = createContainer.querySelectorAll(".tailIcon")

const signupEmailInput = signupEmail.querySelector(".input");
const signupUsernameInput = signupUsername.querySelector(".input");
const signupPasswordInput = signupPassword.querySelector(".input");
const signupPasswordConfirmInput = signupPasswordConfirm.querySelector(".input");

const signupEmailTailIcon = signupEmail.querySelector(".tailIcon");
const signupUsernameTailIcon = signupUsername.querySelector(".tailIcon");
const signupPasswordTailIcon = signupPassword.querySelector(".tailIcon");
const signupPasswordConfirmTailIcon = signupPasswordConfirm.querySelector(".tailIcon");

const nameValidation = /^[a-zA-Z0-9_-]{2,20}$/;
const emailValidation = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
const pwdValidation = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const INVALID = "fa-exclamation-triangle";
const VALID = "fa-check-circle";
