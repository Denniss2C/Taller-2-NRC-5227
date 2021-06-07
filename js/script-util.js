var personas = ['Dennis','Sebastian','Saul','Byron','Maria','Alberto'];

function imprimirPersonas(){
    document.getElementById('arrPersonas').innerText = personas;
}

function popPersonas(){
    var eliminado = personas.pop();
    imprimirPersonas();
    document.getElementById('arrResultado').append(eliminado);
}

function pushPersonas(){
    var retorno = eliminado.push();
    imprimirPersonas();
    document.getElementById('arrPersonas').append(retorno);
}

function slicePersonas(){
    var nuevoArregloPersonas = personas.slice(0,5);
    imprimirPersonas();
    document.getElementById('arrResultado').append( nuevoArregloPersonas);
    
}
function slicePersonas1(){
    var nuevoArregloPersonas = personas.slice(0,5);
    imprimirPersonas();
    document.getElementById('arrResultado').innerText = nuevoArregloPersonas;
    
}

