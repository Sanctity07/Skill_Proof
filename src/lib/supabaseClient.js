// lib/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zbokhbcnsvtpjqfgefxy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpib2toYmNuc3Z0cGpxZmdlZnh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwNzc2NjIsImV4cCI6MjA2OTY1MzY2Mn0.9-oNl2VZiIfN8Hr-R4IulTcGb3bYwc1g_jzpQoh-UFA";
export const supabase = createClient(supabaseUrl, supabaseKey);
