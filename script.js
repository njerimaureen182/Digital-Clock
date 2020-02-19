function showTime() {
    let date = new Date();

    // to get hours from 0-23
    let hours = date.getHours();

    // to get minutes from 0-59
    let minutes = date.getMinutes();

    // to get seconds from 0-59
    let seconds = date.getSeconds();

let formatHours = convertFormat(hours);

// to subtract from time if it is greater than 12
hours = checkTime(hours);

// to add zeros where the values are less than 10;
hours = addZero(hours);
minutes = addZero(minutes);
seconds = addZero(seconds);

// to target thhe 'clock' id
document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

function convertFormat(time) {
    // setting the format to am or pm
    let format = 'AM';

    if (time >=12) {
        format = 'PM'
    }
    return format; 
}

// function to check time greater than 12 hours
function checkTime(time) {
    if (time > 12) {
        time -=12;
    }
    // to set the time to 0 if it's equal to 12:
    if (time === 12) {
        time = 12;
    }
    return time;
}

// function to add zeros if values are less than 10:
function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }    
    return time;
}

// to call out showTime function:
setInterval(showTime, 1000);
