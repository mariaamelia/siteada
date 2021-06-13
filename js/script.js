

document.getElementById("botao").addEventListener("click",validaFormulario);

function validaFormulario(){
  if(document.getElementById("nome").value != "" && document.getElementById("emailusuaria").value != "" && document.getElementById("telefone").value!=""){
      alert("Prontinho!!Você receberá as novidades por email")
  }else{
    alert("Por favor, preencha os dados")
  }

}