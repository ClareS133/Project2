document.addEventListener("DOMContentLoaded", () => {

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle button logic
    const toggle = document.getElementById('theme-toggle');

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save preference
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

});