
const regex1 = /[a-zA-Z0-9]{3,}/g; 
//le g est pour 'global' donc pour prendre la globalité des paramètres e,tre les deux slash
const nomJoueur = document.getElementById("nom").value;

if (nomJoueur != regex1) {
    // alert();
    // console.log(test);
} else {
    localStorage.setItem("nom");
}
const regex2 = /(?=.*\d)(?=.*[a-zA-Z!@#\/$%^&*)(+=._-]).{6,}/g;
const mdpJoueur = document.getElementById("mdp").value;

if (mdpJoueur != regex2) {
    // alert();
    // console.log(test);
} else {
    localStorage.setItem("mdp");
}


// ------------------------------------------------
// -----------recupère les données saisies----------

const KEY = "joueurs";
// vérifie si les données de cette personne sont déjà stockées :

const formulaire1 = document.getElementById("formA");
formulaire1.addEventListener("submit", submitJoueur);

function submitJoueur(event) {
    event.preventDefault();
    console.log("submit")
    if (event.currentTarget.querySelector("#nom").value != "") {
        saveDonnees("joueurs", {
          name: event.currentTarget.querySelector("#name").value,
          email: event.currentTarget.querySelector("#email").value,
          mdp: event.currentTarget.querySelector("#mdp").value,
          mdpVerif: event.currentTarget.querySelector("#mdpVerif").value,
        });

        event.currentTarget.querySelector("#name").value = "";
        event.currentTarget.querySelector("#email").value = "";
        event.currentTarget.querySelector("#mdp").value = "";
        event.currentTarget.querySelector("#mdpVerif").value = "";
        
        refresh();
    }
}



// ------------------------------------------------
// -----------converti et sauve les données----------

function getDonnees(key) {
    const donnee = localStorage.getItem(key);
    const donneeConvertie = JSON.parse(donnee);
    
    if (donneeConcertie) {
        return donneeConvertie;        
    } else {
        return [];
    };
}

function saveDonnees(key, donnee) {
    const donneesPrecedente = getDonnees("joueurs");
    donneesPrecedente.push(donnee);

    const convertiDonnee = JSON.stringify(donneesPrecedente);
    localStorage.setItem(key, convertiDonnee);
}


