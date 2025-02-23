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

// Function to make fireflies move **more randomly**
function moveFirefly(firefly) {
    let move = () => {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let scale = Math.random() * 1.5 + 0.5; // 🔹 Randomized scaling
        let duration = Math.random() * 5000 + 3000; // 🔹 Randomized duration (3s - 8s)
        let delay = Math.random() * 3000; // 🔹 Each firefly starts at a different time

        firefly.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
        firefly.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        firefly.style.opacity = Math.random() * 0.5 + 0.5; // 🔹 Random opacity

        setTimeout(move, duration + delay); // 🔹 Adds a slight delay to make movement unpredictable
    };

    move();
}

// 🎵 Fix autoplay issue for background music
document.addEventListener("click", function() {
    let audio = document.getElementById("bg-music");
    audio.play().catch(error => console.log("Autoplay blocked:", error));
}, { once: true });
