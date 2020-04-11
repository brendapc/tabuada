function tabuada(){
    let num = document.querySelector('input#num').value
    let tab = document.querySelector('select#seltab')

    if(num.length == 0){
        window.alert("por favor digite um número")
    }else{
        let n = Number(num)
        let c = 1
        tab.innerHTML = ''
        while (c<=10){ //poderia ser feito com for
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}