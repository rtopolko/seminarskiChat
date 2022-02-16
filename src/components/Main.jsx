import {useState,useContext} from 'react'
import { SCALEDRONE } from './const'
import { Scaledrone_context, LogiraniKorisnik_context } from './context'
import Logiranje from './login/Logiranje'
import ChatRoom from './chat/ChatRoom';
import Info from './info/Info';

export default function Main() {

    const { fn_korisnikPodaci,fn_odjava,modal} = useContext(LogiraniKorisnik_context)
    
    const [korisnik, setKorisnik] = useState("");
    const [drone, setDrone] = useState(null);

    const CHANAL_ID = process.env.REACT_APP_CHANNEL_ID;
    
    const fn_logiraniKorisnikPodaci = (korisnikIme, korisnikIkonaID) => {

        if (korisnikIme) {
            const drone = new window.Scaledrone(CHANAL_ID, {
                data: { korisnikIme, korisnikIkonaID }
            });

            if (!korisnik) {
                drone.on(SCALEDRONE.OPEN, () => {
                    setDrone(drone);
                    setKorisnik({ id: drone.clientId, korisnikIme, korisnikIkonaID });
                    fn_korisnikPodaci(korisnikIme, korisnikIkonaID);
                })
            }            
        }
    }

//odjava iz programa
      const fn_korisnikLogout = () =>{
        drone.close();
        setDrone(null);
        setKorisnik(null);
        fn_odjava(null);
    }

     if (modal) {
        document.body.classList.add('active-modal')
    } else {
       document.body.classList.remove('active-modal') 
    }

    return (       
        <>           
            <Scaledrone_context.Provider value={{ korisnik, drone, fn_logiraniKorisnikPodaci, fn_korisnikLogout}}>
                        {!korisnik && <Logiranje />}
                        {korisnik && <ChatRoom />}
            </Scaledrone_context.Provider>
            {modal && <Info/>}
        </>
    )
}
