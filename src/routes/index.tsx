import React from 'react';
import AuthRouter from './auth.routes';
import AppRouter from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user } = useAuth();

  return user ? <AppRouter /> : <AuthRouter />;
};

export default Routes;
