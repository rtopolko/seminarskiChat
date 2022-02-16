import React,{useContext,useState} from 'react'
import {Chat_context } from '../../context'
import { HTMLobjekti } from '../../const';

export default function Chat_salji() {

    const { BUTTON_OK, INPUT_PLACEHOLDER } = HTMLobjekti;
    
    const {fn_saljiPoruku}=useContext(Chat_context)
    const [novaPoruka, setNovaPoruka] = useState("");

    function fn_sendMessage(e) {
        e.preventDefault();
         if (novaPoruka && novaPoruka.replace(/\s/g, "").length > 0) {
                fn_saljiPoruku(novaPoruka);
                setNovaPoruka("");
            }
}

    return (    
            <form onSubmit={fn_sendMessage} className="box">               
                <input className="input_box" type="text" placeholder={INPUT_PLACEHOLDER} onChange={(e) => setNovaPoruka(e.target.value)} value={novaPoruka}></input>
                <button className="button_box" >{BUTTON_OK}</button>               
            </form>     
    )
}