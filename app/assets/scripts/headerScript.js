let mainMenuSection = document.getElementById('main-menu-sec')
let accountMenuSection = document.getElementById('account-menu-container')
let menuBtn = document.getElementById('menu-btn')
let profileBtn = document.getElementById('profile-btn')
let backdrop = document.getElementById('backdrop')

menuBtn.addEventListener('click', (event) => {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    /* if menuBtn is active close menu other wise show menu and change menu icon*/
    if (menuBtn.classList.contains('menu-btn-active')) {
        menuBtn.classList.toggle('menu-btn-active')

        menuBtn.firstElementChild.setAttribute('src', '/assets/icons/menu-icon.svg')

        /* close menu */
        if (vw >= 1024) {
            mainMenuSection.style.display = 'none'
            backdrop.style.display = 'none'
        } else {
            mainMenuSection.style.display = 'none'
            backdrop.style.display = 'none'
            mainMenuSection.style.left = '-70vw'
        }
    } else {
        menuBtn.classList.toggle('menu-btn-active')

        menuBtn.firstElementChild.setAttribute('src', '/assets/icons/cancel-close.svg')

        /* show menu */
        if (vw >= 1024) {
            mainMenuSection.style.display = 'block'
            backdrop.style.display = 'block'
        } else {
            mainMenuSection.style.display = 'block'
            backdrop.style.display = 'block'
            mainMenuSection.style.left = 0
        }
    }
})

let mainMenuCloseBtn = document.getElementById('mainMenu-closeBtn')
mainMenuCloseBtn.addEventListener('click', (event) => {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if (vw >= 1024) {
        mainMenuSection.style.display = 'none'
        backdrop.style.display = 'none'
    } else {
        mainMenuSection.style.display = 'none'
        backdrop.style.display = 'none'
        mainMenuSection.style.left = '-70vw'
    }
})

profileBtn.addEventListener('click', (event) => {
    accountMenuSection.style.right = 0
    backdrop.style.display = 'block'
})

let menuCloseBtn = document.getElementById('close-menu')
menuCloseBtn.addEventListener('click', (event) => {
    accountMenuSection.style.right = '-400px'
    backdrop.style.display = 'none'
})
