# **Memory life cycle**

Regardless of the programming language, memory life cycle is pretty much always the same:

- **Memory life cycle**
- **Value initialization**
- **Allocation via function calls**
  
Allocate the memory you need
Use the allocated memory (read, write)
Release the allocated memory when it is not needed anymore

The second part is explicit in all languages. The first and last parts are explicit in low-level languages but are mostly implicit in high-level languages like JavaScript.

# Allocation in JavaScript

## **Value initialization**

    var n = 123; // allocates memory for a number
    var s = 'azerty'; // allocates memory for a string 

    var o = {
      a: 1,
      b: null
    }; // allocates memory for an object and contained values

    // (like object) allocates memory for the array and 
    // contained values
    var a = [1, null, 'abra']; 

    function f(a) {
      return a + 2;
    } // allocates a function (which is a callable object)

    // function expressions also allocate an object
    someElement.addEventListener('click', function() {
      someElement.style.backgroundColor = 'blue';
    }, false);


## **Allocation via function calls**

    var d = new Date(); // allocates a Date object

    var e = document.createElement('div'); // allocates a DOM element


## **Using Values**
Using values basically means reading and writing in allocated memory. This can be done by reading or writing the value of a variable or an object property or even passing an argument to a function.
