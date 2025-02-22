document.addEventListener("DOMContentLoaded", function() {
    let firefliesContainer = document.getElementById("fireflies");

    for (let i = 0; i < 20; i++) {  // Number of fireflies
        let firefly = document.createElement("div");
        firefly.classList.add("firefly");
        firefly.style.left = Math.random() * 100 + "vw";
        firefly.style.top = Math.random() * 100 + "vh";
        firefliesContainer.appendChild(firefly);
    }
});
