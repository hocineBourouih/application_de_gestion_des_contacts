"use strict";

let table = document.querySelector("table");

let liste = document.getElementById("liste");

let details = document.getElementById("details");

let ajouter = document.getElementById("ajouter");
ajouter.addEventListener("click", ajouterCantact);

let caseNom = document.getElementById("nom");
caseNom.addEventListener("click", sortName);

let address_data = storage();

function save(){
  localStorage.setItem("address_data", JSON.stringify(address_data));
}


function storage(){
  if(localStorage.getItem("address_data") == undefined){
    return initAddressBook
  }
  else{
    return JSON.parse(localStorage.getItem("address_data"));
  }
}


function afficher(){
  
  save()

  //eviter la répétition 
  while(liste.children.length != 1){
    liste.children[1].remove();
  }
  
  for(let i in address_data){

    let tr = document.createElement("tr");
    
    // nom
    let tdNom = document.createElement("td");
    let contenuTdNom = document.createTextNode(address_data[[i]].nom);
    tdNom.appendChild(contenuTdNom);
    tr.appendChild(tdNom);
    
    // surnom
    let tdSurnom = document.createElement("td");
    let contenuTdSurnom = document.createTextNode(address_data[[i]].pseudo);
    tdSurnom.appendChild(contenuTdSurnom);
    tr.appendChild(tdSurnom);
    
    // prenom
    let tdPrenom = document.createElement("td");
    let contenuTdPrenom = document.createTextNode(address_data[[i]].prenom);
    tdPrenom.appendChild(contenuTdPrenom);
    tr.appendChild(tdPrenom);
    
    // le nouveau tab
    liste.appendChild(tr);

    // click sur le nom 
    tr.dataset.id = i;
    tr.addEventListener('click', clicSurNomDetails);
  };
}

function clicSurNomDetails(event) {

  //eviter la répétition 
  while( details.children.length != 0){
    details.children[0].remove();
  }

  let id = event.currentTarget.dataset.id;
  details.dataset.id = id;

  let nomPrenom = document.createElement("h1");
  let pseudo = document.createElement("h3");
  let email = document.createElement("p");
  let number = document.createElement("p");
  let date = document.createElement("p");
  let ident =  document.createElement("p");

  nomPrenom.textContent = address_data[[id]]["nom"] + " " + address_data[[id]]["prenom"];
  pseudo.textContent = "Pseudo : " + address_data[[id]]["pseudo"];
  email.textContent = address_data[[id]]["email"];
  number.textContent = address_data[[id]]["telephone"];
  date.textContent = "Contact crée le " + clacDate(address_data[[id]]["date"]);
  ident.textContent = "Identifiant interne : " + id;

  details.append(nomPrenom);
  details.append(pseudo);
  details.append(email);
  details.append(number);
  details.append(date);
  details.append(ident);

  // input modifier
  let modifier = document.createElement("input");
  modifier.type = "button";
  modifier.value = "modifier";
  modifier.style.marginRight = "10px";
  modifier.addEventListener('click', modifierTarget);

  // input supprimer
  let supprimer = document.createElement("input");
  supprimer.type = "button";
  supprimer.value = "supprimer";
  supprimer.addEventListener('click', supprimerTarget);

  details.style.display = "block";

  details.append(modifier);

  details.append(supprimer);
}

function clacDate(date){
  let dateFr = new Date(date);
  return dateFr.toLocaleDateString("fr-FR", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function supprimerTarget(event){

  let id = details.dataset.id;

  if( confirm("Supprimer " + address_data[[id]]["nom"] + ' "' + address_data[id]["pseudo"] + '" ' + address_data[id]["prenom"] + "?" )){
    delete address_data[id];
    details.style.display = "none";
    afficher();
  }
}

function modifierTarget(event){

  let form = document.querySelector("#no-show form").cloneNode(true);

  //eviter la répétition 
  while(details.children.length != 0){
    details.children[0].remove();
  }

  details.appendChild(form);

  form.addEventListener("submit", donneeModifier);
}
  
function donneeModifier(event){


  let id = details.dataset.id;
  let form = event.currentTarget;
  
  let nom = form.elements["nom"].value;
  form.elements["nom"].value = "";

  let prenom = form.elements["prenom"].value;
  form.elements["prenom"].value = "";

  let pseudo = form.elements["pseudo"].value;
  form.elements["pseudo"].value = "";

  let email = form.elements["email"].value;
  form.elements["email"].value = "";

  let telephone = form.elements["telephone"].value;
  form.elements["telephone"].value = "";

  if(nom != "") { address_data[id]["nom"] = nom; }
  if(prenom != "") { address_data[id]["prenom"] = prenom; }
  if(pseudo != "") { address_data[id]["pseudo"] = pseudo; }
  if(email != "") { address_data[id]["email"] = email; }
  if(telephone != "") { address_data[id]["telephone"] = telephone; }

  event.currentTarget.style.display = "none";

  afficher();

  event.preventDefault();
}

function ajouterCantact(event){

  let form = document.querySelector("#no-show form").cloneNode(true);

  while(details.children.length != 0){
    details.children[0].remove();
  }

  details.style.display = "block";
  details.appendChild(form);
  form.addEventListener("submit", ajouterCantactSubmit)

}

function ajouterCantactSubmit(event){

  event.preventDefault();

  let id = chance.guid();

  let form = event.currentTarget;

  let nom = form.elements["nom"].value;
  form.elements["nom"].value = "";

  let prenom = form.elements["prenom"].value;
  form.elements["prenom"].value = "";

  let pseudo = form.elements["pseudo"].value; 
  form.elements["pseudo"].value = "";

  let email = form.elements["email"].value;
  form.elements["email"].value = "";

  let telephone = form.elements["telephone"].value;
  form.elements["telephone"].value = "";

  address_data[id] = 
  {
    "nom" : nom,
    "prenom" : prenom,
    "pseudo" : pseudo,
    "email" : email,
    "telephone" : telephone,
    "date" : Date()
  };

  form.style.display = "none";

  afficher();

}

function sortName(event){

  let tmp = [];
  let resorted = {};

  for(let i in address_data){
    tmp.push(address_data[i]["nom"])
  }
  tmp.sort();

  while(tmp.length != 0){
    for(let i in address_data){
      if(address_data[i]["nom"] == tmp[0]){
        resorted[i] = address_data[i];
        tmp.splice(0, 1);
      }
    }
  }

  address_data = resorted;

  afficher();
}

afficher();



















