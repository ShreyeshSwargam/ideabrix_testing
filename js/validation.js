// Validation functions
function validateName(name) {
    var nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function validatePhone(phone) {
    var phoneRegex = /^\d{10,}$/;
    return phoneRegex.test(phone);
}

function validateCompanyName(companyname) {
    var companynameRegex = /^[A-Za-z\s]+$/;
    return companynameRegex.test(companyname);
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateMessage(message) {
    var messageRegex = /^[A-Za-z0-9\s.,!?]+$/;  // Adjust regex to allow or disallow special characters
    return messageRegex.test(message);
}

// Perform all validations
function performValidations(formData, captchaCode, captchaInputText) {
    var spinner = document.getElementById('loader');
    var errorMessage = '';

    if (!validateName(formData.name)) {
        errorMessage = "Invalid name. Only letters are allowed.";
    } else if (!validatePhone(formData.phone)) {
        errorMessage = "Invalid phone number. Only numbers are allowed and it must be at least 10 digits.";
    } else if (!validateCompanyName(formData.company)) {
        errorMessage = "Invalid company name. Special characters are not allowed.";
    } else if (!validateEmail(formData.email)) {
        errorMessage = "Invalid email address.";
    } else if (!validateMessage(formData.message)) {
        errorMessage = "Invalid message. Special characters are not allowed.";
    } else if (captchaInputText !== captchaCode) {
        errorMessage = "Invalid Captcha";
    }

    if (errorMessage) {
        spinner.style.display = "none";
        sweetAlert(errorMessage, "", "error");
        createcaptcha();
        return false;
    }

    return true;
}
