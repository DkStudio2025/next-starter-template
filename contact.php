<?php
header('Content-Type: application/json');

// Configuración de email
$to_email = "contacto@devservices.com"; // Cambia por tu email
$subject_prefix = "[DevServices] Nuevo mensaje de contacto";

// Función para limpiar datos
function clean_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Verificar que sea POST
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener y limpiar datos
$name = clean_input($_POST['name'] ?? '');
$email = clean_input($_POST['email'] ?? '');
$project_type = clean_input($_POST['project_type'] ?? '');
$message = clean_input($_POST['message'] ?? '');

// Validaciones
$errors = [];

if (empty($name)) {
    $errors[] = "El nombre es requerido";
}

if (empty($email)) {
    $errors[] = "El email es requerido";
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "El email no es válido";
}

if (empty($project_type)) {
    $errors[] = "El tipo de proyecto es requerido";
}

if (empty($message)) {
    $errors[] = "El mensaje es requerido";
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Preparar el email
$subject = $subject_prefix . " - " . ucfirst($project_type);

$email_body = "
Nuevo mensaje de contacto desde DevServices

Nombre: $name
Email: $email
Tipo de Proyecto: $project_type

Mensaje:
$message

---
Enviado desde: " . $_SERVER['HTTP_HOST'] . "
IP: " . $_SERVER['REMOTE_ADDR'] . "
Fecha: " . date('Y-m-d H:i:s');

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar email
if (mail($to_email, $subject, $email_body, $headers)) {
    echo json_encode([
        'success' => true, 
        'message' => '¡Mensaje enviado correctamente! Te responderé pronto.'
    ]);
} else {
    echo json_encode([
        'success' => false, 
        'message' => 'Error al enviar el mensaje. Inténtalo de nuevo.'
    ]);
}
?>
