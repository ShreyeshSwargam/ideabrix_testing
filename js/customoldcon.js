/*
    Template Name: BiziPress - Finance, Consulting, Business HTML Template
    Author: Tripples
    Author URI: https://themeforest.net/user/tripples
    Description: BiziPress - Finance, Consulting, Business HTML Template
    Version: 1.0

    1. Fixed header
    2. Main slideshow
    3. Site search
    4. Owl Carousel
    5. Video popup
    6. Counter
    7. Contact form
    8. Back to top
  
*/


jQuery(function ($) {
    "use strict";



    $(document).ready(function () {

       

    });

    


    $('#contact-form').submit(function () {

        var $form = $(this),
            $error = $form.find('.error-container'),
            action = $form.attr('action');

        $error.slideUp(750, function () {
            $error.hide();

            var $name = $form.find('.form-name'),
                $phone = $form.find('.form-phone'),
                $email = $form.find('.form-email'),
                $url = $form.find('.form-website'),
                $message = $form.find('.form-message');

            $.post(action, {
                name: $name.val(),
                phone: $phone.val(),
                email: $email.val(),
                url: $url.val(),
                message: $message.val()
            },
                function (data) {
                    $error.html(data);
                    $error.slideDown('slow');

                    if (data.match('success') != null) {
                        $name.val('');
                        $phone.val('');
                        $email.val('');
                        $url.val('');
                        $message.val('');
                    }
                }
            );

        });

        return false;

    });



    $('#requestDemo-form').submit(function () {
       

        var $form = $(this),
            $error = $form.find('.error-container');

        $error.slideUp(750, function () {
            $error.hide();
            //debugger;
            var spinner = $('#loader');
            spinner.show();                                  
            var settings = {
                "url": "http://localhost:28217/TTService/TTWebsite.asmx?op=InsertRequestDemo",
                "method": "POST",
                "timeout": 0,                
                "headers": {
                    "Content-Type": "text/xml"
                },
                "data": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n  <soap:Body>\r\n    <InsertRequestDemo xmlns=\"http://tempuri.org/\">\r\n      <FullName>" + $form.find('#txtFullName').val() + "</FullName>\r\n      <CompanyName>" + $form.find('#txtCompanyName').val() + "</CompanyName>\r\n      <CompanyEmail>" + $form.find('#txtEmail').val() + "</CompanyEmail>\r\n      <PhoneNumber>" + $form.find('#txtPhoneNumber').val() + "</PhoneNumber>\r\n      <Location>" + $form.find('#txtLocation').val() + "</Location>\r\n      <NumberOfRecruiters>" + $form.find('#txtNumberofrecruiters').val() + "</NumberOfRecruiters>\r\n      <Message>" + $form.find('#txtMessage').val() + "</Message>\r\n  <Subject>Request Demo</Subject>\r\n <DemoRequest>1</DemoRequest>\r\n     </InsertRequestDemo>\r\n  </soap:Body>\r\n</soap:Envelope>",
            };

            $.ajax(settings).done(function (response) {
                console.log(response); 
                //debugger;
                $('#txtFullName').val('');
                $('#txtCompanyName').val('');
                $('#txtEmail').val('');
                $('#txtPhoneNumber').val('');
                $('#txtLocation').val('');
                $('#txtNumberofrecruiters').val('');
                $('#txtMessage').val(''); 
                spinner.hide();
                sweetAlert("Your request submitted successfully.", "", "success"); 
            });


        });

        return false;

    });

    $('#RequestCallback-form').submit(function () {
        
        var $form = $(this),
            $error = $form.find('.quote_form');
        
        $error.slideUp(750, function () {
            $error.hide();            
            var spinner = $('#loader');
            spinner.show();
            var settings = {
                "url": "http://localhost:28217/TTService/TTWebsite.asmx?op=InsertRequestDemo",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "text/xml"
                },
                "data": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n  <soap:Body>\r\n    <InsertRequestDemo xmlns=\"http://tempuri.org/\">\r\n      <FullName>" + $form.find('#txtFullName').val() + "</FullName>\r\n      <CompanyName></CompanyName>\r\n      <CompanyEmail>" + $form.find('#txtEmail').val() + "</CompanyEmail>\r\n      <PhoneNumber></PhoneNumber>\r\n      <Location></Location>\r\n      <NumberOfRecruiters>0</NumberOfRecruiters>\r\n      <Message>" + $form.find('#txtMessage').val() + "</Message>\r\n  <Subject>" + $form.find('#txtsubject').val() + "</Subject>\r\n <DemoRequest>2</DemoRequest>\r\n   </InsertRequestDemo>\r\n  </soap:Body>\r\n</soap:Envelope>",
            };

            $.ajax(settings).done(function (response) {
                console.log(response);    
                $('#txtFullName').val('');                
                $('#txtEmail').val('');               
                $('#txtsubject').val('');
                $('#txtMessage').val('');
                spinner.hide();                
                sweetAlert("Your request submitted successfully.", "", "success");
                $('.quote_form').show();
            });


        });

        return false;
    });

});