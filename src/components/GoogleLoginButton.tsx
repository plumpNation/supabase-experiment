import type { FC } from 'react';

import { login } from '../libs/login-providers/google';

export const GoogleLoginButton: FC = () => (
  <button onClick={login}>Sign in with Google</button>
)