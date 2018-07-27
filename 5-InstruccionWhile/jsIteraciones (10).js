function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var numero;
	var respuesta="si";
	var negativos;
	var positivos;
	var cantidadNegativos;
	var cantidadPositivos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivo;
	var promedioNegativo;
	
	negativos=0;
	positivos=0;
	cantidadNegativos=0;
	cantidadPositivos=0;
	cantidadCeros=0;
	cantidadPares=0;
	promedioPositivo=0;
	



	while(respuesta != "no")
	{
		numero=prompt("ingrese un numero");
		respuesta = prompt("ingrese no para salir");
		numero=parseInt(numero);

		if(numero<0)
			{
				negativos=negativos+numero;
				cantidadNegativos++;
			}
		
		if(numero>0)
			{
				positivos=positivos+numero;
				cantidadPositivos++;
			}

		if(numero==0)
		
			{
				cantidadCeros++;
			}	

		if(numero % 2 ==0)
		
			{
				cantidadPares++;
			}		

			

		
	
			









	}

	
	promedioPositivo=positivos/cantidadPositivos;
	promedioNegativo=negativos/cantidadNegativos;
	diferencia=positivos-negativos;
	

	document.write("La suma de los negativos es:" + negativos + "<br>");
	document.write("La suma de los positivos es:" + positivos + "<br>");
	document.write("La cantidad de los positivos es:" + cantidadPositivos + "<br>");
	document.write("La cantidad de los negativos es:" + cantidadNegativos + "<br>");
	document.write("La cantidad de los ceros es:" + cantidadCeros + "<br>");
	document.write("La cantidad de los pares es:" + cantidadPares + "<br>");
	document.write("El promedio de los positivos es:" + promedioPositivo + "<br>");
	document.write("El promerdio de los negativos es:" + promedioNegativo + "<br>");
	document.write("La diferencia entre los positivos y negativos es:" + diferencia + "<br>");
	


}//FIN DE LA FUNCIÓN