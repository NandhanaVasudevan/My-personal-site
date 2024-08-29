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
  }, 500); // Changes every 1.5 seconds
});



window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('hello-popup').style.display = 'none';
        document.getElementById('splash-animation').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('splash-animation').style.display = 'none';
            document.getElementById('content').classList.add('visible');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }, 3590); // 6000 milliseconds = 6 seconds

    }, 6000); // 3000 milliseconds = 3 seconds (or adjust as needed)
});
