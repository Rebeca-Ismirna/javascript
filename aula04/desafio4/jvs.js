function Tabuada() {
    let num = document.getElementById ('n1')
    let tab = document.getElementById ('seltab')
    if (num.value.length == 0) {
        window.alert ('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}