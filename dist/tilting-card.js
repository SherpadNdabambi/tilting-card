document.addEventListener("DOMContentLoaded", function () {
    var cards = document.querySelectorAll(".tilting-card");
    cards.forEach(function (card) {
        // Create card container to create 3D space
        var container = document.createElement("div");
        container.classList.add("tilting-card-container");
        // Replace card with container and append card to container
        card.replaceWith(container);
        container.appendChild(card);
        card.addEventListener("mousemove", function (e) {
            var rect = card.getBoundingClientRect();
            var centerX = rect.left + rect.width / 2;
            var centerY = rect.top + rect.height / 2;
            var mouseX = e.clientX - centerX;
            var mouseY = e.clientY - centerY;
            // Calculate rotation angles based on mouse position
            var rotateX = (mouseY / rect.height) * -20; // Adjust multiplier for tilt intensity
            var rotateY = (mouseX / rect.width) * 20;
            // Position the highlight circle
            var circleX = mouseX + rect.width / 2 - 30; // Offset by half circle size
            var circleY = mouseY + rect.height / 2 - 180;
            card.style.setProperty("--mouse-x", "".concat(circleX, "px"));
            card.style.setProperty("--mouse-y", "".concat(circleY, "px"));
            card.style.removeProperty("transition");
            card.style.transform = "rotateX(".concat(rotateX, "deg) rotateY(").concat(rotateY, "deg)");
        });
        card.addEventListener("mouseleave", function () {
            card.style.transition = "0.5s";
            card.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset on mouse leave
            card.style.removeProperty("--mouse-x");
            card.style.removeProperty("--mouse-y");
            setTimeout(function () {
                card.style.removeProperty("transition");
            }, 500);
        });
    });
});
