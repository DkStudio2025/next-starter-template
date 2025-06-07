<?php
// Archivo para debuggear y limpiar la URL
// Coloca este archivo temporalmente en tu servidor para identificar el problema

echo "<h2>Debug de URL y Headers</h2>";

// Mostrar información de la URL actual
echo "<h3>Información de URL:</h3>";
echo "URL completa: " . $_SERVER['REQUEST_URI'] . "<br>";
echo "Query String: " . $_SERVER['QUERY_STRING'] . "<br>";
echo "Script Name: " . $_SERVER['SCRIPT_NAME'] . "<br>";

// Mostrar headers HTTP
echo "<h3>Headers HTTP:</h3>";
foreach (getallheaders() as $name => $value) {
    echo "$name: $value<br>";
}

// Mostrar variables GET
echo "<h3>Variables GET:</h3>";
if (!empty($_GET)) {
    foreach ($_GET as $key => $value) {
        echo "$key = $value<br>";
    }
} else {
    echo "No hay variables GET<br>";
}

// Mostrar información del servidor
echo "<h3>Información del Servidor:</h3>";
echo "HTTP_HOST: " . $_SERVER['HTTP_HOST'] . "<br>";
echo "SERVER_NAME: " . $_SERVER['SERVER_NAME'] . "<br>";
echo "HTTP_REFERER: " . (isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'No disponible') . "<br>";

// Verificar si hay archivos .htaccess
echo "<h3>Archivos de configuración:</h3>";
if (file_exists('.htaccess')) {
    echo ".htaccess existe<br>";
    echo "<pre>" . htmlspecialchars(file_get_contents('.htaccess')) . "</pre>";
} else {
    echo ".htaccess no existe<br>";
}

// Verificar archivos en el directorio
echo "<h3>Archivos en el directorio:</h3>";
$files = scandir('.');
foreach ($files as $file) {
    if ($file != '.' && $file != '..') {
        echo $file . "<br>";
    }
}
?>
