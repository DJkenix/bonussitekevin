function calcul_moyenne() {
    var n1 = prompt("Donner la premiere note: ");
    var n2 = prompt("Donner la deuxieme note: ");
    var n3 = prompt("Donner la troiseme note: ");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("la somme est " + somme + "<br>");

    var moyenne = somme / 3;

    document.write("voici la moyenne : " + moyenne) + "<br>";

    if (moyenne > 10)
        document.write("vous etes admis");

    else
        document.write("vous etes redoublant");

}

function test_age() {
    var age = prompt("Quelle age vous avez ? ");

    if (age >= 18) {
        document.write("<font size='8em' color='pink'>" + "vous etes majeur" + "</font");
        document.bgColor = "red";
    } else {
        document.write("vous etes mineur");
    }
}

function simple_affichage() {
    var prenom = prompt("comment vous vous appelez ?");
    var nom = prompt("quel est votre nom ? ");
    document.write('<div style="margin:auto; width:300px;border:2px solid blue;">');
    document.write("Bonjour " + prenom + " " + nom);
    document.write('</div>');
    alert("Salut " + prenom + " " + nom);
}

    
function test_couleur(){
    var c = prompt("donner une couleur");
    if(c == "rouge" || c == "ROUGE") 
        document.body.style.background = "red";
    
    else if(c == 'bleu' || c == "Bleu") 
        document.body.style.background = "blue";
    
    else 
        document.write("couleur non comprise");
    
}