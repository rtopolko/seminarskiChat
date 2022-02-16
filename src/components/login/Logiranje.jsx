import React, { useState, useContext,useEffect} from 'react';
import { KorisnikLogirani, KorisnikIkona } from "./components";

import {Scaledrone_context,Ikone_context} from '../context'
import  IKONE  from '../const/IkoneApp'

export default function Logiranje() {

    const [appIkone, setAppIkona] = useState([]);

    const [korisnikIme, setKorisnikIme] = useState("");
    const [korisnikIkonaID, setKorisnikIkonaID] = useState("");
    
    const { fn_logiraniKorisnikPodaci } = useContext(Scaledrone_context);
    const { fn_spremiSveIkone } = useContext(Ikone_context);
    
    //kod logiranja stavljam sve ikone u globalnu varijablu - koristim context:
    useEffect(() => {
        setAppIkona(IKONE);
        
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        fn_spremiSveIkone(appIkone);
        fn_logiraniKorisnikPodaci(korisnikIme, korisnikIkonaID);     
        },[korisnikIkonaID])// eslint-disable-line react-hooks/exhaustive-deps

  const fn_logiraniKorisnik = (noviKorisnik) => {
    setKorisnikIme(noviKorisnik);
    };

  const fn_ikonaKorisnik = (odabranaIkonaID) => {
      setKorisnikIkonaID(odabranaIkonaID);
    };
  //koristim PROPS
    return (
        <>
            {!korisnikIme && <KorisnikLogirani fn_staviLogiraniKorisnik={fn_logiraniKorisnik} />}
            {korisnikIme && <KorisnikIkona sveIkone={appIkone} fn_staviIkonaKorisnik={fn_ikonaKorisnik} />}
        </>
    )
}
