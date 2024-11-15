var emailEl = document.getElementById('input-email');
var telefoneEl = document.getElementById('input-telefone');
var mensagemEl = document.getElementById('input-mensagem');
var botaoEnviar = document.getElementById('btn-enviar-contato');
var mensagemForm = document.getElementById('mensagemForm');


function enviarFormulario() {
    
    if (emailEl.value == '') {

        emailEl.focus();
        emailEl.style.borderColor = '#cc3f3f';
        emailEl.style.borderWidth = '3px'
        return mensagemForm.innerText = 'O campo de *email* não pode ser vazio'

    } else if (telefoneEl.value == ''){

        telefoneEl.focus();
        telefoneEl.style.borderColor = '#cc3f3f';
        telefoneEl.style.borderWidth = '3px'
        telefoneEl.style.border.color = '#cc3f3f'
        return mensagemForm.innerHTML = 'O campo *telefone* não pode ser vazio'

    } else {
        mensagemForm.innerHTML = 'Tudo certo! Entraremos em contato com você em breve.';
        mensagemForm.style.color = '#FFF8E8'
        // Tirando as cores das bordas
        emailEl.style.border = 'none';
        telefoneEl.style.border = 'none';

        // Desativando os campos
        emailEl.disabled = true;
        telefoneEl.disabled = true;
        mensagemEl.disabled = true;

        botaoEnviar.disabled = true;
        botaoEnviar.style.backgroundColor = '#555'
        botaoEnviar.style.cursor = 'not-allowed'
        
    }
}

botaoEnviar.addEventListener('click', enviarFormulario);


// Função de formatação de textos dinâmica
function formatarTexto(formato, campo){
            
    objeto = eval(campo);
    sep1 = "."
    sep2 = "-"
    sep3 = "("
    sep4 = ")"

    if (formato == "cpf"){ // _ _ _ . _ _ _ . _ _ _ - _
        if (objeto.value.length == 3) {
            objeto.value = objeto.value + sep1
        } else if (objeto.value.length == 7) {
            objeto.value = objeto.value + sep1
        } else if (objeto.value.length == 11) {
            objeto.value = objeto.value + sep2
        }
    }

    if (formato == "cep"){ // _ _ _ _ _ - _ _ _
        if (objeto.value.length == 5) {
            objeto.value = objeto.value + sep2
        }
    }

    if (formato == "telefone"){ // ( _ _ ) _ _ _ _ _ - _ _ _ _
        if (objeto.value.length == 0) {
            objeto.value = objeto.value + sep3
        } else if (objeto.value.length == 3) {
            objeto.value = objeto.value + sep4  + " "
        } else if (objeto.value.length == 10) {
            objeto.value = objeto.value + sep2
        }
    }
}

// Funcionalidades de login
var nomeUsuario = document.getElementById('nomeUsuario');
var senhaUsuario = document.getElementById('senhaUsuario');

var mensagemErro = document.getElementById('caixa-erro');

document.getElementById("botao-logout").addEventListener("click", function() {
    sessionStorage.setItem('logado', 'false') 
});

// Verificando se o login bate com as credenciais de acesso fixa
// Usuário = admin || Senha = 123
function iniciarSessao(event) {
    if (nomeUsuario.value == 'admin' && senhaUsuario.value == '123'){

        event.preventDefault(); // Impede o envio do formulário
        window.location.href = "./paginas_admin/main_admin.html"; // Redireciona
        sessionStorage.setItem('logado', 'true');    
    } else{
        mensagemErro.style.display = 'flex';
        nomeUsuario.focus();
    }
}
