document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidad adicional si es necesaria
  function saveUserAndContinue() {
  const user = document.getElementById('user-input').value;
  localStorage.setItem('user', user);
  location.href = '/2/index.html';
  }
});