document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".btn");

    button.addEventListener("mouseover", function() {
        button.style.transform = "scale(1.1)";
        button.style.transition = "0.3s";
    });

    button.addEventListener("mouseout", function() {
        button.style.transform = "scale(1)";
    });
});
