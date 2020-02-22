// import React from 'react';
// import { View, StyleSheet, KeyboardAvoidingView, ScrollView, Image } from 'react-native';
// import Component1 from './src/components/Component1';
// import Component2 from './src/components/Component2';
// import Component4 from './src/components/Component4';
// import Component5 from './src/components/Component5';
// import Component6 from './src/components/Component6';
// import Component7 from './src/components/Component7';
// // import Component8 from './src/components/Component8';
// import Component10 from './src/components/Component10';
// import Component11 from './src/components/Component11';
// import Component11ShowUser from './src/components/Component11ShowUser';


// //Let's create a simple separator component that will only be used here in App.tsx
// const Separator: React.FC = () => {
//   return <View style={styles.separator}></View>
// }

// // const SeparatorHeight: React.FC = () => {
// //   return <View style={styles.separatorHeight}></View>
// // }

// const App: React.FC = () => {
  
//   return (
   
//     <KeyboardAvoidingView behavior='padding' style={styles.container}>
//       <ScrollView>
//         <View style={styles.screenHeader}>
//             <Image style={styles.logo}
//                 source={require('./src/img/PAU-Logo-Website.png')}
//             />
//         </View>
//         {/* <View style={styles.comp1and2}>
//           <Component1 />
//           <SeparatorHeight />
//           <Component2 name='Pius'/>
//         </View>
//         <View style={styles.screenBody}>
//           <Separator/>
//           <Component4 />
//           <Separator/>
//           <Component5/>
//           <Separator/>
//         </View> */}
        
//         <View style={styles.screenBody}>
//         <Component10/>
//         </View>
        
//         {/* <View style={styles.comp1and2}>
          
//           <Component11ShowUser/>
//           <Separator/>

       
         
          
//         </View> */}
//         <View style={styles.comp1and2}>
          
//           <Component11/>
//           <Separator/>
          
//           {/* <Separator/>
//           <Components8b/> */}
         
          
//         </View>
//         <View style={styles.comp1and2}>
          
//           <Component11ShowUser/>
//           <Separator/>
          
//           {/* <Separator/>
//           <Components8b/> */}
         
          
//         </View>
        
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'stretch',
//     justifyContent: 'center',
//   },
//   comp1and2: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   separator: {
//     backgroundColor: '#eee', 
//     height: 3, 
//     width: '100%'
//   },
//   separatorHeight: {
//     backgroundColor: '#eee', 
//     width: 3, 
//     height: '100%'
//   },
//   screenHeader: {
//     flex: 1,
//     paddingTop: 27,
//     justifyContent: 'center',
//     backgroundColor: 'darkblue'
//   },
//   screenBody: {
//     flex: 6,
//     justifyContent: 'center',
//   },
//   logo:{
//       alignSelf:'center',
//       width: 200,
//       height: 82
//   }
// });

// export default App;
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
import Home from './src/Home';
import Component1 from './src/components/Component1';
import Component2 from './src/components/Component2';
import Component3 from './src/components/Component3';
import Component4 from './src/components/Component4';
import Component5 from './src/components/Component5';

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
      backgroundColor: 'darkblue',
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
    }
  }
}
//Prepare the App Stack with the Screens
const AppStack = () => {
  return(
    <Stack.Navigator {...stackProps}>
      <Stack.Screen name="HomeScreen" component={Home} options={{title: 'App  Home Screen'}}/>
      <Stack.Screen name="Component1Screen" component={Component1} options={{title: 'Component 1'}}/>
      <Stack.Screen name="Component2Screen" component={Component2} options={{title: 'Component 2'}}/>
      <Stack.Screen name="Component3Screen" component={Component3} options={{title: 'Component 3'}}/>
      <Stack.Screen name="Component4Screen" component={Component4} options={{title: 'Component 4'}}/>
      <Stack.Screen name="Component5Screen" component={Component5} options={{title: 'Component 5'}}/>
    </Stack.Navigator>
  )
}

//Pass the prepared AppStack to App
const App1: React.FC = () => {
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

export default App1;
