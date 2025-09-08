document.addEventListener("DOMContentLoaded", () => {
  const cards: NodeListOf<HTMLElement> =
    document.querySelectorAll(".tilting-card");
  cards.forEach((card) => {
    // Create card container to create 3D space
    const container = document.createElement("div");
    container.classList.add("tilting-card-container");

    // Replace card with container and append card to container
    card.replaceWith(container);
    container.appendChild(card);

    card.addEventListener("mousemove", (e: MouseEvent) => {
      const rect: DOMRect = card.getBoundingClientRect();
      const centerX: number = rect.left + rect.width / 2;
      const centerY: number = rect.top + rect.height / 2;
      const mouseX: number = e.clientX - centerX;
      const mouseY: number = e.clientY - centerY;

      // Calculate rotation angles based on mouse position
      const rotateX: number = (mouseY / rect.height) * -20; // Adjust multiplier for tilt intensity
      const rotateY: number = (mouseX / rect.width) * 20;

      // Position the highlight circle
      const circleX = mouseX + rect.width / 2 - 30; // Offset by half circle size
      const circleY = mouseY + rect.height / 2 - 180;
      card.style.setProperty("--mouse-x", `${circleX}px`);
      card.style.setProperty("--mouse-y", `${circleY}px`);

      card.style.removeProperty("transition");
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transition = "0.5s";
      card.style.transform = "rotateX(0deg) rotateY(0deg)"; // Reset on mouse leave
      card.style.removeProperty("--mouse-x");
      card.style.removeProperty("--mouse-y");
      setTimeout(() => {
        card.style.removeProperty("transition");
      }, 500);
    });
  });
});
