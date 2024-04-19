
import './App.css';
import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ApexChart} from "./components/RadarChart";

    let tg = window.Telegram.WebApp;
    function App() {
    useEffect(()=>{
        tg.ready();
    },[])

    const onClose=()=>{
        tg.close()
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onClickSave = () => {
        window.localStorage.setItem("telegram", "true")
    }


  return (
      <div style={{display: "table",
          marginLeft: "auto",
          marginRight: "auto",

      }}>
        <div>
            <button onClick={onClose}>
                закрыть
            </button>
        </div>
          <div>
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
          <div style={{margin:5}}>
              <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div style={{margin:5}}>
              <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div style={{margin:5}}>
              <Button style={{width: "80%"}} variant="contained" onClick={()=> onClickSave()}>Sign In</Button>
          </div>
          <ApexChart/>
      </div>
  );
    }

    export default App;
