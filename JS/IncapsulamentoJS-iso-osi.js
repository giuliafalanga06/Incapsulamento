var margine = 400;
var larghezzaPacchetto = 62.7;
var passo = 80;
var spostamento = margine-larghezzaPacchetto;
var spostamentoHost2 = 510;
var pacchetti = ["#data", "#ah", "#ph", "#sh", "#th", "#nh", "#dh"];

    

$(document).ready(function(){
  $("body").hide();
  $("body").fadeIn(500);
  for(var i = 0; i<7; i++){
    $(pacchetti[i]).hide();
  }
    $("#dt").hide();
    $("#dt").css("left", margine + 101.62 +"px");

    $("#click").click(host1);

    /*GESTIONE POSIZIONE IMMAGINI PACCHETTI*/
    for(var i = 0; i<7; i++){
      $(pacchetti[i]).css("margin-top", passo*i+15 + "px");
    }
    $("#data").css("margin-left", margine);
    $("#dt").css("margin-top", passo*6 + 15 + "px");
    
});

  function host1(){
    spostamento = margine-larghezzaPacchetto;
    $("#click").attr("disabled", true);
    $("#data").show();
    $("#data").animate( {top: passo +"px"},"slow", function(){muovi(1)}); //parte da 1
  }

  function muovi(n){
    if(n<7){ // n<7 perchè bisogna ripterlo solo 7 volte
      $(pacchetti[n]).show();

      if(n!=1) spostamento -= larghezzaPacchetto;
      if(n==6) $("#dt").show(); //livello 6 = livello dove aggiungere il pacchetto dt

      $(pacchetti[n]).animate({left:spostamento +"px"},"slow", function(){passaggio(n)}); //sposta il pacchetto corrente verso destra
    }
    if(n==7) passaggioHost2(n); //tutti i pacchetti spostati nell'host1
  }

  function passaggio(n){
    for(var i = 0; i<n; i++){
      $(pacchetti[i]).animate( {top: (passo*(n-i+1)) +"px"},"slow"); //tutti i pacchetti mossi fino ad ora si spostano al livello sotto
    }
    if(n==6) $("#dt").animate( {top: passo +"px"},"slow"); //pacchetto dt 
    $(pacchetti[n]).animate( {top: passo + "px"},"slow", function(){muovi(n+1)}); //aumento di 1 per passare al pacchetto successivo
    
  }

  function passaggioHost2(n){
    $("#myContainer1").animate({left: spostamentoHost2+"px"},"slow", function(){passaggio2(n)});
  }

  function passaggio2(n){
    for(var i = 0; i<n; i++){
      $(pacchetti[i]).animate( {top: (passo*(n-1-i)) +"px"},"slow");
      if(i==6) $("#dt").animate( {top: (passo*(n-1-i)) +"px"},"slow");
    }
    muovi2(n);
  }
  
  function muovi2(n){
      if(n==1){ //solo il pacchetto data
        $("#data").animate({top:"0px"},"slow",fine);
      }else{
        $(pacchetti[n-1]).animate({left: +spostamentoHost2 +"px"},"slow");
        if(n == 6) $("#dt").hide();
        $(pacchetti[n-1]).hide(function(){passaggio2(n-1)});
      }
  }

  function fine(){
    location.reload();
  }
  
  //CODICE SENZA CICLO
  /*
  function al(){
    $("#click").attr("disabled", true);
    $("#ah").show();
    spostamento = margine-larghezzaPacchetto;
    $("#ah").animate( {left: spostamento +"px"},"slow", passaggioAlPl);
  }

  function passaggioAlPl(){
    $("#ah").animate({ top: '100px'},"slow");
    $("#data").animate({top: '200px'},"slow", pl);
  }

  function pl(){
    $("#ph").show();
    spostamento -= larghezzaPacchetto;
    $("#ph").animate({left:spostamento +"px"},"slow", passaggioPlSl);
  }

  function passaggioPlSl(){
    $("#data").animate({top: '300px'},"slow");
    $("#ah").animate({ top: '200px'},"slow");
    $("#ph").animate({ top: '100px'},"slow", sl);
    
  }

  function sl(){
    $("#sh").show();
    spostamento -= larghezzaPacchetto;
    $("#sh").animate({left:spostamento +"px"},"slow", passaggioSlTl);
  }

  function passaggioSlTl(){
    $("#data").animate({top: '400px'},"slow");
    $("#ah").animate({ top: '300px'},"slow");
    $("#ph").animate({ top: '200px'},"slow");
    $("#sh").animate({ top: '100px'},"slow", tl);
  }

  function tl(){
    $("#th").show();
    spostamento -= larghezzaPacchetto;
    $("#th").animate({left:spostamento +"px"},"slow", passaggioTlNl);
  }

  function passaggioTlNl(){
    $("#data").animate({top: '500px'},"slow");
    $("#ah").animate({ top: '400px'},"slow");
    $("#ph").animate({ top: '300px'},"slow");
    $("#sh").animate({ top: '200px'},"slow");
    $("#th").animate({ top: '100px'},"slow", nl);
  }

  function nl(){
    $("#nh").show();
    spostamento -= larghezzaPacchetto;
    $("#nh").animate({left:spostamento +"px"},"slow", passaggioNlDl);
  }

  function passaggioNlDl(){
    $("#data").animate({top: '600px'},"slow");
    $("#ah").animate({ top: '500px'},"slow");
    $("#ph").animate({ top: '400px'},"slow");
    $("#sh").animate({ top: '300px'},"slow");
    $("#th").animate({ top: '200px'},"slow");
    $("#nh").animate({ top: '100px'},"slow", dl);
  }

  function dl(){
    $("#dh").show();
    spostamento -= larghezzaPacchetto;
    $("#dh").animate({left:spostamento +"px"},"slow", passaggioDlPl);
  }

  function passaggioDlPl(){
    $("#data").animate({top: '700px'},"slow");
    $("#ah").animate({ top: '600px'},"slow");
    $("#ph").animate({ top: '500px'},"slow");
    $("#sh").animate({ top: '400px'},"slow");
    $("#th").animate({ top: '300px'},"slow");
    $("#nh").animate({ top: '200px'},"slow");
    $("#dh").animate({ top: '100px'},"slow", passaggioHost2);
  }

  function passaggioHost2(){
    $("#myContainer1 span").hide();
    $("#myContainer1").animate({left: '550px'},"slow", passaggioPlDl);
  }

  function passaggioPlDl(){
    $("#data").animate({top: '600px'},"slow");
    $("#ah").animate({ top: '500px'},"slow");
    $("#ph").animate({ top: '400px'},"slow");
    $("#sh").animate({ top: '300px'},"slow");
    $("#th").animate({ top: '200px'},"slow");
    $("#nh").animate({ top: '100px'},"slow");
    $("#dh").animate({ top: '0px'},"slow", dl2);
  }

  function dl2(){
    $("#dh").animate({left:  "-550px"},"slow");
    $("#dh").hide(passaggioDlNl);
  }

  function passaggioDlNl(){
    $("#data").animate({top: '500px'},"slow");
    $("#ah").animate({ top: '400px'},"slow");
    $("#ph").animate({ top: '300px'},"slow");
    $("#sh").animate({ top: '200px'},"slow");
    $("#th").animate({ top: '100px'},"slow");
    $("#nh").animate({ top: '0px'},"slow", nl2);
  }

  function nl2(){
    $("#nh").animate({left:"-550px"},"slow");
    $("#nh").hide(passaggioNlTl);
  }

  function passaggioNlTl(){
    $("#data").animate({top: '400px'},"slow");
    $("#ah").animate({ top: '300px'},"slow");
    $("#ph").animate({ top: '200px'},"slow");
    $("#sh").animate({ top: '100px'},"slow");
    $("#th").animate({ top: '0px'},"slow", tl2);
  }

  function tl2(){
    $("#th").animate({left: "-550px"},"slow");
    $("#th").hide(passaggioTlSl);
  }

  function passaggioTlSl(){
    $("#data").animate({top: '300px'},"slow");
    $("#ah").animate({ top: '200px'},"slow");
    $("#ph").animate({ top: '100px'},"slow");
    $("#sh").animate({ top: '0px'},"slow", sl2);
  }

  function sl2(){
    $("#sh").animate({left: "-550px"},"slow");
    $("#sh").hide(passaggioSlPl);
  }

  function passaggioSlPl(){
    $("#ah").animate({ top: '100px'},"slow");
    $("#data").animate({top: '200px'},"slow");
    $("#ph").animate({top: '0px'},"slow", pl2);
  }

  function pl2(){
    $("#ph").animate({left: "-550px" },"slow");
    $("#ph").hide(passaggioPlAl);
  }

  function passaggioPlAl(){
    $("#data").animate({top: '100px'},"slow");
    $("#ah").animate({top: '0px'},"slow", al2);
    
  }

  function al2(){
     $("#ah").animate({left:"-550px"},"slow", host2);
  }

  function host2(){
    $("#ah").hide();
    $("#data").animate({top: '0px'},"slow", fine);
  }
  function fine(){
    $("#data").hide();
    $("#data").animate({left: "0px"},"slow");
    $("#click").removeAttr("disabled");
    $("#myContainer1").css("left", "0");
  }
  
*/
  
