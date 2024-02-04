let count = 1;
let buttonWidth = 100;
let buttonHeight = 50;
const noButton = document.querySelector('#no-button');
noButton.addEventListener('click', () => {
    count++;
    buttonWidth += count * buttonWidth;
    buttonHeight += count * buttonHeight;
    document.getElementById('yes-button').style.minWidth = `${buttonWidth}px`;
    document.getElementById('yes-button').style.minWidth = `${buttonHeight}px`;
});