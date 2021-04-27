//otázky 

let otazky = [
  
  {
    foto: "obrazky/agent.png",
    otazka: "Ruským agentem není: ",
    odpoved: [ "Miloš Zeman", "Andrej Babiš", "Vojtěch Filip", "Kamil Střihavka"],
    spravne: "Kamil Střihavka",
    cisloVybrane: "",
    vybrana: ""
  },
  {
    foto: "obrazky/ovecka.jpg",
    otazka: "Nejoblíbenější zvíře Miloše Zemana je: ",
    odpoved: [ "Čmeláček", "Prasáček", "Ovčáček", "Čtveráček"],
    spravne: "Ovčáček",
    cisloVybrane: "",
    vybrana: ""
  },

  {
    foto: "obrazky/andrej.jpg",
    otazka: "Syn Andreje Babiše byl z dovolené na Krymu úplně...",
    odpoved: [ "unešený", "zklamaný", "nadšený", "mimo"],
    spravne: "unešený",
    cisloVybrane: "",
    vybrana: ""
  }

];

//další proměnné

let kviz= document.getElementById('kviz');
let vysledek= document.getElementById('vysledek');
let otazka = document.getElementById('otazka');
let odpovedi = document.getElementById('odpovedi');
let foto = document.getElementById('foto');
let moznost1 = document.getElementById('jedna');
let moznost2 = document.getElementById('dva');
let moznost3 = document.getElementById('tri');
let moznost4 = document.getElementById('ctyri');
let pocitadlo = document.getElementById('pocitadlo');
let dalsi= document.querySelector('.dalsi');
let skore= document.getElementById('skore');
let procenta= document.getElementById('procenta');
let vyhodnoceni = document.querySelector('.vyhodnoceni');
let pocetOtazek = document.querySelector('.pocetOt');
let pocetOtazek2 = document.querySelector('.pocetOt2');

//pořadí otázky v poli, počet otázek a počet bodů
let i = 0;
let body = 0;
pocetOtazek.innerHTML = otazky.length;
pocetOtazek2.innerHTML = otazky.length;

//zobrazení obsahu
zobrazOtazku();

//zobrazení otázky
function zobrazOtazku() {
    foto.src = otazky[i].foto;
    otazka.innerText = otazky[i].otazka;
    moznost1.innerText = otazky[i].odpoved[0];
    moznost2.innerText = otazky[i].odpoved[1];
    moznost3.innerText = otazky[i].odpoved[2];
    moznost4.innerText = otazky[i].odpoved[3];
    pocitadlo.innerHTML= i+1;
}

//počítadlo skóre
function pocitej(a){
    if(a.innerHTML === otazky[i].spravne && body < otazky.length) {
        body++;
    }

    //vytáhnu si rovnou, co bylo zmáčknuté
    otazky[i].cisloVybrane = a.getAttribute('data-odpoved');
    otazky[i].vybrana = a.innerHTML;
    
    console.log(otazky) //ověřím si v consoli, jestli se to fakt propisuje

    dalsiOtazka();
}

//zobraz další otázku
function dalsiOtazka() {
    if ( i < otazky.length - 1 ) {
        i++;
        zobrazOtazku();
    }
    else {
      konec();
    }
}

//vypiš závěrečné vyhodnocení
function konec() {

  skore.innerHTML = body;
        procenta.innerHTML = Math.floor((body / otazky.length) * 100);
        kviz.style.display= 'none';
        vysledek.style.display= 'block';


  for (let x = 0; x < otazky.length; x++) {
    let shrnuti = document.createElement('div');
    shrnuti.classList.add('shrnuti');

    let shrnutiOtazka = document.createElement('h3');
    shrnutiOtazka.innerHTML = x + 1  + ". " + otazky[x].otazka;

    let shrnutiVybrana= document.createElement('p');
    shrnutiVybrana.innerHTML = "Tvoje odpověď: " + otazky[x].vybrana;

    let shrnutiSpravna = document.createElement('p');
      if (otazky[x].vybrana == otazky[x].spravne) {
          shrnutiSpravna.innerHTML = "To je SPRÁVNĚ!"
      } 
      else {
          shrnutiSpravna.innerHTML = "Správná odpověď: " + otazky[x].spravne;
      }

      shrnuti.appendChild(shrnutiOtazka);
      shrnuti.appendChild(shrnutiVybrana);
      shrnuti.appendChild(shrnutiSpravna);
  
      vyhodnoceni.appendChild(shrnuti);
  }
}