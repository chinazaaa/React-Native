import React from 'react';
import {StyleSheet, Button, SafeAreaView} from 'react-native';
/**
 * Import NavigationParams type which is the type for navigation prop that can be passed to Components.
 * See the use below in our type Props definition
 */
import { NavigationParams } from 'react-navigation';

/**
 * Next, let us set up the Prop types that we shall use in our HomeScreen Component
 */
type Props = {
  navigation: NavigationParams
}

/*Let's create a Home component that App will display as Home Screen. It can be whatever name you want*/
const Home: React.FC<Props> = (props) => {
  return(
    <SafeAreaView style={styles.container}>
        <Button title="Go to Component1"
          onPress={()=> props.navigation.navigate('Component1Screen',{
            demoParam: 'This is a route demo parameter'//notice here that you can pass parameters to any navigate route
          }
          )}/>
        <Button title="Go to Component2"
          onPress={()=> props.navigation.navigate('Component2Screen')}/>
          <Button title="Go to Component3"
          onPress={()=> props.navigation.navigate('Component3Screen')}/>
        <Button title="Go to Component4" 
          onPress={()=> props.navigation.navigate('Component4Screen')}/>
        <Button title="Go to Component5"
          onPress={()=> props.navigation.navigate('Component5Screen')}/>
       
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'stretch',
      justifyContent: 'center',
      fontSize: 18
    },
    logo:{
      width: 133,
      height: 55,
      paddingBottom: 50
  }
});

export default Home;