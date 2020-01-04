function Cero(i){
	if( i < 10){
	i= "0" + i;
	}
	return i;
				
}
function hora(){	
	var hoy = new Date();
	var h = Cero(hoy.getHours());
	var m = Cero(hoy.getMinutes());
	var s = Cero(hoy.getSeconds());
	document.getElementById('cajahora').innerHTML = h+":"+m+":"+s;
	setInterval ( hora , 1000);
}
