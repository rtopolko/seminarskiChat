import {useContext,Fragment} from 'react'
import { Chat_context,Scaledrone_context } from '../../context'
import { SCALEDRONE  } from "../../const"
import ChatPorukeLijevo from './Chat_porukeLijevo';
import ChatPorukeDesno from './Chat_porukeDesno';
import ScrollableFeed from 'react-scrollable-feed'

export default function Chat_poruke() {

    const { MEMBER_JOIN, MEMBER_LEAVE } = SCALEDRONE
    
  const { svePoruke } = useContext(Chat_context);
  const { korisnik } = useContext(Scaledrone_context);

  return (
    <div className='forma_poruke'>
        <ScrollableFeed>
    
          {svePoruke && svePoruke.map((msg) => {

                if (msg.type === MEMBER_JOIN) {
                        return (
                            <Fragment key={msg.id}>
                             <p className ="noviKorisnik">{msg.korisnikNovi.korisnikIme} {msg.porukaPridruzi}</p>
                            </Fragment>
                        );
                } else if (msg.type === MEMBER_LEAVE) {
                        return (
                            <Fragment key={msg.id}>
                            <p className="napustioKorisnik">{msg.korisnikNapustio.korisnikIme} {msg.porukaNapustio}</p>
                            </Fragment>
                        );
                        
                } else {
                        return (
                          <Fragment key={msg.id}>
                            {korisnik.id === msg.korisnikSalje.id
                              ? <ChatPorukeLijevo msg={msg}/>
                              : <ChatPorukeDesno msg={msg}/>
                            }
                            </Fragment>
                        );
                        }
      })}
         </ScrollableFeed>
      </div>
  
  );
}
