document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleDarkMode');
    const classList = document.body.classList

    // Keeps dark mode between pages
    if (localStorage.getItem('darkMode') === 'enabled') {
        classList.add('dark-mode');
        toggleButton.textContent = '🌜';
    }

    toggleButton.addEventListener('click', function () {
        classList.toggle('dark-mode');

        if (classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.textContent = '🌜';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.textContent = '🌞';
        }
    });
});
