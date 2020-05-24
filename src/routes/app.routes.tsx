import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRouter: React.FC = () => (
  <App.Navigator
    screenOptions={{
      // headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    /*
      Utilizada para definir a rota inicial da aplicação:
      initialRouteName="SignUp"
    */
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRouter;
