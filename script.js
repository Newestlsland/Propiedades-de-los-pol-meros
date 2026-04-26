function abrirDetalle(titulo, rutaImagen, descripcion, aplicaciones) {
    // 1. Rellenar los campos básicos
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-descripcion').innerText = descripcion;
    
    // 2. Actualizar la imagen
    const imagenModal = document.getElementById('modal-imagen');
    imagenModal.src = rutaImagen;
    imagenModal.alt = `Imagen de ${titulo}`;

    // 3. Rellenar la lista de aplicaciones
    const listaAplicaciones = document.getElementById('modal-aplicaciones');
    listaAplicaciones.innerHTML = ''; // Limpiar lista anterior
    
    aplicaciones.forEach(app => {
        const li = document.createElement('li');
        li.innerText = app;
        listaAplicaciones.appendChild(li);
    });

    // 4. Mostrar el modal
    document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar el modal si se hace clic fuera del contenido blanco
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        cerrarModal();
    }
}