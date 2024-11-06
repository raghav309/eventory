var collapsible = document.getElementsByClassName('collapsible-sec')

for (let i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener('click', function () {
        let collapsibleBody = this.childNodes[3]

        if (collapsibleBody.style.height) {
            collapsibleBody.style.height = null
        } else {
            collapsibleBody.style.height = collapsibleBody.scrollHeight + 'px'
        }
    })
}
