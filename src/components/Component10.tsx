import React, {useState} from 'react';
import { View, Text, TextInput,StyleSheet, MenuOption,Button, TouchableWithoutFeedback, Platform,  Switch, Slider, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
type EmployeeItemType = {
    id? : string,
   uniqueEmployeeIdentification_17100310846: string,
   dateOfEmployment?: Date, 
    modeOfEmployment_17100310846?: string,
    jobTitle_17100310846: string,
    firstName_17100310846?: string,
    lastName_17100310846?: string,
   dateOfBirth?: Date,
    nationality_17100310846: string
}
type StateVariables = {
    employeeItem: EmployeeItemType,
        showDatePicker: boolean
    }
const Component10: React.FC = ()  => {
        //const [state, setState] = useState(initialState);
        const initialState = {
            employeeItem: {
                uniqueEmployeeIdentification_17100310846: '',
                dateOfEmployment: null,
                modeofEmployment_17100310846:'',
                jobTitle_17100310846: '',
                
                firstName_17100310846: '',
                lastName_17100310846:'',
                dateOfBirth: null,
                nationality_17100310846: ''
              
            },
            showDatePicker:false
    }
    const [state, setState] = useState<StateVariables>(initialState);

    const setdateOfEmployment = (_event,date: Date) => {
                const dateOfEmployment = date || state.employeeItem.dateOfEmployment; //if no date is passed with call, use the existing dateCommissioned
                setState({...state, employeeItem:{...state.employeeItem, dateOfEmployment: dateOfEmployment}, showDatePicker: Platform.OS === 'ios' ? true : false})//no need to hide if Platform is iOS
            }
    const setdateOfBirth = (_event,date: Date) => {
                const dateOfBirth = date || state.employeeItem.dateOfBirth; //if no date is passed with call, use the existing dateCommissioned
                setState({...state, employeeItem:{...state.employeeItem, dateOfBirth: dateOfBirth}, showDatePicker: Platform.OS === 'ios' ? true : false})//no need to hide if Platform is iOS
            }
  //let us set up the save function that will interact with the strapi at the backend
  const handleCreateItem = async (itemToCreate: EmployeeItemType) => {
    //let's try to write to backend
    try {
      const response = await fetch('http://10.1.85.88:1337/employee-items',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToCreate) // body data type must match "Content-Type" header
      });
      if (!response.ok) throw new Error(response.statusText);//confirm that response is OK, else throw error
      //Response is ok. Proceed!
      const itemCreated: EmployeeItemType = await response.json();
      //Here, set state to show that item has been successfully created. Meanwhile, check your strapi
    }catch(error) {
      //Here, set state to show that item creating has failed
      console.log(error)
    }
  }

return (
    <View>
        <Text>Greetings from Naza. Fill the form and submit</Text> 
        <View>
            <Text>Unique Employee Identification:</Text>
            <TextInput placeholder='Enter Unique Employee Identification'
                onChangeText={(text)=>setState({...state, employeeItem:{...state.employeeItem, uniqueEmployeeIdentification_17100310846:text}})}
                value={state.employeeItem.uniqueEmployeeIdentification_17100310846}
                autoFocus={true}//focus on this once the screen loads
            />
        </View>
        <View>
            <Text>Mode Of Employment:</Text>
            <TextInput placeholder='Enter mode of employment here'
                onChangeText={(text)=>setState({...state, employeeItem:{...state.employeeItem, modeOfEmployment_17100310846:text}})}
                value={state.employeeItem.modeOfEmployment_17100310846}
            />

        </View>
        <View>
            <Text>Job Title:</Text>
            <TextInput placeholder='Enter job title'
                onChangeText={(text)=>setState({...state, employeeItem:{...state.employeeItem, jobTitle_17100310846:text}})}
                value={state.employeeItem.jobTitle_17100310846}
                
                
            />
            <MenuOption value={"Regular"}>
              <Text style={styles.menuContent}>Regular</Text>
            </MenuOption>
            <MenuOption value={"Contract"}>
              <Text style={styles.menuContent}>Contract</Text>
            </MenuOption>
                         {/* <option value="Regular">Regular</option>
                        <option value="Contract">Contract</option> */}
        </View>
        <View>
                <Text>First Name:</Text>
                <TextInput placeholder='Enter first name here'
                    onChangeText={(text)=>setState({...state, employeeItem:{...state.employeeItem, firstName_17100310846:text}})}
                   
                    value={state.employeeItem.firstName_17100310846}
                />
            </View>
            <View>
                <Text>Last Name:</Text>
                <TextInput placeholder='Enter last name here'
                    onChangeText={(text)=>setState({...state, employeeItem:{...state.employeeItem, lastName_17100310846:text}})}
                   
                    value={state.employeeItem.lastName_17100310846}
                />
            </View>
            
            <View>
                <Text>Date of Employment:</Text>
                <TouchableWithoutFeedback onPress = {()=>setState({...state, showDatePicker: true})}>
                    <Text>
                        {state.employeeItem.dateOfEmployment?state.employeeItem.dateOfEmployment.toLocaleDateString("en-gb",{weekday: 'short'}):'--Press here to select date--'} 
                    </Text>
                </TouchableWithoutFeedback>
                {
                    state.showDatePicker && 
                    <DateTimePicker value={state.employeeItem.dateOfEmployment !== null? state.employeeItem.dateOfEmployment: new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={setdateOfEmployment} />
                }
            </View>
            <View>
            <Text>Nationality:</Text>
                <TextInput placeholder='Enter nationality here'
                    onChangeText={(text)=>setState({...state, employeeItem:{...state.employeeItem, nationality_17100310846:text}})}
                   
                    value={state.employeeItem.nationality_17100310846}
                />
            </View>
            <View>
            <View>
                <Text>Date of Birth:</Text>
                <TouchableWithoutFeedback onPress = {()=>setState({...state, showDatePicker: true})}>
                    <Text>
                        {state.employeeItem.dateOfBirth?state.employeeItem.dateOfBirth.toLocaleDateString("en-gb",{weekday: 'short'}):'--Press here to select date--'} 
                    </Text>
                </TouchableWithoutFeedback>
                {
                    state.showDatePicker && 
                    <DateTimePicker value={state.employeeItem.dateOfBirth !== null? state.employeeItem.dateOfBirth: new Date()}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={setdateOfBirth} />
                }
            </View>
            </View>
            
            
            <View>
                {/** Let us invoke a send button */}
                <Button
                    title="Save"
                    onPress={() => handleCreateItem(state.employeeItem)}
                />
            </View>
        </View>
    )
}

export default Component10;
