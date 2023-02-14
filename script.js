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
    
    
    
    msg.innerHTML = ` ${hora}:${minuto}:<span style="color:purple;">${segundo}</span>`
    
    
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
        msg.innerHTML = `${hora}:${minuto}:<span style="color:#00A4F9;">${segundo}</span>`

    } else if ( hora >= 12 && hora < 18){
        foto.src = 'tarde.jpg'
        sec.style.background = 'rgb(2 0 2 / 50%)'
        corpo.style.backgroundImage = "url('tarde.jpg')"
        sec.style.color = 'white'
        corpo.style.backgroundRepeat = "no-repeat"
        corpo.style.backgroundSize = "cover"
        msg.innerHTML = ` ${hora}:${minuto}:<span style="color:#FD6802;">${segundo}</span>`
        
        
    } else{
        foto.src = 'noite.jpg'
        sec.style.background = 'rgb(2 0 2 / 50%)'
        sec.style.color = 'white'
        corpo.style.backgroundImage = "url('noite.jpg')"
        corpo.style.backgroundRepeat = "no-repeat"
        corpo.style.backgroundSize = "cover"
        msg.innerHTML = ` ${hora}:${minuto}:<span style="color:purple;">${segundo}</span>`
    }


}

