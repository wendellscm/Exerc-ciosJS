
function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#foto')
    var data = new Date
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 00 && hora < 12) {
    msg.innerHTML += ` <strong>Bom dia!</strong>`
    document.body.style.backgroundColor = '#88a5a9'
    img.src = 'dia.jpg'
    } else if (hora = 12 && hora <=18) {
        msg.innerHTML += ` <strong>Boa tarde</strong>`
        document.body.style = '#c48f6f'
        img.src = 'tarde.jpg'
        
    } else {
        msg.innerHTML += ` <strong>Boa noite</strong>`
        document.body.style.backgroundColor ='#0f5056'
        img.src = 'noite.jpg'

    }
}