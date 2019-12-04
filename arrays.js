
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  var newArray = array.unshift(element);

  return element;


}

function destructivelyAddElementToBeginningOfArray(array, element){

  array.unshift(element);
  return array;


}
