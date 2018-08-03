function mostrar()
{
	var peso;
	var temperatura;
	var nombre;
	var contadorDeTemperaturasPares;
	var contador;
	var respuesta;
	var masPesado;
	var masPesadoNombre;
	var masPesadoTemperatura;
	var contadorDeAnimalesCeroGrados
	var sumaDePesos;
	var promedioDePesos;
	var pesoMinimoBajoCero;
	var pesoMaxBajoCero;
	var banderaDelPrimerBajoCero;

	banderaDelPrimerBajoCero=0;
	sumaDePesos=0;
	contadorDeTemperaturasPares=0;
	respuesta="si";
	contador=0;

	while(respuesta != "n")
	{
		contador++;
		nombre= prompt ("ingrese nombre");
		peso= prompt("ingrese peso");
		peso= parseInt(peso);

		while(isNaN(peso) || peso<0 || peso>100)
		{
			peso= prompt("error, ingrese peso");
			peso= parseInt(peso);
		}	

		temperatura= prompt("error, ingrese temperatura");
		temperatura= parseInt(temperatura);

		sumaDePesos=sumaDePesos+peso;

		if(temperatura%2==0)
		{
			contadorDeTemperaturasPares++;
		}	

		if(contador==1)
		{
			masPesado=peso;
			masPesadoNombre=nombre;
			masPesadoTemperatura=temperatura;
		}	
		
		else
		{
			if(peso>masPesado)
			{
				masPesado=peso;
				masPesadoNombre=nombre;
				masPesadoTemperatura=temperatura;
			}
		}
		if(temperatura<0)
		{
			contadorDeAnimalesCeroGrados++;
			if(banderaDelPrimerBajoCero==0)
			{
				banderaDelPrimerBajoCero=666;
				pesoMinimoBajoCero=peso
				pesoMaxBajoCero=peso;
			}	
			else
			{
				if (peso<pesoMinimoBajoCero) 
				{
					pesoMinimoBajoCero=peso;
				}
				if(peso>pesoMaxBajoCero)
				{
					pesoMaxBajoCero=Peso;
				}	
			
			}	

		}

		alert("La cantidad de temperatura pares es: " + contadorDeTemperaturasPares)






	}	

	


}
