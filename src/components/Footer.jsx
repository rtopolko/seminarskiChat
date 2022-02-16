import { POLAZNIK } from "./const";
import IKONA_POLAZNIK from "../assets/images/polaznik_1.png"
import IKONA_ALGEBRA from "../assets/images/algebra-logo.png"

export default function Foother() {

  const { SEMINARSKI, SEMINARSKI_NAZIV, POLAZNIK_IME, NAZIV_POLAZNIKA,
    SMJER, NAZIV_SMJERA, NAZIV_GODINA, SKOLSKA_GODINA } = POLAZNIK;
  
    return (
    <section className="footer_blok">   

          <img className="footer_logo_algebra" src={IKONA_ALGEBRA} alt="algebra_logo" height="70px" title="Logo Algebra"/>
                
          <section className="footer_polaznik">
            
                <img className="footer_logo_polaznik" src={IKONA_POLAZNIK} alt="polaznik_logo" height="70px" title="Logo polaznika"/>           
            
              <section className="footer_upisani_text">
                  <p><strong>{SEMINARSKI}</strong> {SEMINARSKI_NAZIV}</p>
                  <p><strong>{NAZIV_POLAZNIKA}</strong>{POLAZNIK_IME}</p>
                  <p><strong>{SMJER}</strong> {NAZIV_SMJERA}</p>
                  <p><strong>{NAZIV_GODINA}</strong>{SKOLSKA_GODINA}</p>
              </section>

          </section>
         
      </section>

    )
}