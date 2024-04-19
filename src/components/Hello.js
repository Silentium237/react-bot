

import {useEffect, useState} from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


let tg = window.Telegram.WebApp;
function Hello ({show, setShow}) {
    useEffect(()=>{
        tg.ready();
    },[])

    const onClose=()=>{
        tg.close()
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [show, setShow] = useState(false)

    // useEffect(()=>{
    //     if (window.localStorage.getItem("telegram")){
    //         setShow(true)
    //     }
    //
    // },[])
    //
    // const onClickSave = () => {
    //     window.localStorage.setItem("telegram", "true")
    //     setShow(false)
    // }


    // if (window.localStorage.getItem("telegram")){
    //     setShow(true)
    // }
    // const onClickSingOut = () => {
    //     alert("55")
    //     window.localStorage.removeItem("telegram")
    //     setShow(true)
    // }


    return (
        <div style={{display: "table",
            marginLeft: "auto",
            marginRight: "auto",

        }}>
            <div>
                <div style={{margin:5}}>
                    <Button onClick={()=>onClose()} style={{width: "100%"}} color="success" variant="contained" >Close Window</Button>
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
            {!show  ? <>
                <div style={{margin:5}}>
                    <TextField style={{width: "100%"}} id="outlined-basic" label="Email" variant="outlined" onChange={(e)=> setEmail(e.target.value)}/>
                </div>
                <div style={{margin:5}}>
                    <TextField style={{width: "100%"}} id="outlined-basic" label="Password" variant="outlined" onChange={(e)=> setPassword(e.target.value)} />
                </div>
                <div style={{margin:5}}>
                    <Button style={{width: "100%"}} variant="contained" onClick={()=> (window.localStorage.setItem("telegram", "true"), setShow(true))}>Sign In</Button>
                </div>
            </> : null}

        </div>
    );
}

export default Hello;
