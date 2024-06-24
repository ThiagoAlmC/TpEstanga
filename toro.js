// Definición de la clase CZooAnimal
class CZooAnimal {
    constructor(name, cageNumber, IdTypeAnimal, weight) {
        this.IdAnimal = Math.random().toString(36).substring(2, 15); // Generación aleatoria de IdAnimal
        this.name = name;
        this.cageNumber = cageNumber;
        this.IdTypeAnimal = IdTypeAnimal;
        this.weight = weight;
    }
}

// Creación de instancias de CZooAnimal
let animal1 = new CZooAnimal("Tigre", 1, 1, 150);
let animal2 = new CZooAnimal("Leon", 2, 1, 180);
let animal3 = new CZooAnimal("Aguila", 3, 2, 2);
let animal4 = new CZooAnimal("Serpiente", 4, 3, 80);
let animal5 = new CZooAnimal("Pantera", 5, 1, 100);

// Creación del array zooAnimals y adición de instancias
let zooAnimals = [animal1, animal2, animal3, animal4, animal5];

// Función para contar animales en la jaula 5 con peso menor a 3 kg
function countAnimalsInCage5Under3kg(zooAnimals) {
    return zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3).length;
}

// Función para contar felinos en jaulas entre 2 y 5
function countFelineAnimalsBetweenCages2And5(zooAnimals) {
    return zooAnimals.filter(animal => animal.IdTypeAnimal === "Felino" && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
}

// Función para listar el nombre de un animal en la jaula 4 con peso menor a 120 kg
function listAnimalNameInCage4Under120(zooAnimals) {
    let animal = zooAnimals.find(animal => animal.cageNumber === 4 && animal.weight < 120);
    return animal ? animal.name : "No hay ningún animal que cumpla esas condiciones.";
}

// Ejecución de las funciones y salida de resultados
console.log("Animales en la jaula 5 con peso menor a 3 kg:", countAnimalsInCage5Under3kg(zooAnimals));
console.log("Felinos en jaulas entre 2 y 5:", countFelineAnimalsBetweenCages2And5(zooAnimals));
console.log("Nombre del animal en la jaula 4 con peso menor a 120 kg:", listAnimalNameInCage4Under120(zooAnimals));
