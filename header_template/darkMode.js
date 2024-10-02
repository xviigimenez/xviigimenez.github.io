document.getElementById('dark-mode-toggle').addEventListener('click', function(event) {
    event.preventDefault(); 
    document.documentElement.classList.toggle('dark');
});