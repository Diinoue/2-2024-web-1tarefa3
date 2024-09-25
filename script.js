// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");

// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

//Armazenar frases num vetor
const mens2 = document.getElementsByClassName ("mensagem2");


//Selecionar botão mudar frases
const btnMudar = document.getElementById ("btn-mudar-frase");

btnMudar.addEventListener ('click', function(){
    for (i=0; i < mens2.length; i++) {
        mens2[i].textContent = `Frase modificada ${i} utilizando JS`
        }

    }       
);