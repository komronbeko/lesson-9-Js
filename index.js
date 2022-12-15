var $form = document.querySelector("#form")
var $Fname = document.querySelector("#Fname")
var $FnameError = document.querySelector(".Fname-error")
var $Lname = document.querySelector("#Lname")
var $LnameError = document.querySelector(".Lname-error")
var $mail = document.querySelector("#mail")
var $mailError = document.querySelector(".mail-error")
var $pswrd = document.querySelector("#pswrd")
var $pswrdError = document.querySelector(".pswrd-error")
var $btn = document.querySelector("#btn")

var $result1= document.querySelector(".result--1")
var $result2= document.querySelector(".result--2")
var $result3= document.querySelector(".result--3")

$Fname.addEventListener("input", function(e){
    var __FnameValue = e.target.value;

    if (__FnameValue.length < 4) {
        $FnameError.classList.add("Fname-showError")
    }
    else if(__FnameValue.length >= 4) {
        $FnameError.classList.remove("Fname-showError")
    }
})

$Lname.addEventListener("input", function(e){
    var __LnameValue = e.target.value;

    if (__LnameValue.length < 4) {
        $LnameError.classList.add("Lname-showError")
    }
    else if(__LnameValue.length >= 4) {
        $LnameError.classList.remove("Lname-showError")
    }
})
$mail.addEventListener("input", function(e){
    var __mailValue = e.target.value;

    if (__mailValue.length < 4) {
        $mailError.classList.add("mail-showError")
    }
    else if(__mailValue.length >= 4) {
        $mailError.classList.remove("mail-showError")
    }
})
$pswrd.addEventListener("input", function(e){
    var __pswrdValue = e.target.value;

    if (__pswrdValue.length < 4) {
        $pswrdError.classList.add("pswrd-showError")
    }
    else if(__pswrdValue.length >= 4) {
        $pswrdError.classList.remove("pswrd-showError")
    }
})

$form.addEventListener("submit", function(e){
    e.preventDefault();
    $result1.textContent = $Fname.value;
    $result2.textContent = $Lname.value;
    $result3.textContent = $mail.value;
})