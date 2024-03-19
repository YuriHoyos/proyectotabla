<?php
include ('../modelo/productoDAO.php');
$pr= new ProductoDAO($_POST['nombre'], $_POST['descripcion'], $_POST['id']);
$rta=$pr->addProductos();
echo ("El registro fue agregado correctamente");
?>