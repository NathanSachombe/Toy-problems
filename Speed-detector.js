function speedCalculator() {
    const speed = typeof Number;
    let points = 0;
    if (speed < 70) {
        return "Ok";
    }
    // Check how many points are to be awarded for the speed infringment
    else {
    points = Math.floor((speed - 70 / 5));
    }
 // Check if the accumilated points reach the threshold for suspension
    if (points > 12) {
        return "License suspended";
    }
    else {
        reurn `Points: `+ points;
    }

}