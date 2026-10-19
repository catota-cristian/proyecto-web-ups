document.addEventListener('DOMContentLoaded', () => {

    // INTERACCIÓN 1: Menú Adaptable / Desplegable para Móviles
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // INTERACCIÓN 2: Filtro Interactivo de la Galería
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // INTERACCIÓN EXTRA: Validación Accesible del Formulario
    const form = document.getElementById('formInscripcion');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;
            
            document.getElementById('errorNombre').textContent = '';
            document.getElementById('errorEmail').textContent = '';
            document.getElementById('errorRol').textContent = '';
            document.getElementById('formSuccess').textContent = '';

            const nombre = document.getElementById('nombre').value.trim();
            if (nombre === '') {
                document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
                isValid = false;
            }

            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('errorEmail').textContent = 'Ingrese un correo electrónico válido.';
                isValid = false;
            }

            const rol = document.getElementById('rol').value;
            if (rol === '') {
                document.getElementById('errorRol').textContent = 'Por favor seleccione su nivel.';
                isValid = false;
            }

            if (isValid) {
                const formSuccess = document.getElementById('formSuccess');
                formSuccess.textContent = '¡Registro completado con éxito! Cristian Catota revisará tu solicitud.';
                form.reset();
            }
        });
    }
});