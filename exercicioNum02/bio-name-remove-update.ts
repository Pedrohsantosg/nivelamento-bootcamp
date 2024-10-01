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
/**
 * Atualiza o nome e a biografia de uma pessoa na lista com base no ID.
 *
 * @param id - O ID da pessoa a ser atualizada
 * @param newName - O novo nome da pessoa (opcional)
 * @param newBio - A nova biografia da pessoa (opcional)
 * @returns Verdadeiro se a pessoa foi encontrada e atualizada, falso caso contrário
 */
function updatePersonById(id: number, newName?: string, newBio?: string): boolean {
    const person = lista.find(objectList => objectList.id === id)
    if (person) {
        if (newName && newBio) {
            person.name = newName
            person.bio = newBio
        }
        return true
    } else {
        return false
    }
}
/**
 * Solicita ao usuário o ID da pessoa a ser atualizada e os novos dados.
 * Atualiza a pessoa na lista se o ID for válido.
 */
function UpdateUser(): void {
    const inputUser = prompt("Insira o ID da pessoa que deseja atualizar:")
    const id = Number(inputUser)

    if (!Number.isNaN(id)) {
        const newName = prompt("Insira o novo nome (deixe em branco para não alterar):")
        const newBio = prompt("Insira a nova biografia (deixe em branco para não alterar):")

        const wasUpdated = updatePersonById(id, newName || undefined, newBio || undefined)
        if (wasUpdated) {
            console.log(`Item com ID ${id} foi atualizado.`)
        } else {
            console.log(`Item com ID ${id} não encontrado.`)
        }
    } else {
        console.log("Entrada inválida. Por favor, insira um número.")
    }
}


const result = promptUserForId()
console.log(result.nameUser)
console.log(result.bioUser)

const idToRemove = Number(prompt("Insira o ID da pessoa a ser removida:"))
const actionRemove = removeItemById(idToRemove)
if (actionRemove) {
    console.log(`Item com ID ${idToRemove} foi removido.`)
} else {
    console.log(`Item com ID ${idToRemove} não encontrado.`)
}


console.log(lista)


UpdateUser()
console.log(lista)




