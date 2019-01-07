let countDown;

const timer = seconds => {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds)
    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft < 0) {
            clearInterval(countDown)
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000);
}

const displayTimeLeft = seconds => {
    console.log(seconds);
}