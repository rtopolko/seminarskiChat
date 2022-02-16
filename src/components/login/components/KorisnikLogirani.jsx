import  { useState,Fragment } from 'react';
import {NAZIV, PORUKE}  from '../../const';

//PROPS:
export default function KorisnikLogirani(props) {
    
    const {KORISNIK,KORISNIK_MAX } = NAZIV;
    const { GRESKA_KORISNIK } = PORUKE;

    const [noviKorisnik, setNoviKorisnik] = useState("");
    const [error, setError] = useState("");
   
    const fn_staviNoviKorisnik = (e) => {
        e.preventDefault(); //sprjecava novo renderiranje cijele app
        setNoviKorisnik(e.target.value);
    }

    const fn_saljiKorisnika = () => {

        if (!noviKorisnik || !noviKorisnik.replace(/\s/g, "").length) {
            setError(GRESKA_KORISNIK);
        } else {
            //saljem upisano ime korisnika - koristim props za primjer
            props.fn_staviLogiraniKorisnik(noviKorisnik);
            setNoviKorisnik("");
            setError(null);
        }      
    }

    return (
        <form className="logiranje_forma logiranje_box logiranje_pozadina ">                
            <Fragment><p className="logiranje_greska">{error}</p></Fragment> 
          
            <div className="logiranje_kontejner">
                <div className="logiranje_kontejner_input">
                    <input type='text' required value={noviKorisnik} onChange={fn_staviNoviKorisnik} maxLength="10"></input>
                    <div className="logiranje_kontejner_linija"></div>
                    <label>{KORISNIK}<span className="max_znakova">{KORISNIK_MAX}</span> :</label>
                </div>
            </div>

            <button type="button" className="logiranje_button" onClick={fn_saljiKorisnika}>OK</button>                                                            
        </form>
 )
}
