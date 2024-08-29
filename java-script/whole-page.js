document.getElementById('resume-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('resume').style.left = '10%'; // Adjust position as needed
});


document.addEventListener('click', function (e) {
    if (!document.getElementById('resume').contains(e.target) && !document.getElementById('resume-link').contains(e.target)) {
        document.getElementById('resume').style.left = '-100%'; // Reset position
    }
    document.querySelector('.close-close').addEventListener('click', function() {
        console.log('Close button clicked!'); // This should log when you click the button
        document.getElementById('resume').style.left = '-100%';
    });
});





// Show the "About Me" section when clicking the trigger
document.querySelector('.trigger').addEventListener('click', function(event) {
event.preventDefault();
document.querySelector('.about-me').style.top = '5vh'; // Slide down into view

});

// Hide the "About Me" section when clicking outside of it
document.addEventListener('click', function(event) {
const aboutMeSection = document.querySelector('.about-me');
const trigger = document.querySelector('.trigger');


if (!aboutMeSection.contains(event.target) && !trigger.contains(event.target)) {
  aboutMeSection.style.top = '-100vh'; // Slide up to hide
}
document.querySelector('.close').addEventListener('click', function() {
    console.log('Close button clicked!'); // This should log when you click the button
    document.getElementById('about-me-section').style.top = '-100%';
});

});


//nav
function activateLink(link) {

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.classList.remove('active'));


  link.classList.add('active');
}

//interests
document.addEventListener('DOMContentLoaded', function() {
    const interestsTrigger = document.getElementById('interests-trigger');
    const interestsSection = document.getElementById('interests');
    const closeButton = document.querySelector('#interests .close'); // Select the close button

    interestsTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        // Toggle visibility
        interestsSection.classList.toggle('open');
    });

    closeButton.addEventListener('click', function(event) {
        event.preventDefault();
        // Remove the 'open' class to close the section
        interestsSection.classList.remove('open');
    });

    document.addEventListener('click', function(event) {
        if (!interestsSection.contains(event.target) && !interestsTrigger.contains(event.target)) {
            interestsSection.classList.remove('open');
        }
    });
});


//portfolio
document.querySelectorAll('.details-link').forEach(link => {

    
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#portfolio-details').style.display = 'flex';
        

        
    });
    
});
document.querySelector('.close-button').addEventListener('click', function() {
    document.querySelector('#portfolio-details').style.display = 'none';

    
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the close button and the section to be closed
    const closeButton = document.querySelector('.close-screen');
    const screenSection = document.getElementById('screen');

    // Add a click event listener to the close button
    closeButton.addEventListener('click', function () {
        // Add a class to hide the section
        screenSection.classList.remove('open');
    });
});





document.addEventListener('DOMContentLoaded', function() {
  const interestsTrigger = document.getElementById('screen-trigger');
  const interestsSection = document.getElementById('screen');

  interestsTrigger.addEventListener('click', function(event) {
      event.preventDefault();
      // Toggle visibility
      interestsSection.classList.toggle('open');
  });

  document.addEventListener('click', function(event) {
      if (!interestsSection.contains(event.target) && !interestsTrigger.contains(event.target)) {
          interestsSection.classList.remove('open');
      }
  });
});



//splash

const helloMessages = ["Hello!", "നമസ്കാരം!","Hola!", "Bonjour!", "Ciao!", "Hallo!", "Привет!","geia","Kon'nichiwa!", "你好!", "안녕하세요!"];
let currentMessage = 0;

document.addEventListener('DOMContentLoaded', () => {
const helloText = document.querySelector('.hello-text');

setInterval(() => {
  // Remove the animation class to reset it
  helloText.classList.remove('animate');
  
  // Update the text after a small delay
  setTimeout(() => {
    helloText.textContent = helloMessages[currentMessage];
    
    // Reapply the animation class
    helloText.classList.add('animate');
    
    currentMessage = (currentMessage + 1) % helloMessages.length;
  }, 100); // Small timeout to reset the animation
}, 300); // Changes every 1.5 seconds
});



window.addEventListener('load', () => {
  setTimeout(() => {
      document.getElementById('hello-popup').style.display = 'none';
      document.getElementById('splash-animation').style.display = 'block';
      
      setTimeout(() => {
          document.getElementById('splash-animation').style.display = 'none';
          document.getElementById('context').classList.add('visible');
          document.getElementById('cool').classList.add('visible');
          document.getElementById('plate').classList.add('visible');
          
          document.getElementById('effect').classList.add('visible');
          document.body.style.overflow = 'auto'; // Re-enable scrolling
      }, 3590); // 3590 milliseconds = 6 seconds

  }, 3000); // 3000 milliseconds = 3 seconds (or adjust as needed)
});

//skills-coins
$(function () {
  var wrapper = $('.crome');
  var square = $('.square');
  var scan = $('.scan');
  var scanimg = $('.scan-img');
  var scanPhotoWrap = $('.scan-Photo-wrap');
  var copywrap = $('.copy-wrap');
  var Photo = $('.Photo');
 
  var name = $('.name');
  var coincot = $('.coin-cot'); // Target the coin cot

  wrapper.on('click', function () {
      wrapper.toggleClass('is-open');
      coincot.toggleClass('is-visible'); // Toggle visibility of coin cot

      
  });

  function mover() {
      square.each(function () {
          gsap.to(square, {
              duration: 2,
              x: 10,
              y: 10,
              rotation: 0.01,
              ease: "power3.out",
          });
      });
  }
  mover();
});




