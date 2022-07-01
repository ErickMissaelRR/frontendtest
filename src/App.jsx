import './App.css';
import React from "react";
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './pages/login/login';
import UserList from './pages/userList/userList';
import Album from './pages/album/album';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';


function App() {
  let isLogged = false
  let token = useSelector(state => state.loginSlice.token)

  if (token) {
    isLogged = true;
  } else {
    if (localStorage.getItem('token')) {
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
                <Route path='/user-list' element={<UserList isAlbum={false}/>} />
                <Route path='/album' element={<UserList isAlbum={true} />} />
                <Route path='/album-list' element={<Album />} />
              </Routes>
          {/* <Sidebar /> */}
        </BrowserRouter>
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}



export default App;
