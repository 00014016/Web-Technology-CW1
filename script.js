const bar = document.getElementById('menu-icon');
const nav = document.getElementById('navbar-main')
const close = document.getElementById('close')

if (bar) {
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}