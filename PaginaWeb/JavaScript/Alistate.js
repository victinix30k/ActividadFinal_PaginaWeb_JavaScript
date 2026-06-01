document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const edad = parseInt(document.getElementById('edad').value);
        const experiencia = document.querySelector('input[name="experiencia"]:checked');
        const clase = document.getElementById('classe').value;
        const motivacion = document.getElementById('motivacion').value.trim();

        // Validar nombre (mínimo 3 caracteres)
        if (nombre.length < 3) {
            mostrarError('El nombre del helldiver debe tener al menos 3 caracteres.');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError('El correo electrónico no es válido.');
            return;
        }

        // Validar edad mínima
        if (isNaN(edad) || edad < 18) {
            mostrarError('Debes tener al menos 18 años para alistarte.');
            return;
        }

        // Validar experiencia seleccionada
        if (!experiencia) {
            mostrarError('Debes indicar tu nivel de experiencia en combate.');
            return;
        }

        // Validar clase seleccionada
        if (!clase) {
            mostrarError('Debes seleccionar una clase.');
            return;
        }

        // Validar motivación (mínimo 10 caracteres)
        if (motivacion.length < 10) {
            mostrarError('Explica tu motivación con al menos 10 caracteres.');
            return;
        }

        // Todo correcto
        mostrarExito(`¡Bienvenido a las filas, ${nombre}! La Supertierrra te necesita.`);
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
        div.style.cssText = 'margin-top:20px; padding:12px; border-radius:5px; font-weight:bold; text-align:center; background-color:#1a1a1a; border:2px solid #FFD700; color:#FFD700;';
        document.querySelector('form').appendChild(div);
    }

    function quitarMensaje() {
        const existente = document.getElementById('mensaje-form');
        if (existente) existente.remove();
    }
});
