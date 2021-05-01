import { Posts } from '../components/posts';
import { PostsProvider } from '../contexts/postsProvider';
import './style.css';


function App(){
  return (
   <PostsProvider>
    <div>
      <Posts />
    </div>
   </PostsProvider>
  )
}

export default App;
