!function(){"use strict";var n,e={994:function(n,e,r){var t=r(7294),a=r(3935),i=(r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(8309),r(1038),r(4916),(0,t.createContext)()),o=(0,t.createContext)(),s=(0,t.createContext)(),l=(0,t.createContext)();function c(n,e){var r=null;return e&&e.map((function(e){var t=e.id,a=e.image;return n===t&&(r=a),null})),r}r(1249);var u=r(8680),d="member_join",f="member_leave",m=r(5893);function p(){var n=(0,t.useContext)(o).spremljeneSveIkone,e=(0,t.useContext)(l),r=e.logiraniKorisnik,a=e.logiraniKorisnikIkonaID,i=e.fn_toggleModal;return(0,m.jsxs)(t.Fragment,{children:[r&&(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)("img",{src:c(a,n),className:"header_logo_programa",alt:"Ikona",height:"64px",title:"Ikona korisnika"}),(0,m.jsxs)("p",{className:"header_naslov_app",children:["Korisnik :","  ",r]})]}),!r&&(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)("img",{src:u,className:"header_logo_programa",alt:"aplikacija_logo",height:"45px",title:"Ikona aplikacije"}),(0,m.jsx)("p",{className:"header_naslov_app",children:"CHAT APLIKACIJA"}),(0,m.jsx)("div",{className:"button_app",children:(0,m.jsx)("button",{className:"button_info",onClick:i,children:"Info"})})]})]})}function h(n){var e=n.sveIkone,r=n.fn_staviIkonaKorisnik;return(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)(t.Fragment,{children:(0,m.jsx)("p",{className:"naslov_Odabir_Ikona",children:"Odaberite jednu od ikona :"})}),(0,m.jsx)("div",{className:"polozaj_Ikona",children:e&&e.map((function(n){var e=n.id,a=n.image;return n.select,(0,m.jsxs)(t.Fragment,{children:[(0,m.jsx)("img",{src:a,alt:"Moja_Ikona",height:"50px",title:"Moja ikona"}),(0,m.jsx)("input",{className:"polozaj_Chbx_Ikona",type:"checkbox",value:e,id:e,name:e,onChange:function(){return r(e)}}),(0,m.jsx)("br",{})]},e)}))})]})}function j(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return x(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function g(n){var e=j((0,t.useState)(""),2),r=e[0],a=e[1],i=j((0,t.useState)(""),2),o=i[0],s=i[1];return(0,m.jsxs)("form",{className:"logiranje_forma logiranje_box logiranje_pozadina ",children:[(0,m.jsx)(t.Fragment,{children:(0,m.jsx)("p",{className:"logiranje_greska",children:o})}),(0,m.jsx)("div",{className:"logiranje_kontejner",children:(0,m.jsxs)("div",{className:"logiranje_kontejner_input",children:[(0,m.jsx)("input",{type:"text",required:!0,value:r,onChange:function(n){n.preventDefault(),a(n.target.value)},maxLength:"10"}),(0,m.jsx)("div",{className:"logiranje_kontejner_linija"}),(0,m.jsxs)("label",{children:["IME  ",(0,m.jsx)("span",{className:"max_znakova",children:"( max. 10 znakova )"})," :"]})]})}),(0,m.jsx)("button",{type:"button",className:"logiranje_button",onClick:function(){r&&r.replace(/\s/g,"").length?(n.fn_staviLogiraniKorisnik(r),a(""),s(null)):s("Upišite ime korisnika !")},children:"OK"})]})}r(5306);var k=[{id:1,image:"images/20a3ae50f48e55bb7aa4.png",select:!1},{id:2,image:"images/063242f43f0f01fc6a28.png",select:!1},{id:3,image:"images/b18bb1e7c1f4953d7a8b.png",select:!1},{id:4,image:"images/cac9d79bf0dcfa9e785a.png",select:!1},{id:5,image:"images/cb27679d24f706256c02.png",select:!1},{id:6,image:"images/f75974bd6a9fa3be1f5b.png",select:!1}];function v(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return b(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function y(){var n=v((0,t.useState)([]),2),e=n[0],r=n[1],a=v((0,t.useState)(""),2),s=a[0],l=a[1],c=v((0,t.useState)(""),2),u=c[0],d=c[1],f=(0,t.useContext)(i).fn_logiraniKorisnikPodaci,p=(0,t.useContext)(o).fn_spremiSveIkone;return(0,t.useEffect)((function(){r(k)}),[]),(0,t.useEffect)((function(){p(e),f(s,u)}),[u]),(0,m.jsxs)(m.Fragment,{children:[!s&&(0,m.jsx)(g,{fn_staviLogiraniKorisnik:function(n){l(n)}}),s&&(0,m.jsx)(h,{sveIkone:e,fn_staviIkonaKorisnik:function(n){d(n)}})]})}function _(n){var e=n.msg,r=(0,t.useContext)(o).spremljeneSveIkone;return(0,m.jsxs)("div",{className:"lijevo",children:[(0,m.jsxs)("div",{className:"ikona_lijevo",children:[(0,m.jsx)("span",{className:"ikona_lijevo_polozaj",children:(0,m.jsx)("img",{src:c(e.korisnikSalje.ikona,r),alt:"Ikona",height:"45",title:"Ikona"})}),(0,m.jsx)("div",{className:"box_korisnik_lijevo",children:(0,m.jsx)("span",{className:"korisnik_lijevo",children:e.korisnikSalje.korisnikIme})})]}),(0,m.jsx)("span",{className:"poruka_lijevo",children:e.poslanePoruke})]})}function I(n){var e=n.msg,r=(0,t.useContext)(o).spremljeneSveIkone;return(0,m.jsxs)("div",{className:"desno",children:[(0,m.jsx)("span",{className:"poruke_desno",children:e.poslanePoruke}),(0,m.jsxs)("div",{className:"ikona_desno",children:[(0,m.jsx)("span",{className:"ikona_desno_polozaj",children:(0,m.jsx)("img",{src:c(e.korisnikSalje.ikona,r),alt:"Ikona",height:"45",title:"Ikona"})}),(0,m.jsx)("div",{className:"box_korisnik_desno",children:(0,m.jsx)("span",{className:"korisnik_desno",children:e.korisnikSalje.korisnikIme})})]})]})}r(2222),r(7327);var N=r(7224);function S(){var n=(0,t.useContext)(s).svePoruke,e=(0,t.useContext)(i).korisnik;return(0,m.jsx)("div",{className:"forma_poruke",children:(0,m.jsx)(N.Z,{children:n&&n.map((function(n){return"member_join"===n.type?(0,m.jsx)(t.Fragment,{children:(0,m.jsxs)("p",{className:"noviKorisnik",children:[n.korisnikNovi.korisnikIme," ",n.porukaPridruzi]})},n.id):"member_leave"===n.type?(0,m.jsx)(t.Fragment,{children:(0,m.jsxs)("p",{className:"napustioKorisnik",children:[n.korisnikNapustio.korisnikIme," ",n.porukaNapustio]})},n.id):(0,m.jsx)(t.Fragment,{children:e.id===n.korisnikSalje.id?(0,m.jsx)(_,{msg:n}):(0,m.jsx)(I,{msg:n})},n.id)}))})})}function A(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function C(){var n,e,r=(0,t.useContext)(s).fn_saljiPoruku,a=(n=(0,t.useState)(""),e=2,function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return A(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],o=a[1];return(0,m.jsxs)("form",{onSubmit:function(n){n.preventDefault(),i&&i.replace(/\s/g,"").length>0&&(r(i),o(""))},className:"box",children:[(0,m.jsx)("input",{className:"input_box",type:"text",placeholder:"Upiši poruku ...",onChange:function(n){return o(n.target.value)},value:i}),(0,m.jsx)("button",{className:"button_box",children:"OK"})]})}function w(){var n=(0,t.useContext)(s).zapamtiKorisnike,e=(0,t.useContext)(o).spremljeneSveIkone,r=(0,t.useContext)(i).fn_korisnikLogout;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("button",{className:"gumb odjava_gumb",onClick:r,children:"LOGOUT"}),(0,m.jsx)("span",{className:"naslov",children:"TRENUTNO NA CHAT-u :"}),(0,m.jsx)("div",{className:" forma_korisnici_prijavljeni ",children:(0,m.jsx)(N.Z,{children:n&&n.map((function(n){var r=n.clientData,t=r.korisnikIkonaID,a=r.korisnikIme;return(0,m.jsxs)("div",{className:"zapamti",children:[(0,m.jsx)("span",{className:"ikona",children:(0,m.jsx)("img",{src:c(t,e),alt:"Ikona",height:"35",title:"Ikona"})}),(0,m.jsx)("span",{className:"korisnik",children:a})]},n.id)}))})})]})}function O(n){return function(n){if(Array.isArray(n))return F(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||P(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(n,e)||P(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(n,e){if(n){if("string"==typeof n)return F(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(n,e):void 0}}function F(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function K(){var n=d,e=f,r="message",a="observable-default-room",o=(0,t.useContext)(i),l=o.korisnik,c=o.drone,u=z((0,t.useState)([]),2),p=u[0],h=u[1],j=z((0,t.useState)([]),2),x=j[0],g=j[1];return(0,t.useEffect)((function(){var t,i;l&&(i=(t=c).subscribe(a),t.on("error",(function(n){return console.error(n)})),i.on("members",(function(n){g(O(n))})),i.on(n,(function(e){g((function(n){return[].concat(O(n),[e])})),h((function(r){return[].concat(O(r),[{porukaPridruzi:" je trenutno na CHAT-u ! ",id:Math.random(),type:n,korisnikNovi:{korisnikIme:e.clientData.korisnikIme,ikona:e.clientData.korisnikIkonaID}}])}))})),i.on(e,(function(n){g((function(e){return e.filter((function(e){return e.id!==n.id}))})),h((function(r){return[].concat(O(r),[{porukaNapustio:" odlazi sa CHAT-a ! ",id:Math.random(),type:e,korisnikNapustio:{korisnikIme:n.clientData.korisnikIme,ikona:n.clientData.korisnikIkonaID}}])}))})),i.on(r,(function(n){h((function(e){return[].concat(O(e),[{poslanePoruke:n.data.message,id:n.id,type:r,korisnikSalje:{id:n.member.id,korisnikIme:n.member.clientData.korisnikIme,ikona:n.member.clientData.korisnikIkonaID}}])}))})))}),[]),(0,m.jsx)("div",{className:"forma__chatRoom",children:(0,m.jsxs)(s.Provider,{value:{fn_saljiPoruku:function(n){c.publish({room:a,message:{message:n}})},svePoruke:p,zapamtiKorisnike:x},children:[(0,m.jsx)("div",{className:"poruke_chatRoom",children:(0,m.jsx)(S,{})}),(0,m.jsx)("div",{className:"naChatu_chatRoom",children:(0,m.jsx)(w,{})}),(0,m.jsx)("div",{className:"upisPoruke_chatRoom",children:(0,m.jsx)(C,{})})]})})}var R=r(1557),T=[{id:1,name:"Zavrsni rad",url:"images/3aa694c69af80ede0526.png"},{id:2,name:"Mentor komentar",url:"images/cec8511b37702f651b01.png"},{id:3,name:"Rezultati",url:"images/f7a42860a9b175191b90.png"}];function E(n,e){var r=null;return n&&n.map((function(n){var t=n.name,a=n.url;e===t&&(r=a)})),r}function M(n){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"naslov_modal",children:(0,m.jsx)("h4",{children:"MENTOR"})}),(0,m.jsx)("br",{}),(0,m.jsx)("p",{className:"komentar",children:"Komentar završnog rada :"}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"slika",children:[(0,m.jsx)("img",{src:E(n.URL,"Mentor komentar"),className:"",alt:"Mentor",height:"400px",title:"Komentar mentora"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]})]})}function D(n){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"naslov_modal",children:(0,m.jsx)("h4",{children:"ZADATAK"})}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"slika",children:(0,m.jsx)("img",{src:E(n.URL,"Zavrsni rad"),className:"",alt:"Zadatak",height:"400px",title:"Zavrsni rad"})}),(0,m.jsx)("br",{})]})}function L(n){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"naslov_modal",children:(0,m.jsx)("h4",{children:"REACT JS - rezultati ispita"})}),(0,m.jsx)("br",{}),(0,m.jsx)("p",{className:"komentar",children:"Od 16 polaznika, na prvom roku , samo 2 polaznika su riješili zadatak bez greške :"}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"rezultat_slika",children:(0,m.jsx)("img",{src:E(n.URL,"Rezultati"),className:"",alt:"Prolaznost",height:"350px",title:"Rezultati ispita"})})]})}function U(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{className:"naslov_modal",children:(0,m.jsx)("h4",{children:"TEHNOLOGIJA"})}),(0,m.jsx)("br",{}),(0,m.jsxs)("div",{className:"slika komentar",children:[(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"React JS"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:"Hook"}),(0,m.jsx)("li",{children:"Context"})]}),(0,m.jsx)("li",{children:"Webpack - konfiguracija Reacta"}),(0,m.jsx)("li",{children:"SCSS"}),(0,m.jsx)("li",{children:"Git - GitHub"}),(0,m.jsx)("li",{children:"Sceladrone servis"})]}),(0,m.jsx)("br",{})]})]})}function Z(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{className:"info_footer"})]})}function $(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function H(){var n,e,r=(0,t.useContext)(l).fn_toggleModal,a=(n=(0,t.useState)([]),e=2,function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return $(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],o=a[1];return(0,t.useEffect)((function(){o(T)}),[]),(0,m.jsx)("div",{className:"modal",children:(0,m.jsx)("div",{className:"overlay",children:(0,m.jsxs)("div",{className:"modal-content",children:[(0,m.jsx)("button",{className:"close-modal",onClick:r,children:"x"}),(0,m.jsx)("div",{className:"info_header",children:(0,m.jsx)("h3",{children:"INFO"})}),(0,m.jsx)("div",{className:"sadrzaj",children:(0,m.jsxs)(R.$B,{children:[(0,m.jsx)(D,{URL:i}),(0,m.jsx)(U,{}),(0,m.jsx)(M,{URL:i}),(0,m.jsx)(L,{URL:i}),(0,m.jsx)(Z,{})]})})]})})})}function G(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return J(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function B(){var n=(0,t.useContext)(l),e=n.fn_korisnikPodaci,r=n.fn_odjava,a=n.modal,o=G((0,t.useState)(""),2),s=o[0],c=o[1],u=G((0,t.useState)(null),2),d=u[0],f=u[1];return a?document.body.classList.add("active-modal"):document.body.classList.remove("active-modal"),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(i.Provider,{value:{korisnik:s,drone:d,fn_logiraniKorisnikPodaci:function(n,r){if(n){var t=new window.Scaledrone("XihZhmPaf6v6w5xU",{data:{korisnikIme:n,korisnikIkonaID:r}});s||t.on("open",(function(){f(t),c({id:t.clientId,korisnikIme:n,korisnikIkonaID:r}),e(n,r)}))}},fn_korisnikLogout:function(){d.close(),f(null),c(null),r(null)}},children:[!s&&(0,m.jsx)(y,{}),s&&(0,m.jsx)(K,{})]}),a&&(0,m.jsx)(H,{})]})}var W=r(5374),q=r(9331);function V(){return(0,m.jsxs)("section",{className:"footer_blok",children:[(0,m.jsx)("img",{className:"footer_logo_algebra",src:q,alt:"algebra_logo",height:"70px",title:"Logo Algebra"}),(0,m.jsxs)("section",{className:"footer_polaznik",children:[(0,m.jsx)("img",{className:"footer_logo_polaznik",src:W,alt:"polaznik_logo",height:"70px",title:"Logo polaznika"}),(0,m.jsxs)("section",{className:"footer_upisani_text",children:[(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"ZAVRŠNI RAD : "})," ","Web chat aplikacija"]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"POLAZNIK : "}),"Roman Topolko"]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"SMJER : "})," ","Front - End developer"]}),(0,m.jsxs)("p",{children:[(0,m.jsx)("strong",{children:"GODINA : "}),"2021"]})]})]})]})}function X(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var t,a,i=[],o=!0,s=!1;try{for(r=r.call(n);!(o=(t=r.next()).done)&&(i.push(t.value),!e||i.length!==e);o=!0);}catch(n){s=!0,a=n}finally{try{o||null==r.return||r.return()}finally{if(s)throw a}}return i}}(n,e)||function(n,e){if(n){if("string"==typeof n)return Q(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}r(5279),r(4992),r(7306),r(3712),r(6629),r(3059),r(5622),r(3475),r(7643);var Y=function(){var n=X((0,t.useState)(""),2),e=n[0],r=n[1],a=X((0,t.useState)(""),2),i=a[0],s=a[1],c=X((0,t.useState)([]),2),u=c[0],d=c[1],f=X((0,t.useState)(!1),2),h=f[0],j=f[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Provider,{value:{logiraniKorisnik:e,logiraniKorisnikIkonaID:i,modal:h,fn_korisnikPodaci:function(n,e){r(n),s(e)},fn_odjava:function(n){r(n)},fn_toggleModal:function(){j(!h)}},children:(0,m.jsxs)(o.Provider,{value:{spremljeneSveIkone:u,fn_spremiSveIkone:function(n){d(n)}},children:[(0,m.jsx)("header",{className:"header",children:(0,m.jsx)(p,{})}),(0,m.jsx)("main",{className:"main",children:(0,m.jsx)(B,{})})]})}),(0,m.jsx)("footer",{className:"footer",children:(0,m.jsx)(V,{})})]})},nn=document.getElementById("root");a.render((0,m.jsx)(t.StrictMode,{children:(0,m.jsx)(Y,{})}),nn)},8680:function(n,e,r){n.exports=r.p+"images/67d8dc1ab53fd2ece3c9.png"},5622:function(n,e,r){n.exports=r.p+"images/cec8511b37702f651b01.png"},5279:function(n,e,r){n.exports=r.p+"images/20a3ae50f48e55bb7aa4.png"},4992:function(n,e,r){n.exports=r.p+"images/f75974bd6a9fa3be1f5b.png"},7306:function(n,e,r){n.exports=r.p+"images/063242f43f0f01fc6a28.png"},3712:function(n,e,r){n.exports=r.p+"images/b18bb1e7c1f4953d7a8b.png"},6629:function(n,e,r){n.exports=r.p+"images/cac9d79bf0dcfa9e785a.png"},3059:function(n,e,r){n.exports=r.p+"images/cb27679d24f706256c02.png"},3475:function(n,e,r){n.exports=r.p+"images/f7a42860a9b175191b90.png"},7643:function(n,e,r){n.exports=r.p+"images/3aa694c69af80ede0526.png"},9331:function(n,e,r){n.exports=r.p+"images/fc580c22a259787df30c.png"},5374:function(n,e,r){n.exports=r.p+"images/e56a47e82f8560743b8f.png"}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var i=r[n]={exports:{}};return e[n].call(i.exports,i,i.exports,t),i.exports}t.m=e,n=[],t.O=function(e,r,a,i){if(!r){var o=1/0;for(u=0;u<n.length;u++){r=n[u][0],a=n[u][1],i=n[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&i||o>=i)&&Object.keys(t.O).every((function(n){return t.O[n](r[l])}))?r.splice(l--,1):(s=!1,i<o&&(o=i));if(s){n.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=n.length;u>0&&n[u-1][2]>i;u--)n[u]=n[u-1];n[u]=[r,a,i]},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",function(){var n={179:0};t.O.j=function(e){return 0===n[e]};var e=function(e,r){var a,i,o=r[0],s=r[1],l=r[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(l)var u=l(t)}for(e&&e(r);c<o.length;c++)i=o[c],t.o(n,i)&&n[i]&&n[i][0](),n[o[c]]=0;return t.O(u)},r=self.webpackChunkchat_app=self.webpackChunkchat_app||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var a=t.O(void 0,[453],(function(){return t(994)}));a=t.O(a)}();
//# sourceMappingURL=main.39f7db80a5d45ab4d667.js.map