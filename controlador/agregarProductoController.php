<?php
include ('../modelo/productoDAO.php');
include_once('../config/config.php');
include_once('../config/conexion.php');

$pr= new ProductoDAO($_POST['nombre'], $_POST['descripcion'], $_POST['id']);
$rta=$pr->addProductos ();
echo ("el prodcuto se ha ingresado exitosamente")
?>