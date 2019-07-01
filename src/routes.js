import { createSwitchNavigator, createAppContainer } from 'react-navigation';

// Faz com que perca o historico das rotas SwitchNavigator, fazendo com que não retorne pra pagina como login e main

import SignIn from './pages/SignIn';
import Main from './pages/Main';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        Main,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}
