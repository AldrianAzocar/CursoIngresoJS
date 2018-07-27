function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;


	while(respuesta!='no')
	{
		contador++;
		numero = prompt("Ingrese número: # " +contador);
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
			
		}else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}

			if(numero<minimo)
			{
				minimo=numero;
			}

		}

		



		respuesta = prompt("Responda no para dejar de ingresar mas números");

	}
		document.getElementById('minimo').value=maximo;
		document.getElementById('maximo').value=minimo;


}//FIN DE LA FUNCIÓN