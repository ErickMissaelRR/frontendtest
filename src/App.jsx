import './App.css';
import React, { useEffect } from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/login/login';
import UserList from './pages/userList/userList';
import Posts from './pages/posts/posts';
import Navbar from './components/Navbar';


function App() {
  let isLogged = false
  let token = useSelector(state => state.loginSlice.token)

  if (token) {
    isLogged = true;
  } else {
    if(localStorage.getItem('token')){
      token = localStorage.getItem('token')
    }
    isLogged = false;
  }

  if (token) {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<LogIn />} />
            <Route path='/user-list' element={<UserList />} />
            <Route path='/posts' element={<Posts />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LogIn />} />
          <Route path='/user-list' element={<UserList />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
    )
  }
}



export default App;
