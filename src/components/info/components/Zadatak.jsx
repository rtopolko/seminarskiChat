import { StazaSlike } from "../../utility/Url_slike"

export default function Zadatak(props) {

  return (
    <>
      <div className="naslov_modal"><h4>ZADATAK</h4></div><br/>
       <div className="slika"> 
          <img src={StazaSlike(props.URL, "Zavrsni rad")} className="" alt="Zadatak" height="650px" title="Zavrsni rad" />
      </div>
      <br/>
      </>
  )
}
