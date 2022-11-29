import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/signupScreen";
import SignInScreen from "./src/screens/signInScreen";
import { AuthContext, AuthProvider } from "./src/topuproviders/Authprovider";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NotificationScreen from "./src/screens/notificationScreen";
import { FontAwesome } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import ProfileScreen from "./src/screens/ProfileScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";



// create Home Screen & List Screen or 2 screen
const HomeStack = createStackNavigator();
function HomeStackScreen(){
  return(
   
      <HomeStack.Navigator initialRouteName="Home"> 
         <HomeStack.Screen name="Home" component={HomeScreen}/>            
      </HomeStack.Navigator>
    
  );
}

const AuthStack = createStackNavigator()
const AuthStackScreen = ()=>{
  return(
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name = 'SignIn' component = {SignInScreen} options={{headerShown:false}}/>
      <AuthStack.Screen name = 'SignUp' component = {SignUpScreen} options={{headerShown:false}} />
    </AuthStack.Navigator>
  )
}
const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      icon = {<FontAwesome name="arrow-circle-o-right" size={18} color="white"  />} 
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
      >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="notification" component={NotificationScreen} />
    </Tab.Navigator>
  );
}

const AppDrawer = createDrawerNavigator ();

const AppDrawerBtn = () =>{
  return (
    <AppDrawer.Navigator>
      <AppDrawer.Screen name = 'Home' component={BottomTab}/>
      <AppDrawer.Screen name = 'Profile' component={ProfileScreen}/>
    </AppDrawer.Navigator>
  )
}

function App(){
  return(
    <AuthProvider>
      <AuthContext.Consumer>
        {(auth)=>(<NavigationContainer>
         {auth.IsLoggedIn ? <AppDrawerBtn/>:<AuthStackScreen />}
        </NavigationContainer>)}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}
export default App;