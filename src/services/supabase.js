import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fcwwaosgmdfgypdbntgx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjd3dhb3NnbWRmZ3lwZGJudGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MjQ2MzUsImV4cCI6MjAzNjMwMDYzNX0.57iA87SwX2R6GracD_KXdu4np5QPTY9FmUthFXauvtw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
