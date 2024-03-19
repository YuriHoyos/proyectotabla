<?php
include ('../modelo/productoDAO.php');
$pr= new ProductoDAO($_POST['nombre'], $_POST['descripcion']);
$rta=$pr->actProducto();
echo ("El cambio fue agregado correctamente");
?>