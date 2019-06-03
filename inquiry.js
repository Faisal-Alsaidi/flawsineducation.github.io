function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
        alert("Please stop using Internet Explorer it's a nightmare to work with and doesn't know how to be a browser");
    }
    else  // If another browser, return 0
    {
        return false
    }

    return false;
}

window.onload = msieversion();
