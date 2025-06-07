-- Estructura de base de datos para DevServices (opcional)
CREATE DATABASE IF NOT EXISTS devservices;
USE devservices;

-- Tabla para mensajes de contacto
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    project_type VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'read', 'replied') DEFAULT 'new'
);

-- Tabla para proyectos/portfolio (opcional)
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    image_url VARCHAR(255),
    project_url VARCHAR(255),
    technologies TEXT,
    category VARCHAR(50),
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla para testimonios
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    client_position VARCHAR(100),
    client_company VARCHAR(100),
    testimonial TEXT NOT NULL,
    rating INT DEFAULT 5,
    image_url VARCHAR(255),
    featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar algunos testimonios de ejemplo
INSERT INTO testimonials (client_name, client_position, client_company, testimonial, rating, featured) VALUES
('María Rodríguez', 'CEO', 'Boutique Online', 'Excelente trabajo, muy profesional y cumplió con todos los tiempos establecidos. El sitio web quedó exactamente como lo imaginaba.', 5, TRUE),
('Juan López', 'Director', 'TechSolutions', 'La aplicación web que desarrolló para nuestra empresa ha mejorado significativamente nuestros procesos internos. Muy recomendado.', 5, TRUE),
('Ana García', 'Fundadora', 'StartupXYZ', 'Soporte técnico excepcional. Siempre disponible para resolver cualquier duda y mantener nuestro sitio funcionando perfectamente.', 5, TRUE);
