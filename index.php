<?php
// Limpiar URL al inicio del archivo
if (!empty($_GET) && isset($_GET['i'])) {
    // Redirigir sin el parámetro i
    $clean_url = strtok($_SERVER["REQUEST_URI"], '?');
    header("Location: " . $clean_url, true, 301);
    exit();
}

$page_title = "deykaa - Desarrollo Web Profesional";
$page_description = "Diseñador web, programador y técnico en sistemas. Creo sitios web modernos, aplicaciones y soluciones técnicas personalizadas.";
// Número de WhatsApp actualizado
$whatsapp_number = "573205134117"; // Número actualizado con formato correcto
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $page_title; ?></title>
    <meta name="description" content="<?php echo $page_description; ?>">
    
    <!-- Favicon -->
    <link rel="icon" href="public/logo.png" type="image/png">
    
    <!-- Canonical URL para SEO -->
    <link rel="canonical" href="https://deykaa.com/">
    
    <link rel="stylesheet" href="assets/css/styles.css">
    <link rel="stylesheet" href="assets/css/mobile-fixes.css">
    <link rel="stylesheet" href="assets/css/whatsapp-button.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="nav-brand">
                <img src="public/logo.png" alt="deykaa logo" class="brand-logo">
                <span>deykaa</span>
            </div>
            <nav class="nav-menu" id="navMenu">
                <a href="#inicio" class="nav-link">Inicio</a>
                <a href="#servicios" class="nav-link">Servicios</a>
                <a href="#precios" class="nav-link">Precios</a>
                <a href="#sobre-mi" class="nav-link">Sobre Mí</a>
                <a href="#contacto" class="nav-link">Contacto</a>
            </nav>
            <button class="btn btn-primary">Consulta Gratis</button>
            <button class="mobile-menu-btn" id="mobileMenuBtn" type="button" aria-label="Abrir menú">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="inicio" class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <div class="badge">✨ Desarrollo Web Profesional</div>
                    <h1>Transformo tus ideas en <span class="text-primary">soluciones digitales</span></h1>
                    <p>Diseñador web, programador y técnico en sistemas con experiencia en desarrollo completo. Creo sitios web modernos, aplicaciones y soluciones técnicas personalizadas.</p>
                    <div class="hero-buttons">
                        <button class="btn btn-primary btn-lg">Ver Mis Trabajos</button>
                        <button class="btn btn-outline btn-lg">Consulta Gratuita</button>
                    </div>
                    <div class="hero-stats">
                        <div class="stat">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">Proyectos</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">5+</div>
                            <div class="stat-label">Años Exp.</div>
                        </div>
                        <div class="stat">
                            <div class="stat-number">100%</div>
                            <div class="stat-label">Satisfacción</div>
                        </div>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="image-container">
                        <img src="public/perfil.jpeg" alt="Desarrollador profesional trabajando">
                        <div class="floating-shape shape-1"></div>
                        <div class="floating-shape shape-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Servicios -->
    <section id="servicios" class="services">
        <div class="container">
            <div class="section-header">
                <div class="badge">Servicios</div>
                <h2>Soluciones Completas para tu Negocio</h2>
                <p>Ofrezco servicios integrales de desarrollo web, desde el diseño hasta la implementación y mantenimiento de sistemas.</p>
            </div>

            <div class="services-grid">
                <?php
                $services = [
                    [
                        'icon' => 'fas fa-globe',
                        'title' => 'Desarrollo Web',
                        'description' => 'Sitios web modernos y responsivos con las últimas tecnologías',
                        'features' => ['Diseño responsive', 'Optimización SEO', 'Carga rápida', 'Seguridad avanzada'],
                        'color' => 'blue'
                    ],
                    [
                        'icon' => 'fas fa-mobile-alt',
                        'title' => 'Aplicaciones Web',
                        'description' => 'Aplicaciones web interactivas y funcionales para tu negocio',
                        'features' => ['React/Next.js', 'PHP personalizado', 'APIs REST', 'Integración de pagos'],
                        'color' => 'green'
                    ],
                    [
                        'icon' => 'fas fa-server',
                        'title' => 'Administración de Servidores',
                        'description' => 'Configuración y mantenimiento de servidores y hosting',
                        'features' => ['Configuración Linux', 'Optimización rendimiento', 'Backups automáticos', 'Monitoreo 24/7'],
                        'color' => 'purple'
                    ],
                    [
                        'icon' => 'fas fa-database',
                        'title' => 'Bases de Datos',
                        'description' => 'Diseño e implementación de bases de datos eficientes',
                        'features' => ['MySQL/PostgreSQL', 'Optimización consultas', 'Migración de datos', 'Respaldos seguros'],
                        'color' => 'orange'
                    ],
                    [
                        'icon' => 'fas fa-shield-alt',
                        'title' => 'Seguridad Web',
                        'description' => 'Protección y auditorías de seguridad para tu sitio web',
                        'features' => ['Certificados SSL', 'Firewall configuración', 'Auditorías seguridad', 'Actualizaciones'],
                        'color' => 'red'
                    ],
                    [
                        'icon' => 'fas fa-code',
                        'title' => 'Soporte Técnico',
                        'description' => 'Mantenimiento y soporte continuo para tus proyectos',
                        'features' => ['Soporte 24/7', 'Actualizaciones', 'Resolución rápida', 'Consultoría técnica'],
                        'color' => 'teal'
                    ]
                ];

                foreach ($services as $service): ?>
                    <div class="service-card">
                        <div class="service-icon <?php echo $service['color']; ?>">
                            <i class="<?php echo $service['icon']; ?>"></i>
                        </div>
                        <h3><?php echo $service['title']; ?></h3>
                        <p><?php echo $service['description']; ?></p>
                        <ul class="service-features">
                            <?php foreach ($service['features'] as $feature): ?>
                                <li><i class="fas fa-check-circle"></i> <?php echo $feature; ?></li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Precios -->
    <section id="precios" class="pricing">
        <div class="container">
            <div class="section-header">
                <div class="badge">Precios</div>
                <h2>Planes Adaptados a tu Presupuesto</h2>
                <p>Elige el plan que mejor se adapte a las necesidades de tu proyecto. Todos incluyen soporte y garantía.</p>
            </div>

            <div class="pricing-grid">
                <?php
                $plans = [
                    [
                        'name' => 'Básico',
                        'price' => '$299',
                        'period' => '/proyecto',
                        'description' => 'Perfecto para sitios web simples',
                        'features' => [
                            'Hasta 5 páginas',
                            'Diseño responsive',
                            'Optimización SEO básica',
                            'Formulario de contacto',
                            '1 mes de soporte'
                        ],
                        'popular' => false,
                        'button_text' => 'Comenzar Proyecto'
                    ],
                    [
                        'name' => 'Profesional',
                        'price' => '$599',
                        'period' => '/proyecto',
                        'description' => 'Ideal para negocios en crecimiento',
                        'features' => [
                            'Hasta 15 páginas',
                            'Diseño personalizado',
                            'CMS integrado',
                            'Optimización avanzada',
                            'Integración redes sociales',
                            '3 meses de soporte'
                        ],
                        'popular' => true,
                        'button_text' => 'Comenzar Proyecto'
                    ],
                    [
                        'name' => 'Enterprise',
                        'price' => '$1,299',
                        'period' => '/proyecto',
                        'description' => 'Soluciones completas para empresas',
                        'features' => [
                            'Páginas ilimitadas',
                            'Aplicación web completa',
                            'Base de datos personalizada',
                            'Panel de administración',
                            'Integración APIs',
                            '6 meses de soporte'
                        ],
                        'popular' => false,
                        'button_text' => 'Consultar Proyecto'
                    ]
                ];

                foreach ($plans as $plan): ?>
                    <div class="pricing-card <?php echo $plan['popular'] ? 'popular' : ''; ?>">
                        <?php if ($plan['popular']): ?>
                            <div class="popular-badge">Más Popular</div>
                        <?php endif; ?>
                        <div class="pricing-header">
                            <h3><?php echo $plan['name']; ?></h3>
                            <div class="price">
                                <?php echo $plan['price']; ?>
                                <span><?php echo $plan['period']; ?></span>
                            </div>
                            <p><?php echo $plan['description']; ?></p>
                        </div>
                        <ul class="pricing-features">
                            <?php foreach ($plan['features'] as $feature): ?>
                                <li><i class="fas fa-check-circle"></i> <?php echo $feature; ?></li>
                            <?php endforeach; ?>
                        </ul>
                        <button class="btn <?php echo $plan['popular'] ? 'btn-primary' : 'btn-outline'; ?> btn-full">
                            <?php echo $plan['button_text']; ?>
                        </button>
                    </div>
                <?php endforeach; ?>
            </div>

            <div class="pricing-footer">
                <p>¿Necesitas algo personalizado?</p>
                <button class="btn btn-outline btn-lg">Solicitar Cotización Personalizada</button>
            </div>
        </div>
    </section>

    <!-- Sobre Mí -->
    <section id="sobre-mi" class="about">
        <div class="container">
            <div class="about-content">
                <div class="about-text">
                    <div class="badge">Sobre Mí</div>
                    <h2>Pasión por la Tecnología y el Desarrollo</h2>
                    <div class="about-description">
                        <p>Soy un desarrollador full-stack con más de 5 años de experiencia en el mundo del desarrollo web. Mi formación como técnico en sistemas me ha dado una base sólida para entender tanto el frontend como el backend de las aplicaciones.</p>
                        <p>Me especializo en crear soluciones web modernas utilizando tecnologías como React, Next.js, PHP, y bases de datos. También tengo experiencia en administración de servidores Linux y optimización de rendimiento.</p>
                        <p>Mi objetivo es ayudar a empresas y emprendedores a llevar sus ideas al mundo digital con soluciones eficientes, seguras y escalables.</p>
                    </div>
                    <div class="skills-grid">
                        <div class="skill-category">
                            <h4>Frontend</h4>
                            <ul>
                                <li>• React & Next.js</li>
                                <li>• HTML5 & CSS3</li>
                                <li>• JavaScript/TypeScript</li>
                                <li>• Tailwind CSS</li>
                            </ul>
                        </div>
                        <div class="skill-category">
                            <h4>Backend</h4>
                            <ul>
                                <li>• PHP & Laravel</li>
                                <li>• Node.js</li>
                                <li>• MySQL & PostgreSQL</li>
                                <li>• APIs REST</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="about-image">
                    <img src="public/perfil.jpeg" alt="Desarrollador profesional">
                    <div class="experience-badge">
                        <div class="exp-number">5+</div>
                        <div class="exp-text">Años de Experiencia</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonios -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <div class="badge">Testimonios</div>
                <h2>Lo que Dicen Mis Clientes</h2>
            </div>

            <div class="testimonials-grid">
                <?php
                $testimonials = [
                    [
                        'text' => 'Excelente trabajo, muy profesional y cumplió con todos los tiempos establecidos. El sitio web quedó exactamente como lo imaginaba.',
                        'name' => 'María Rodríguez',
                        'position' => 'CEO, Boutique Online',
                        'initials' => 'MR',
                        'color' => 'blue'
                    ],
                    [
                        'text' => 'La aplicación web que desarrolló para nuestra empresa ha mejorado significativamente nuestros procesos internos. Muy recomendado.',
                        'name' => 'Juan López',
                        'position' => 'Director, TechSolutions',
                        'initials' => 'JL',
                        'color' => 'green'
                    ],
                    [
                        'text' => 'Soporte técnico excepcional. Siempre disponible para resolver cualquier duda y mantener nuestro sitio funcionando perfectamente.',
                        'name' => 'Ana García',
                        'position' => 'Fundadora, StartupXYZ',
                        'initials' => 'AG',
                        'color' => 'purple'
                    ]
                ];

                foreach ($testimonials as $testimonial): ?>
                    <div class="testimonial-card">
                        <div class="stars">
                            <?php for ($i = 0; $i < 5; $i++): ?>
                                <i class="fas fa-star"></i>
                            <?php endfor; ?>
                        </div>
                        <p>"<?php echo $testimonial['text']; ?>"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar <?php echo $testimonial['color']; ?>">
                                <?php echo $testimonial['initials']; ?>
                            </div>
                            <div class="author-info">
                                <div class="author-name"><?php echo $testimonial['name']; ?></div>
                                <div class="author-position"><?php echo $testimonial['position']; ?></div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Contacto -->
    <section id="contacto" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <div class="badge">Contacto</div>
                    <h2>¿Listo para Comenzar tu Proyecto?</h2>
                    <p>Conversemos sobre tu idea y cómo puedo ayudarte a hacerla realidad. Ofrezco consulta gratuita para todos los proyectos.</p>
                    
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-text">
                                <div class="contact-label">Email</div>
                                <div class="contact-value">contacto@devservices.com</div>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-text">
                                <div class="contact-label">Teléfono</div>
                                <div class="contact-value">+57 320 5134117</div>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-text">
                                <div class="contact-label">Ubicación</div>
                                <div class="contact-value">Trabajo remoto - Disponible globalmente</div>
                            </div>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>

                <div class="contact-form-container">
                    <div class="contact-form-card">
                        <h3>Envíame un Mensaje</h3>
                        <p>Cuéntame sobre tu proyecto y te responderé en menos de 24 horas</p>
                        
                        <form class="contact-form" id="contactForm" action="contact.php" method="POST">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="name">Nombre</label>
                                    <input type="text" id="name" name="name" placeholder="Tu nombre" required>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="tu@email.com" required>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="project_type">Tipo de Proyecto</label>
                                <select id="project_type" name="project_type" required>
                                    <option value="">Selecciona una opción</option>
                                    <option value="web">Sitio Web</option>
                                    <option value="app">Aplicación Web</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="servidor">Administración Servidor</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="message">Mensaje</label>
                                <textarea id="message" name="message" rows="4" placeholder="Cuéntame sobre tu proyecto..." required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-full">Enviar Mensaje</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section footer-brand-section">
                    <div class="footer-brand">
                        <img src="public/logo.png" alt="deykaa logo" class="brand-logo">
                        <span>deykaa</span>
                    </div>
                    <p>Transformando ideas en soluciones digitales innovadoras y eficientes.</p>
                </div>

                <div class="footer-section">
                    <h4>Servicios</h4>
                    <ul>
                        <li><a href="#servicios">Desarrollo Web</a></li>
                        <li><a href="#servicios">Aplicaciones</a></li>
                        <li><a href="#servicios">Servidores</a></li>
                        <li><a href="#servicios">Soporte</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#sobre-mi">Sobre Mí</a></li>
                        <li><a href="#servicios">Portfolio</a></li>
                        <li><a href="#contacto">Blog</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Términos</a></li>
                        <li><a href="#">Privacidad</a></li>
                        <li><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; <?php echo date('Y'); ?> deykaa. Todos los derechos reservados.</p>
                <div class="footer-social">
                    <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Botón de WhatsApp -->
    <a href="#" id="whatsappButton" class="whatsapp-button" target="_blank" rel="noopener noreferrer" style="opacity: 0;">
        <div class="whatsapp-icon">
            <i class="fab fa-whatsapp"></i>
        </div>
        <span class="whatsapp-text">¡Chatea conmigo!</span>
    </a>

    <script src="assets/js/script.js"></script>
    <script src="assets/js/whatsapp.js"></script>
</body>
</html>
