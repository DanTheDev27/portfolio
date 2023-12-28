function setDate() {
    const date = new Date();

    var hours = date.getHours();
    var min = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM"

    if (hours>12) {
        //hours = hours -12;
        session = "PM"
    }

    hours = (hours<10) ? "0" + hours: hours;
    min = (min<10) ? "0" + min: min;
    seconds = (seconds<10) ? "0" + seconds: seconds;

    document.getElementById("hour").innerText = hours % 12 ;
    document.getElementById("min").innerText = min;
    document.getElementById("seconds").innerText = seconds;
    document.getElementById("ampm").innerText = session;

    setTimeout(setDate, 1000);
    
}
setDate();
