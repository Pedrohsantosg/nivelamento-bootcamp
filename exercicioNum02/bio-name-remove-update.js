/**
 * List of people with their respective biographies.
 */
var list = [
    { id: 1, name: "Ada Lovelace", bio: "Ada Lovelace foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, name: "Alan Turing", bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, name: "Nikola Tesla", bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, name: "Nicolau Copérnico", bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/**
 * Returns a person's biography based on their ID.
 *
 * @param id - The person's ID
 * @returns The person's biography or undefined if not found
 */
function getBioById(id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].bio;
        }
    }
    return undefined;
}
/**
 * Returns a person's name based on their ID.
 *
 * @param id - The person's ID
 * @returns The person's name or undefined if not found
 */
function getNameById(id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].name;
        }
    }
    return undefined;
}
/**
 * Removes a person from the list based on their ID.
 *
 * @param id - The ID of the person to be removed
 * @returns True if the person was found and removed, false otherwise
 */
function removeItemById(id) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1);
            return true;
        }
    }
    return false;
}
/**
 * Prompts the user for a person's ID and returns their biography and name.
 *
 * @returns An object containing the person's biography and name
 */
function promptUserForId() {
    var viewUser = "";
    var nameUser = "";
    var inputUser = prompt("Enter the person's ID:");
    var id = Number(inputUser);
    if (!isNaN(id)) {
        var bio = getBioById(id);
        var name_1 = getNameById(id);
        if (bio && name_1) {
            viewUser = "Biography: ".concat(bio);
            nameUser = "".concat(name_1);
        }
        else {
            viewUser = "ID not found.";
            nameUser = "Name not found.";
        }
    }
    else {
        console.log("Invalid input. Please enter a number.");
    }
    return { nameUser: nameUser, viewUser: viewUser };
}
/**
 * Updates a person's name and biography in the list based on their ID.
 *
 * @param id - The ID of the person to be updated
 * @param newName - The person's new name (optional)
 * @param newBio - The person's new biography (optional)
 * @returns True if the person was found and updated, false otherwise
 */
function updatePersonById(id, newName, newBio) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            if (newName)
                list[i].name = newName;
            if (newBio)
                list[i].bio = newBio;
            return true;
        }
    }
    return false;
}
/**
 * Prompts the user for the ID of the person to be updated and the new data.
 * Updates the person in the list if the ID is valid.
 */
function updateUser() {
    var inputUser = prompt("Enter the ID of the person you want to update:");
    var id = Number(inputUser);
    if (!Number.isNaN(id)) {
        var newName = prompt("Enter the new name (leave blank to not change):");
        var newBio = prompt("Enter the new biography (leave blank to not change):");
        var wasUpdated = updatePersonById(id, newName || undefined, newBio || undefined);
        if (wasUpdated) {
            console.log("Item with ID ".concat(id, " was updated."));
        }
        else {
            console.log("Item with ID ".concat(id, " not found."));
        }
    }
    else {
        console.log("Invalid input. Please enter a number.");
    }
}
/**
 * Displays the list of people with their names and biographies.
 * Iterates through the list of people and appends each person's name and bio to the HTML element with the ID 'people-list'.
 */
function showPeople() {
    var listElement = document.getElementById('people-list');
    listElement.innerHTML = '';
    list.forEach(function (person) {
        var li = document.createElement('li');
        li.innerText = "".concat(person.name, ": ").concat(person.bio);
        listElement.appendChild(li);
    });
}
var result = promptUserForId();
console.log(result.nameUser);
console.log(result.viewUser);
var idToRemove = Number(prompt("Enter the ID of the person to be removed:"));
var actionRemove = removeItemById(idToRemove);
if (actionRemove) {
    console.log("Item with ID ".concat(idToRemove, " was removed."));
}
else {
    console.log("Item with ID ".concat(idToRemove, " not found."));
}
console.log(list);
updateUser();
console.log(list);
