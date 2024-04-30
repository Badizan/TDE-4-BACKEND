function soma(num1, num2, callbackSucesso, callBackError) {
    const resultado = num1 + num2;
    if (resultado % 2 === 0) {
        callbackSucesso(`Operação concluída com sucesso! O número ${resultado} é par.`);
    } else {
        callBackError(`Erro: A operação falhou! O número ${resultado} é ímpar.`);
    }
}


function callbackSucesso(mensagem) {
    console.log(mensagem);
}

function callBackError(mensagem) {
    console.log(mensagem);
}

soma(2, 4, callbackSucesso, callBackError);
