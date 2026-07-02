

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function() {
    nameField.style.maxHeight = "0"; 
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    nameField.style.maxHeight = "60px";
    title.iFnnerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}





  // const left = document.querySelector('.left');
  // const right = document.querySelector('.right');
  // const slider10 = document.querySelector('.slider10');

  // right.addEventListener('click',()=>{
  //   slider10.style.transform = `translateX(-500px)`;
    
  // });




  

// const left = document.querySelector('.arrow.left');
// const right = 




document.addEventListener("DOMContentLoaded", () => {
  const left = document.querySelector('.arrow.left');
  const right = document.querySelector('.arrow.right');
  const slider10 = document.querySelector('.slider10');
  const images = document.querySelectorAll('.imgslide1');

  let sliderNumber = 0; 
  const slideWidth = 800; 

  right.addEventListener('click', () => {
    if (sliderNumber < images.length - 1) {
      sliderNumber++;
    } else {
      sliderNumber = 0; 
    }
    updateSlider();
  });

  left.addEventListener('click', () => {
    if (sliderNumber > 0) {
      sliderNumber--;
    } else {
      sliderNumber = images.length - 1; 
    }
    updateSlider();
  });

  function updateSlider() {
    slider10.style.transform = `translateX(-${sliderNumber * slideWidth}px)`;
  }
});






// $(document).ready(function() {
//   $('.gallery, .gallery2').hover(
//   function() { $(this).addClass('highlight'); },
//   function() { $(this).removeClass('highlight'); }
// );
// });



$(document).ready(function() {

  $('.gallery, .gallery2').hover(
    function() {
      $(this).addClass('highlight');
    },
    function() {
      $(this).removeClass('highlight');
    }
  );

});



$('.amount-btn').on('click', function(e) {
    e.preventDefault(); 
   
    $('.amount-btn').removeClass('selected');
  
    $(this).addClass('selected');
    
   
    let chosenAmount = $(this).data('amount');
    
    
    $('#customAmount').val(chosenAmount);
});