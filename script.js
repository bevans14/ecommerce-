var i = 0; //starting point
var images = ['./cat-images/cat-img1.jpeg',
'./cat-images/cat-img2.webp',
'./cat-images/cat-img3.avif',
'./cat-images/cat-img4.avif'];
var time = 1300;
var slide = document.getElementsByClassName('cat')[0];

// changes images

function changeImg(){
    slide.src =  images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

window.onload = changeImg;

// 2nd page hover

// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   box.addEventListener('mouseenter', () => {
//     boxes.forEach(b => b.style.animationPlayState = 'paused');
//   });

//   box.addEventListener('mouseleave', () => {
//     boxes.forEach(b => b.style.animationPlayState = 'running');
//   });
// });
