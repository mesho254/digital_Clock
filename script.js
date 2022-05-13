function displayTime() {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let date = dateTime.toDateString();
    let session = document.getElementById('sessions');

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = "AM";
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('d').innerHTML = date;
}
setInterval(displayTime, 500);