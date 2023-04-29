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


function tema() {

    var mode = document.getElementById('icone')
    var header = document.querySelector('header')
    var body = document.querySelector('body')
    var footer = document.getElementById('footer')
    var sobremim = document.getElementById('sobremim')
    var quemsou = document.getElementById('quemsou')
    var gosto = document.getElementById('gosto')
    var profissional = document.getElementById('profissional')
    var escolhi = document.getElementById('escolhi')
    var educaçao = document.getElementById('educaçao')

    if (mode.classList.contains('fa-moon')) {

        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        header.classList.add ('dark')
        body.classList.add('dark')
        footer.classList.add('dark')
        sobremim.classList.add('dark')
        gosto.classList.add('dark')
        quemsou.classList.add('dark')
        profissional.classList.add('dark')
        escolhi.classList.add('dark')
        educaçao.classList.add('dark')
        mode.style.color = "white"
        mode.style.transition = "1.5s"
       

        return;
    }

    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')

    header.classList.remove('dark')
    body.classList.remove('dark')
    footer.classList.remove('dark')
    sobremim.classList.remove('dark')
    gosto.classList.remove('dark')
    quemsou.classList.remove('dark')
    profissional.classList.remove('dark')
    escolhi.classList.remove('dark')
    educaçao.classList.remove('dark')
    mode.style.color = "white"
    mode.style.transition = "1.5s"

}
