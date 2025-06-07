<?php
// Script opcional para optimizar la imagen de perfil
// Ejecuta este archivo una vez para crear versiones optimizadas

function optimizeProfileImage() {
    $originalPath = 'public/perfil.jpeg';
    
    if (!file_exists($originalPath)) {
        echo "Error: No se encontró la imagen en $originalPath\n";
        return false;
    }
    
    // Verificar que GD esté disponible
    if (!extension_loaded('gd')) {
        echo "Error: La extensión GD no está disponible\n";
        return false;
    }
    
    // Crear versiones optimizadas
    $sizes = [
        'hero' => ['width' => 500, 'height' => 600],
        'about' => ['width' => 400, 'height' => 500],
        'mobile' => ['width' => 300, 'height' => 300]
    ];
    
    foreach ($sizes as $name => $size) {
        $outputPath = "public/perfil-{$name}.jpeg";
        
        if (resizeImage($originalPath, $outputPath, $size['width'], $size['height'])) {
            echo "✓ Creada imagen optimizada: $outputPath\n";
        } else {
            echo "✗ Error creando: $outputPath\n";
        }
    }
    
    return true;
}

function resizeImage($sourcePath, $destPath, $newWidth, $newHeight) {
    // Obtener información de la imagen original
    $imageInfo = getimagesize($sourcePath);
    if (!$imageInfo) return false;
    
    $originalWidth = $imageInfo[0];
    $originalHeight = $imageInfo[1];
    $imageType = $imageInfo[2];
    
    // Crear imagen desde el archivo original
    switch ($imageType) {
        case IMAGETYPE_JPEG:
            $originalImage = imagecreatefromjpeg($sourcePath);
            break;
        case IMAGETYPE_PNG:
            $originalImage = imagecreatefrompng($sourcePath);
            break;
        default:
            return false;
    }
    
    if (!$originalImage) return false;
    
    // Calcular dimensiones manteniendo proporción
    $ratio = min($newWidth / $originalWidth, $newHeight / $originalHeight);
    $resizedWidth = $originalWidth * $ratio;
    $resizedHeight = $originalHeight * $ratio;
    
    // Crear nueva imagen
    $resizedImage = imagecreatetruecolor($newWidth, $newHeight);
    
    // Fondo blanco para JPEGs
    $white = imagecolorallocate($resizedImage, 255, 255, 255);
    imagefill($resizedImage, 0, 0, $white);
    
    // Centrar la imagen redimensionada
    $x = ($newWidth - $resizedWidth) / 2;
    $y = ($newHeight - $resizedHeight) / 2;
    
    // Redimensionar y copiar
    imagecopyresampled(
        $resizedImage, $originalImage,
        $x, $y, 0, 0,
        $resizedWidth, $resizedHeight,
        $originalWidth, $originalHeight
    );
    
    // Guardar la imagen optimizada
    $result = imagejpeg($resizedImage, $destPath, 85); // 85% calidad
    
    // Limpiar memoria
    imagedestroy($originalImage);
    imagedestroy($resizedImage);
    
    return $result;
}

// Ejecutar optimización si se llama directamente
if (basename(__FILE__) == basename($_SERVER['SCRIPT_NAME'])) {
    echo "Optimizando imagen de perfil...\n";
    optimizeProfileImage();
    echo "Proceso completado.\n";
}
?>
