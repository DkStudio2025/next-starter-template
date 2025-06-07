<?php
// Script para optimizar el logo si es necesario
// Ejecuta este archivo una vez para crear versiones optimizadas del logo

function optimizeLogo() {
    $originalPath = 'public/logo.png';
    
    if (!file_exists($originalPath)) {
        echo "Error: No se encontró el logo en $originalPath\n";
        return false;
    }
    
    // Verificar que GD esté disponible
    if (!extension_loaded('gd')) {
        echo "Error: La extensión GD no está disponible\n";
        return false;
    }
    
    // Crear versiones optimizadas
    $sizes = [
        'header' => ['width' => 32, 'height' => 32],
        'footer' => ['width' => 28, 'height' => 28],
        'mobile' => ['width' => 24, 'height' => 24]
    ];
    
    foreach ($sizes as $name => $size) {
        $outputPath = "public/logo-{$name}.png";
        
        if (resizeImage($originalPath, $outputPath, $size['width'], $size['height'])) {
            echo "✓ Creado logo optimizado: $outputPath\n";
        } else {
            echo "✗ Error creando: $outputPath\n";
        }
    }
    
    // Crear versión para favicon
    $faviconPath = "public/favicon.ico";
    if (createFavicon($originalPath, $faviconPath)) {
        echo "✓ Creado favicon: $faviconPath\n";
    } else {
        echo "✗ Error creando favicon\n";
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
        case IMAGETYPE_PNG:
            $originalImage = imagecreatefrompng($sourcePath);
            break;
        case IMAGETYPE_JPEG:
            $originalImage = imagecreatefromjpeg($sourcePath);
            break;
        default:
            return false;
    }
    
    if (!$originalImage) return false;
    
    // Calcular dimensiones manteniendo proporción
    $ratio = min($newWidth / $originalWidth, $newHeight / $originalHeight);
    $resizedWidth = $originalWidth * $ratio;
    $resizedHeight = $originalHeight * $ratio;
    
    // Crear nueva imagen con transparencia para PNG
    $resizedImage = imagecreatetruecolor($newWidth, $newHeight);
    
    // Preservar transparencia para PNG
    if ($imageType == IMAGETYPE_PNG) {
        imagealphablending($resizedImage, false);
        imagesavealpha($resizedImage, true);
        $transparent = imagecolorallocatealpha($resizedImage, 255, 255, 255, 127);
        imagefilledrectangle($resizedImage, 0, 0, $newWidth, $newHeight, $transparent);
    } else {
        // Fondo blanco para JPEGs
        $white = imagecolorallocate($resizedImage, 255, 255, 255);
        imagefill($resizedImage, 0, 0, $white);
    }
    
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
    $result = false;
    if ($imageType == IMAGETYPE_PNG) {
        $result = imagepng($resizedImage, $destPath, 9); // 9 = máxima compresión
    } else {
        $result = imagejpeg($resizedImage, $destPath, 85); // 85% calidad
    }
    
    // Limpiar memoria
    imagedestroy($originalImage);
    imagedestroy($resizedImage);
    
    return $result;
}

function createFavicon($sourcePath, $destPath) {
    // Crear un favicon básico de 32x32
    return resizeImage($sourcePath, $destPath, 32, 32);
}

// Ejecutar optimización si se llama directamente
if (basename(__FILE__) == basename($_SERVER['SCRIPT_NAME'])) {
    echo "Optimizando logo...\n";
    optimizeLogo();
    echo "Proceso completado.\n";
}
?>
