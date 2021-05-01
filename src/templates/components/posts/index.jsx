import {useContext, useEffect} from 'react';
import {loadPosts} from '../../contexts/postsProvider/actions';
import { PostsContext } from '../../contexts/postsProvider/context';

 export const Posts = () =>  {
     const postsContext = useContext(PostsContext);
     const { postsState, postsDispatch} = postsContext;


     console.log(postsState)

     useEffect(() =>{
         loadPosts(postsDispatch);
     }, [postsDispatch]);

     return (
         <div>
             <h1>OI</h1>
             {postsState.posts.map( post => {
                 return <p key={post.id}>{post.title}</p>
             })}


         </div>
     )
 }
