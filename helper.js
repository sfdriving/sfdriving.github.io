function setActive(title, description) {
    $("header>h1").html(title);
    $(".main-nav>ul>li>a:contains('"+title+"')").attr("class", "header_current_heading");
    $("header>p").html(description);
}

function onSubmit() {
    var email = "sfdriving@126.com";
    var message = "";
    message += "Name: "+$("#ta_name").val() + "%0A";
    message += "Telephone: "+$("#ta_telephone").val() + "%0A";
    message += "Address: "+$("#ta_address").val() + "%0A";
    message += "Message: "+$("#ta_message").val() + "%0A"+ "%0A"+ "%0A";

    window.open("mailto:" + email + "?subject=Driving Lesson&body=" + message);
}

function onHeaderLoad() {
    var url = window.location.href;
    if (url.endsWith("_cn.html")) {
        url = url.substring(0, url.length - 8);
    } else if (url.endsWith(".html")) {
        url = url.substring(0, url.length - 5);
    } else {
        url += "index";
    }

    $("#english").attr("href", url + ".html");
    $("#chinese").attr("href", url + "_cn.html");
}