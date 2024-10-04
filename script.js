document.addEventListener('DOMContentLoaded', () => {
  const goUpButton = document.getElementById('UP');
  let lastScrollTop = 0; // Track the last scroll position
  let timer;
  let viewportHeight = Number(window.innerHeight / 2); // Get the viewport height

  // Function to handle scroll event
  function handleScroll() {
    const currentScrollTop = window.scrollY;

    // Hide button within the first viewport height (100vh)
    if (currentScrollTop < viewportHeight) {
      goUpButton.classList.remove('visible');
      return;
    }

    if (currentScrollTop > lastScrollTop && currentScrollTop > viewportHeight) {
      // Scrolling down
      goUpButton.classList.remove('visible');
      clearTimeout(timer); // Reset the timer to avoid showing the button after scrolling up
    } else if (currentScrollTop < lastScrollTop && currentScrollTop > viewportHeight) {
      // Scrolling up
      goUpButton.classList.add('visible');
      clearTimeout(timer);
      timer = setTimeout(() => {
        goUpButton.classList.remove('visible');
      }, 1500); // Hide button after 5 seconds of no scrolling
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  }

  // Show button on scroll
  window.addEventListener('scroll', handleScroll);

  // Scroll to top on button click
  goUpButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});


const msgBtn = document.getElementById("msg-btn");
msgBtn.addEventListener("mousemove", (e) => {
  const x = e.offsetX
  const y = e.offsetY
  console.log(x, y)
  msgBtn.style.setProperty('--x', x + 'px')
  msgBtn.style.setProperty('--y', y + 'px')
  setTimeout(()=>{
    msgBtn.children[0].src = 'send.png'
  },100)
})

msgBtn.addEventListener("mouseout",(e)=>{
  setTimeout(()=>{
    msgBtn.children[0].src = 'send-black.png'
  },100)
})
