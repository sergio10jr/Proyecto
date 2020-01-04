
		function cuadrado (){
				var texto1=prompt("introduce tu nota de mate");
				var mate=parseInt(texto1);
				var texto2=prompt("introduce tu nota de fisica");
				var fisica=parseInt(texto2);
				var texto3=prompt("introduce tu nota de historia");
				var historia=parseInt(texto3);
				var texto4=prompt("introduce tu nota de lengua");
				var lengua=parseInt(texto4);
				var texto5=prompt("introduce tu nota de ingles");
				var ingles=parseInt(texto5);
				var texto6=prompt("introduce tu nota de tic");
				var tic=parseInt(texto6);
				var texto7=prompt("introduce tu nota de ti");
				var ti=parseInt(texto7);
				var texto8=prompt("introduce tu nota de dibujo");
				var dibujo=parseInt(texto8);
				let values = [mate, lengua, ingles, fisica, dibujo, historia, tic, ti];
let sum = mate + lengua + ingles + historia + fisica + tic + ti + dibujo;
let avg = sum / 8;
alert(avg);
				}