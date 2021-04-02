
import React, { useContext} from 'react'
import { Redirect, Route} from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRout = ({ children, ...rest }) =>{
  const [userLoggedIn, setUserLoggedIn] =  useContext(UserContext)

      return (
          <Route
            {...rest}
            render={({ location }) =>
              userLoggedIn.email || userLoggedIn.name || userLoggedIn.displayName ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              )
            }
          />
        );
  
}
export default PrivateRout 