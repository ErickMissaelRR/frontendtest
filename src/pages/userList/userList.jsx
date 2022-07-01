import React, { useEffect, useState } from 'react';
import { getAllUsersData } from '../../slices/albumSlice'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../../components/Sidebar';
import { useNavigate } from 'react-router-dom'
import { UserCard, UserCardImage, UserCardBody, UserCardBodyTitle, UserCardContainer, UserCardDescription } from '../../styledComponents/user-card'


function UserList(props) {


    const { usersData } = useSelector(state => state.albumSlice)
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [state, setState] = useState(false);

    const handleChange = (checked) => {
        setState(checked)
      }

    const goToAlbum = () => {
        navigate('/album-list')
    }


    useEffect(() => {
        dispatch(getAllUsersData())
    }, [])
    
        
    const album = usersData.map((user, index) =>
    <>
        <UserCard key={index} onClick={() => goToAlbum()}>
            <UserCardImage src={user.avatar}></UserCardImage>
            <UserCardBody>
                <UserCardBodyTitle>
                    {user.first_name} {user.last_name}
                </UserCardBodyTitle>
            </UserCardBody>
            <UserCardContainer>
                <UserCardDescription>
                     {user.email}
                </UserCardDescription>
            </UserCardContainer> 
        </UserCard> 
    </>   
    );

    const userList = usersData.map((user, index) =>
    <>
        <UserCard key={index} onClick={() => {
            handleChange((curr) => !curr);
          }}>
            <UserCardImage src={user.avatar}></UserCardImage>
            <UserCardBody>
                <UserCardBodyTitle>
                    {user.first_name} {user.last_name}
                </UserCardBodyTitle>
            </UserCardBody>
            <UserCardContainer>
                <UserCardDescription>
                     {user.email}
                </UserCardDescription>
            </UserCardContainer> 
        </UserCard>
        {state ? <Sidebar id={user.id}/> : <> </>}  
    </>   
    );
    if(props.isAlbum){
        return (
            <div className="container">
                <div className='row row-cols-3 justify-content-center mb-4'>
                    {album} 
                </div>
            </div>    
        );
    } else {
        return (
            <div className="container">
                <div className='row row-cols-3 justify-content-center mb-4'>
                    {userList} 
                </div>
            </div>    
        );
    }
    
}


export default UserList