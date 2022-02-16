import {useContext,useEffect,useState} from 'react'
import {SCALEDRONE,PORUKE} from '../const';
import {Scaledrone_context,Chat_context} from '../context'
import {Chat_korisnici,Chat_salji,Chat_poruke} from './components/'

//CONTEXT
export default function ChatRoom() {

    const { MEMBERS, MEMBER_JOIN, MEMBER_LEAVE, MESSAGE, ERROR, SCALEDRONE_ROOM } = SCALEDRONE;
    const { NOVI_KORISNIK,NAPUSTIO_KORISNIK } = PORUKE;

    const { korisnik, drone } = useContext(Scaledrone_context)

    const [svePoruke, setSvePoruke] = useState([]);
    const [zapamtiKorisnike, setZapamtiKorisnike] = useState([]);

     useEffect(() => {
        if (korisnik) {
            postavkeSobe(drone);
         }
     }, [])// eslint-disable-line react-hooks/exhaustive-deps
    
    function postavkeSobe(scaledrone) {
           
        const soba = scaledrone.subscribe(SCALEDRONE_ROOM);
        
                scaledrone.on(ERROR, (error) => console.error(error));
                soba.on(MEMBERS, function (zapamti) {setZapamtiKorisnike([...zapamti])});

        soba.on(MEMBER_JOIN, function (noviKorisnik) {
            
                        setZapamtiKorisnike(function (trenutniKorisnici) {
                            return [...trenutniKorisnici, noviKorisnik]
                        });

                        setSvePoruke((trenutniKorisnici) => {
                            return [
                                ...trenutniKorisnici,
                                {
                                    porukaPridruzi: NOVI_KORISNIK,
                                    id: Math.random(),
                                    type: MEMBER_JOIN,
                                    korisnikNovi: {
                                        korisnikIme: noviKorisnik.clientData.korisnikIme,
                                        ikona: noviKorisnik.clientData.korisnikIkonaID,
                                    }
                                }
                            ]
                        })
        });

       
        soba.on(MEMBER_LEAVE, function (napustiliChet) {
    
                        setZapamtiKorisnike((trenutniKorisnici) => {
                            return trenutniKorisnici.filter((trenutniKorisnik) => trenutniKorisnik.id !== napustiliChet.id);
                                                });
    
                        setSvePoruke((trenutniKorisnici) => {
                            return [
                            ...trenutniKorisnici,
                            {
                                porukaNapustio:NAPUSTIO_KORISNIK,
                                id: Math.random(),
                                type: MEMBER_LEAVE,
                                korisnikNapustio: {
                                        korisnikIme: napustiliChet.clientData.korisnikIme,
                                        ikona: napustiliChet.clientData.korisnikIkonaID,
                                },
                            },
                            ];
                        });
        });

        soba.on(MESSAGE, (poruke) => {
            
                        setSvePoruke((trenutnePoruke) => {
                    
                            return [
                                ...trenutnePoruke,
                                {
                                    poslanePoruke: poruke.data.message,
                                    id: poruke.id,
                                    type: MESSAGE,
                                    korisnikSalje: {
                                        id: poruke.member.id,
                                        korisnikIme: poruke.member.clientData.korisnikIme,
                                        ikona:poruke.member.clientData.korisnikIkonaID,
                                    }
                                }
                            ]
                        })
        })

    }
    
    function fn_saljiPoruku(message) {
        drone.publish({
            room: SCALEDRONE_ROOM,
            message:{message}
        })
    }

    return (
        <div className="forma__chatRoom">

            <Chat_context.Provider value={{
                fn_saljiPoruku,
                 svePoruke,
                 zapamtiKorisnike               
            }}>
                <div className="poruke_chatRoom"><Chat_poruke /></div>                              
                <div className="naChatu_chatRoom"><Chat_korisnici /></div>
                <div className="upisPoruke_chatRoom"><Chat_salji /></div> 

            </Chat_context.Provider>
        </div>
    )
}

