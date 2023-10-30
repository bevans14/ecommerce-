var i = 0; //starting point
var images = ['./cat-images/cat-img1.jpeg','./cat-images/cat-img2.webp','./cat-images/cat-img3.avif','./cat-images/cat-img4.avif'];
var time = 3000;
var slide = document.getElementsByClassName('cat');

// changes images

function changeImg(){
document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;
