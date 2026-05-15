const form = document.getElementById('registroForm');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('https://safegoalstats-api-production.up.railway.app/api/auth/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      mensaje.textContent = ' ✅ Usuario registrado correctamente';
      form.reset();
    } else {
      mensaje.textContent = '❌ ' + data.error;
    }

  } catch (error) {
    mensaje.textContent = '❌ Error de conexión con el servidor';
  }
});