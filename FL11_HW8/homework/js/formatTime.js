const formatTime = a => {
    let b = a / 60;
    let days = (b >= 24) ? b / 24 : 0;
    let hours = (b >= 24) ? (days - parseInt(days, 10)) * 24 : b;
    let minutes = (b >= 24) ? (hours - parseInt(hours, 10)) * 60 : (b - parseInt(hours, 10)) * 60;
    let time = `${parseInt(days, 10)} day(s) ${parseInt(hours, 10)} hour(s) ${Math.round(minutes)} minute(s).`;
    return time;
}

formatTime(120);
formatTime(59);
formatTime(3601);
