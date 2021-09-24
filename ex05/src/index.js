var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    },
    {
        animalType: "Cat",
        name: "Maca"
    },
    {
        animalType: "Bird",
        name: "Tweety"
    }
];

function myPetsFunction(pets) {
    myPets = myPetsArray[1].name;
    return myPets;
}

  console.log(myPetsFunction(myPetsArray[1]));
  module.exports = myPetsFunction;
  module.exports.myPets = myPetsArray;