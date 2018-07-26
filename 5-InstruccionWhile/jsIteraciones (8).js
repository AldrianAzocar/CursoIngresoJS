function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero
	var respuesta='si';

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		
		if(numero >=0)
		{
			positivo=positivo+numero;
		
		}

		else 
		{
			if(numero <0)
			negativo=negativo*numero;	
		}	

		contador++;
		respuesta=prompt("quiere seguir la operacion?");

	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN