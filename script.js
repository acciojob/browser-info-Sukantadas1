//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    // Get browser information from the navigator object
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;

    // Create a message string
    const message = "You are using " + browserName + " version " + browserVersion;

    // Display the message inside the div with the id "browser-info"
    const browserInfoDiv = document.getElementById("browser-info");
    browserInfoDiv.textContent = message;
});