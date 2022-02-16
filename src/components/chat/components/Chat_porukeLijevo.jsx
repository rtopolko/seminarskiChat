import React,{useContext} from 'react'
import { Staza_ikone } from '../../utility/Staza_ikone';
import { Ikone_context} from '../../context'

export default function Chat_porukeLijevo({ msg }) {
    
    const { spremljeneSveIkone } = useContext(Ikone_context);
    
    return (
    
        <div className="lijevo">            
            <div className="ikona_lijevo">
                <span className="ikona_lijevo_polozaj"><img src={Staza_ikone(msg.korisnikSalje.ikona, spremljeneSveIkone)} alt="Ikona" height="45" title="Ikona" /></span>
                <div className="box_korisnik_lijevo">
                    <span className="korisnik_lijevo">{msg.korisnikSalje.korisnikIme}</span>
                </div>
            </div>                                     
            <span className="poruka_lijevo">{msg.poslanePoruke}</span>             
        </div>
      
    )
}