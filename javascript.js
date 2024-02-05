let count = 0;
let buttonWidth = 100;
let buttonHeight = 50;

const noButton = document.querySelector('#no-button');
const catGif = document.querySelector('#cat-gif');
noButton.addEventListener('click', () => {
    count++;
    buttonWidth += count + buttonWidth;
    buttonHeight += count + buttonHeight;
    document.getElementById('yes-button').style.minWidth = `${buttonWidth}px`;
    document.getElementById('yes-button').style.minHeight = `${buttonHeight}px`;
    document.getElementById('cat-gif').src = "./img/goma-sad.gif";
    document.getElementById('under-gif-text').innerText = "stop playing games :(";
});

const yesButton = document.querySelector('#yes-button');
yesButton.addEventListener('click', () => {
    document.getElementById('yes-button').style.minWidth = `100px`;
    document.getElementById('yes-button').style.minHeight = `50px`;
    buttonWidth = 100;
    buttonHeight = 50;
    count = 0;
    document.getElementById('cat-gif').src = "./img/valentines-love.gif";
    document.getElementById('under-gif-text').innerText = "YAY!";
});