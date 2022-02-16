import {useContext,useEffect,useState} from 'react'
import { LogiraniKorisnik_context } from '../context'
import { Scrollbars } from 'rc-scrollbars';
import SLIKE from '../const/SlikeURL';
import { Zadatak,Mentor,Rezultati,Tehnologija,Info_Footer  } from "./components"

export default function Info() {
    const { fn_toggleModal } = useContext(LogiraniKorisnik_context)
    const [slikeUrl, setSlikeUrl] = useState([]);

    useEffect(() => {
        setSlikeUrl(SLIKE); 
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="modal" >
                <div className="overlay">
                <div className="modal-content">
                    <button className="close-modal" onClick={fn_toggleModal}>x</button>
                    <div className='info_header'><h3>INFO</h3></div>                    
                    <div className="sadrzaj">
                          <Scrollbars>                               
                                <Zadatak URL={slikeUrl}/>
                                <Tehnologija/>
                                <Mentor URL={slikeUrl}/>
                                <Rezultati URL={slikeUrl}/>  
                                <Info_Footer />
                            </Scrollbars>
                        </div>
                    </div>
                </div>
            </div>
    );
}
