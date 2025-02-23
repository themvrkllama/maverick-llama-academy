document.addEventListener("DOMContentLoaded", function() {
    const fireflyContainer = document.getElementById("fireflies");

    if (!fireflyContainer) {
        console.error("Firefly container not found!");
        return; // Stop script if container is missing
    }

    for (let i = 0; i < 40; i++) { // More fireflies for better effect
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 1.5 + 0.5 || 1; // Ensure a default size

        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;
        firefly.style.setProperty("--size", size || 1);  // 🔹 Ensures `--size` is always valid

        fireflyContainer.appendChild(firefly);

        moveFirefly(firefly);
    }
});

// Function to make fireflies move randomly
function moveFirefly(firefly) {
    let move = () => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let duration = Math.random() * 8000 + 4000; // Slower, smoother movement

        firefly.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
        firefly.style.transform = `translate(${x}px, ${y}px) scale(${firefly.style.getPropertyValue("--size") || 1})`;
        firefly.style.opacity = 1; // Keep them visible

        setTimeout(move, duration);
    };

    move();
}

// 🎵 Fix autoplay issue for background music
document.addEventListener("click", function() {
    let audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Autoplay blocked:", error));
}, { once: true });
