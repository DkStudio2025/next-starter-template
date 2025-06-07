<?php
// Configuración general del sitio
define('SITE_NAME', 'DevServices');
define('SITE_URL', 'https://devservices.com');
define('SITE_EMAIL', 'contacto@devservices.com');
define('SITE_PHONE', '+1 (555) 123-4567');

// Configuración de email
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USERNAME', 'tu-email@gmail.com');
define('SMTP_PASSWORD', 'tu-password-de-aplicacion');

// Configuración de base de datos (opcional)
define('DB_HOST', 'localhost');
define('DB_NAME', 'devservices');
define('DB_USER', 'root');
define('DB_PASS', '');

// Configuración de reCAPTCHA (opcional)
define('RECAPTCHA_SITE_KEY', 'tu-site-key');
define('RECAPTCHA_SECRET_KEY', 'tu-secret-key');

// Timezone
date_default_timezone_set('America/Mexico_City');

// Función para conectar a la base de datos
function getDBConnection() {
    try {
        $pdo = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8",
            DB_USER,
            DB_PASS,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]
        );
        return $pdo;
    } catch (PDOException $e) {
        error_log("Error de conexión: " . $e->getMessage());
        return null;
    }
}
?>
