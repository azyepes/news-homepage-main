const $ = (id) => document.querySelector(id)

const menuBtn = $('#btn-menu')
const closeBtn = $('#btn-close')
const nav = $('#nav-menu')

function showMenu() {
    nav.style.transition = "all 1s"
    nav.style.right = "0"
}

function hideMenu(params) {
    nav.style.transition = "all 1s"
    nav.style.right = "-100%"
}
