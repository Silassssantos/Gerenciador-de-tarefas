//adicionar nova linha
function novaLinha() {
    let grade = document.getElementById('gridZero');
    for ( let i = 0; i<5; i++) {
        let novasLinhas = document.createElement('textarea');
        novasLinhas.classList.add('entrada');
        grade.appendChild(novasLinhas);
    }
}

//remover uma linha
function removerLinha(){
    let grade = document.getElementById('gridZero');

// Converte a lista de nós filhos em um array
let filhos = Array.from(grade.children);

// Remove os últimos 5 elementos
for (let i = 0; i < 5; i++) {
    filhos[filhos.length - 1 - i].remove();
}}


let textareaEmFoco;

document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    document.getElementById('menuContexto').style.display = 'block';
     menuContexto.style.left = e.clientX + 'px'; // Adiciona a posição X do mouse
    menuContexto.style.top = e.clientY + 'px'; // Adiciona a posição Y do mouse
        textareaEmFoco = document.activeElement;
})

document.addEventListener('click', function(e) {
    var elemento = document.getElementById('menuContexto'); 
    if (elemento) {
        elemento.style.display = 'none';
    }
});
document.getElementById('inputCor').addEventListener('input', function(e) {
    let cor = e.target.value;
    if (textareaEmFoco) {
        textareaEmFoco.style.borderColor = cor;
    }
});

document.getElementById('fileUpload').addEventListener('change', function(e) {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = function() {
        document.body.style.backgroundImage = 'url(' + reader.result + ')';
    }
    if (file) {
        reader.readAsDataURL(file);
    }
    document.body.style.backgroundSize = 'cover'; // A imagem cobre toda a área
    document.body.style.backgroundRepeat = 'no-repeat'; // A imagem não se repete
    document.body.style.backgroundPosition = 'center'; // A imagem é centralizada

});