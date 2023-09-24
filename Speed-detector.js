function speedCalculator() {
    const speed = typeof Number;
    let points = 0;
    if (speed < 70) {
        return "Ok";
    }
    else {
    points = Math.floor((speed - 70 / 5));
    }

    if (points > 12) {
        return "License suspended";
    }
    else {
        reurn `Points: `+ points;
    }

}