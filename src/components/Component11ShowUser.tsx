import React from 'react';
import { View, Text } from 'react-native';

type User = {
    id: number,
    uniqueEmployeeIdentification_17100310846: string,
    dateOfEmployment: Date,
    modeOfEmployment_17100310846: string,
    jobTitle_17100310846: string,
    firstName_17100310846: string,
    lastName_17100310846: string,
    dateOfBirth: Date,
    nationality_17100310846: string,

    
}

type Props = {
    user?: User | undefined //to accommodate undefined possibility
}
const Component11ShowUser: React.FC<Props> = (props)  => {
    const showUser = () => {
        const user: User = props.user; 
        try{
            if(user.id !== undefined){
                return(
                    <View>
                        <Text>User data fetched from remote source:</Text>
                        <Text>id: {user.id}</Text>
                        <Text>Unique Employee Identification: {user.uniqueEmployeeIdentification_17100310846}</Text>
                        <Text>Date Of Employment: {user.dateOfEmployment}</Text>
                        <Text>Mode Of Employment: {user.modeOfEmployment_17100310846}</Text>
                        <Text>Job Title: {user.jobTitle_17100310846}</Text>
                        <Text>First Name: {user.firstName_17100310846}</Text>
                        <Text>Last Name: {user.lastName_17100310846}</Text>
                        <Text>Nationality: {user.nationality_17100310846}</Text>
                        <Text>Date Of Birth: {user.dateOfBirth}</Text>
                    </View>
                )
            }else{
                return <Text>No user to display</Text>; //user is null or elements are undefined
            }
        }catch(error){
            return <Text>Problem displaying user: ${error.message}</Text>;
        }
    }
    
    return (
        <View>
            {showUser()} 
        </View>
    )
}

Component11ShowUser.defaultProps = {
    user: undefined
}
export default Component11ShowUser;