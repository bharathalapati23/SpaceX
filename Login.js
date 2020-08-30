import React, { useState, useEffect } from 'react';
import actionType from './UserRoleAction'
import {useDispatch} from 'react-redux' 

function Login(props) {
    
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState();
    const dispatch = useDispatch()

    let sessionLogin = sessionStorage.getItem('login')
    if(sessionLogin) {
        dispatch(actionType(sessionLogin)) 
        props.history.push('/mission');
    }

    // handle button click of login form
    const handleLogin = () => {

        let loginRole = ''
        console.log(value)
        if (value == 'admin') {
            fetch("https://run.mocky.io/v3/17bc3304-499d-484d-88dd-72a26b1dd31f")
                .then(res => res.json())
                .then(
                    (result) => {
                        loginRole = result
                        props.history.push('/mission');
                        dispatch(actionType(loginRole.role))
                        sessionStorage.setItem('login',loginRole.role)
                        
                    },
                    (error) => {
                        console.log(error)
                    }
                )

        }
        else {
            fetch("https://run.mocky.io/v3/bd1ee534-5531-487c-a599-5fcf2d024128")
                .then(res => res.json())
                .then(
                    (result) => {

                        loginRole = result
                        props.history.push('/mission');
                        dispatch(actionType(loginRole.role))
                        sessionStorage.setItem('login',loginRole.role)
                    },
                    (error) => {
                        console.log(error)
                    }
                )

        }
    }

    const handleChange = e => {
        setValue(e.target.value);
    }

    return (
        <div>
            Login<br /><br />
            <div>
                Username<br />
                <input type="text" autoComplete="new-password" onChange={handleChange} />
            </div>
            <div style={{ marginTop: 10 }}>
                Password<br />
                <input type="password" autoComplete="new-password" />
            </div>
            <br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        </div>
    );
}

export default Login;