var newYearsDay = "1-1-2024"

function setDate() {
    const date = new Date();

    var hours = date.getHours();
    var min = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM"
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var monthDayYear = month + "-" + day + "-" + year;

    if (hours>12) {
        hours = hours -12;
        session = "PM"
    }

    hours = (hours<10) ? "0" + hours: hours;
    min = (min<10) ? "0" + min: min;
    seconds = (seconds<10) ? "0" + seconds: seconds;

    document.getElementById("hour").innerText = hours % 12 ;
    document.getElementById("min").innerText = min;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = session;
    document.getElementById("date").innerText = monthDayYear.toLocaleString();

    setTimeout(setDate, 1000);

    if (monthDayYear ==newYearsDay) {
        document.getElementById("holidays").innerText = "New Years Day";
    }
    
}
setDate();
