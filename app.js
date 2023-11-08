/* // Ejercicio 1
const findMostRepeated = (array) => {
    let frequencyMap = {};
    let mostRepeated = null;
    let maxFrequency = 0;

    for (let num of array) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostRepeated = num;
        }
    }
    return mostRepeated;
}

const arrayForRep = [1, 2, 2, 2, 3, 3, 1, 4, 8, 1];
let mostRepeated = findMostRepeated(arrayForRep);
console.log(mostRepeated); */

/* // Ejercicio 2
const returnLetters = (array) => {
    const arrayOfLetters = array.filter(item => typeof item === 'string');
    return arrayOfLetters;
}

const mixedArray = [3, 't', 5, 't', 'o', 6, 'k', 45, 6];
let arrayOfLetters = returnLetters(mixedArray);
console.log(arrayOfLetters); */

/* // Ejercicio 3
// Busqueda secuencial - No se puede usar busqueda binaria
const findMaxValue = (array) => {
    let maxValue = array[0];
    for (let i = 0; i < array.length; i ++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;
}
const arrayForBiggest = [2, 1, 55, 6, 3, 32, 546];
let biggestNum = findMaxValue(arrayForBiggest);
console.log(biggestNum); */

/* // Ejercicio 4
// Busqueda secuencial - No se puede usar busqueda binaria
const findMinValue = (array) => {
    let minValue = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minValue) {
            minValue = array[i];
        }
    }
    return minValue;
}
const arrayForSmallest = [12, 56, 65, 33, 44, 90, 23];
console.log(findMinValue(arrayForSmallest)); */

// Ejercicio 5 - Creacion de clases
class Contacto {
    constructor(nombre, apellidos, telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.next = null;
    }
}

class ListaContactos {
    constructor() {
        this.head = null;
    }
    // Ejercicio 5 - Metodo para agregar un contacto 
    addContact(nombre, apellidos, telefono) {
        const contact = new Contacto(nombre, apellidos, telefono);
        if (this.head === null) {
            this.head = contact;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = contact;
        }
    }
    // Ejercicio 5- Metodo para buscar contacto por nombre
    // Se usa busqueda secuencial
    searchContact(nombre) {
        if (this.head === null) {
            return 'The list is empty';
        }
        let current = this.head;
        while (current) {
            if (current.nombre === nombre) {
                return `Nombre: ${current.nombre}, Apellidos: ${current.apellidos}, Telefono: ${current.telefono}`
            }
            current = current.next;
        }
        return 'Contact not found'
    }
    // Metodo para imprimir todos los contactos
    printNames() {
        if (this.head === null) {
            return null;
        }
        let allContacts = '';
        let current = this.head;
        while(current) {
            allContacts += current.nombre + ' ' + current.apellidos + ': ' + current.telefono + ' → ';
            current = current.next;
        }
        return allContacts += 'null';
    }
}

const myContacts = new ListaContactos();
myContacts.addContact('Mike', 'Smith Jhonson', 8442325678);
myContacts.addContact('Juan', 'Perez Jimenez', 8443456782);
myContacts.addContact('Jake', 'Paul Williams', 8445678902);
myContacts.addContact('Elisa', 'Lopez Garcia', 8444467892);
myContacts.addContact('Elena', 'Collins West', 8441234976);
myContacts.addContact('Cobie', 'Brian James', 8445578594);
console.log(myContacts.printNames());
console.log(myContacts.searchContact('Elena'));