import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.post}>
        <div className={s.item}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/9/93/Amateur-made_Na%27vi.jpg' />
            { props.message }
            <div>
                <span>like</span>
                {props.likesCount}
            </div>
        </div>
    </div>
}

export default Post;