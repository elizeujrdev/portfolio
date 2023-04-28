function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function ativarletra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=> {

            elemento.innerHTML += letra;
        },75 * i)
        
    });



}
const titulo = document.querySelector('.digitando')
ativarletra(titulo);

function tema() {

    var mode = document.getElementById('icone')
    var header = document.querySelector('header')
    var body = document.querySelector('body')
    var sectiondiv = document.getElementById('section-div')
    var eu = document.getElementById('eu')
    var digitando = document.getElementById('digitando')
    var cv = document.getElementById('cv')
    var botao = document.getElementById('botao')
    var projetos = document.getElementById('projetos')
    var layout = document.getElementById('layout')
    var linha = document.getElementById('linha')
    var footer = document.getElementById('footer')
    var navegaçao = document.getElementById('navegaçao-secundaria')
    var contatos = document.getElementById('contatos')
    var imagem = document.getElementById('img')
    var texto = document.getElementById('texto')


    if (mode.classList.contains('fa-sun')) {

        mode.classList.remove('fa-sun')
        mode.classList.add('fa-moon')

        header.classList.add ('dark')
        body.classList.add('dark')
        sectiondiv.classList.add('dark')
        eu.classList.add('dark')
        digitando.classList.add('dark')
        cv.classList.add('dark')
        texto.classList.add('dark')
        botao.classList.add('dark')
        projetos.classList.add('dark')
        layout.classList.add('dark')
        linha.classList.add('dark')
        footer.classList.add('dark')
        navegaçao.classList.add('dark')
        contatos.classList.add('dark')
        imagem.src = "assets/img/website-mockup-2-devices-themes.png"
        mode.style.color = "white"
        mode.style.transition = "1.5s"
        imagem.style.transition = "1.5s"
       

        return;
    }

    mode.classList.remove('fa-moon')
    mode.classList.add('fa-sun')

    header.classList.remove('dark')
    body.classList.remove('dark')
    sectiondiv.classList.remove('dark')
    eu.classList.remove('dark')
    digitando.classList.remove('dark')
    cv.classList.remove('dark')
    texto.classList.remove('dark')
    botao.classList.remove('dark')
    projetos.classList.remove('dark')
    layout.classList.remove('dark')
    linha.classList.remove('dark')
    footer.classList.remove('dark')
    navegaçao.classList.remove('dark')
    contatos.classList.remove('dark')
    imagem.src = "assets/img/website-mockup-2-devices.png"
    imagem.style.transition = "1.5s"
    mode.style.color = "white"
    mode.style.transition = "1.5s"

}