
function mostrarDia(){
	var hoy = new Date();
	var dia = hoy.getDay();
	var color="purple";
	
	if(dia==1){
	document.getElementById('lun').style.background=color;
	document.getElementById('lun').innerHTML="LUNES";
	}
	if(dia==2){
	document.getElementById('mart').style.background=color;
	document.getElementById('mart').innerHTML="MARTES";
	}
	if(dia==3){
	document.getElementById('mier').style.background=color;
	document.getElementById('mier').innerHTML="MIERCOLES";
	}
	if(dia==4){
	document.getElementById('juev').style.background=color;
	document.getElementById('juev').innerHTML="JUEVES";
	}
	if(dia==5){
	document.getElementById('vier').style.background=color;
	document.getElementById('viernes0').innerHTML="VIERNES";
	}
}