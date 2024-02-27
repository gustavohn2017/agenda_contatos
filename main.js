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

buttonNovoContato.addEventListener('click', mostrarFormContato);
buttonCancelar.addEventListener('click', cancelar)



//Valida o formulário de novo contato
function validaContato(nomeContato, emailContato, numeroContato){
    if (nomeContato.trim().length === 0) return false;
    if (emailContato.trim().length === 0) return false;
    if (numeroContato.trim().length === 0) return false;

    //adicionar isNaN ao numeroContrato para evitar caracteres não condizentes com o parâmetro.


    return true;
}
//função para validar os forms:
function novoContatoValido(nomeContato, numeroContato, emailContato){
    if (!/@\w+\.\w+/.test(email)) {
        console.log('Email inválido');
        return false;
    }
    if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(numero)) {
        console.log('Número de telefone inválido');
        return false;
    }

    return true;
}

//lê o botão submit
const form = document.getElementById("form-contato")
//Função que previne o reload ao enviar o formulário pelo botão submit
function salvarNovoContato(event){
    event.preventDefault();

    var NomeContato = inputNomeContato.value;
    var NumeroContato = inputNumeroContato.value;
    var EmailContato =inputEmailContato.value;
    //var sucess = alert("contato cadastrado com sucesso!")
    if (novoContatoValido(NomeContato, NumeroContato, EmailContato)){
        console.log('evento válido!');
    }else{
        console.log('evento é inválido');
    };


    
}
