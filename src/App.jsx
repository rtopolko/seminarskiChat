import "./App.scss";
import { useState } from 'react';
import { LogiraniKorisnik_context, Ikone_context } from "./components/context";
import { Header, Main, Footer } from "./components";
import Import_SLIKE from "../src/components/utility/ImportSlike";

function App() {

    const[logiraniKorisnik,setLogiraniKorisnik]=useState("")
    const[logiraniKorisnikIkonaID,setlogiraniKorisnikIkonaID]=useState("")
    const[spremljeneSveIkone,setSveIkone]=useState([])
    const [modal, setModal] = useState(false)

    const fn_spremiSveIkone = (podignuteIkone) => { setSveIkone(podignuteIkone) };
    const fn_odjava = (logiraniKorisnikIme) => { setLogiraniKorisnik(logiraniKorisnikIme) };
    const fn_korisnikPodaci = (logiraniKorisnikIme, ikonaKorisnikaID) => {
        setLogiraniKorisnik(logiraniKorisnikIme);
        setlogiraniKorisnikIkonaID(ikonaKorisnikaID)
    }
    const fn_toggleModal = () => {setModal(!modal)}

    return (
        <>
            <LogiraniKorisnik_context.Provider
                value={{
                    logiraniKorisnik,
                    logiraniKorisnikIkonaID,
                    modal,
                    fn_korisnikPodaci,
                    fn_odjava,
                    fn_toggleModal
                }}>
                
                <Ikone_context.Provider
                    value={{
                        spremljeneSveIkone,
                        fn_spremiSveIkone
                    }}>
                    
                    <header className="header"><Header/></header>
                    <main className="main"><Main/></main>

                </Ikone_context.Provider>
            </LogiraniKorisnik_context.Provider>
        
            <footer className="footer"><Footer/></footer>
        </>
    );
}
export default App;