let hr = document.getElementById('hour');
let m = document.getElementById('min');
let s = document.getElementById('sec');

function displayTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotations = 30*hh + mm/2;
    let mRotations = 6*mm;
    let sRotations = 6*ss;

    hr.style.transform = `rotate(${hRotations}deg)`;
    m.style.transform = `rotate(${mRotations}deg)`;
    s.style.transform = `rotate(${sRotations}deg)`;
}

setInterval(displayTime,1000);