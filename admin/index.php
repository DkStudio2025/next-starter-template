<?php
// Panel de administración simple
require_once '../config.php';

session_start();

// Verificar si está logueado (implementar autenticación)
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit;
}

$pdo = getDBConnection();

// Obtener mensajes de contacto
$stmt = $pdo->query("SELECT * FROM contact_messages ORDER BY created_at DESC LIMIT 10");
$messages = $stmt->fetchAll();

// Obtener estadísticas
$stats = [
    'total_messages' => $pdo->query("SELECT COUNT(*) FROM contact_messages")->fetchColumn(),
    'new_messages' => $pdo->query("SELECT COUNT(*) FROM contact_messages WHERE status = 'new'")->fetchColumn(),
    'total_projects' => $pdo->query("SELECT COUNT(*) FROM projects")->fetchColumn(),
    'total_testimonials' => $pdo->query("SELECT COUNT(*) FROM testimonials")->fetchColumn()
];
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración - DevServices</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
    <style>
        .admin-container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }
        .stat-card {
            background: var(--white);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            text-align: center;
        }
        .stat-number {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
        }
        .messages-table {
            background: var(--white);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
        }
        .table {
            width: 100%;
            border-collapse: collapse;
        }
        .table th,
        .table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--gray-200);
        }
        .table th {
            background: var(--gray-50);
            font-weight: 600;
        }
        .status-new {
            background: var(--warning-color);
            color: white;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
        }
    </style>
</head>
<body>
    <div class="admin-container">
        <h1>Panel de Administración</h1>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number"><?php echo $stats['total_messages']; ?></div>
                <div>Total Mensajes</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo $stats['new_messages']; ?></div>
                <div>Mensajes Nuevos</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo $stats['total_projects']; ?></div>
                <div>Proyectos</div>
            </div>
            <div class="stat-card">
                <div class="stat-number"><?php echo $stats['total_testimonials']; ?></div>
                <div>Testimonios</div>
            </div>
        </div>

        <div class="messages-table">
            <h2 style="padding: 1rem;">Mensajes Recientes</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Proyecto</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($messages as $message): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($message['name']); ?></td>
                        <td><?php echo htmlspecialchars($message['email']); ?></td>
                        <td><?php echo htmlspecialchars($message['project_type']); ?></td>
                        <td><?php echo date('d/m/Y H:i', strtotime($message['created_at'])); ?></td>
                        <td>
                            <?php if ($message['status'] === 'new'): ?>
                                <span class="status-new">Nuevo</span>
                            <?php else: ?>
                                <?php echo ucfirst($message['status']); ?>
                            <?php endif; ?>
                        </td>
                        <td>
                            <a href="view_message.php?id=<?php echo $message['id']; ?>" class="btn btn-primary" style="padding: 0.25rem 0.5rem; font-size: 0.75rem;">Ver</a>
                        </td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</body>
</html>
