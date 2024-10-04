const menu = document.getElementById("burger")
const hdr = document.getElementsByClassName("hdR")[0]
let srcChange = false
menu.addEventListener("click", (e) => {
    const linkArr = [
        "/Portfolio WebSite/images/media/hamburger.png",
        "/Portfolio WebSite/images/media/close.png"
    ]
    hdr.classList.toggle("open")
    if (!srcChange) {
        menu.src = linkArr[1]
        srcChange = !srcChange
    } else {
        menu.src = linkArr[0]
        srcChange = !srcChange
    }
})

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Disable scroll on mouseenter
hdr.addEventListener('mouseenter', (e) => {
    disableScroll()
});

// Enable scroll on mouseleave
hdr.addEventListener('mouseleave', () => {
    enableScroll()
});