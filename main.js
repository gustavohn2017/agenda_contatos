function novoContato(){
    var novoContato= document.getElementById('novoContato');
    
}


//Lê as informações do formulário

//lê o botão submit
const form = document.getElementById("form-contato")
//Função que previne o reload ao enviar o formulário pelo botão submit
form.addEventListener('submit', function(event){
    let formValidado = false;
    event.preventDefault();

    const nome = document.getElementById("nome");
    const numero = document.getElementById("numero");
    const email = document.getElementById("email");
    const descricao = document.getElementById("descricao");
    const sucess = alert("contato cadastrado com sucesso!")


    formValidado= validaNome(nome.value)
     if (formValidado){
        alert(sucess);
        nome.value = '';
        numero.value = '';
        email.value = '';
        descricao.value = '';
    } else{
        alert('nome não está completo.')
    }
})


function validaNome(nome){
    const nomeComoArray = nome.split(' ');


}

function adicionar() {
    const nome = document.getElementById("nome").value;
    const numero = document.getElementById("numero").value;
    const email = document.getElementById("email").value;
    const descricao = document.getElementById("descricao").value;
  
    const listaContatos = document.getElementById("contatos");
    const novoContato = document.createElement("li");
    novoContato.innerHTML = `${nome} - ${numero} - ${email} - ${descricao}`;
    listaContatos.appendChild(novoContato);
  }
  