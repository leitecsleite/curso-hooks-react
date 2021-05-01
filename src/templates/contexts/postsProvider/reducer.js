import * as types from './types';


export const reducer = (state, action) => {
   // eslint-disable-next-line default-case
   switch (action.type){
       case types.POSTS_SUCESS: {
           console.log(action.type);
           return {...state, posts: action.payload};
   }
 }
    console.log('Não encontrei a action', action.type);
    return{ ...state};
}
