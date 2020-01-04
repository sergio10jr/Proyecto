function cargarImagen(){
ahora=new Date();
mes=ahora.getMonth();
if(mes>=3 && mes <6){
document.body.style.backgroundImage= "url(imagenes/primavera.jpg)";
document.body.style.backgroundColor= "SPRINGGREEN";
}

if(mes>=6 && mes <9){
document.body.style.backgroundImage= "url(imagenes/verano.jpg)";
document.body.style.backgroundColor= "ORANGE";
}
if(mes>=9 && mes <=11){
document.body.style.backgroundImage= "url(imagenes/otono.jpg)";
document.body.style.backgroundColor= "KHAKI";
}
if(mes>=0 && mes <3){
document.body.style.backgroundImage= "url(imagenes/invierno.jpg)";
document.body.style.backgroundColor= "PALETURQUOISE";
}

}