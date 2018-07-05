/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var numero_uno;
var numero_dos;
var resultado;
numero_uno=document.getElementById('numeroUno'). value;
numero_dos=document.getElementById('numeroDos'). value;
resultado= parseInt(numero_uno)+parseInt(numero_dos);
alert(resultado);

}

 	