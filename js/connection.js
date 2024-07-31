// document.getElementById('requestDemoform').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent the default form submission
//     var spinner = document.getElementById('loader');
//     spinner.style.display="block";

//     // Get form data
//     var name = document.getElementById('txtFullName').value;
//     var phone = document.getElementById('txtPhoneNumber').value;
//     var companyname= document.getElementById('txtCompanyName').value;
//     var email = document.getElementById('txtEmail').value;
//     var location = document.getElementById('txtLocation').value;
//     var noofrecruter = document.getElementById('txtNumberofrecruiters').value;
//     var message = document.getElementById('txtMessage').value;
//     var drop_down = document.getElementById('support').value;


//     // Prepare data for POST request
//     var formData = {
//         name: name,
//         phone: phone,
//         company_name: companyname,
//         company_email: email,
//         location: location,
//         noofrecruiter: noofrecruter,
//         message:message
//     };
//     captchainputtext=document.getElementById("captchaINtext").value
//     if(captchainputtext == code){
//         // Make a POST request to the Django REST API endpoint 
//     fetch('https://myyiop0a6k.execute-api.ap-south-1.amazonaws.com/initialtest/ttrweb', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//          },
//         body: JSON.stringify(formData)
//     })
//     .then(function(response) {
//         if (response.ok) {
//              return response.json(); 
//         } else {
//             throw new Error('Error: ' + response.status);
//         }
//     })
//     .then(function(data) {
//         // Handle the response data
        
        
//         spinner.style.display="none";
//         sweetAlert("Your request submitted successfully.", "", "success");
//         document.getElementById('requestDemoform').reset();
//         // setTimeout(function(){
//         //     document.getElementById('requestDemo-form').reset();
    
//         // },500);
//         // You can update the HTML content or display a success message here
//     })
//     .catch(function(error) {
//         // Handle any errors
//         spinner.style.display="none";
//         sweetAlert("Your request Not send", "", "error");
//         document.getElementById('requestDemoform').reset();
//         console.error(error);
//     });


//     }
//     else{
//         spinner.style.display="none";
//         sweetAlert("Invalid Captcha ", "", "error");
//         document.getElementById('requestDemoform').reset();
//         createcaptcha();
        

//     }

    
    
    
// });



// var code
// function createcaptcha(){
//     //clear the captcha div first
//     document.getElementById('captchadiv').innerHTML="";
//     var pickuptext="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
//     var captcha=[]
//     for(var i=0;i<6;i++){
//         var indexvalu=Math.floor(Math.random() * pickuptext.length + 1);
//         // alert('hello',indexvalu)
       
//         if(captcha.indexOf(pickuptext[indexvalu]) == -1){
//             captcha.push(pickuptext[indexvalu]);
//         }
//         else{
//             i-- ;
//         }
        

//     }

//     var canvdraw=document.createElement("canvas")
//     canvdraw.id="captcha";
//     canvdraw.width=100;
//     canvdraw.height=30;
//     var ctx = canvdraw.getContext("2d");
//     ctx.font = "22px Georgia";
//     // ctx.fillStyle = "#499CA6";
//     ctx.fillStyle = "#4F6F52";


//     // Measure the width of the text
//     var textWidth = ctx.measureText(captcha.join("")).width;

//     // Calculate the x coordinate for centering
//     var xCoordinate = (canvdraw.width - textWidth) / 2;

//     // Fill the text with red color and center it
//     ctx.fillText(captcha.join(""), xCoordinate, 25);

//     // Add a background color
//     // ctx.fillStyle = "lightgray";
//     // ctx.fillRect(0, 0, canvdraw.width, canvdraw.height);
    

//     // Add a border
//     // ctx.strokeStyle = "black";
//     // ctx.strokeRect(0, 0, canvdraw.width, canvdraw.height);

//     // ctx.strokeText(captcha.join(""), 0, 30);
//     code=captcha.join('');
//     //console.log('this is captcha text',code);
    
//     document.getElementById('captchadiv').appendChild(canvdraw);


// }

// -------------------------------------------------------------------------------------------------------

