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
function contarVogais(palavra: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let contador = 0

    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contador++
        }
    }
    return contador
}

/**
 * Imprime o resultado da contagem de vogais.
 *
 * @param palavra - A palavra analisada
 * @param quantidadeDeVogais - O número de vogais na palavra
 */
function printResult(palavra: string, quantidadeDeVogais: number): void {
    console.log(`A palavra "${palavra}" tem ${quantidadeDeVogais} vogais.`)
}

/**
 * Valida se a entrada é uma palavra composta apenas por letras.
 *
 * @param palavra - A palavra a ser validada
 * @returns Verdadeiro se a palavra for válida, falso caso contrário
 */
function validarEntrada(palavra: string): boolean {
    const regex = /^[a-zA-Z]+$/
    return regex.test(palavra)
}

const palavra = 'OrionBootCamp Backend'
const quantidadeDeVogais = contarVogais(palavra)

let palavraUser = prompt("Digite uma palavra:") || ""

while (!validarEntrada(palavraUser)) {
    alert("Por favor, digite apenas letras e não deixe o campo vazio ou com espaço entre as palavras.")
    palavraUser = prompt("Digite uma palavra:") || ""
}

const quantidadeDeVogaisUser = contarVogais(palavraUser)

printResult(palavra, quantidadeDeVogais)
printResult(palavraUser, quantidadeDeVogaisUser)
