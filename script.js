document.addEventListener("DOMContentLoaded", function() {
    const fireflyContainer = document.getElementById("fireflies");

    for (let i = 0; i < 40; i++) { // Increased fireflies
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random() * 1.5 + 0.5; // Randomized sizes

        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;
        firefly.style.setProperty("--size", size);

        fireflyContainer.appendChild(firefly);

        moveFirefly(firefly);
    }
});

// Function to make fireflies move randomly
function moveFirefly(firefly) {
    let move = () => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let duration = Math.random() * 5000 + 3000; // Random duration

        firefly.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
        firefly.style.transform = `translate(${x}px, ${y}px) scale(${Math.random() * 1.5 + 0.5})`;
        firefly.style.opacity = Math.random() * 0.5 + 0.5;

        setTimeout(move, duration);
    };

    move();
}

// 🎵 Fix autoplay issue for background music
document.addEventListener("click", function() {
    let audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Autoplay blocked:", error));
}, { once: true });