// document.getElementById('requestDemoform').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent the default form submission
//     var spinner = document.getElementById('loader');
//     spinner.style.display = "block";

//     // Get form data
//     var name = document.getElementById('txtFullName').value;
//     var phone = document.getElementById('txtPhoneNumber').value;
//     var companyname = document.getElementById('txtCompanyName').value;
//     var email = document.getElementById('txtEmail').value;
//     // var location = document.getElementById('txtLocation').value;
//     // var noofrecruter = document.getElementById('txtNumberofrecruiters').value;
//     var message = document.getElementById('txtMessage').value;
//     var drop_down = document.getElementById('support').value;

//     // Prepare data for POST request
//     var formData = {
//         name: name,
//         phone: phone,
//         company: companyname,
//         email: email,
//         subject: drop_down,  // Assuming you want to send the dropdown value as the subject
//         message: message
//     };

//     var captchainputtext = document.getElementById("captchaINtext").value;
//     if (captchainputtext === code) {
//         // Make a POST request to the API Gateway endpoint
//         fetch('https://gjholemkb9.execute-api.ap-south-1.amazonaws.com/prd/idbx-send-mail', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'x-api-key': ''  // API key here
//             },
//             body: JSON.stringify(formData)
//         })
//         .then(function(response) {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Error: ' + response.status);
//             }
//         })
//         .then(function(data) {
//             // Handle the response data
//             spinner.style.display = "none";
//             sweetAlert("Your request was submitted successfully.", "", "success");
//             document.getElementById('requestDemoform').reset();
//             createcaptcha();
//         })
//         .catch(function(error) {
//             // Handle any errors
//             spinner.style.display = "none";
//             sweetAlert("Your request could not be sent.", "", "error");
//             document.getElementById('requestDemoform').reset();
//             console.error(error);
//             createcaptcha();
//         });
//     } else {
//         spinner.style.display = "none";
//         sweetAlert("Invalid Captcha", "", "error");
//         document.getElementById('requestDemoform').reset();
//         createcaptcha();
//     }
// });

// var code;
// function createcaptcha() {
//     // Clear the captcha div first
//     document.getElementById('captchadiv').innerHTML = "";
//     var pickuptext = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
//     var captcha = [];
//     for (var i = 0; i < 6; i++) {
//         var indexvalu = Math.floor(Math.random() * pickuptext.length);
//         if (captcha.indexOf(pickuptext[indexvalu]) == -1) {
//             captcha.push(pickuptext[indexvalu]);
//         } else {
//             i--;
//         }
//     }

//     var canvdraw = document.createElement("canvas");
//     canvdraw.id = "captcha";
//     canvdraw.width = 100;
//     canvdraw.height = 30;
//     var ctx = canvdraw.getContext("2d");
//     ctx.font = "22px Georgia";
//     ctx.fillStyle = "#4F6F52";

//     // Measure the width of the text
//     var textWidth = ctx.measureText(captcha.join("")).width;

//     // Calculate the x coordinate for centering
//     var xCoordinate = (canvdraw.width - textWidth) / 2;

//     // Fill the text and center it
//     ctx.fillText(captcha.join(""), xCoordinate, 25);

//     code = captcha.join('');
//     document.getElementById('captchadiv').appendChild(canvdraw);
//   }


// -------------------------------------------------------------------------------------------------------

// document.getElementById('requestDemoform').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent the default form submission
//     var spinner = document.getElementById('loader');
//     spinner.style.display = "block";

//     // Get form data
//     var name = document.getElementById('txtFullName').value;
//     var phone = document.getElementById('txtPhoneNumber').value;
//     var companyname = document.getElementById('txtCompanyName').value;
//     var email = document.getElementById('txtEmail').value;
//     var message = document.getElementById('txtMessage').value;
//     var drop_down = document.getElementById('support').value;

//     // Validation
//     if (!validateName(name)) {
//         spinner.style.display = "none";
//         sweetAlert("Invalid name. Only letters are allowed.", "", "error");
//         createcaptcha();
//         return;
//     }

//     if (!validatePhone(phone)) {
//         spinner.style.display = "none";
//         sweetAlert("Invalid phone number. Only numbers are allowed and it must be at least 10 digits.", "", "error");
//         createcaptcha();
//         return;
//     }

