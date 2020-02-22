// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// type Props = {
//     name?: string;
// }

// const Component2: React.FC<Props> = (props) => {
//   return (
//     <View>
//         <Text>
//             Hello <Text style={{color: 'red'}}>{props.name}</Text>. Greetings from React Native
//         </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   text:{
//     color: '#fff',
//     fontSize: 20,
//     backgroundColor: 'blue',
//     padding: 6,
//     alignItems: 'center'
//   }
// });

// Component2.defaultProps = {
//     name: "John"
// } 

// export default Component2;

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//Import NavigationParams if we need to invoke navigation. Import NavigationRoute if we need to get parameters passed
import { NavigationParams } from 'react-navigation';

type Props = {
  name?: string;
  navigation: NavigationParams,
}

const Component2: React.FC<Props> = (props) => {
  return (
        <View>
            <Text>
                Hello <Text style={{color: 'red'}}>{props.name}</Text>. Greetings from React Native
            </Text>
            <Button title='Go Back' onPress={()=>props.navigation.goBack()}/>   
        </View>
      );
    }

const styles = StyleSheet.create({
  text:{
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 6,
    alignItems: 'center'
  }
});

Component2.defaultProps = {
    name: "John"
} 

export default Component2;