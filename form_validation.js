/**
 * Fichier de validation du formulaire
 */

//D'abord nous allons initialiser les variables a utiliser
let formulaire = document.getElementById("formulaire"); //variable du formulaire
let error_message = ""; //variable pour contenir nos messages d'erreurs
//vu que tous les inputs generes sont dans une div avec id conteneur nous pouvons recuperer la input dans un tableau avec la methode querySelectorAll
let automaticInputs = document.querySelectorAll("#conteneur input");

/**
 * input_generator
 * Cette fonction va gerer toute la partie de generation d'un input
 *
 */
function input_generator() {
  let nomOption = document.createElement("input"); //Creation d'un champ text pour le nom de l'option
  let valeurOption = document.createElement("input"); //Creation d'un champ text pour la valeur de l'option
  let conteneur = document.getElementById("conteneur"); //Recuperation de la div ou placer les inputs générés

  //Ajoutons la class form-control au deux inputs
  nomOption.classList.add("form-control");
  valeurOption.classList.add("form-control");

  //On ajoute l'attribut placeholder avec sa valeur
  nomOption.setAttribute("placeholder", "Ajoutez le nom de votre option");
  valeurOption.setAttribute("placeholder", "Ajoutez la valeur de votre option");

  /**
   * Nous voullons que les deux champs soit cote a cote. Nous alons donc avec bootstrap ajouter la class row a la div conteneur.
   * Puis ajouter la classes col-6 aux deux inputs
   */
  conteneur.classList.add("row");
  nomOption.classList.add("col-6", "my-2");
  valeurOption.classList.add("col-6", "my-2");

  ///On ajoute maintenant les inputs generés comme enfant de la div conteneur
  conteneur.appendChild(nomOption);
  conteneur.appendChild(valeurOption);

  //nous devons mettre a jours le tableau des inputs generés a chaque clique sur le bouton pour ajouter une option
  automaticInputs = document.querySelectorAll("#conteneur input");
}

/**
 * Nous devons ajouter un evenement sur le bouton pour ajouter une option
 * A chaque clique, nous utilisons la fonction definit plus haut pour generer les inputs
 */
let ajout = document.getElementById("ajout");
ajout.addEventListener("click", function() {
  input_generator();
});

/**
 * Nous avons besoin d'un evenement submit pour detecter l'action d'envoie du formulaire
 */
formulaire.addEventListener("submit", function(e) {
  e.preventDefault(); //ON desactivement le comportement par defaut du formulaire
  if (document.getElementById("email").value == "") {
    //Si email n'est pas renseigné
    error_message = "Le champ email ne peut pas etre vide";
  } else if (automaticInputs.length <= 0) {
    //Il faut au moins une option avant de valider
    error_message = "Vous devez choisir au moins une option";
  } else {
    for (input of automaticInputs) {
      //On parcourt le tablo des inputs pour detecter les champs vides
      if (input.value === "") {
        error_message = "Veuillez remplir les options";
      } else {
        error_message = "";
      }
    }
  }

  if (error_message == "") {
    //Si error_message est vide cela veut dire il n'y a pas eu d'erreur
    error_message = "Vos donnees ont ete enregistrees";
  }

  document.getElementById("error").innerHTML = error_message;
});
