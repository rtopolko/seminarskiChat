import { StazaSlike } from "../../utility/Url_slike"

export default function Rezultati(props) {
  return (
    <>
      <div className="naslov_modal">
        <h4>REACT JS - rezultati ispita</h4>  
      </div><br/>
    
      <p className="komentar">Od 16 polaznika, na prvom roku , samo 2 polaznika su riješili zadatak bez greške :</p><br />
       <div className="rezultat_slika"> 
        <img src={StazaSlike(props.URL, "Rezultati")} className="" alt="Prolaznost" height="350px" title="Rezultati ispita" />  
        </div>
      </>
  )
}
