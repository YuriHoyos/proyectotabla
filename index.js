function cargarDatos() {
   
    fetch('controlador/traerDatosController.php')
    .then(response => response.json())
    .then(data => {
        const tablaDatos = document.getElementById('tablaDatos');
        tablaDatos.innerHTML = "";
        data.forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${row.id}</td>
              <td>${row.nombre}</td>
              <td>${row.descripcion}</td>
              <td>
              <button id="actualizar" class="btn btn-primary" onclick="consultarXid(${row.id})" data-toggle="modal" data-target="#exampleModal" >Actualizar</button>
              <button id="eliminar" class="btn btn-primary" onclick="eliminarProducto(${row.id})" data-toggle="modal" data-target="#exampleModal" >Eliminar</button>
            </td>
              `;
            tablaDatos.appendChild(tr);
        });   
    })
    .catch(error => console.error('Error al cargar datos:', error)); // Maneja errores de la solicitud fetch
}


function consultarXid(id) {
    fetch(`controlador/traerProductoXidController.php?id=${id}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('id').value = data.id; // Asignar el ID del producto al campo oculto (si es necesario)
        document.getElementById('nombre').value = data.nombre; // Mostrar el nombre del producto en el campo de nombre
        document.getElementById('Textarea').value = data.descripcion; // Mostrar la descripción del producto en el campo de descripción
    });
}

function actualizarProducto(formData) {
    fetch('controlador/actualizarProductoController.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Mostrar mensaje de éxito o error
        alert(data);
        // Recargar los datos en la tabla después de la actualización
        cargarDatos();
    });
}
function agregarDatos(formData) {
    fetch('controlador/agregarProductoController.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        cargarDatos();
        alert(data);
    });
}
function eliminarProducto(id) {
    const formData = new FormData();
    formData.append('id_producto', idProducto);

    fetch('controlador/eliminarProductoController.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        cargarDatos();
        alert(data);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    cargarDatos();
    var form = document.getElementById("formulario");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        var formData = new FormData(form);
        agregarDatos(formData);
    });
});