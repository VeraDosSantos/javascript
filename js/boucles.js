//alert("hello");
/* LES BOUCLES */

// -- La boucle WHILE (tant que)
// Très utilisée quand on ne connaît pas le nombre de tours de boucles à l'avance
let j = 1;

while ( j <= 10 ) {
    document.write("<h1 style='color:red'> Je passe par ici " + j + "</h1>");
    j++;
    document.write("<h2 style='color:#667BC6'> Je passe par ici " + j + "</h2>");
}

// -- La boucle FOR
// for ( 3 arguments ){
//  ...CODE...
// }

/*
1. initialise un compteur à partir de combien je compte (par défaut le compteur est la variable 'i')
2. la condition à vérifier qui doit donc être VRAIE (TRUE)
3. le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++)
*/

for (let i = 1; i<= 10; i++ ) {
    document.write("<h3 style='color:red'>Je passe par là : " + i + "</h3>");
}

for (let i = 1; i<= 10; i+=2 ) {
    document.write("<p style='color:red'>Je passe par là : " + i + "</p>");
}

/* -------------------------------
            EXERCICE
j'ai 1000€ sur mon compte
chaque mois j'ajoute 50€
combien de temps me faut-il pour avoir 2000€ sur mon compte ?
-------------------------------- */