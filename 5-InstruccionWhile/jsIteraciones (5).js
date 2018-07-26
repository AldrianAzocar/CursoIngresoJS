function mostrar()
{

var sexo = prompt("ingrese f ó m .");

		
		while(sexo !="f" && sexo !="m")
		{
			alert("sexo inconrrecto");
			sexo=prompt("ingrese su sexo de nuevo");
		}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN