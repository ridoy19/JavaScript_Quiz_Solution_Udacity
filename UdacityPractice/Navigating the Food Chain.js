var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : '');

console.log(category);
