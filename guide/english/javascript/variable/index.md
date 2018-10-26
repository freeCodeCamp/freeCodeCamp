###VAriable

To declare variables in Javascript you don't need to precise the data type.
But there is a way of declaring variables.
we have 3 keywords but with different context.
- var 
- let
- const

They are separated in 2 categories:
 a. var can be used alone within a program
 b. let and const can be used together within a program.

## var
```
	var x = 0;
```
this is the standard way of declaring a variable.
var is supported across all browsers, it also can be declared
within scope globally or locally.

## let
```
	let x = 2;	
```
let keyword does not supported across all browsers.
It allows to declare variables that a limited in scope, to the block of code, where it is used.

## const
```
	const NUMBER = 42;
```
const is a way of creating a value that cannot be changed or reassigned within the program. Its constant number.
It used with let keyword within a progam.
The name of constant can be in uppercase of lowercase, but for
difference of their effect, it is better to use uppercase when you want to give a name to constant.

### More details:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var' target='_blank' rel='nofollow'>MDN Documentation for var</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let' target='_blank' rel='nofollow'>MDN Documentation for let</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const' target='_blank' rel='nofollow'>MDN Documentation for const</a>
