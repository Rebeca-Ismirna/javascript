function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById ('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ("[ERRO!] Verifique os dados e tente novamente.")
    } else {
        var fsex = document.getElementsByName ("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute ('src', 'menino.jpg')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute ('src', 'garotojovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'adulto.jpg')
            } else {
                //idoso
                img.setAttribute ('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute ('src', 'menina.jpg')
            } else if (idade <= 21) {
                //jovem
                img.setAttribute ('src', 'garotajovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute ('src', 'adulta.jpg')
            } else {
                //idoso
                img.setAttribute ('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        img.style.width = '250px'
        img.style.height = '250px'
        img.style.borderRadius = "50%"
    }
}