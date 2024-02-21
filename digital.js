
function updateAnalogClock()
{
    const time = new Date();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // const analogTime = `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
    // const dclock = document.getElementById('dclock');
    // dclock.innerHTML = analogTime;

    hourSegmentsUnits = document.querySelectorAll('.s');
    hourSegmentsTens = document.querySelectorAll('.s1');
    minSegmentsUnits = document.querySelectorAll('.s2');
    minSegmentsTens = document.querySelectorAll('.s3');
    secSegmentsUnits = document.querySelectorAll('.s4');
    secSegmentsTens = document.querySelectorAll('.s5');

    toggleSegmentColor(hourSegmentsUnits, hours, 0);
    toggleSegmentColor(hourSegmentsTens, hours, 1);
    toggleSegmentColor(minSegmentsUnits, minutes, 0);
    toggleSegmentColor(minSegmentsTens, minutes, 1);
    toggleSegmentColor(secSegmentsUnits, seconds, 0);
    toggleSegmentColor(secSegmentsTens, seconds, 1);
    
    
}

function addLeadingZero(number) {
    return String(number).padStart(2,'0');
}

function toggleSegmentColor(segments, time, placeValue) {
    segments.forEach(element => {
        if (element.classList.contains(addLeadingZero(time).charAt(placeValue))) 
        {
             element.style.backgroundColor = 'rgb(36, 204, 68)';
        } else {
             element.style.backgroundColor = 'rgb(17, 36, 20)';
        }
     });
}

updateAnalogClock();
setInterval(updateAnalogClock, 1000);


