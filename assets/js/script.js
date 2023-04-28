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