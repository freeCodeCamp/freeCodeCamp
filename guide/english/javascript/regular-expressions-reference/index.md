---
title: Regular Expressions Reference
---
## Regular Expressions Reference

In JavaScript, regular expressions are a shorthand used to match the desired part of a string. These are beneficial when trying to manipulate or validate strings used in your code.

### Syntax

Regular expressions are made up of two parts - the `pattern` and the `flags` (optional). The pattern is written between two forward slashes, followed by the optional flags: `var exp = /pattern/flags`.

#### Patterns

The use of alphanumeric (A-Z, a-z, 0-9) characters makes for a straightforward match. However, the real power of regular expressions comes with character classes. 

Say, for example, you want to all the places a string that has a number from 0-9. Rather than explicitly calling out `/[0-9]/`, you can use the special character class of `/\d/`. The backslash escapes the `d` character (so don't match the letter `d`), but instead uses the special matching abilities of `\d`.

This same principle applies to non-numeric characters, white space, and other broad matching groups. Regular expressions can become even more sophisticated with the use of certain modifiers, such as the `+` character.

This quantifier allows you to match the preceding character in your pattern one or more times. `/s+/` would match the `s` in `desert` and both `s`'s in `dessert`!

There are plenty more modifiers that allow your pattern to match whatever you might need. See the More Information section below to see all the possible character options for use in regular expressions.

#### Flags

There are 5 flags you can use to apply specific rules to the whole regular expression you are writing. They are:

`g` - the global match; this allows you to match all instances of your expression, rather than stopping after the first occurrence. 

`i` - the ignore case match (self-explanatory)

`m` - the multi-line match; this applies your pattern to each line as new; if you are searching for a line that starts with a particular pattern, this does so for all lines, rather than just the first one

`u` - the Unicode match; this signals to read your pattern as Unicode rather than plain text

`y` - the sticky match; this matches your pattern only starting at the index found in the `RegExp.lastIndex` property

### Creating a regular expression
A regular expression is a type of object. It can either be constructed
with the RegExp constructor or written as a literal value by enclosing the
pattern in forward slash ( / ) characters.

```
var re1 = new RegExp("abc") ;
var re2 = /abc/;
```
Both of these regular expression objects represent the same pattern: an
a character followed by a b followed by a c.

### The RegExp Object

`RegExp` is a constructor that creates an object from the regular expression pattern you create. In addition to the literal notation described above, you can also use the constructor format to create a regular expression: `new RegExp(pattern[, flags])`

### Testing for matches
```
console.log(/abc/.test(" abcde "));
// → true
console.log(/ abc /.test(" abxde "));
// → false
```

### Matching a set of characters
```
console . log (/[0123456789]/. test (" in 1992") );
// → true
console . log (/[0 -9]/. test (" in 1992") );
// → true
```
### Choice patterns

```
var animalCount = /\ b \ d + ( pig | cow | chicken )s ?\ b /;
console . log ( animalCount . test ("15 pigs ") );
// → true
console . log ( animalCount . test ("15 pigchickens ") );
// → false
```

#### Methods

You will most likely use regular expressions in `String` methods, such as `String.replace()`, but there are a handful of methods that belong to the `RegExp` object.

For example, `RegExp.test()` will return a Boolean for whether there exists a match between the regular expression pattern and the string in question. `RegExp.toString()` will turn the expression object into a string, which can be handy when running tests on your code.

The first argument can also be a regular expression, in which case thefirst match of the regular expression is replaced. When a g option (for global) is added to the regular expression, all matches in the string will be replaced, not just the first.

```
console . log (" Borobudur ". replace (/[ ou ]/ , "a ") );
// → Barobudur
console . log (" Borobudur ". replace (/[ ou ]/g , "a ") );
// → Barabadar
```

### More Information:

* <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp" target='_blank' rel='nofollow'>Here you can read</a> about all the pattern match characters, object properties, see some examples and more.

* <a href="https://regex101.com/" target='_blank' rel='nofollow'>Here is a great site</a> that lets you test out regular expression patterns in real-time, save your favorites and explore patterns made by others.
