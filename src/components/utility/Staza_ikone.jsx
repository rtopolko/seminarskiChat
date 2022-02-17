
function Staza_ikone(logiraniKorisnikIkonaID, spremljeneSveIkone) {    
    let stazaIkone = null; 
        spremljeneSveIkone && spremljeneSveIkone.map((item) => {
                 const { id, image } = item
                          if (logiraniKorisnikIkonaID === id) {
                            stazaIkone=image
                            }
                          return null;
                      });
   
         return stazaIkone  
}
export {Staza_ikone}
