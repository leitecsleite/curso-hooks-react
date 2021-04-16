
import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: ' o titulo que contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch(action.type){
     case 'muda': {
       console.log('chamou muda com', action.payload);
       return {...state, title: action.payload};
     }

  }
};


function App() {
  const[state, dispatch]= useReducer(reducer, globalState);
  const { counter, title, body} = state;

  return(
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Invert</button>
      <button onClick={() => dispatch({ type: 'QUALQUERCOiSA' })}>
        SEM ACTION
      </button>
    </div>
  );
}

export default App;
