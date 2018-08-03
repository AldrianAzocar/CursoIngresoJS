function mostrar()
{
	var precio;
	var descuento;
	var preciofinal;


	precio=prompt("ingrese precio");
	descuento=prompt("ingrese el porcentaje");
	
	descuento=precio * descuento / 100;

	preciofinal= precio - descuento;
	document.getElementById('elPrecioFinal').value=preciofinal;

}