//     if (!validateCompanyName(companyname)) {
//         spinner.style.display = "none";
//         sweetAlert("Invalid company name. Special characters are not allowed.", "", "error");
//         createcaptcha();
//         return;
//     }

//     if (!validateEmail(email)) {
//         spinner.style.display = "none";
//         sweetAlert("Invalid email address.", "", "error");
//         createcaptcha();
//         return;
//     }

//     if (!validateMessage(message)) {
//         spinner.style.display = "none";
//         sweetAlert("Invalid message. Special characters are not allowed.", "", "error");
//         createcaptcha();
//         return;
//     }

//     var captchainputtext = document.getElementById("captchaINtext").value;
//     if (captchainputtext !== code) {
//         spinner.style.display = "none";
//         sweetAlert("Invalid Captcha", "", "error");
//         createcaptcha();
//         return;
//     }

//     // Prepare data for POST request
//     var formData = {
//         name: name,
//         phone: phone,
//         company: companyname,
//         email: email,
//         subject: drop_down,  // Assuming you want to send the dropdown value as the subject
//         message: message
//     };

//     // Make a POST request to the API Gateway endpoint
//     fetch('https://gjholemkb9.execute-api.ap-south-1.amazonaws.com/prd/idbx-send-mail', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(function(response) {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('Error: ' + response.status);
//         }
//     })
//     .then(function(data) {
//         // Handle the response data
//         spinner.style.display = "none";
//         sweetAlert("Your request was submitted successfully.", "", "success");
//         document.getElementById('requestDemoform').reset();
//         createcaptcha();
//     })
//     .catch(function(error) {
//         // Handle any errors
//         spinner.style.display = "none";
//         sweetAlert("Your request could not be sent.", "", "error");
//         document.getElementById('requestDemoform').reset();
//         console.error(error);
//         createcaptcha();
//     });
// });

// // Validation functions
// function validateName(name) {
//     var nameRegex = /^[A-Za-z\s]+$/;
//     return nameRegex.test(name);
// }

// function validatePhone(phone) {
//     var phoneRegex = /^\d{10,}$/;
//     return phoneRegex.test(phone);
// }

// function validateCompanyName(companyname) {
//     var companynameRegex = /^[A-Za-z\s]+$/;
//     return companynameRegex.test(companyname);
// }

// function validateEmail(email) {
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// function validateMessage(message) {
//     var messageRegex = /^[A-Za-z0-9\s.,!?]+$/;  // Adjust regex to allow or disallow special characters
//     return messageRegex.test(message);
// }

// var code;
// function createcaptcha() {
//     // Clear the captcha div first
//     document.getElementById('captchadiv').innerHTML = "";
//     var pickuptext = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
//     var captcha = [];
//     for (var i = 0; i < 6; i++) {
//         var indexvalu = Math.floor(Math.random() * pickuptext.length);
//         if (captcha.indexOf(pickuptext[indexvalu]) == -1) {
//             captcha.push(pickuptext[indexvalu]);
//         } else {
//             i--;
//         }
//     }

//     var canvdraw = document.createElement("canvas");
//     canvdraw.id = "captcha";
//     canvdraw.width = 100;
//     canvdraw.height = 30;
//     var ctx = canvdraw.getContext("2d");
//     ctx.font = "22px Georgia";
//     ctx.fillStyle = "#4F6F52";

//     // Measure the width of the text
//     var textWidth = ctx.measureText(captcha.join("")).width;

//     // Calculate the x coordinate for centering
//     var xCoordinate = (canvdraw.width - textWidth) / 2;

//     // Fill the text and center it
//     ctx.fillText(captcha.join(""), xCoordinate, 25);

//     code = captcha.join('');
//     document.getElementById('captchadiv').appendChild(canvdraw);
// }

//-------------------------------------------------------------------------------------------------------

