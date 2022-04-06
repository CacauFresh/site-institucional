 ($(window)).on("scroll touchmove", function() {

    //Função que se o scrollTop da pagina estiver na seção inicio, altera o css da pagina
    if ($(document).scrollTop() >= $("#sec_home").position().top){
        $('.header').css('background-color', '#EBFFE1');
        $('.link_home').css('text-decoration','underline');
        $('.link_home').css('tex-decoration-color','#713708'); 

        $('.link_home').css('color','#713708');        
        $('.link_team').css('color','#713708');        
        $('.link_sobre').css('color','#713708');        
        $('.link_sim').css('color','#713708');        
        $('.link_serv').css('color','#713708');        

        $('.link_team').css('text-decoration','none');
        $('.link_sobre').css('text-decoration','none');
        $('.link_serv').css('text-decoration','none');
        $('.link_sim').css('text-decoration','none');


        header.style.transition = "0.2s";

    }

     if ($(document).scrollTop() >= $("#sec_sobre").position().top){
        $('.header').css('background-color', '#713708');
        $('.link_sobre').css('text-decoration','underline');
        $('.link_sobre').css('tex-decoration-color','#EBFFE1'); 

        $('.link_home').css('color','#EBFFE1');        
        $('.link_team').css('color','#EBFFE1');        
        $('.link_sobre').css('color','#EBFFE1');        
        $('.link_sim').css('color','#EBFFE1');        
        $('.link_serv').css('color','#EBFFE1');  

        $('.link_home').css('text-decoration','none');
        $('.link_team').css('text-decoration','none');
        $('.link_serv').css('text-decoration','none');
        $('.link_sim').css('text-decoration','none');
    
        header.style.transition = "0.2s";
    } 

    if ($(document).scrollTop() >= $("#sec_equipe").position().top){
        $('.header').css('background-color', '#713708');
        $('.link_team').css('text-decoration','underline');
        $('.link_team').css('tex-decoration-color','#EBFFE1'); 

        $('.link_home').css('color','#EBFFE1');        
        $('.link_team').css('color','#EBFFE1');        
        $('.link_sobre').css('color','#EBFFE1');        
        $('.link_sim').css('color','#EBFFE1');        
        $('.link_serv').css('color','#EBFFE1');  

        $('.link_home').css('text-decoration','none');
        $('.link_sobre').css('text-decoration','none');
        $('.link_serv').css('text-decoration','none');
        $('.link_sim').css('text-decoration','none');
    
        header.style.transition = "0.2s";
    } 
}); 
