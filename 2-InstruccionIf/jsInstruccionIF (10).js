function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	numero=Math.floor(Math.random() * 10) + 1;
	if(numero>= 9 )
	{
		alert("EXCELENTE" + numero);
	}
	if(numero > 4 && numero <9 )
		{
			alert("APROBO" + numero);
		}
	if(numero < 4 )
		{
			alert("Vamos la proxima se puede" + numero);
		}

}//FIN DE LA FUNCIÓN