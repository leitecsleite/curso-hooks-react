import p from 'prop-types';
import './App.css';
import { useCallback, useState } from 'react';



const Button =({incrementButton}) => {
  return <button onClick ={() => incrementButton(10)}> + </button>;
};

Button.propTypes = {
    incrementButton: p.func,
}


function App() {
    const [counter,setCounter] = useState(0);

    const incrementCounter = useCallback((num) => {
        setCounter((c) => c + num );
    },[]);

  return (
    <div className="App">
       <h1>Contador:{counter}
        </h1>
       <Button incrementButton={incrementCounter}/>
    </div>
  );
}

export default App;