document.getElementById('requestDemoform').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    var spinner = document.getElementById('loader');
    spinner.style.display = "block";

    // Get form data
    var name = document.getElementById('txtFullName').value;
    var phone = document.getElementById('txtPhoneNumber').value;
    var companyname = document.getElementById('txtCompanyName').value;
    var email = document.getElementById('txtEmail').value;
    var message = document.getElementById('txtMessage').value;
    var drop_down = document.getElementById('support').value;
<<<<<<< HEAD
    var captchaInputText = document.getElementById("captchaINtext").value;
=======

    // Validation
    if (!validateName(name)) {
        spinner.style.display = "none";
        sweetAlert("Invalid name. Only letters are allowed.", "", "error");
        createcaptcha();
        return;
    }

    if (!validatePhone(phone)) {
        spinner.style.display = "none";
        sweetAlert("Invalid phone number. Only numbers & 10 digits are allowed .", "", "error");
        createcaptcha();
        return;
    }

    if (!validateCompanyName(companyname)) {
        spinner.style.display = "none";
        sweetAlert("Invalid company name. Special characters are not allowed.", "", "error");
        createcaptcha();
        return;
    }

    if (!validateEmail(email)) {
        spinner.style.display = "none";
        sweetAlert("Invalid email address.", "", "error");
        createcaptcha();
        return;
    }

    if (!validateMessage(message)) {
        spinner.style.display = "none";
        sweetAlert("Invalid message. Special characters are not allowed.", "", "error");
        createcaptcha();
        return;
    }

    var captchainputtext = document.getElementById("captchaINtext").value;
    if (captchainputtext !== code) {
        spinner.style.display = "none";
        sweetAlert("Invalid Captcha", "", "error");
        createcaptcha();
        return;
    }
>>>>>>> origin/main

    // Prepare data for POST request
    var formData = {
        name: name,
        phone: phone,
        company: companyname,
        email: email,
        subject: drop_down,  // Assuming you want to send the dropdown value as the subject
        message: message
    };

    // Perform validations
    if (!performValidations(formData, code, captchaInputText)) {
        return;  // Exit if validation fails
    }

    // Make a POST request to the API Gateway endpoint
    fetch('https://gjholemkb9.execute-api.ap-south-1.amazonaws.com/prd/idbx-send-mail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': ''  // API key here
        },
        body: JSON.stringify(formData)
    })
    .then(function(response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Error: ' + response.status);
        }
    })
    .then(function(data) {
        // Handle the response data
        spinner.style.display = "none";
        sweetAlert("Your request was submitted successfully.", "", "success");
        document.getElementById('requestDemoform').reset();
        createcaptcha();
    })
    .catch(function(error) {
        // Handle any errors
        spinner.style.display = "none";
        sweetAlert("Your request could not be sent.", "", "error");
        document.getElementById('requestDemoform').reset();
        console.error(error);
        createcaptcha();
    });
});

<<<<<<< HEAD
=======
// Validation functions
function validateName(name) {
    var nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function validatePhone(phone) {
    var phoneRegex = /^\d{10,12}$/;
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

>>>>>>> origin/main
var code;
function createcaptcha() {
    // Clear the captcha div first
    document.getElementById('captchadiv').innerHTML = "";
    var pickuptext = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var captcha = [];
    for (var i = 0; i < 6; i++) {
        var indexvalu = Math.floor(Math.random() * pickuptext.length);
        if (captcha.indexOf(pickuptext[indexvalu]) === -1) {
            captcha.push(pickuptext[indexvalu]);
        } else {
            i--;
        }
    }

    var canvdraw = document.createElement("canvas");
    canvdraw.id = "captcha";
    canvdraw.width = 100;
    canvdraw.height = 30;
    var ctx = canvdraw.getContext("2d");
    ctx.font = "22px Georgia";
    ctx.fillStyle = "#4F6F52";

    // Measure the width of the text
    var textWidth = ctx.measureText(captcha.join("")).width;

    // Calculate the x coordinate for centering
    var xCoordinate = (canvdraw.width - textWidth) / 2;

    // Fill the text and center it
    ctx.fillText(captcha.join(""), xCoordinate, 25);

    code = captcha.join('');
    document.getElementById('captchadiv').appendChild(canvdraw);
}

// Initialize captcha
createcaptcha();
