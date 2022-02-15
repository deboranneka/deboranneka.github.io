 
//1. Write a function called "isOldEnoughToDrink". Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in Nigeria. Notes:
//•	The legal drinking age in Nigeria is 18. 

let legalDrinkingage = 18;
var isOldEnoughToDrink = 22;
if (isOldEnoughToDrink > legalDrinkingage) {
    console.log  (true)
}else {
    console.log (false) 
} 


 /* 2. Write a function called "isOldEnoughToDrinkAndDrive". Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States. Notes:
•	The legal drinking age in the United States is 21.
•	It is always illegal to drink and drive in the United States.

var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false */

let legalDrinkingageInAmerica = 21;
var isOldEnoughToDrinkAndDrive = 22;
if (isOldEnoughToDrinkAndDrive < legalDrinkingageInAmerica) {
    console.log (true)
}else {
    console.log (false) 
} 

/*3. Write a function called "getProperty". Given an object and a key, "getProperty" returns the value of the property at the given key. Notes:
•	If there is no property at the given key, it should return undefined. */

var obj = {key: 'value'
  };
  var output = getProperty(obj, 'key');
  console.log(output); 
  
