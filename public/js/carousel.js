let contador = 1
document.getElementById("radio1").checked = true

setInterval(() => {
    nextImage()
}, 3000);

function nextImage() {
    contador++
    if (contador>4) {
        contador =1
    }
    
    document.getElementById("radio" + contador).checked = true
}