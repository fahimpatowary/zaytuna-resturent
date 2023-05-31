function juice_img(image){
    let main_img = document.querySelector('.main').src = image;
}
function juice_img(image){
    let main_img = document.querySelector('.main').src = image;
}

// login page hide show
let registBtn = document.getElementById("RegistBtnLogin");
function loginSing(){
    let LoginDiv = document.querySelector(".LoginDiv");
    let SingDiv = document.querySelector(".SingDiv");
    LoginDiv.style.display = "none";
    SingDiv.style.display = "block";
}

// singin
let LoginBtn = document.querySelector(".LoginBtn");
function loginSingup(){
    let LoginDiv = document.querySelector(".LoginDiv");
    let SingDiv = document.querySelector(".SingDiv");
    let ForgotBtn = document.querySelector(".ForgotPassowrdDiv");
    LoginDiv.style.display = "block";
    SingDiv.style.display = "none";
    ForgotBtn.style.display = "none";
}

// Forgot
let ForgotBtn = document.querySelector(".ForGotBtn");
function prgothide(){
    let LoginDiv = document.querySelector(".LoginDiv");
    let ForgotBtn = document.querySelector(".ForgotPassowrdDiv");
    LoginDiv.style.display = "block";
    ForgotBtn.style.display = "none";
}
// Forgot
let ForgotShowcli = document.querySelector(".ForgotShowcli");
function ForgotShow(){
    let LoginDiv = document.querySelector(".LoginDiv");
    let ForgotBtn = document.querySelector(".ForgotPassowrdDiv");
    LoginDiv.style.display = "none";
    ForgotBtn.style.display = "block";
}