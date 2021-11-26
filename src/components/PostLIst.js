import React from 'react';
import PostItem from "./PostItem";

const PostLIst = ({posts, title, remove}) => {


    return (
        <div>
            <h1>{title}</h1>
            {posts.map(post =>
                <PostItem post={post} key={post.id} remove={remove}/>
            )}
        </div>
    );
};

export default PostLIst;