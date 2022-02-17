import { StazaSlike } from "../../utility/Url_slike"
export default function Mentor(props) {

  return (  
    <>
      <div className="naslov_modal"><h4>MENTOR</h4></div><br/>  
      <p className="komentar">Komentar završnog rada :</p><br />
       <div className="slika">         
        <img src={StazaSlike(props.URL , "Mentor komentar")} className="" alt="Mentor" height="650px" title="Komentar mentora" />   
        <br /><br /> 
    </div>    
    </>
  )
}
