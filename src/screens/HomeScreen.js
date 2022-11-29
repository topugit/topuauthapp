import React from "react";
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {AuthContext, AuthProvider} from "../topuproviders/Authprovider";
import { FontAwesome } from '@expo/vector-icons';
import {Input, Button, Card, Icon} from '@rneui/themed';

const HomeScreen = (props) => {
    // console.log(props)
     return (
        <ScrollView>
        <AuthContext.Consumer>
           {(auth)=>(<View>
             <Text style ={txtstyles.textStyle}>Welcome {auth.CurrentUser.name} !</Text>
                
                 <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                        uri:
                            'https://awildgeographer.files.wordpress.com/2020/03/bannerhorizontal2k.jpg?w=1024',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component
                        structure than actual design.
                    </Text>
                    
                    <Button
                        icon = {<FontAwesome name="arrow-circle-o-right" size={18} color="white" style ={txtstyles.icon} />} 
                        buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        }}
                        title="VIEW NOW"
                    />
                    </Card>

                    <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                        uri:
                            'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component
                        structure than actual design.
                    </Text>
                    
                    <Button
                        icon = {<FontAwesome name="arrow-circle-o-right" size={18} color="white" style ={txtstyles.icon} />} 
                        buttonStyle={{
                        borderRadius: 0,
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 0,
                        }}
                        title="VIEW NOW"
                    />
                    </Card>

                    <Button 
                        title = 'Logout' 
                        onPress={function(){
                            auth.SetIsLoggedIn(false);     
                            auth.setCurrentUser({});            
                        }}
                    />
            </View>)}
        </AuthContext.Consumer>   
        </ScrollView>                    
     );
 }
 
 const txtstyles = StyleSheet.create(
     {
         textStyle:{
             fontSize: 30,
             color: 'blue',
         },
         icon:{
           marginRight:10
         }
     }
 );
 
 export default HomeScreen;