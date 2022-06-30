import './App.css';
import { postLogin, tokenSelector } from './slices/loginSlice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from "react";
import { LoginCard, LoginHeader, LoginHeaderTitle, LoginCardBody, LoginInputContainer, LoginInput, LoginEyeIcon, LoginHeaderSubTitle, LoginForgottenPaswword, LoginButton } from './styledComponents/login-card';

function App() {

  const token = useSelector(state => state.loginSlice.token )
  const dispatch = useDispatch();
  const [newCredentials, setNewCredentials] = useState({
    email: '',
    password: '',
  });
  // const navigate = useNavigate();


  useEffect(() => {
    if(token){
      // dispatch(clearState());
      console.log(token)
    } else {
      console.log("Fallo")
    }
  }, [token])
  

  const login = () => {
    dispatch(postLogin(newCredentials));
  };

  return (
    <div className="App">
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
            <LoginButton onClick={login}>
              Sing in
            </LoginButton>
            <LoginForgottenPaswword>
              Forgot your pawword?
            </LoginForgottenPaswword>
          </LoginCardBody>
        </LoginHeader>
       </LoginCard>
      </header>
    </div>
  );
}



export default App;
