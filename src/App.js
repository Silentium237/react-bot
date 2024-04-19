
import './App.css';
import {useEffect, useState} from "react";

// import {
//     Routes,
//     Route,
// } from "react-router-dom";

import {ApexChart} from "./components/RadarChart";
import Hello from "./components/Hello";
import Button from "@mui/material/Button";

    let tg = window.Telegram.WebApp;
    function App() {
    useEffect(()=>{
        tg.ready();
    },[])


        const [show, setShow] = useState(false)

        useEffect(()=>{
            if (window.localStorage.getItem("telegram")){
                setShow(true)
            }
        },[])

        const onClickSave = () => {
            window.localStorage.setItem("telegram", "true")
            setShow(true)
        }


  return (
      // <Routes>
      //     <Route path="/" element={<Hello/>} />
      //     <Route path="/chart" element={<ApexChart/>} />
      // </Routes>

      <div style={{display: "table",
          marginLeft: "auto",
          marginRight: "auto",

      }}>
          <Hello show={show} setShow={setShow}/>
          {show ? <ApexChart/> : null}

          {show ?  <div style={{margin:5}}>
              <Button onClick={()=>(window.localStorage.removeItem("telegram"),
                  setShow(false))} style={{width: "100%"}} color="error" variant="contained" >Sing Out</Button>
          </div> : null

          }


      </div>
  );
    }

    export default App;
