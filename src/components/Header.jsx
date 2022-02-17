import {useContext,Fragment,useState} from 'react'
import {LogiraniKorisnik_context, Ikone_context } from './context'
import {Staza_ikone} from "./utility/Staza_ikone"
import IKONA_CHAT from "../assets/images/ChatApp.png"
import { NASLOV, PORUKE } from "./const";

export default function Header() {
    const { CHAT_NASLOV } = NASLOV;
    const { LOGIRANI_KORISNIK } = PORUKE;
    const { spremljeneSveIkone } = useContext(Ikone_context)
    const { logiraniKorisnik,logiraniKorisnikIkonaID,fn_toggleModal } = useContext(LogiraniKorisnik_context)

    return (
        <Fragment>
            {logiraniKorisnik && 
                <Fragment>
                     <img src={Staza_ikone(logiraniKorisnikIkonaID, spremljeneSveIkone)} className="header_logo_programa" alt="Ikona" height="65px" title="Ikona korisnika"/>
                    <p className="header_naslov_app">{LOGIRANI_KORISNIK}  {logiraniKorisnik}</p>
                </Fragment>
            }
            {!logiraniKorisnik &&
                <Fragment>                                      
                    <img src={IKONA_CHAT} className="header_logo_programa" alt="aplikacija_logo" height="65px" title="Ikona aplikacije"/>                
                    <p className="header_naslov_app">{CHAT_NASLOV}</p>
                    <div className="button_app">
                        <button className="button_info" onClick={fn_toggleModal}>Info</button>
                    </div> 
                </Fragment>
            }

        </Fragment>
    )
}
