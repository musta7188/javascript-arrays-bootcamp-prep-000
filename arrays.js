
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){

  var newArray = array.push(element);
  
  return array;


}

function destructivelyAddElementToBeginningOfArray(array, element){

  array.shift(element);
  return array;


}
