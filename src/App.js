
import './App.css';
import {useEffect} from "react";

import {
    Routes,
    Route,
} from "react-router-dom";

import {ApexChart} from "./components/RadarChart";
import Hello from "./components/Hello";

    let tg = window.Telegram.WebApp;
    function App() {
    useEffect(()=>{
        tg.ready();
    },[])

  return (
      <Routes>
          <Route path="/" element={<Hello/>} />
          <Route path="/chart" element={<ApexChart/>} />
      </Routes>

      // <div style={{display: "table",
      //     marginLeft: "auto",
      //     marginRight: "auto",
      //
      // }}>
      //     <Hello/>
      //     <ApexChart/>
      //
      // </div>
  );
    }

    export default App;
