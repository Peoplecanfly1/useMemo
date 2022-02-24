import React, {useCallback} from 'react';
import Count from './components/Count';
import IsFive from './components/IsFive';

const CountOne = React.memo(Count)

function App() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const foo = React.useCallback(()=>{
      setCount1((prevValue)=>prevValue + 1)
  },[])
    const bar = React.useCallback(()=>{
        setCount2((prevValue)=>prevValue + 1)
    },[])

  return (
    <div className="App">

      <h5>Счетчик 1: </h5>
      <div className="counter">
        <button onClick={foo}>+</button>
        <CountOne id={1} value={count1} />
      </div>

      <h5>Счетчик 2: </h5>
      <div className="counter">
        <button onClick={bar}>+</button>
        <CountOne id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  );
}

export default App;
