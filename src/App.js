
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
            <div style={{margin:5}}>
                <Button onClick={onClose} style={{width: "100%"}} color="success" variant="contained" >Close Window</Button>
            </div>

        </div>
          <div style={{margin:5}}>
              <p>
            user first_name -
                  {tg.initDataUnsafe?.user?.first_name}
                </p>
              <p>
            user last_name -
                  {tg.initDataUnsafe?.user?.last_name}
        </p>
              <p>
            user id -
                  {tg.initDataUnsafe?.user?.id}
        </p>
          </div>
          <div style={{margin:5}}>
              <TextField style={{width: "100%"}} id="outlined-basic" label="Email" variant="outlined" onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div style={{margin:5}}>
              <TextField style={{width: "100%"}} id="outlined-basic" label="Password" variant="outlined" onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div style={{margin:5}}>
              <Button style={{width: "100%"}} variant="contained" onClick={()=> onClickSave()}>Sign In</Button>
          </div>
          <ApexChart/>
      </div>
  );
    }

    export default App;
