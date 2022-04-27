function tela_inicial(){
    window.location = 'login.html'
}

function sair(){
    sessionStorage.clear()
    
    window.location = 'index.html'
}

 function verificarlogin(){
    if(sessionStorage.EMAIL_USUARIO ==  null || sessionStorage.NOME_USUARIO ==  null || sessionStorage.ID_USUARIO == null){

        alert('Faça um login para continuar')
        window.location = 'index.html'
    }
 } 
 
function set_graf(){
    var selecao = select_setor.value;
    
    var div = document.getElementById('graficoCalor');
    var temp_velho = document.getElementById('myChart');
    div.removeChild(temp_velho)
    
    var temp_novo = document.createElement('canvas');
    temp_novo.id = 'myChart';
    div.appendChild(temp_novo);

    var div2 = document.getElementById('graficoUmidade');
    var umi_velho = document.getElementById('myChart2');
    div2.removeChild(umi_velho)
    
    var umi_novo = document.createElement('canvas');
    umi_novo.id = 'myChart2';
    div2.appendChild(umi_novo);

    if(selecao == '-'){  
        span_setor.innerHTML = 'Escolha o setor:'
        alert('Escolha um setor válido')
    }
    
    else if(selecao == 'set_1'){
        
        span_setor.innerHTML = 'Setor 1'
        graf_temp1();
        graf_umi1();
    }

    else if(selecao == 'set_2'){
        
        span_setor.innerHTML = 'Setor 2'
        graf_temp2();
        graf_umi2();
        
    }

    else if(selecao == 'set_3'){
        
        span_setor.innerHTML = 'Setor 3'
        graf_temp3();
        graf_umi3();
        
    }
}

function graf_temp1() {

    const labels = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Temperatura',
            backgroundColor: 'white',
            borderColor: 'darkred',
            data: [23, 24, 27, 30, 22, 21, 25],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}


function graf_umi1() {

    const labels = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Umidade',
            backgroundColor: 'white',
            borderColor: 'darkblue',
            data: [55, 47, 33, 57, 56, 40, 30],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart2'),
        config
    );

}


function graf_temp2() {

    const labels = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Temperatura',
            backgroundColor: 'white',
            borderColor: 'darkred',
            data: [23, 24, 27, 30, 22, 21, 25],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}


function graf_umi2() {

    const labels = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Umidade',
            backgroundColor: 'white',
            borderColor: 'darkblue',
            data: [20, 21, 23, 24, 25, 11, 11],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart2'),
        config
    );

}



function graf_temp3() {

    const labels = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Temperatura',
            backgroundColor: 'white',
            borderColor: 'darkred',
            data: [23, 24, 27, 30, 22, 21, 25],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );

}


function graf_umi3() {

    const labels = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Umidade',
            backgroundColor: 'white',
            borderColor: 'darkblue',
            data: [55, 47, 33, 57, 56, 40, 30],
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {}
    };

    const myChart = new Chart(
        document.getElementById('myChart2'),
        config
    );

}

   