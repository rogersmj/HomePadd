function currentDate() {
    var now = new Date();

    return now.format("dddd, mmmm dS");
}

function currentTime() {
    var now = new Date();

    return now.format("shortTime");
}