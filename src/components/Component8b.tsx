//this component uses FlatList to sisplay users from the online source...
import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native';
import Component8bShowUsers from './Component8bShowUsers';

const Component8b: React.FC =() => {
    //i neeed a state variable to hold users because that's what will influence my rendering
    const [users, setUsers] = useState([]); //initialise users as empty array
    const fetchData = async (url: string)=>{
        try{
            const response = await fetch(url);
            const data = await response.json();
            setUsers(data);
        }catch(error){
            setUsers([])
        }
    }
    useEffect(
        // entering a function to execute 
        ()=> {
//to go and fetch our data
                fetchData(`https://json.placeholder.typicode.com/users`);
        },
        //for this to run once, put an empty array
        []
    );
    return(
    <View>
        <Text> Greetings from myself</Text>
        <Component8bShowUsers usersToDisplay={users}/>
        </View>


    )


} 
export default Component8b;