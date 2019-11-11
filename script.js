/* let formtag = document.getElementById("message_form");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let confirm_email = document.getElementById("confirm_email");
let text_message = document.getElementById("message");
let error_div = document.getElementById("error");
//let btn_disabled = true;

formtag.addEventListener("keyup", function(e) {
  e.preventDefault();
  nom.addEventListener("focusout", function() {
    if (this.value === "") {
      error_div.innerHTML =
        '<div class="alert alert-danger">Le champ nom est obligatoir</div>';
      //btn_disabled = document.querySelector(".btn").disabled = btn_disabled;
      true;
      console.log("Le champ nom est obligatoir");
    } else {
      btn_disabled = false;
    }
  });

  email.addEventListener("focusout", function() {
    if (this.value === "") {
      error_div.innerHTML =
        '<div class="alert alert-danger">Le champ email est obligatoire</div>';
    }
  });
  confirm_email.addEventListener("focusout", function() {
    if (this.value == "") {
      error_div.innerHTML =
        '<div class="alert alert-danger">La confirmation de email est vide</div>';
    }
  });
  text_message.addEventListener("focusout", function() {
    if (this.value == "") {
      console.log("Veuillez renseigner votre message");
    }
  });

  if (
    nom.value != "" &&
    email.value != "" &&
    confirm_email.value != "" &&
    text_message.value != ""
  ) {
    document.getElementById("bouton").disabled = false;
  } else document.getElementById("bouton").disabled = false;
}); */

/* ================================================================= */
let btn = document.getElementById("ajout");
let conteneur = document.getElementById("conteneur");

btn.addEventListener("click", function() {
  let divP = document.createElement("p");
  divP.innerHTML = "lorem ipsum";
  divP.classList.add("alert", "alert-success");
  conteneur.appendChild(divP);
});
