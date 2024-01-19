document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var email = document.getElementById('email').value;
    var nota = document.getElementById('nota').value;

    var contatoHTML = '<li>' +
        '<h3>' + nome + '</h3>' +
        '<p>Telefone: ' + telefone + '</p>' +
        '<p>Email: ' + email + '</p>' +
        '<button onclick="this.nextElementSibling.style.display=\'block\'">Mostrar Nota</button>' +
        '<p class="nota">' + nota + '</p>' +
        '<button onclick="editarContato(this)">Editar</button>' +
        '<button onclick="excluirContato(this)">Excluir</button>' +
        '</li>';

    document.getElementById('lista-contatos').innerHTML += contatoHTML;

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('nota').value = '';
});

function editarContato(botao) {
    var li = botao.parentNode;
    var nome = li.querySelector('h3').textContent;
    var telefone = li.querySelectorAll('p')[0].textContent.replace('Telefone: ', '');
    var email = li.querySelectorAll('p')[1].textContent.replace('Email: ', '');
    var nota = li.querySelector('.nota').textContent;

    document.getElementById('nome').value = nome;
    document.getElementById('telefone').value = telefone;
    document.getElementById('email').value = email;
    document.getElementById('nota').value = nota;

    li.parentNode.removeChild(li);
}

function excluirContato(botao) {
    var li = botao.parentNode;
    li.parentNode.removeChild(li);
}
