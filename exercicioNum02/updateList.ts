/**
 * Interface que representa uma pessoa.
 */
interface Person {
    id: number
    name: string
    bio: string
}

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


UpdateUser()
console.log(lista)
