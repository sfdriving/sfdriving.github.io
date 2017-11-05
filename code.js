function test() {
    
}

function onSubmit() {
    var email = "sfdriving@126.com";
    var message = "";
    message += "Name: "+$("#ta_name").val() + "%0A";
    message += "Telephone: "+$("#ta_telephone").val() + "%0A";
    message += "Address: "+$("#ta_address").val() + "%0A";
    message += "Email: "+$("#ta_email").val() + "%0A";
    message += "Message: "+$("#ta_message").val() + "%0A"+ "%0A"+ "%0A";

    window.open("mailto:" + email + "?subject=Driving Lesson&body=" + message);
}