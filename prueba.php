<?php
include_once('modelo/productoDAO.php');

$pr = new ProductoDAO();
$rta = $pr->traerDatosProducto();

header('Content-Type: application/json'); // Establecer el encabezado para indicar que la respuesta es JSON
echo json_encode($rta); // Devolver los datos como JSON
?>
