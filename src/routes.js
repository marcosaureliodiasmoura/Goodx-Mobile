import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

// Faz com que perca o historico das rotas SwitchNavigator, fazendo com que não retorne pra pagina como login e main

import SignIn from './pages/SignIn';
import Main from './pages/Main';
import ProjectDetails from './pages/ProjectDetails';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Main: createStackNavigator(
          {
            Main,
            ProjectDetails,
          },
          {
            defaultNavigationOptions: {
              header: null,
            },
          },
        ),
        SignIn,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}
