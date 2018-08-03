	/*Nombre sexo edad nota 

	Jose     M   33    9	
	maria    F   22    6
	fer		 F   15    10	
	ger      M   18    1
	susana	 F   56    2	
	mirta    F   99    8*/


function mostrar()
{
	
	var sexo;
	var nombre;
	var nota;
	var contador=0;
	var acumuladorDeNotas;
	var notaVarones;
	var promedioDeNotas;
	var notaBaja;
	var notaBajaSexo;
	var cantidadDeVaronesQueSuNotaHayaSido6;

	acumuladorDeNotas=0;
	while(contador <5)
	{
		contador++;		
		/*nota=prompt("ingrese nota");
		nota=parseInt(nota);

		while(nota>0 || nota<11)
			{
		nota=prompt("ingrese nota");
		nota=parseInt(nota);

			}	*/
			
		nota = prompt("Ingrese nota.");
		nota = parseInt(nota);

		while (isNaN(nota) || nota < 0 || nota > 11)
		{			
			nota = prompt(" error, por favor re-Ingrese nota.");
			nota = parseInt(nota);			
		}

		nombre=prompt("ingrese nombre");
		sexo=prompt("ingrese sexo");
					
		while(sexo !="f" && sexo !="m" )
		{
			sexo=prompt(" error, por favor re-ingrese sexo");			
		}

		acumuladorDeNotas= acumuladorDeNotas+nota;

		if(contador==1)
		{
			notaBaja=nota;
			notaBajaSexo=sexo;
		}
		else{
			if(nota<notaBaja)
			{
				notaBaja=nota;
				notaBajaSexo=sexo;
			}

		}
		if(sexo=="m" && nota>5)
		{
			cantidadDeVaronesQueSuNotaHayaSido6++;
		}
				
	}	
		promedioDeNotas=acumuladorDeNotas / 5;
		alert("El promedio de las notas totales es " + promedioDeNotas);
		alert("La nota mas baja " + notaBaja + " y el sexo es " + notaBajaSexo);
		alert("Cantidad de varones que su nota fue mayor o igual a 6" + cantidadDeVaronesQueSuNotaHayaSido6);
}
