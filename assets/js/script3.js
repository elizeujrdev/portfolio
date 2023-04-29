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
    var form = document.getElementById('form')


    if (mode.classList.contains('fa-moon')) {

        mode.classList.remove('fa-moon')
        mode.classList.add('fa-sun')

        header.classList.add ('dark')
        body.classList.add('dark')
        footer.classList.add('dark')
        form.classList.add('dark')
        mode.style.color = "white"
        mode.style.transition = "1.5s"
       

        return;
    }

    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')

    header.classList.remove('dark')
    body.classList.remove('dark')
    footer.classList.remove('dark')
    form.classList.remove('dark')
    mode.style.color = "white"
    mode.style.transition = "1.5s"

}
