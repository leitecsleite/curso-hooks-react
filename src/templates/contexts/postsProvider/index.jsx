import {PostsContext} from './context';
import p from 'prop-types';
import { useReducer } from 'react';
import { reducer} from './reducer';
import { data } from './data';

export const PostsProvider = ({children}) =>{
    const [postsState, postsDispatch] = useReducer (reducer,data )
    // eslint-disable-next-line react/jsx-no-undef
    return <PostsContext.Provider
            value ={{postsState, postsDispatch}}>
            {children}
            </PostsContext.Provider>
}


PostsProvider.propTypes = {
    children: p.node.isRequired,
}
