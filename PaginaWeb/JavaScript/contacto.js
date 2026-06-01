document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validar nombre
        if (nombre.length < 3) {
            mostrarError('El nombre debe tener al menos 3 caracteres.');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError('El correo electrónico no es válido.');
            return;
        }

        // Validar asunto
        if (asunto.length < 5) {
            mostrarError('El asunto debe tener al menos 5 caracteres.');
            return;
        }

        // Validar mensaje (mínimo 20 caracteres)
        if (mensaje.length < 20) {
            mostrarError('El mensaje debe tener al menos 20 caracteres.');
            return;
        }

        // Todo correcto
        mostrarExito('¡Mensaje enviado! El cuartel general te responderá en breve.');
        form.reset();
    });

    function mostrarError(mensaje) {
        quitarMensaje();
        const div = document.createElement('div');
        div.id = 'mensaje-form';
        div.textContent = mensaje;
        div.style.cssText = 'margin-top:20px; padding:12px; border-radius:5px; font-weight:bold; text-align:center; background-color:#1a1a1a; border:2px solid #ff4444; color:#ff4444;';
        document.querySelector('form').appendChild(div);
    }

    function mostrarExito(mensaje) {
        quitarMensaje();
        const div = document.createElement('div');
        div.id = 'mensaje-form';
        div.textContent = mensaje;
        div.style.cssText = 'margin-top:20px; padding:12px; border-radius:5px; font-weight:bold; text-align:center; background-color:#1a1a1a; border:2px solid #ffff00; color:#ffff00;';
        document.querySelector('form').appendChild(div);
    }

    function quitarMensaje() {
        const existente = document.getElementById('mensaje-form');
        if (existente) existente.remove();
    }
});
