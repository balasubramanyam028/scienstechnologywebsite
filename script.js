// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    themeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Read-Aloud Functionality
document.querySelectorAll(".read-aloud").forEach(button => {
    button.addEventListener("click", () => {
        let textElement = button.previousElementSibling || button.parentElement;
        let text = textElement ? textElement.textContent.trim() : "";
        
        if (text) {
            let speech = new SpeechSynthesisUtterance(text);
            speech.lang = "en-US"; // Set language
            speech.rate = 1; // Normal speed
            speech.pitch = 1; // Normal pitch

            // Stop any ongoing speech before speaking
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(speech);
        }
    });
});
