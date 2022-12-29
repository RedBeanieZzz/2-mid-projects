const clock = (function(){
    const hours = document.querySelector(".frame .hour");
    const minute = document.querySelector(".frame .minute");
    const second = document.querySelector(".frame .second");

    const now = new Date();

    let secondDeg = now.getSeconds() * 6; //every second is 6 degree (same for minutes)
    let minuteDeg = now.getMinutes() * 6; 
    let hourDeg = (now.getHours() * 30) + (minuteDeg / 60); //every hour is 30 degrees

    rotate(second, secondDeg);
    rotate(minute, minuteDeg);
    rotate(hours, hourDeg);

    tick();
    setInterval(tick, 1000);

    function tick(){
        rotate(second,secondDeg);
        secondDeg = (secondDeg + 6) % 360;

        if (secondDeg === 0) {
            rotate(minute, minuteDeg);
            rotate(hours, hourDeg);

            minuteDeg = (minuteDeg + 6) % 360;
            hourDeg = (hourDeg + (6/60) % 360);
        }
    };

    function rotate(element, degrees) {
        element.style.transform = `rotateZ(${degrees}deg)`;
    }
})();