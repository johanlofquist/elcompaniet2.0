document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.createElement('div');
    const cursor = document.createElement('div');
    wrapper.classList.add('glow-cursor-wrapper');
    cursor.classList.add('glow-cursor');

    document.body.appendChild(wrapper);
    wrapper.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        var cursorSize = 1000; // Storleken på din glödeffekt
        var halfSize = cursorSize / 2;

        var x = e.clientX - halfSize;
        var y = e.clientY - halfSize;



        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
});

let hemBtn = document.getElementById("hem__btn")
let tjansterBtn = document.getElementById("tjanster__btn")
let omBtn = document.getElementById("om__btn")
let kontaktBtn = document.getElementById("kontakt__btn")

window.addEventListener("scroll", function(e) {
    console.log(this.window.scrollY)
    if (this.window.scrollY < 400) {
        hemBtn.classList.add("active")
        tjansterBtn.classList.remove("active")
        omBtn.classList.remove("active")
        kontaktBtn.classList.remove("active")
    } else if (this.window.scrollY < 2000) {
        hemBtn.classList.remove("active")
        tjansterBtn.classList.add("active")
        omBtn.classList.remove("active")
        kontaktBtn.classList.remove("active")
    } else if (this.window.scrollY < 2400) {
        hemBtn.classList.remove("active")
        tjansterBtn.classList.remove("active")
        omBtn.classList.add("active")
        kontaktBtn.classList.remove("active")
    } else {
        hemBtn.classList.remove("active")
        tjansterBtn.classList.remove("active")
        omBtn.classList.remove("active")
        kontaktBtn.classList.add("active")
    }
})
