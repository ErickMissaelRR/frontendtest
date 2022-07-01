import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUserById} from '../../slices/postSlice'
import { UserCard, UserCardBody, UserCardBodyTitle } from '../../styledComponents/user-card'


function Album() {

    const data = useSelector(state => state?.postSlice.usersData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById(1))
    }, [])
    

    const album = data.map((photo, index) =>
    <>
        <UserCard key={index}>
            <UserCardBody>
                <UserCardBodyTitle>
                    {photo.title}
                </UserCardBodyTitle>
            </UserCardBody>
        </UserCard> 
    </>   
    );
    
    
  


    return (
        <div className="container">
            <div className='row row-cols-3 justify-content-center mb-4'>
                {album} 
            </div>
        </div>    
    );
}


export default Album