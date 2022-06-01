
/* var slides = [
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/1.png" alt="">',
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/2.png" alt="">', 
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/3.png" alt="">',
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/4.png" alt="">',
'<img style="width:65vw; height:50vh; margin-left:-110%; margin-top:10%; border-radius:10px; transition: 1s;" src="./imgs/Carrosel_sugestoes/5.png" alt="">'

];
*/
var contador = 0;
var slides = [
 'url("./imgs/Carrosel_sugestoes/1.png")',
 'url("./imgs/Carrosel_sugestoes/2.png")', 
 'url("./imgs/Carrosel_sugestoes/3.png")',
 'url("./imgs/Carrosel_sugestoes/4.png")',
 'url("./imgs/Carrosel_sugestoes/5.png")'
    
    ];
function carrossel(){


    caixa_carrossel.style.backgroundImage = slides[contador]
    
    contador++;

    if(contador > slides.length -1){
        contador = 0
    }
    
}

setInterval(function(){
    carrossel()
},3500);