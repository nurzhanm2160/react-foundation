import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Описание поста"
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}
            />
            <MyButton onClick={addNewPost} >создать пост</MyButton>
        </form>
    );
};

export default PostForm;