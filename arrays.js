
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  var newArray = ['element', ...array];

  return array;


}

function destructivelyAddElementToBeginningOfArray(array, element){

  array.unshift(element);
  return array;


}
