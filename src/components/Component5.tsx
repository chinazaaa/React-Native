/** Here we illustrate useEffect and fetching remote data */
import React, {useState, useEffect} from 'react';
import Component5ShowUser from './Component5ShowUser';
import { View, Text,Button } from 'react-native';
import { NavigationParams } from 'react-navigation';
type Props = {
    
    navigation: NavigationParams,

}
const Component5: React.FC<Props> = (props)  => {
    //const [state, setState] = useState(initialState);
    const [user, setUser] = useState(undefined);

    const fetchData = async () =>{
        try {
            let response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
            let data = await response.json()
            setUser(data);   
        } catch (error) {
            console.log(error.message)
            setUser(undefined);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); //the second parameter [] will ensure that this useEffect runs only once.

    //conditionally show user if not undefined
    const showUser = () => {
        if (user!==undefined){
            return <Component5ShowUser user={user} />
        }
        else {
            return <Text>No user to display</Text>;
        }
    }

    return (
        <View>
            <Text>Greetings from Component5.</Text> 
            <View>
                {showUser()}
            </View>
            <Button title='Go Back' onPress={()=>props.navigation.goBack()}/> 
        </View>
    )

}

export default Component5;