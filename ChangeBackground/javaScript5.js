//generate a random color
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
let intervalID;
//start changing Color
const startChangingColor = function() {
    intervalID = setInterval(function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }, 1000);
};
const stopChangingColor = function() {
    clearInterval(intervalID);
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);