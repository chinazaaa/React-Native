import React from 'react';
import { Image, StyleSheet } from 'react-native';
/** 
 * Import createStackNavigator that we will use to create the stack navigator for the home page
 We shall see below how they are used
 */
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

/**
 * Import our components that we will create screens for using createStackNavigator
 * Among them is a new Component named Home which will simply contain Button links to 
 * each of the other Component screens created by the createStackNavigator.
 * See Home.tsx for implementation
 */
import Home from './src/Home2';
import Component6 from './src/components/Component6';
import Component7 from './src/components/Component7';
import Component8 from './src/components/Component8';
import Component9 from './src/components/Component9';

//Create a Stack object
const Stack = createStackNavigator();
//Prepare the props that we would like to pass to our App stack.
//See https://reactnavigation.org/docs/en/stack-navigator.html#props for info on the prop elements.
const stackProps: any= { //options we want to associate with our Navigation Stack
  initialRouteName: 'HomeScreen', //Let HomeScreen be the first screen to be loaded
  headerMode: 'screen', //can be 'float', 'none' or 'screen'.  
  mode: 'card', //can be 'card' or 'modal'. The default is 'card'
  screenOptions: { //
    //title: '', //No need for default title, let each screen set its own title.
    headerStyle: {
      backgroundColor: 'black',
      height: 120
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      paddingTop: 60
    },
   
    headerRight: () => (
      <Image style={styles.logo}
          source={require('./src/img/PAU-Logo-Website.png')}
      />
    ),
    headerTitleAlign: 'left',
    headerRightContainerStyle:{//there is also headerLeftContainerStyle if we want to use it
      paddingBottom: 33
    },
  }
}
//Prepare the App Stack with the Screens
const AppStack = () => {
  return(
    <Stack.Navigator {...stackProps}>
      <Stack.Screen name="HomeScreen" component={Home} options={{title: 'App 2 Home Screen'}}/>
      <Stack.Screen name="Component6Screen" component={Component6} options={{title: 'Component 6'}}/>
      <Stack.Screen name="Component7Screen" component={Component7} options={{title: 'Component 7'}}/>
      <Stack.Screen name="Component8Screen" component={Component8} options={{title: 'Component 8'}}/>
      <Stack.Screen name="Component9Screen" component={Component9} options={{title: 'Component 9'}}/>
    </Stack.Navigator>
  )
}

//Pass the prepared AppStack to App
const App2: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <AppStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo:{
    width: 133,
    height: 55,
    paddingBottom: 50
  }
});

export default App2;
