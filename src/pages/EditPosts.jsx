import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Container, PostForm } from "../components";
function EditPost(){
    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((post) => {
                if(post)
                    setPosts(post)
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])
    return post ? (
        <Container>
            <PostForm post={post}/>
        </Container>
    ): null
}
export default EditPost