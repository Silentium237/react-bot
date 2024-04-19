
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
            user name -
            {tg.initDataUnsafe?.user?.username}
        </span>
        <span>
            user id -
            {tg.initDataUnsafe?.user?.id}
        </span>
        <span>
            chat id -
            {tg.initDataUnsafe?.chat?.id}
        </span>
    </div>
  );
    }

    export default App;
