import React, { Fragment, useEffect } from 'react';
import { getPostsById } from '../slices/postSlice'
import { useDispatch, useSelector } from 'react-redux'
import * as ReactDOM from 'react-dom';

function Posts(props) {

    const data = useSelector(state => state.postSlice)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsById(props.id))
    }, [])


        const listItems = data.map((post, index) =>
        <div className='posts' key={index}>
            <div>
                <p>{post.title}</p>
                <span>{post.body}</span>
            </div>
        </div>
    );


    return(
        <Fragment>
            {listItems}
        </Fragment>
    )

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Fragment>{listItems}</Fragment>);

}

export default Posts