document.addEventListener("DOMContentLoaded", function() {
    const fireflyContainer = document.getElementById("fireflies");

    for (let i = 0; i < 50; i++) { // More fireflies!
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");

        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        let size = Math.random();

        firefly.style.setProperty("--size", size);
        firefly.style.left = `${x}px`;
        firefly.style.top = `${y}px`;

        fireflyContainer.appendChild(firefly);
    }
});

// Fix audio autoplay issues
document.addEventListener('DOMContentLoaded', function() {
    let audio = document.getElementById("bg-music");
    let playAudio = () => {
        audio.play().catch(error => console.log("Autoplay blocked:", error));
        document.removeEventListener('click', playAudio);
    };
    document.addEventListener('click', playAudio);
});
