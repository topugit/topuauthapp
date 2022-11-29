import React, { useState } from "react";
import {StyleSheet, View} from 'react-native';
import {Input, Button, Card} from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import { storeDataJson } from "../functions/topuAsyncStorage";
import { Alert } from "react-native";


const SignUpScreen = (props) => {
    // console.log(props)

    const [Name, setName]           = useState("");
    const [SID, setSID]             = useState("");
    const [Email, setEmail]         = useState("");
    const [Password, setPassword]   = useState("");     
     return (
         <View style ={styles.viewStyle}>
             <Card>
                <Card.Title>Welcome to Auth App!</Card.Title>
                <Card.Divider/>
                <Input 
                    placeholder='Student Name' 
                    type = "text"
                    onChangeText={function(currentInput){
                        setName(currentInput)
                    }}
                />
                <Input 
                    placeholder='Student Id' 
                    type = "number"
                    onChangeText={function(currentInput){
                        setSID(currentInput)
                    }}
                />
                <Input 
                    placeholder='Email Address' 
                    leftIcon={<FontAwesome name="envelope" size={20} color="#4CAF50" />}
                    onChangeText={function(currentInput){
                        setEmail(currentInput)
                    }}
                />
                <Input 
                    placeholder='Password' 
                    secureTextEntry={true} 
                    leftIcon={<FontAwesome name="lock" size={24} color="#4CAF50" />}
                    onChangeText={function(currentInput){
                        setPassword(currentInput)
                    }}
                />
                <Button 
                    icon = {<FontAwesome name="arrow-circle-o-right" size={15} color="white" />}  
                    name ="login" 
                    type ="solid" 
                    title="Sign Up"
                    onPress={function(){
                        let CurrentUser = {
                            name: Name,
                            sid: SID,
                            email: Email,
                            Password: Password,
                        };
                        storeDataJson(Email, CurrentUser);
                        props.navigation.navigate("SignIn");

                     }}
                 />
                <Card.Divider/>
                <Button 
                    name ="noaccount" 
                    type ="clear" 
                    title="Already have account?"  
                    onPress={function(){                        
                         props.navigation.navigate("SignIn");
                     }}                  
                    />
             </Card>
         </View>
     
 
     );
 }
 
 const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',        
    }
});
 
 export default SignUpScreen;