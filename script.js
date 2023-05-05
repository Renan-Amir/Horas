function carregar() {
    const msg = window.document.getElementById('msg')
    const img = window.document.getElementById('imagem')
    const data = new Date()
    const hora = 8//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = '/img/manha.png'
        document.body.style.background = '#dee5ee'
    } else if (hora >= 12 && hora <= 18) {
        // Boa Tarder!
        img.src = '/img/tarde.png'
        document.body.style.background = '#ffbc5a'
    } else {
        // Boa Noite!
        img.src = '/img/noite.png'
        document.body.style.background = '#162b33'
    }
}
