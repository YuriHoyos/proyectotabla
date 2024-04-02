<?php
include ('../modelo/productoDAO.php');
$productoDAO = new ProductoDAO(null, null, $_POST['id_producto']);
$resultado = $productoDAO->eliminarProducto();
echo ($resultado ? "El producto fue eliminado correctamente.");
?>
