import { postLogin } from '../../slices/loginSlice';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { LoginCard, LoginHeader, LoginHeaderTitle, LoginCardBody, LoginInputContainer, LoginInput, LoginEyeIcon, LoginHeaderSubTitle, LoginForgottenPaswword, LoginButton, LoginError } from '../../styledComponents/login-card';

function LogIn() {

    const token = useSelector(state => state.loginSlice.token)
    const error = useSelector(state => state.loginSlice.error)
    const dispatch = useDispatch();
    const [newCredentials, setNewCredentials] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();


    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token)
            navigate('/user-list')
        }
    }, [token])


    const login = () => {
        dispatch(postLogin(newCredentials));
    };

    return (
        <div className="LogIn">
            <header className="App-header">
            <LoginCard>
                <LoginHeader>
                    <LoginHeaderTitle>
                        Sign in
                    </LoginHeaderTitle>
                    <LoginHeaderSubTitle>
                        Welcome
                    </LoginHeaderSubTitle>
                    <LoginCardBody>
                        <LoginInputContainer>
                            <LoginInput type="email" placeholder="Email" required onChange={(e) => setNewCredentials({ ...newCredentials, email: e.target.value })}></LoginInput>
                        </LoginInputContainer>
                        <LoginInputContainer>
                            <LoginInput type="password" placeholder="Password" required onChange={(e) => setNewCredentials({ ...newCredentials, password: e.target.value })}></LoginInput>
                            <LoginEyeIcon className="fa fa-eye" eye small></LoginEyeIcon>
                        </LoginInputContainer>
                        <LoginError>
                            {error}
                        </LoginError>
                        <LoginButton onClick={login}>
                            Sign in
                        </LoginButton>
                        <LoginForgottenPaswword>
                            Forgot your pawword?
                        </LoginForgottenPaswword>
                    </LoginCardBody>
                </LoginHeader>
            </LoginCard>
            </header>
        </div>
    )

}

export default LogIn