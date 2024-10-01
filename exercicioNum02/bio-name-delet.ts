/**
 * Interface que representa uma pessoa.
 */
interface Person {
    id: number
    name: string
    bio: string
}

/**
 * Tipo que representa uma descrição, que pode ser uma string ou indefinida.
 */
type Descricao = string | undefined

/**
 * Lista de pessoas com suas respectivas biografias.
 */
let lista: Array<Person> = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
]

/**
 * Retorna a biografia de uma pessoa com base no ID.
 *
 * @param id - O ID da pessoa
 * @returns A biografia da pessoa ou indefinido se não encontrada
 */
function getBioById(id: number): Descricao {
    return lista.find(objectList => objectList.id === id)?.bio
}

/**
 * Retorna o nome de uma pessoa com base no ID.
 *
 * @param id - O ID da pessoa
 * @returns O nome da pessoa ou indefinido se não encontrada
 */
function getNameById(id: number): Descricao {
    return lista.find(objectList => objectList.id === id)?.name
}

/**
 * Remove uma pessoa da lista com base no ID.
 *
 * @param id - O ID da pessoa a ser removida
 * @returns Verdadeiro se a pessoa foi encontrada e removida, falso caso contrário
 */
function removeItemById(id: number): boolean {
    const index = lista.findIndex(objectList => objectList.id === id)
    if (index !== -1) {
        lista.splice(index, 1)
        return true
    }
    return false
}

/**
 * Solicita ao usuário o ID da pessoa e retorna a biografia e o nome.
 *
 * @returns Um objeto contendo a biografia e o nome da pessoa
 */
function promptUserForId(): { bioUser: string, nameUser: string } {
    let bioUser = ""
    let nameUser = ""

    const inputUser = prompt("Insira o ID da pessoa:")
    const id = Number(inputUser)

    if (!isNaN(id)) {
        const bio = getBioById(id)
        const name = getNameById(id)
        if (bio && name) {
            bioUser = `Biografia: ${bio}`
            nameUser = `${name}`
        } else {
            bioUser = "ID não encontrado."
            nameUser = "Nome não encontrado."
        }
    } else {
        console.log("Entrada inválida. Por favor, insira um número.")
    }
    return { nameUser, bioUser }
}


const result = promptUserForId()
console.log(result.bioUser)
console.log(result.nameUser)


const idToRemove = Number(prompt("Insira o ID da pessoa a ser removida:"))
const actionRemove = removeItemById(idToRemove)
if (actionRemove) {
    console.log(`Item com ID ${idToRemove} foi removido.`)
} else {
    console.log(`Item com ID ${idToRemove} não encontrado.`)
}


console.log(lista)
