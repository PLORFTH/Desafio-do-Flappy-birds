function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem;
}
//Essa função ja cria uma tag com a classe que a gente atribuir a ela
//ex: <div class="conteudo"></div> só que a função ja faz isso automatico

function Barreira(reversa = false){
    this.elemento = novoElemento('div', 'barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.heigth = `${altura}px`
}

const b = new Barreira(true)
b.setAltura(500)
document.querySelector('[wm-flappy]').appendChild(b.elemento)