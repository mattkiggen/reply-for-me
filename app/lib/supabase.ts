import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
/* @ts-ignore */
import { SUPABASE_ANON_KEY, SUPABASE_API_URL } from '@env';

const supabaseUrl = `${SUPABASE_API_URL}`;
const supabaseAnonKey = `${SUPABASE_ANON_KEY}`;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
