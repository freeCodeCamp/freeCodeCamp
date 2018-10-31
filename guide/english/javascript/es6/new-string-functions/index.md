---
title: New String Functions
---

## New String Functions

Following four functions are added new to strings in ES6.

* startsWith
* endsWith
* includes
* repeat

## startsWith:

This is a case sensitive function which helps us to find if a particular string starts with some substring.

startsWith takes in the second optional argument called position which we can use in case when we want to skip particular number of characters from the beginning of the string before searching.

```javascript
const str ='Rachna';
str.startsWith('Rad') //false
str.startsWith('ra') //false as it is case sensitive
str.startsWith('Ra') //true
str.startsWith('ch',2) //true as we are searching from the second position
str.startsWith('ch',3) //false
```
## endsWith

This is a case sensitive function which helps us to find if a particular string ends with some substring.

endsWith takes in a second optional argument called endPosition which we can use to include the number of characters before searching.

```javascript
const city= 'Delhi';
city.endsWith('Hi'); //false as it is case sensitive
city.endsWith('hi');//true
city.endsWith('l',3);//true - include only first three characters before searching
city.endsWith('l',4);//false
```

## includes

includes function is also a case sensitive function that checks if the searchString is present anywhere in the string.

```javascript
const name='John Doe';
name.includes('do'); //false
name.includes('D'); //true
name.includes('Do'); //true
```

## repeat

repeat allows us to take a string and repeat it a number of times.

```javascript
const str = 'This is repeated';
str.repeat(3); //"This is repeatedThis is repeatedThis is repeated"
```

repeat function can be used to pad a string from Left with a number of spaces.


