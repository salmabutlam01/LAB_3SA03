import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import WordCard from './WordCard';
import Timer from './Timer';


  function App(){
    const [seconds, setSeconds] = React.useState(10);
    React.useEffect(() => {
      console.log(<Timer initialMinute={0} initialSeconds={0}/>)
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('BOOOOM!');
      }
    },)
    return(
      <div>
         <a><h1>  HELLO GAME  </h1></a>
         <p>
             Lab_3SA03 Salma Butlam 6135512052
         </p>
      <div>
        {seconds}
      </div>
        <WordCard value="Hello" />
      </div>
 );}
 export default App;