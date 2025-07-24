import React,{useState,useEffect} from 'react'
import { Container  } from '../components'
import appWriteService from '../appWrite/config'
import Postform from '../components/post-form/Postform'
import { useNavigate,useParams } from'react-router-dom';

function Editpost() {
    const [post, setPost] = useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(slug){
            appWriteService.getPost(slug).then((post)=>{
                if(post){
                    setPost(post)
                }
            })
        }else{
            navigate('/')
        }

    },[slug,navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <Postform post={post} />
            </Container>
        </div>
    ) : null;
}

export default Editpost
