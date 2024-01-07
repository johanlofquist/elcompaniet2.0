document.addEventListener('DOMContentLoaded', function() {
    var cursor = document.createElement('div');
    cursor.classList.add('glow-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        var cursorSize = 1000; // Storleken på din glödeffekt
        var halfSize = cursorSize / 2;

        var x = e.clientX - halfSize;
        var y = e.clientY - halfSize;

        // Anpassa för skrollning
        x += window.scrollX;
        y += window.scrollY;

        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
});


