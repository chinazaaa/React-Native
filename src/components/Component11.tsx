/**Similar to Component5 but involves indicating remote user data to load 
 * useRef is not working here, so we use regular variable.
*/
import React, {useState, useEffect} from 'react';
import Component11ShowUser from './Component11ShowUser';
import { View, Text, TextInput, Button } from 'react-native';

const Component11: React.FC = ()  => {
    //const [state, setState] = useState(initialState);
    const [user, setUser] = useState(undefined);

    //let userIdInput: any = useRef();
    let userIdInput: string = '1';

    const fetchData = async (url: string) =>{
        try {
            let response = await fetch(url);
            let data = await response.json()
            setUser(data);   
        } catch (error) {
            //console.log(error.message)
            setUser(undefined);
        }
    };

    useEffect(() => {
        fetchData(`https://jsonplaceholder.typicode.com/users/1`);
        //userIdInput.current.focus(); //focus on the referenced input field after fetching initial data
    }, []); //the second parameter [] will ensure that this useEffect runs only once.
    //conditionally show user if not undefined
    const showUser = () => {
        if (user!==undefined){
            return <Component11ShowUser user={user} />
        }
        else {
            return <Text>No user to display</Text>;
        }
    }

    return (
        <View>
            <Text>Greetings from Component10.</Text> 
            {/** Below, let's use usual onChangeText */}
            
            <View>
                {showUser()}
            </View>
        </View>
    )
}

export default Component11;