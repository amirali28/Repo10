function myFunction(propertyName) {
  //Change this line
  // Only change code below this line
    lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar",
  };
  delete lion[propertyName];
  return lion;

  // Only change code above this line
}
myFunction("roar"); //Change this line
console.log(lion);
module.exports = myFunction;
