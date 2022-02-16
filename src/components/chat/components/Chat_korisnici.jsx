import {useContext} from 'react'
import { Staza_ikone } from '../../utility/Staza_ikone';
import { Ikone_context, Chat_context, Scaledrone_context } from '../../context';
import { PORUKE } from '../../const';
import ScrollableFeed from 'react-scrollable-feed'

export default function Chat_korisnici() {
    
    const {NASLOV_ZAPAMTI } = PORUKE;
    const { zapamtiKorisnike } = useContext(Chat_context);
    const { spremljeneSveIkone } = useContext(Ikone_context);
    const { fn_korisnikLogout } = useContext(Scaledrone_context);

    return (        
        <>
            <button className="gumb odjava_gumb" onClick={fn_korisnikLogout}>LOGOUT</button>
            <span className="naslov">{NASLOV_ZAPAMTI}</span> 
            
            <div className=' forma_korisnici_prijavljeni '>
                    <ScrollableFeed>
                        { zapamtiKorisnike && zapamtiKorisnike.map((trenutniKorisnici) => {
                                const{korisnikIkonaID,korisnikIme}=trenutniKorisnici.clientData
                            return (
                                <div key={trenutniKorisnici.id} className='zapamti'>                                   
                                    <span className="ikona"><img src={Staza_ikone(korisnikIkonaID,spremljeneSveIkone)} alt="Ikona" height="35" title="Ikona"/></span>
                                    <span className="korisnik">{korisnikIme}</span>                                 
                                </div>                   
                                    )          
                                })
                            }
                        </ScrollableFeed>
             </div>
        </>
    )

}