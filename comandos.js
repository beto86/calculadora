function onlyNumbers(e){
    var code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && ((code < 48 || code > 57) && (code != 44)) || ((code == 44) && (e.target.value.indexOf(',') != -1)))
    {
        e.preventDefault();
    }
}
function calculo(idNum1, idNum2, op) {
    var num1 = parseFloat(document.getElementById(idNum1).value.replace(',','.'));
    var num2 = parseFloat(document.getElementById(idNum2).value.replace(',','.'));
    var resultado = 0;
    switch(op)
    {
        case '+' :
            resultado = num1 + num2;
            break;
        case '-' :
            resultado = num1 - num2;
            break;
        case '*' :
            resultado = num1 * num2;
            break;
        case '/' :
            resultado = (num2 == 0) ? 'Não existe divisão por zero!' : num1 / num2;
            break;
    }
    document.getElementById('res').innerText = 'O resultado é: ' + resultado;
}
