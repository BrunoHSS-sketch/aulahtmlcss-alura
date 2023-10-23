function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);    
    
    if (elemento && elemento.localName === 'audio') { 
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor não encontrado')
    }

}

//constante
const listaDeTeclas = document.querySelectorAll('.tecla');

//variavel
//let contador = 0

//para 
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
          
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    //contador = contador + 1;

    //retorna o botão ativo caso a tecla pressionada sejá verdadeira 
    tecla.onkeydown = function (event) {
        if (event.code === 'Enter' || event.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
