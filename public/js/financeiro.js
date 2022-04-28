
function perdaCheckon() {
  if (valorPerdaCheck.checked == true){
    esconder.style.display = "none"

    }else{
      esconder.style.display = "flex"
    }    
}

function calcular() {
  var colheita = Number(colheitaIdeal.value)
  var valorPorKg = Number(valor.value)

  if (colheita == 0 || valorPorKg==0) {
      alert("Por favor, Informe os valores")

  }else{

    if (valorPerdaCheck.checked == true){

      var colheitaReal = (colheita - (colheita*0.4))
      var lucroConPerda = colheitaReal * valorPorKg
      var lucroIdeal = colheita * valorPorKg
      var prejuizoBruto = lucroIdeal - lucroConPerda
      var percent_Preju = (prejuizoBruto / lucroIdeal)*100
      var percent_Venda = 100 - percent_Preju

    } else {
      var valorPerda = Number(input_valorPerda.value)
      var lucroIdeal = colheita * valorPorKg
      var lucroConPerda = (colheita - valorPerda) * valorPorKg
      console.log(lucroConPerda)
      var prejuizoBruto = lucroIdeal - lucroConPerda
      var percent_Preju = (prejuizoBruto / lucroIdeal)*100
      var percent_Venda = 100 - percent_Preju
    }




  //FORMATAÇÃO EM REAL BRL
  var format_lucroConPerda = lucroConPerda.toLocaleString("pt-br",{
      style: 'currency',
      currency: 'BRL' 
  })

  var format_lucroIdeal = lucroIdeal.toLocaleString("pt-br",{
      style: 'currency',
      currency: 'BRL' 
  })

  var format_prejuizoBruto = prejuizoBruto.toLocaleString("pt-br",{
      style: 'currency',
      currency: 'BRL' 
  })

  
  span_colheita1.innerHTML = `${colheita} Kg`
  span_recConPerd1.innerHTML = `${format_lucroConPerda} `
  span_recSenPerd1.innerHTML = `${format_lucroIdeal} `
  span_preju1.innerHTML = `${format_prejuizoBruto}`
  span_recConPerd1.innerHTML = `${format_lucroConPerda} `
  span_recSenPerd1.innerHTML = `${format_lucroIdeal} `
  span_preju1.innerHTML = `${format_prejuizoBruto}`
  span_percent_Venda1.innerHTML= `${percent_Venda.toFixed(2)}`
  span_percent_Preju1.innerHTML = `${percent_Preju.toFixed(2)}`

  span_colheita2.innerHTML = `${colheita} Kg`
  span_recConPerd2.innerHTML = `${format_lucroConPerda} `
  span_recSenPerd2.innerHTML = `${format_lucroIdeal} `
  span_preju2.innerHTML = `${format_prejuizoBruto}`
  span_recConPerd2.innerHTML = `${format_lucroConPerda} `
  span_recSenPerd2.innerHTML = `${format_lucroIdeal} `
  span_preju2.innerHTML = `${format_prejuizoBruto}`
  span_percent_Venda2.innerHTML= `${percent_Venda.toFixed(2)}`
  span_percent_Preju2.innerHTML = `${percent_Preju.toFixed(2)}`

  articleResult.style.display = "flex"
  articleResult.style.width = "90%"
  cardResult.style.backgroundColor = "#EBFFE1"
  cardResult.style.width = "68vw"
  cardSimu.style.width = "30vw"
  result.style.display = "block"
  btnVoltar.style.display = "block"
  topoSimu.style.marginTop="2px"
  topoSimu.style.fontSize = "24px"
  cardDiagram.style.width = "0"
  cardDiagram.style.opacity = "0"
  cardDiagram.style.pointerEvents = "none"
  }
}
function mostrarDiagram(){
  articleResult.style.display = "none"
  cardResult.style.backgroundColor = "#ffffff"
  cardResult.style.width = "33vw"
  cardSimu.style.width = "33vw"
  result.style.display = "none"
  //cardDiagram.style.display = "block"
  btnVoltar.style.display = "none"
  topoSimu.style.marginTop = "20%"
  topoSimu.style.fontSize = "26px"
  cardDiagram.style.width = "33vw"
  cardDiagram.style.opacity = "1"
  }