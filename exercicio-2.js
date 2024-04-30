
function somaPromise(num1, num2) {
    return new Promise((resolve, reject) => {
        const resultado = num1 + num2;
        if (resultado % 2 === 0) {
            resolve({ mensagem: `Operação concluída com sucesso! O número ${resultado} é par.`, resultado: resultado });
        } else {
            reject({ mensagem: `Erro: A operação falhou! O número ${resultado} é ímpar.`, resultado: resultado });
        }
    });
}

somaPromise(2, 4)
    .then((resultado) => {
        console.log(resultado.mensagem);
        console.log("Número: ", resultado.resultado);
    })
    .catch((erro) => {
        console.log(erro.mensagem);
        console.log("Número: ", erro.resultado);
    });
