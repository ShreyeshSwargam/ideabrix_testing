document.getElementById('requestDemoform').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission
    var spinner = document.getElementById('loader');
    spinner.style.display="block";

    // Get form data
    var name = document.getElementById('txtFullName').value;
    var phone = document.getElementById('txtPhoneNumber').value;
    var companyname= document.getElementById('txtCompanyName').value;
    var email = document.getElementById('txtEmail').value;
    var location = document.getElementById('txtLocation').value;
    var noofrecruter = document.getElementById('txtNumberofrecruiters').value;
    var message = document.getElementById('txtMessage').value;

    // Prepare data for POST request
    var formData = {
        name: name,
        phone: phone,
        company_name: companyname,
        company_email: email,
        location: location,
        noofrecruiter: noofrecruter,
        message:message
    };
    captchainputtext=document.getElementById("captchaINtext").value
    if(captchainputtext == code){
        // Make a POST request to the Django REST API endpoint 
    fetch('https://myyiop0a6k.execute-api.ap-south-1.amazonaws.com/initialtest/ttrweb', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Credentials': true,
            // 'Access-Control-Allow-Headers':'origin, content-type, accept',
            //'Access-Control-Allow-Origin': 'https://www.talentrackr.com'
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
        
        
        spinner.style.display="none";
        sweetAlert("Your request submitted successfully.", "", "success");
        document.getElementById('requestDemoform').reset();
        // setTimeout(function(){
        //     document.getElementById('requestDemo-form').reset();
    
        // },500);
        // You can update the HTML content or display a success message here
    })
    .catch(function(error) {
        // Handle any errors
        spinner.style.display="none";
        sweetAlert("Your request Not send", "", "error");
        document.getElementById('requestDemoform').reset();
        console.error(error);
    });


    }
    else{
        spinner.style.display="none";
        sweetAlert("Invalid Captcha ", "", "error");
        document.getElementById('requestDemoform').reset();
        createcaptcha();
        

    }

    
    
    
});



var code
function createcaptcha(){
    //clear the captcha div first
    document.getElementById('captchadiv').innerHTML="";
    var pickuptext="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var captcha=[]
    for(var i=0;i<6;i++){
        var indexvalu=Math.floor(Math.random() * pickuptext.length + 1);
        // alert('hello',indexvalu)
       
        if(captcha.indexOf(pickuptext[indexvalu]) == -1){
            captcha.push(pickuptext[indexvalu]);
        }
        else{
            i-- ;
        }
        

    }

    var canvdraw=document.createElement("canvas")
    canvdraw.id="captcha";
    canvdraw.width=125;
    canvdraw.height=43;
    var ctx = canvdraw.getContext("2d");
    ctx.font = "21px Georgia";
    // ctx.fillStyle = "#499CA6";
    ctx.fillStyle = "#4F6F52";

    
    

    // Measure the width of the text
    var textWidth = ctx.measureText(captcha.join("")).width;

    // Calculate the x coordinate for centering
    var xCoordinate = (canvdraw.width - textWidth) / 2;

    // Fill the text with red color and center it
    ctx.fillText(captcha.join(""), xCoordinate, 40);

    // Add a background color
    // ctx.fillStyle = "lightgray";
    // ctx.fillRect(0, 0, canvdraw.width, canvdraw.height);
    

    // Add a border
    // ctx.strokeStyle = "black";
    // ctx.strokeRect(0, 0, canvdraw.width, canvdraw.height);

    // ctx.strokeText(captcha.join(""), 0, 30);
    code=captcha.join('');
    //console.log('this is captcha text',code);
    
    document.getElementById('captchadiv').appendChild(canvdraw);


}

