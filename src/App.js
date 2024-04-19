
import './App.css';
import {useEffect} from "react";

    let tg = window.Telegram.WebApp;
    function App() {
    useEffect(()=>{
        tg.ready();
    },[])

    const onClose=()=>{
        tg.close()
    }
  return (
    <div className="App">
      work
      <button onClick={onClose}>
        закрыть
      </button>
        <span>
            user first_name -
            {tg.initDataUnsafe?.user?.first_name}
        </span>
        <span>
            user last_name -
            {tg.initDataUnsafe?.user?.last_name}
        </span>
        <span>
            user id -
            {tg.initDataUnsafe?.user?.id}
        </span>
    </div>
  );
    }

    export default App;
