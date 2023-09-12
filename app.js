// Function to update the current UTC time
function updateCurrentUTC() {
    const utcTimeElement = document.getElementById('utcTime');
    const currentUTC = new Date().getTime();
    utcTimeElement.textContent = currentUTC;
}

// Update the current UTC time initially
updateCurrentUTC();

// Update the current UTC time every second
setInterval(updateCurrentUTC, 1000);
