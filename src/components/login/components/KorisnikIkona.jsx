import { PORUKE } from '../../const';
import { Fragment } from 'react'

//PROPS:
export default function KorisnikIkona({sveIkone,fn_staviIkonaKorisnik}) {

    return (
        <Fragment>
            <Fragment ><p className="naslov_Odabir_Ikona">{PORUKE.ODABERI}</p></Fragment >
            <div className="polozaj_Ikona">
                { 
                    sveIkone && sveIkone.map((item) => {
                        const{id,image,select}=item
                        return (
                            < Fragment key={id}>
                                <img src={window.location.origin + image} alt="Moja_Ikona" height="50px" title="Moja ikona" />
                                <input className="polozaj_Chbx_Ikona"
                                    type="checkbox"
                                    value={id}
                                    id={id}
                                    name={id}
                                   //checked={select}
                                    onChange={() => fn_staviIkonaKorisnik(id)}
                                /><br/>
                            </Fragment>
                        )
                    })}                
            </div>
        </Fragment>      
    )
}