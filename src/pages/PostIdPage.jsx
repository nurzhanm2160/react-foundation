import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../DAL/PostService";
import Loader from "../components/UI/Loader/Loader";


const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const [fethchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fethchCommentsById, isCommentsLoading, CommentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => {
        fethchPostById(params.id)
        fethchCommentsById(params.id)
    }, [])
    return (
        <div>
            <h1>Вы открыли страницу поста с ID = {params.id}</h1>
            {isLoading
                ?   <Loader />
                :   <div>{post.id}. {post.title}</div>
            }
            <h1>Коментарии: </h1>
            { isCommentsLoading
                ? <Loader />
                : <div>
                    {comments.map(comment =>
                            <div key={comment.id} style={{marginTop: 15}}>
                                <h5>{comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;