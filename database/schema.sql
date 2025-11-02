-- MECANIC MANAGER DATABASE SCHEMA
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Productos
CREATE TABLE productos (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  codigo_qr VARCHAR(100) UNIQUE NOT NULL,
  precio_venta DECIMAL(10, 2) NOT NULL,
  stock_actual INTEGER DEFAULT 0,
  stock_minimo INTEGER DEFAULT 5,
  estado VARCHAR(20) DEFAULT 'activo',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Clientes
CREATE TABLE clientes (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  nombre_completo VARCHAR(255) NOT NULL,
  whatsapp VARCHAR(20),
  tipo_cliente VARCHAR(20) DEFAULT 'ocasional',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Ventas
CREATE TABLE ventas (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  fecha_hora TIMESTAMP DEFAULT NOW(),
  total DECIMAL(10, 2) NOT NULL,
  metodo_pago VARCHAR(50) NOT NULL
);

-- Datos de ejemplo
INSERT INTO productos (nombre, codigo_qr, precio_venta, stock_actual) VALUES
  ('Aceite 10W40', 'QR-001', 15.00, 50),
  ('Filtro Aceite', 'QR-002', 8.00, 30),
  ('Pastillas Freno', 'QR-003', 45.00, 20);
