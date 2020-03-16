const afficheMasque = function () {
    // On utilise la propriété CSS visibility pour rendre visible ou pour masquer un élément

    let sol = document.getElementById("solution1")//sélection du bloc html contenant la solution 
    const etatAffichage = getComputedStyle(sol, null)//détermination de sa propriété visible ou caché

    let btn = document.getElementById("boutonSolution")
    //sélection de l'élément bouton

    if (etatAffichage.visibility == "hidden") {
        /*
        Si le bloc solution est caché, un clic le rendra visible;
        On change aussi le texte du bouton.
        */
        sol.style.visibility = "visible";
        btn.innerHTML = "Cacher solution"
    } else {
        /*
        Si le bloc solution est visible, un clic le rendra caché;
        On change aussi le texte du bouton.
        */
        sol.style.visibility = "hidden"; 
        btn.innerHTML = "Afficher solution"
    }
}

