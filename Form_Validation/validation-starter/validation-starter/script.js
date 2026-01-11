var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var MsgError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");


function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write Full Name";
        return false;
    }
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;


}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = "Phone is Required";
        return false;
    }
    if (!phone.length == 10) {
        phoneError.innerHTML = "Phone should be of the 10 digit";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Digit  0-9 Only";
        return false;
    }
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

}

function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.innerHTML = "email is Required";
        return false;
    }

    if (!email.match(/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

}

function validatemsg() {
    var msg = document.getElementById("contact-msg").value;

    let required = 30;

    let left = required - msg.length;
    if (msg.length == 0) {
        MsgError.innerHTML = "Massaege is Required";
        return false;
    }
    if (left > 0) {
        MsgError.innerHTML = left + " more characters required";
        return false;
    }

    MsgError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

}

function validateForm() {
    if (!validateEmail() || !validateName() || !validatePhone() || !validatemsg()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix the errors before submitting";
        setInterval(function() {   submitError.style.display = "none"; }, 3000);
        return false;
    }
    submitError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}