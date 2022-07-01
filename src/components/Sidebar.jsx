import { UserCard, UserCardImage, UserCardBody, UserCardBodyTitle, UserCardContainer, UserCardDescription } from '../styledComponents/user-card'
import {getUserById} from '../slices/postSlice'
import Posts from './Posts'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react';

function Sidebar(props) {

    const id = props.id

    const usersData = useSelector(state => state.albumSlice)
    console.log('personal', usersData)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserById(id))
    }, [])

    const personalData = usersData?.map((post, index) =>
        <UserCard key={index}>
            <UserCardImage src={post?.avatar}></UserCardImage>
            <UserCardBody>
                <UserCardBodyTitle>
                    {post?.first_name} {post?.last_name}
                </UserCardBodyTitle>
            </UserCardBody>
            <UserCardContainer>
                <UserCardDescription>
                    {post?.email}
                </UserCardDescription>
            </UserCardContainer>
        </UserCard>
    );

    return (
        <div className='slidebar'>
            {personalData}
                <li>
                    <Posts id={id}></Posts>
                </li>
        </div>
    );
}

export default Sidebar
