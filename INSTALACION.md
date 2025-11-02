# GUÍA DE INSTALACIÓN - Mecanic Manager

## 📋 Requisitos

- Node.js 18+ 
- Android Studio (opcional) o dispositivo Android
- Cuenta Supabase (gratis)

## 🚀 Instalación

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Supabase

a. Crear cuenta en https://supabase.com
b. Crear nuevo proyecto
c. Copiar credenciales (Settings > API):
   - Project URL
   - anon/public key

d. Editar `config/supabase.js`:
```javascript
const SUPABASE_URL = 'tu-url-aqui';
const SUPABASE_ANON_KEY = 'tu-key-aqui';
```

### 3. Crear base de datos

En Supabase SQL Editor, ejecutar todo el contenido de:
`database/schema.sql`

### 4. Iniciar app
```bash
npm start
```

Escanear QR con Expo Go o presionar 'a' para Android.

## 👤 Usuarios de Prueba

Admin: admin@mecanic.com / admin123
Caja: caja@mecanic.com / caja123

## 📞 Soporte

Ver README.md para más información.
