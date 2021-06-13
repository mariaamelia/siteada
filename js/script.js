

document.getElementById("botao").addEventListener("click",validaFormulario);

function validaFormulario(){
  var nome = document.getElementById("nome").value; 
  var email = document.getElementById("emailusuaria").value;
  var telefone = document.getElementById("telefone").value;
  if( nome != "" &&  email != "" && telefone !=""){
      alert("Prontinho!!Você receberá as novidades por email")
  }else{
    alert("Por favor, preencha os dados")
  }

}