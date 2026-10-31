/* Configuración pública. Nunca incluir service_role, secret ni contraseñas.
   Ambos campos vacíos = demo local. Para cuentas reales ejecutar supabase-setup.sql.
   La versión anterior usaba otras tablas: esta edición usa el prefijo cp_ y no las borra. */
window.CAMPUS_CONFIG = {
  NOMBRE: 'Campus Piloto Privado',
  SUPABASE_URL: '',
  SUPABASE_ANON_KEY: ''
};
