// Create lion object here
var lion = {
  name: "Lion King",
  legs: 4,
  tails: 1,
};
// End of lion object

function myFunction(propertyName, propertyValue) {
  //Change this line
  // Only change code below this line
  lion[propertyName] = propertyValue;
  return lion;
  // Only change code above this line
}
myFunction("roar", "roar-roar"); //Change this line
module.exports = myFunction;
