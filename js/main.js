const cowImage = document.getElementsByClassName('cowImage')[0];
const currentCountDiv = document.getElementsByClassName('currentCount')[0];
var currentCount = 0;

if(currentCount === 0){
  currentCountDiv.innerHTML = currentCount;
}

function clickEventHandler() {
    console.log(cowImage, currentCountDiv, "!!")
    currentCount += 1;
    currentCountDiv.innerHTML = currentCount;
}

cowImage.onclick = clickEventHandler;
