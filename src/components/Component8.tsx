import React, {useState, useEffect} from 'react';
import { View, Text,Button } from 'react-native';
import Component8ShowUsers from './Component8ShowUsers'
import { NavigationParams } from 'react-navigation';
type Props = {
    
    navigation: NavigationParams,

}
const Component8: React.FC<Props> = (props)  => {
    //const [state, setState] = useState(initialState);
    const [users, setUsers] = useState([]);//initialize users as empty array

    const fetchData = async (url: string) =>{
        try {
            let response = await fetch(url);
            let data = await response.json()
            setUsers(data);   
        } catch (error) {
            setUsers([]);
        }
    };

    useEffect(() => {
        fetchData(`https://jsonplaceholder.typicode.com/users`);
        //userIdInput.current.focus(); //focus on the referenced input field after fetching initial data
    }, []); //the second parameter [] will ensure that this useEffect runs only once.

    return (
        <View>
            <Text>Greetings from Component8.</Text> 
            <View>
                <Component8ShowUsers users={users} />
            </View>
            <Button title='Go Back' onPress={()=>props.navigation.goBack()}/> 
        </View>
    )
}

export default Component8;