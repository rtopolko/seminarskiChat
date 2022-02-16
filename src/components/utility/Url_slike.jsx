function StazaSlike(slikeUrl,NazivSlike) {
       let stazaSlike = null; 
        slikeUrl && slikeUrl.map((item) => {
            const { name, url } = item
            if (NazivSlike === name) {stazaSlike= window.location.origin + url}
                   });
         return stazaSlike 
}
      export {StazaSlike}