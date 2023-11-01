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

// form

function formValidation() {
  var fname = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var email = document.getElementById('email');
  var whichcat = document.getElementById('whichcat');
  var otheranimals = document.getElementById('otheranimals');
  var apthouse = document.getElementById('apthouse');
  var yes = document.getElementById('yes');
  var no = document.getElementById('no');
  var apt = document.getElementById('apt');
  var house = document.getElementById('house');

  if (
    fname.value === '' ||
    lname.value === '' ||
    email.value === '' ||
    whichcat.value === '' ||
    otheranimals.value === '' ||
    apthouse.value === '' ||
    (yes.checked === false && no.checked === false) ||
    (yes.checked === true && apt.value === '') ||
    (no.checked === true && house.value === '')
  ) {
    alert('Please fill out all required fields.');
    return false;
  } else {
    return true;
    
  }
}
