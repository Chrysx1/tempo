let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if ( Number(n) >=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        item.style.color = 'white'
        res.innerHTML = ''
        lista.appendChild(item)

    } else {
        alert("Número inválido ou já encontrado na lista")
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione um valor')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            } if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total



        res.innerHTML = ''
        res.innerHTML += '<h1>Resultado</h1>'
        res.innerHTML += `<p>Temos ${total} números cadastrados</p>` 
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>A soma entre eles é ${soma}</p>`
        res.innerHTML += `<p>A média entre é ${media}</p>`
    }
}

var intervald = window.setInterval(() => {hora()     
},1000);

function hora(){
    var sec  = document.getElementById('kk')
    var body = document.getElementById('#corpo')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('#foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    if(minuto < 10) minuto = "0"+ minuto
    if(hora < 10) hora = "0" + hora
    if(segundo < 10) segundo = "0" + segundo
    

    
    msg.innerHTML = ` ${hora}:${minuto}:${segundo}`
    
    setInterval(() => {
        d = new Date(); //object of date()
        hr = d.getHours();
        min = d.getMinutes();
        sec = d.getSeconds();
        hr_rotation = 30 * hr + min / 2; //converting current time
        min_rotation = 6 * min;
        sec_rotation = 6 * sec;

        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
    }, 1000);
    

    if( hora >= 5 && hora < 12){
        foto.src = 'manha.jpg'
        sec.style.background = 'rgb(0 0 0 / 50%)'
        corpo.style.backgroundImage = "url('manha.jpg')"
        corpo.style.backgroundRepeat = "no-repeat"
        corpo.style.backgroundSize = "cover"
        sec.style.color = 'white'

    } else if ( hora >= 12 && hora < 18){
        foto.src = 'tarde.jpg'
        sec.style.background = 'rgb(2 0 2 / 50%)'
        corpo.style.backgroundImage = "url('tarde.jpg')"
        sec.style.color = 'white'
        corpo.style.backgroundRepeat = "no-repeat"
        corpo.style.backgroundSize = "cover"
        
        
    } else{
        foto.src = 'noite.jpg'
        sec.style.background = 'rgb(2 0 2 / 50%)'
        sec.style.color = 'white'
        corpo.style.backgroundImage = "url('noite.jpg')"
        corpo.style.backgroundRepeat = "no-repeat"
        corpo.style.backgroundSize = "cover"

    }


}

