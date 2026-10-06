var nota=Number(prompt("Que nota tienes? "));
var ingresos=Number(prompt("Cuantos ingresos tienen tu grupo familiar? "));
var ciudad=Boolean(confirm("Vives fuera de tu ciudad? "));

if(nota>8 && ingresos<18000 ||ciudad){
    alert("Tienes derecho a beca, enhorabuena")
}else{
    alert("Lo siento, no tienes derecho a beca")
}