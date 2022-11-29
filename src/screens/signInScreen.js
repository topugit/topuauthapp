import React, { useState } from "react";
import {StyleSheet, View} from 'react-native';
import {Input, Button, Card, Tab} from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import {AuthContext} from "../topuproviders/Authprovider";
import { getDataJSON } from "../functions/topuAsyncStorage";
import { Alert } from "react-native";


const SignInScreen = (props) => {
    // console.log(props)
    const [Email, setEmail]         = useState("");
    const [Password, setPassword]   = useState(""); 
     return (
         <AuthContext.Consumer>
           {(auth)=>(<View style ={styles.viewStyle}>
             <Card>
                <Card.Title>Welcome to Auth App!</Card.Title>
                <Card.Divider/>
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
                        title="Sign In" 
                        onPress={
                               async function (){
                               let UserData = await getDataJSON(Email);
                               if(UserData.Password == Password){
                                auth.SetIsLoggedIn(true);
                                auth.setCurrentUser(UserData);
                               }else{
                                alert('Login failed');
                                console.log(UserData);
                                console.log(UserData.password);
                               }
                            }
                        }
                    />
                <Card.Divider/>
                
                <Button 
                    name ="noaccount" 
                    type ="clear" 
                    title="Don't have account?"
                    onPress={
                        function (){
                            props.navigation.navigate("SignUp")
                        }
                    }
                />
             </Card>
             
         </View>)}
         </AuthContext.Consumer>
     
 
     );
 }
 
 const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',        
    }
});
 
 export default SignInScreen;