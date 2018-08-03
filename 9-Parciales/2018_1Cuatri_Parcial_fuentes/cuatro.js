function mostrar()
{
	var numero1;
	var numero2;
	var suma;
	
	numero1=prompt("ingrese numero 1");
	numero2=prompt("ingrese numero 2");
	suma=parseInt(numero1)+ parseInt(numero2);

	if(numero1 == numero2)
	{
		alert(numero1 + numero2);
	}

	else if(numero1 > numero2)
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);
		alert(numero1-numero2);
	}	

	else
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero2);
		alert(numero1+numero2);

	}		
	if(suma>10)
	{
		
		alert("la suma es" + suma + " y supero el 10");
	}	




}
