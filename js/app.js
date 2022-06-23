//Informações do cliente
var Contact = function (name, email, phone, idade) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.idade = idade;
}

//Onde salvara os clientes
var contacts = [];

//Listagem de clientes
var listarUsuarios = function () {
  document.getElementById('displayContacts').innerHTML = " ";
  for (var i = 0; i < contacts.length; i++) {
      document.getElementById('displayContacts').innerHTML += '<tr><td class="tabela-item" id="name' + i + '">' + contacts[i].name + '</td><td class="tabela-item" id="email' + i + '">' + contacts[i].email + '</td><td class="tabela-item" id="phone' + i + '">' + contacts[i].phone + '</td><td class="tabela-item" id="idade' + i + '">' + contacts[i].idade + '</td><td class="tabela-item"><button class="btn btn-update" onclick=updateContact(' + i + ')>Update</button></div><button class="btn btn-delete" onclick=deleteContact(' + i + ')>Delete</button></td></tr>';
  }
}

//função adicionar clientes
var addNewContact = function () {
  var name = document.getElementById('inputName').value;
  var email = document.getElementById('inputEmail').value;
  var phone = document.getElementById('inputPhone').value;
  var idade = document.getElementById('inputIdade').value;
  var contact = new Contact(name, email, phone, idade);
  contacts.push(contact);
  listarUsuarios();
}

//função deletar clientes
var deleteContact = function (i) {
  contacts.splice(i, 1);
  listarUsuarios();
}

//função editar clientes
var updateContact = function (i) {
  contactId = i;
  document.getElementById("inputName").value = contacts[i].name;
  document.getElementById("inputEmail").value = contacts[i].email;
  document.getElementById("inputPhone").value = contacts[i].phone;
  document.getElementById("inputIdade").value = contacts[i].idade;
  document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="custom-btn btn-submit" onclick=submitUpdatedContact(contactId)>Atualizar</button>';
 
}

//função atualizar clientes
var submitUpdatedContact = function (i) {
  contacts[i].name = document.getElementById("inputName").value;
  contacts[i].email = document.getElementById("inputEmail").value;
  contacts[i].phone = document.getElementById("inputPhone").value;
  contacts[i].idade = document.getElementById("inputIdade").value;

  document.getElementById("inputName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputPhone").value = "";
  document.getElementById("inputIdade").value = "";

  listarUsuarios();
}

listarUsuarios();
