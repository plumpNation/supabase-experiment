import { createClient } from "@supabase/supabase-js";

import type { Database } from "./database.types";

export const supabase = createClient<Database>(
  "https://iebikjysuwybiwrpjkcv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllYmlranlzdXd5Yml3cnBqa2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyNDcwOTEsImV4cCI6MTk5NDgyMzA5MX0.emlgIWKzP7oTDOSxY_U4gGkkc9wHcU-ltrSKmZolPYM",
);