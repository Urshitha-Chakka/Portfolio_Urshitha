function toggleDarkMode(button) {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    button.textContent = '☀️';
  } else {
    button.textContent = '🌙';
  }
}
