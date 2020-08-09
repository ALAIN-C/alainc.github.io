alert("les regles du jeu sont: \nQuand on clique sur le bouton, l'ordinateur tire un numéro au hasard entre 0 et 36.Si l'ordinateur tire 0, la mise est perdu.Si l'ordinateur tire le numéro du joueur, il rend la mise plus 35 fois sa valeur. Si l'ordinateur tire un numéro pair et que l'on a choisi « Pair », il rend la mise plus 1 fois sa valeur. Même chose avec les impairs.Dans tous les autres cas, la mise est perdue.");




function jeux(){
    let nbmise = document.getElementById("number").value;
    let mise = 1000 * nbmise;
    let reste = document.getElementById("joueur").textContent;
    let perte = document.getElementById("ordi").textContent;

    if( reste < mise )
    {
        alert("Votre solde est insuffisant");
    }
    else
    {
        let nbrandom = Math.floor(Math.random()*101);

        while(nbrandom >= 37)
        {
            nbrandom = Math.floor(nbrandom / 2);
        }

        let choix = document.getElementById("posb");;
        let valeur = choix.options[choix.selectedIndex].value;
    
        if(valeur == 37)
        {
            if(nbrandom % 2 == 0)
            {
                alert(nbrandom+"BRAVO, vous avez tiré le bon numéro");
    
                reste = parseFloat(reste) + parseFloat(mise); 
            }
            else
            {
                alert(nbrandom+" Vous avez perdue");
    
                perte = parseFloat(perte) + parseFloat(mise);
                reste = parseFloat(reste) - parseFloat(mise); 
            }
        }
        else if(valeur == 38)
        {
            if(nbrandom % 2 != 0)
            {
                alert(nbrandom+" BRAVO, vous avez tiré le bon numéro");
    
                reste = parseFloat(reste) + parseFloat(mise);  
            }
            else
            {
                alert(nbrandom+" Vous avez perdue");
    
                perte = parseFloat(perte) + parseFloat(mise);
                reste = parseFloat(reste) - parseFloat(mise); 
            }
        }
        else
        {
            if(nbrandom == valeur)
            {
                alert(nbrandom+" BRAVO, vous avez tiré le bon numéro");
    
                reste =parseFloat(reste + 35 * mise);
            }
            else if(nbrandom == 0)
            {
                alert(nbrandom+" Vous avez perdue");
    
                perte = parseFloat(perte) + parseFloat(mise);
                reste = parseFloat(reste) - parseFloat(mise);
            }
            else
            {
                alert(nbrandom+" Vous avez perdue");
    
                perte = parseFloat(perte) + parseFloat(mise);
                reste = parseFloat(reste) - parseFloat(mise);
            }
    }
    document.getElementById("joueur").textContent = reste;
    document.getElementById("ordi").textContent = perte;
   }   
}