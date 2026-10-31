/* ============================================================
   CONFIGURACIÓN DEL CAMPUS
   ------------------------------------------------------------
   Mientras SUPABASE_URL y SUPABASE_ANON_KEY estén vacías, la
   página funciona en MODO DEMO (datos de ejemplo guardados solo
   en el navegador de cada visitante).

   Para conectar Supabase:
   1. En Supabase: Project Settings > API (o "API Keys").
   2. Copiá la "Project URL" y pegala entre las comillas de abajo.
   3. Copiá la clave pública (se llama "anon" o "publishable")
      y pegala en SUPABASE_ANON_KEY.

   IMPORTANTE: pegá SOLO la clave pública (anon / publishable).
   Nunca pegues acá la clave "service_role" ni la "secret":
   este archivo lo puede leer cualquiera que abra la página.
   La clave pública es segura porque la protección real de los
   datos la hacen las reglas de seguridad (RLS) del archivo
   supabase-setup.sql.
   ============================================================ */
window.CAMPUS_CONFIG = {
  NOMBRE: "Campus Piloto Privado",
  SUPABASE_URL: "",       // ejemplo: "https://abcdxyzcompany.supabase.co"
  SUPABASE_ANON_KEY: ""   // ejemplo: "eyJhbGciOi..."  (o "sb_publishable_...")
};
