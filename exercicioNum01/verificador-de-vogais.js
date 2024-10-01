/**
 * Conta o número de vogais em uma palavra.
 *
 * @remarks
 * Esta função faz parte do subsistema {@link core-library#StringUtilities | StringUtilities}.
 *
 * @param palavra - A palavra na qual contar as vogais
 * @returns O número de vogais na palavra
 *
 * @beta
 */
function contarVogais(palavra) {
    var vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var contador = 0;
    for (var _i = 0, palavra_1 = palavra; _i < palavra_1.length; _i++) {
        var letra = palavra_1[_i];
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
/**
 * Imprime o resultado da contagem de vogais.
 *
 * @param palavra - A palavra analisada
 * @param quantidadeDeVogais - O número de vogais na palavra
 */
function printResult(palavra, quantidadeDeVogais) {
    console.log("A palavra \"".concat(palavra, "\" tem ").concat(quantidadeDeVogais, " vogais."));
}
/**
 * Valida se a entrada é uma palavra composta apenas por letras.
 *
 * @param palavra - A palavra a ser validada
 * @returns Verdadeiro se a palavra for válida, falso caso contrário
 */
function validarEntrada(palavra) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(palavra);
}
var palavra = 'OrionBootCamp Backend';
var quantidadeDeVogais = contarVogais(palavra);
var palavraUser = prompt("Digite uma palavra:") || "";
while (!validarEntrada(palavraUser)) {
    alert("Por favor, digite apenas letras e não deixe o campo vazio ou com espaço entre a palavra.");
    palavraUser = prompt("Digite uma palavra:") || "";
}
var quantidadeDeVogaisUser = contarVogais(palavraUser);
printResult(palavra, quantidadeDeVogais);
printResult(palavraUser, quantidadeDeVogaisUser);
