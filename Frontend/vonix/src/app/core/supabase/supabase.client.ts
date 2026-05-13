import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../enviroments/enviroments';

export const supabase = createClient(
  environment.supabaseUrl,
  environment.supabasePublishableKey
);
