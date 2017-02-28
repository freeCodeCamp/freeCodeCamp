var dog = new animal();
var cat = new Animal();

dog = animal();
cat = Animal();

/*global iAnimal*/

var rat = new iAnimal();
var bat = new myAnimal();

(function() {
  var iAnimal = function() {};
  rat = new iAnimal();
}());

rat = iAnimal();
bat = myAnimal();

// Make sure we don't warn on Error, Number, etc.
Array();
Error();
Number();
String();
Boolean();
Symbol();
