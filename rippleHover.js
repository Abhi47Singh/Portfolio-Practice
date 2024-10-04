// button 1
const btn1 = document.getElementById("project-btn1")
btn1.addEventListener("mousemove", (e) => {
    const x = e.offsetX
    const y = e.offsetY
    btn1.style.setProperty('--x', x + 'px');
    btn1.style.setProperty('--y', y + 'px');
});

// button 2
const btn2 = document.getElementById("project-btn2")
btn2.addEventListener("mousemove", (e) => {
    const x = e.offsetX
    const y = e.offsetY
    btn2.style.setProperty('--x', x + 'px');
    btn2.style.setProperty('--y', y + 'px');
});

// button 3
const btn3 = document.getElementById("project-btn3")
btn3.addEventListener("mousemove", (e) => {
    const x = e.offsetX
    const y = e.offsetY
    btn3.style.setProperty('--x', x + 'px');
    btn3.style.setProperty('--y', y + 'px');
});

// button 4
const btn4 = document.getElementById("project-btn4")
btn4.addEventListener("mousemove", (e) => {
    const x = e.offsetX
    const y = e.offsetY
    btn4.style.setProperty('--x', x + 'px');
    btn4.style.setProperty('--y', y + 'px');
});