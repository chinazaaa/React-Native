// import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
// //Import NavigationParams if we need to invoke navigation. Import NavigationRoute if we need to get parameters passed
// import { NavigationParams, NavigationRoute } from 'react-navigation';

// type Props = {
//   navigation: NavigationParams,
//   route: NavigationRoute
// }

// const Component1: React.FC<Props> = (props) => {
//   return (
//     <View>
//         <Text style={styles.text}>
//             Hello from <Text style={{color: 'red'}}>Component1!</Text>
//         </Text>
//         <Text style={styles.text}>
//           {`The value of the parameter passed to me through the navigation route is '${props.route.params.demoParam}'`}
//         </Text>
//         <Button title='Go Back' onPress={()=>props.navigation.goBack()}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 24
//   },
//   text:{
//     color: '#fff',
//     fontSize: 20,
//     backgroundColor: 'blue',
//     padding: 6,
//     alignItems: 'center',
//     marginBottom: 3,
//   }
// });

// export default Component1;
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//Import NavigationParams if we need to invoke navigation. Import NavigationRoute if we need to get parameters passed
import { NavigationParams, NavigationRoute } from 'react-navigation';

type Props = {
  navigation: NavigationParams,
  route: NavigationRoute
}

const Component1: React.FC<Props> = (props) => {
  return (
    <View>
        <Text style={styles.text}>
            Hello from <Text style={{color: 'red'}}>Component1!</Text>
        </Text>
        <Text style={styles.text}>
          {`The value of the parameter passed to me through the navigation route is '${props.route.params.demoParam}'`}
        </Text>
        <Button title='Go Back' onPress={()=>props.navigation.goBack()}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24
  },
  text:{
    color: '#fff',
    fontSize: 20,
    backgroundColor: 'blue',
    padding: 6,
    alignItems: 'center',
    marginBottom: 3,
  }
});

export default Component1;