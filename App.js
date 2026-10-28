import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './components/screens/ModuleListScreens';
import ModuleAddScreen from './components/screens/ModuleAddScreen';
import ModuleModifyScreen from './components/screens/ModuleModifyScreen';
import ModuleViewScreen from './components/screens/ModuleViewScreen';


const Stack = createNativeStackNavigator();

export const App = () => {
  //Initialization-------

  //State---------

  //Handler------

  //view-------


  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="ModuleListScreen"
      screenOptions={ {
        headerStyle: { backgroundColr: 'black'},
        headerTintColor: 'white',
      }}
      >
      
      <Stack.Screen 
      name="ModuleListScreen"
      component={ModuleListScreen}
      options={{title: 'List modules'}}
      />

      <Stack.Screen
      name="ModuleAddScreen"
      component={ModuleAddScreen}
      option={{title: 'Add module'}}
      />

      <Stack.Screen
      name="ModuleModifyScreen"
      component={ModuleModifyScreen}
      option={{title: 'Modify module'}}
      />

      <Stack.Screen
      name="ModuleViewScreen"
      component={ModuleViewScreen}
      option={{title: 'View module'}}
      />





      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;