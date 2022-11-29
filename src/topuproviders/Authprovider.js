import React, {useState} from "react";

const AuthContext = React.createContext();

const AuthProvider = (props)=>{
    const [CurrentUser, setCurrentUser] = useState({});
    const [IsLoggedIn, SetIsLoggedIn]   = useState(false);

    return (
        <AuthContext.Provider 
            value={{
                CurrentUser:CurrentUser, 
                setCurrentUser:setCurrentUser,
                IsLoggedIn:IsLoggedIn,
                SetIsLoggedIn:SetIsLoggedIn,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export {AuthContext, AuthProvider};
