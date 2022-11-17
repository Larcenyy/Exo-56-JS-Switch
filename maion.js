let demande = window.prompt("Entrer le nom de votre accessoires informatique");
demande.toLowerCase();


switch (demande){
    case "souris":
        alert("J'utilise un(e) " + demande)
        break;
    case "clavier":
        alert("J'utilise un(e) " + demande)
        break;
    case "ordinateur":
        alert("J'utilise un(e) " + demande)
        break;
    case "tapis":
        alert("J'utilise un(e) " + demande)
        break;
    case "imprimante":
        alert("J'utilise un(e) " + demande)
        break;
    case "ondulateur":
        alert("J'utilise un(e) " + demande)
        break;
    default:
        alert("Accessoires inconnu");
}