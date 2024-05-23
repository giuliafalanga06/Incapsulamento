var margine = 400;
var larghezzaPacchetto = 62.7;
var passo = 80;
var spostamento = margine-larghezzaPacchetto;
var spostamentoHost2 = 510;
var pacchetti = ["#data", "#ah", "#th", "#nh"];

$(document).ready(function(){
  $("body").hide();
  $("body").fadeIn(500);
  for(var i = 0; i<4; i++){
    $(pacchetti[i]).hide();
  }
    $("#click").click(host1);

    $("#dt").hide();
    $("#dt").css("left", margine + 101.62 +"px");

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
    $("#data").animate( {top: passo +"px"},"slow", function(){muovi(1)});
  }

  function muovi(n){
    if(n<4){
      $(pacchetti[n]).show();
      if(n!=1) spostamento -= larghezzaPacchetto;
      if(n==6) $("#dt").show();
      $(pacchetti[n]).animate({left:spostamento +"px"},"slow", function(){passaggio(n)});
    }
    if(n==4) passaggioHost2(n); //tutti i pacchetti
  }
  function passaggio(n){
    for(var i = 0; i<n; i++){
      
      $(pacchetti[i]).animate( {top: (passo*(n-i+1)) +"px"},"slow");
      
    }
    $(pacchetti[n]).animate( {top: passo + "px"},"slow", function(){muovi(n+1)});
    
  }

  function passaggioHost2(n){
    $("#myContainer1").animate({left: spostamentoHost2+"px"},"slow", function(){passaggio2(n)});
  }

  function passaggio2(n){
    for(var i = 0; i<n; i++){
      $(pacchetti[i]).animate( {top: (passo*(n-1-i)) +"px"},"slow");
    }
    muovi2(n);
  
  }
  
  function muovi2(n){
      if(n==1){ //solo il pacchetto data
        $("#data").animate({top:"0px"},"slow",fine);
      }else{
        $(pacchetti[n-1]).animate({left: +spostamentoHost2 +"px"},"slow");
        $(pacchetti[n-1]).hide(function(){passaggio2(n-1)});
        
      }
  }

  function fine(){
    location.reload();
  }
  