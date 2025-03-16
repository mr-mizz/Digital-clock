function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    hours = hours % 12 || 12; // Convert to 12-hour format
    const period = hours < 12 ? "AM" : "PM";

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    date = date < 10 ? "0" + date : date;

    document.querySelector(".time").innerHTML = `${hours}:${minutes}:${seconds} ${period}`;
    document.querySelector(".date-time").innerHTML = `${dayNames[day]}, ${monthNames[month]} ${date}, ${year}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
