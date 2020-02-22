import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationParams } from 'react-navigation';
type Props = {
    name?: string;
    navigation: NavigationParams,

}

const Component3: React.FC<Props> = (props)  => {
    //const [state, setState] = useState(initialState);
    const [name, setName] = useState(props.name);
    const [count, setCount] = useState(0);

    const changeNameToGreet = (text: string) => {
        setName(text);
    }

    return (
        <View>
            <Text>Hello {name}. Greetings from from React-Native.</Text> 
            <View>
                <TextInput placeholder="Write a name here..." onChangeText={changeNameToGreet} autoFocus/>
            </View>
            <View>
                <Text>You clicked {count} times</Text>
                <Button title="Click Me" onPress={() => setCount(count + 1)}/>
                <Button title='Go Back' onPress={()=>props.navigation.goBack()}/>  
            </View>
        </View>
    )
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

Component3.defaultProps = {
    name: "John"
} 

export default Component3;