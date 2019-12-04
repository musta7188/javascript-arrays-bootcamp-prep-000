
let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){

  [element, ...array];
  return array;


}

function destructivelyAddElementToBeginningOfArray(array, element){

  array.push(`${element}`);
  return array;


}
