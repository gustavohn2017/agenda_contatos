//Lê os inputs dos botões. Não é recomendável deixar como variáveis globais em projetos mais relevantes.
var buttonNovoContato = document.getElementById('buttonNovoContato');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoContato= document.getElementById('novoContato');
var inputNomeContato = document.getElementById('nomeContato');
var inputNumeroContato = document.getElementById('numeroContato');
var inputEmailContato = document.getElementById('emailContato');


function mostrarFormContato(){
    novoContato.classList.remove('d-none');    
}

function cancelar(){
    novoContato.classList.add('d-none');    
}

buttonNovoContato.addEventListener('click', mostrarFormContato)
buttonCancelar.addEventListener('click', cancelar)



//Lê as informações do formulário

//lê o botão submit
const form = document.getElementById("form-contato")
//Função que previne o reload ao enviar o formulário pelo botão submit
function salvarNovoContato(event){
    event.preventDefault();

    var inputNomeContato = inputNomeContato.value;
    var inputNumeroContato = inputNumeroContato.value;
    var inputEmailContato =inputEmailContato.value;
    var sucess = alert("contato cadastrado com sucesso!")


    formValidado= validaNome(nome.value)
     if (formValidado){
        alert(sucess);
        inputNomeContato.value = '';
        inputNumeroContato.value = '';
        inputEmailContato.value = '';
        descricao.value = '';
    } else{
        alert('nome não está completo.')
    }
}
