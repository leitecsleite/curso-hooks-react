
import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('click h1');
}

function App() {
    const [counter,setCounter] = useState(0);
    const [counter2,setCounter2]= useState(0);
    //componentDidUpdate - executa toda vez que o component atualiza
//    useEffect(()=> {
//      console.log("componente  foi  atualizado");
//    });

    //componentDidMount - executa apenas umas 1x
     useEffect(() => {
          document.querySelector('h1')?.addEventListener('click',eventFn);

          //remove o lixo - limoar o comnponente;
          return() => {
            document.querySelector('h1')?.removeEventListener('click');
          };
      }, []);

    //Com dependência executa toda vez que o contador mudar de estado
    useEffect(()=>{
        console.log("Contador mudou de estado");
    },[counter,counter2]);

  return (
    <div className="App">
       <h1>Contador:{counter} Contador2:{counter2}
        </h1>
       <button type="button" onClick= {() => setCounter(counter + 1)}>
           +
       </button>

       <button type="button" onClick= {() => setCounter2(counter + 1)}>
           +2
       </button>



    </div>
  );
}

export default App;
