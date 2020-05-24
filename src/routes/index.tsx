import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRouter from './auth.routes';
import AppRouter from './app.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#ff9000" />
      </View>
    );
  }

  return user ? <AppRouter /> : <AuthRouter />;
};

export default Routes;
