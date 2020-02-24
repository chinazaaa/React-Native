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
        

        <Button title="Go to Component6" color='pink'
          onPress={()=> props.navigation.navigate('Component6Screen')}/>
        <Button title="Go to Component7" color='pink'
          onPress={()=> props.navigation.navigate('Component7Screen')}/>
        <Button title="Go to Component8" color='pink'
          onPress={()=> props.navigation.navigate('Component8Screen')}/>
        <Button title="Go to Component9" color='pink'
          onPress={()=> props.navigation.navigate('Component9Screen')}/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
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