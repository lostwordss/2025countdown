// Function to update the countdown
function updateCountdown() {
    // Set the target date for 00:00 UK time on 1st January
    const targetDate = new Date("2025-01-01T00:00:00Z"); // UTC time (this will be UK time during winter)

    // Get the current date and time
    const now = new Date();

    // Calculate the difference between the target date and the current date
    const timeRemaining = targetDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById("days-count").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours-count").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes-count").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds-count").textContent = seconds < 10 ? "0" + seconds : seconds;

    // If the countdown is finished, display a message
    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>Happy New Year!</h2>";
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial countdown update
updateCountdown();
