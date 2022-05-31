var contador = 0;

var slides = [
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/1.png" alt="">',
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/2.png" alt="">', 
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/3.png" alt="">',
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/4.png" alt="">',
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/5.png" alt="">'

];
function carrossel(){


    caixa_carrossel.innerHTML = `${slides[contador]}`
    
    contador++;

    if(contador > slides.length -1){
        contador = 0
    }
    
}

setInterval(function(){
    carrossel()
},3000);