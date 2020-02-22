import React from 'react';
import {View, Text, FlatList} from 'react-native';
type User = {
    id: string, //this needs to be string for keyExtractor in FlatList not to complain
    name: string,
    username: string,
    email: string,
    address:{
        street: string,
        suite: string,
        city: string,
        zipcode: string 
        geo: {
            lat: number,
            lng: number
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}
type Props ={
    //an array of users
    usersToDisplay: User[]
}
const Component8bShowUsers: React.FC<Props> =(props)=>{
    return(
        <View>
            <FlatList 
            data={props.usersToDisplay}
            renderItem={
                ({item}) =>(
                    <View>
                        <Text>Id={item.id}</Text>
                        <Text>Name={item.name}</Text>
                        <Text>Username={item.username}</Text>
                        <Text>Email={item.email}</Text>
                        <Text>Street={item.address.street}</Text>
                        <Text>City={item.address.city}</Text>
                        <Text>Phone={item.phone}</Text>
                        <Text>Website={item.website}</Text>
                        </View>
                )
            }
            
            />
             </View>
   
    )
}
export default Component8bShowUsers;