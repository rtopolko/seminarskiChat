function StazaSlike(slikeUrl,NazivSlike) {
       let stazaSlike = null; 
        slikeUrl && slikeUrl.map((item) => {
               const { name, url } = item
               if (NazivSlike === name) {stazaSlike = url}
                   });
         return stazaSlike 
}
export { StazaSlike }
      
//stazaSlike= window.location.origin + url