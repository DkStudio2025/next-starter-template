<?php
// Script para limpiar la URL y redirigir sin parámetros

// Verificar si hay parámetros en la URL
if (!empty($_GET)) {
    // Obtener la URL base sin parámetros
    $clean_url = strtok($_SERVER["REQUEST_URI"], '?');
    
    // Redirigir a la URL limpia
    header("Location: " . $clean_url, true, 301);
    exit();
}

// Si no hay parámetros, continuar normalmente
?>
