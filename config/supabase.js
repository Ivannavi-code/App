// config/supabase.js
import { createClient } from '@supabase/supabase-js';

// TODO: Reemplazar con tus credenciales de Supabase
const SUPABASE_URL = 'TU_SUPABASE_URL_AQUI';
const SUPABASE_ANON_KEY = 'TU_SUPABASE_ANON_KEY_AQUI';

// Crear cliente de Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Verificar conexión
export const checkConnection = async () => {
  try {
    const { data, error } = await supabase.from('productos').select('count');
    if (error) throw error;
    console.log('✅ Conexión con Supabase exitosa');
    return true;
  } catch (error) {
    console.error('❌ Error de conexión con Supabase:', error.message);
    return false;
  }
};
