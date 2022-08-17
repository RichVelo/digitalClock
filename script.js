const displayTime = () => {
    let date = new Date;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let amPm = ''

    // am pm
    hour < 12 ? amPm = 'AM' : amPm = 'PM'

    // 12hr clock
    if (hour > 12) {
        hour -= 12
    }

    // padding
    let padHour = String(hour).padStart(2, '0');
    let padMin = String(minute).padStart(2, '0');

    // display - separated time and AM PM
    time.textContent = `${padHour}:${padMin}`;
    ampm.textContent = `${amPm}`;
    // update in near real-time
    requestAnimationFrame(displayTime);
}


displayTime();