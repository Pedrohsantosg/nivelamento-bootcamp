/**
 * Interface representing a person.
 */
interface Person {
    id: number
    name: string
    bio: string
}

/**
 * Type representing a description, which can be a string or undefined.
 */
type IdDescription = string | undefined
/**
 * List of people with their respective biographies.
 */

let list: Array<Person> = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
]

/**
 * Returns a person's biography based on their ID.
 *
 * @param id - The person's ID
 * @returns The person's biography or undefined if not found
 */
function getBioById(id: number): IdDescription {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].bio
        }
    }
    return undefined
}

/**
 * Returns a person's name based on their ID.
 *
 * @param id - The person's ID
 * @returns The person's name or undefined if not found
 */
function getNameById(id: number): IdDescription {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].name
        }
    }
    return undefined
}

/**
 * Removes a person from the list based on their ID.
 *
 * @param id - The ID of the person to be removed
 * @returns True if the person was found and removed, false otherwise
 */
function removeItemById(id: number): boolean {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1)
            return true
        }
    }
    return false
}

/**
 * Prompts the user for a person's ID and returns their biography and name.
 *
 * @returns An object containing the person's biography and name
 */
function promptUserForId(): { viewUser: string, nameUser: string } {
    let viewUser: string = ""
    let nameUser: string = ""
    const inputUser: string | null= prompt("Enter the person's ID:")
    const id : number= Number(inputUser)

    if (!isNaN(id)) {
        const bio = getBioById(id)
        const name = getNameById(id)
        if (bio && name) {
            viewUser = `Biography: ${bio}`
            nameUser = `${name}`
        } else {
            viewUser = "ID not found."
            nameUser = "Name not found."
        }
    } else {
        console.log("Invalid input. Please enter a number.")
    }
    return { nameUser, viewUser }
}

/**
 * Updates a person's name and biography in the list based on their ID.
 *
 * @param id - The ID of the person to be updated
 * @param newName - The person's new name (optional)
 * @param newBio - The person's new biography (optional)
 * @returns True if the person was found and updated, false otherwise
 */
function updatePersonById(id: number, newName?: string, newBio?: string): boolean {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            if (newName) list[i].name = newName
            if (newBio) list[i].bio = newBio
            return true
        }
    }
    return false
}

/**
 * Prompts the user for the ID of the person to be updated and the new data.
 * Updates the person in the list if the ID is valid.
 */
function updateUser(): void {
    const inputUser : string | null = prompt("Enter the ID of the person you want to update:")
    const id : number = Number(inputUser)

    if (!Number.isNaN(id)) {
        const newName: string | null = prompt("Enter the new name (leave blank to not change):")
        const newBio: string | null = prompt("Enter the new biography (leave blank to not change):")
        const wasUpdated : boolean = updatePersonById(id, newName || undefined, newBio || undefined)
        if (wasUpdated) {
            console.log(`Item with ID ${id} was updated.`)
        } else {
            console.log(`Item with ID ${id} not found.`)
        }
    } else {
        console.log("Invalid input. Please enter a number.")
    }
}


const result = promptUserForId()
console.log(result.nameUser)
console.log(result.viewUser)
const idToRemove : number = Number(prompt("Enter the ID of the person to be removed:"))
const actionRemove : boolean = removeItemById(idToRemove)
if (actionRemove) {
    console.log(`Item with ID ${idToRemove} was removed.`)
} else {
    console.log(`Item with ID ${idToRemove} not found.`)
}
console.log(list)

updateUser()

console.log(list)
