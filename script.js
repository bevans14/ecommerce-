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
  var otherAnimalsRadios = document.getElementsByName('otheranimals');
  var otherAnimalsChecked = false;
  var aptHouseRadios = document.getElementsByName('apthouse');
  var aptHouseChecked = false;
  
  for (var i = 0; i < otherAnimalsRadios.length; i++) {
    if (otherAnimalsRadios[i].checked) {
      otherAnimalsChecked = true;
      break;
    }
  }
  for (var i = 0; i < aptHouseRadios.length; i++) {
    if (aptHouseRadios[i].checked) {
      aptHouseChecked = true;
      break;
    }
  }
  if (!otherAnimalsChecked || !aptHouseChecked) {
    alert('Please fill out all required fields.');
  }
  

  if (
    fname.value === '' ||
    lname.value === '' ||
    email.value === '' ||
    whichcat.value === '' ||
    otheranimals.value === ''
  
  ) {
    alert('Please fill out all required fields.');
    return false;
  } else {
    return true;
    
  }
  




}

