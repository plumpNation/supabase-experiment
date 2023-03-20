import { supabase } from '../database';

export const login = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    throw error;
  }

  return data;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut()

  if (error) {
    throw error;
  }
};
