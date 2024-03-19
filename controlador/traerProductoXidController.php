<?php
include ('modelo/productoDAO.php');
include_once('../config/config.php');
include_once('../config/conexion.php');

$pr = new ProductoDAO($_POST['id']);
$rta=$pr->traerDatosProductoXid ();
echo (json_encode($rta));
?>