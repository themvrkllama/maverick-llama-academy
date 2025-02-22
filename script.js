document.addEventListener("DOMContentLoaded", function() {
    const fireflyContainer = document.getElementById("fireflies");

    for (let i = 0; i < 30; i++) { // More fireflies
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 1.5 + 0.5; // Random sizes

        firefly.style.setProperty("--size", size);
        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;

        fireflyContainer.appendChild(firefly);

        animateFirefly(firefly);
    }
});

// Function to animate fireflies dynamically
function animateFirefly(firefly) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    firefly.animate([
        { transform: `translate(${x}px, ${y}px)`, opacity: 0.6 },
        { transform: `translate(${x + 50}px, ${y - 50}px) scale(1.2)`, opacity: 1 },
        { transform: `translate(${x - 50}px, ${y + 50}px) scale(0.8)`, opacity: 0.6 }
    ], {
        duration: Math.random() * 5000 + 3000, // Randomized movement time
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out"
    });
}

// 🎵 Fix autoplay issue for background music
document.addEventListener("click", function() {
    let audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Autoplay blocked:", error));
}, { once: true });
