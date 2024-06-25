let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora del Desafío'

function intentoDeUsuario(){
    alert("El botón fue clicado")
}

function pregunta(){
 ingreso = prompt("Dime el nombre de una cudad de brasil: ")
    alert(`Estuve en ${ingreso} y me acorde de ti`)
    //alert('Estuve en ' + ingreso + ' y me acorde de ti')
}

function alerta(){
    alert('Yo amo JS')
}

function operacion(){
    alert('Ingresa 2 numeros')
    var num1 = prompt ("Ingresa el primer numero")
    var num2 = prompt ('Ingresa el seundo numero')
    resultado  =  parseInt(num1) + parseInt(num2)
    alert(`La suma de ${num1} y ${num2} es igual a ${resultado}`)
}
    alert("Que tengas buen día")