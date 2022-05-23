let cadena = '';

function getValue(newValor){
    let boton = document.getElementById(newValor).innerHTML;
    cadena += boton;
    document.getElementById('lcd').value = cadena;
}

function setDefault(){
    document.getElementById('lcd').value = '0.00';
    cadena = ''
}

function getResult(){
    let result = eval(cadena);
    document.getElementById('lcd').value= cadena;
}

// function getResult(){ }
