document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.classList.add("glow-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function(e) {
        var x = e.pageX - 500;
        var y = e.pageY - 500;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });
});