document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
            
            // Aquí iría la lógica para enviar el formulario a un servidor.
            // Por ahora, solo mostraremos una alerta.

            alert('¡Gracias por contactarnos! Tu mensaje ha sido enviado.');

            // Opcional: Limpiar el formulario después del envío
            this.reset();
        });
    }
});