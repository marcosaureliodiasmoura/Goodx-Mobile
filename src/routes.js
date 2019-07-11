import { createSwitchNavigator, createAppContainer, createStackNavigator } from 'react-navigation';

// Faz com que perca o historico das rotas SwitchNavigator, fazendo com que não retorne pra pagina como login e main

import SignIn from './pages/SignIn';
import Main from './pages/Main';
import ProjectDetails from './pages/ProjectDetails';
import Donate from './pages/Donate';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Main: createStackNavigator(
          {
            Main,
            ProjectDetails,
            DonateGo: Donate,
          },
          {
            defaultNavigationOptions: {
              header: null,
            },
          },
        ),
        // Donate: createStackNavigator({
        //   Donate,
        // }),
        SignIn,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'SignIn',
      },
    ),
  );
}
