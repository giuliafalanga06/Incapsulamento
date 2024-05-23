var livelli = ["#livHost", "#application", "#presentation", "#session", "#transport", "#network", "#data", "#physical"];
var pacchetti = ["#datag", "#ahg", "#phg", "#shg", "#thg", "#nhg", "#dhg"];
var ultimi = ["#dtg", "#datag", "#ahg", "#phg", "#shg", "#thg", "#nhg", "#dhg"];

var n = Math.floor(Math.random()*livelli.length);

function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

var inseriti = ["", "", "", "", "", "", "", ""];

function drop(ev) {
var data = ev.dataTransfer.getData("text");    

    for(var i = 0; i<inseriti.length; i++){
        if("#" + data == inseriti[i] ){
            inseriti[i] = "";
            var livelloOccupato = (ev.target.id).substr(0, ev.target.id.length-1);
            $("#" + livelloOccupato + (i+1)).css("border", "1px solid black");
            $("#" + livelloOccupato + (i+1)).css("padding", "25px 40px"); 
        }
    }

    if(inseriti[ev.target.id[ev.target.id.length-1]-1] == "" ){
        ev.preventDefault();
        ev.target.append(document.getElementById(data));
        $("#" + ev.target.id).css("border", "0px");
        $("#" + ev.target.id).css("padding", "0px"); 
        inseriti[ev.target.id[ev.target.id.length-1]-1] = "#" + data; //inserisco in un vettore gli elementi inseriti
    }
}

$(document).ready(function(){
    $("body").hide();
    $("body").fadeIn(500);
    for(var i = 0; i<livelli.length; i ++){
        $(livelli[i]).hide();
    }

    $(livelli[n]).css("margin-top", 25+n*80);
    $(livelli[n]).show();

    $("#check").click(controllo);
    $("#div-gameover").hide();
    $("#div-win").hide();
});

function controllo(){
var x = true;

    if(n == 6 ||  n == 7){
        for(var i = 0; i<n+1; i++){
            if(inseriti[i] != ultimi[i]){
                x = false;
            }
        }
    }
    else{
        for(var i =0; i<n+1; i++){
            if(pacchetti[i] != inseriti[i]){
                x = false;
            }
        }
    }
    

    if(x){
        $("#div-win").show();
        $("#body2").hide();
    }
    else{
        $("#body2").hide();
        $("#div-gameover").show();
    }
    
}