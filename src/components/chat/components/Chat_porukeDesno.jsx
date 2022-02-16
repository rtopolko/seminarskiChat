import React,{useContext} from 'react'
import { Staza_ikone } from '../../utility/Staza_ikone';
import { Ikone_context} from '../../context'

export default function Chat_porukeDesno({ msg }) {
      
    const { spremljeneSveIkone } = useContext(Ikone_context);
    
    return (
        
             <div className="desno">            
            <span className="poruke_desno">{msg.poslanePoruke}</span>  
            
                <div className="ikona_desno">
                    <span className="ikona_desno_polozaj"><img src={Staza_ikone(msg.korisnikSalje.ikona, spremljeneSveIkone)} alt="Ikona" height="45" title="Ikona"/></span>                
                    <div className="box_korisnik_desno">
                        <span className="korisnik_desno">{msg.korisnikSalje.korisnikIme}</span>
                </div>           
                </div> 
            </div>
    )
}