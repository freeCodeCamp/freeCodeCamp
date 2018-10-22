---
title: Built-In Functions
---
# Built-In Functions

Java also has many built-in or pre-defined functions which are usually stored in the java.lang and java.io packages,
which are automatically imported in editors like BlueJ or can be imported using the following Syntax-
```java
import java.lang.*;
import java.io.*;
```
Simply we can say, A built-in function is a method that is already implemented by the package you import.
These comprise functions which make an otherwise long and hard task easier to do.

Methods that are built in to java are :
Number Methods

The Number object contains only the default methods that are part of every object's definition.

constructor()

Returns the function that created this object's instance. By default this is the Number object.

toExponential()

Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation.

toFixed()

Formats a number with a specific number of digits to the right of the decimal.

toLocaleString()

Returns a string value version of the current number in a format that may vary according to a browser's locale settings.

toPrecision()

Defines how many total digits (including digits to the left and right of the decimal) to display of a number.

toString()

Returns the string representation of the number's value.

valueOf()

Returns the number's value.

Boolean Methods

Here is a list of each method and its description.

toSource()

Returns a string containing the source of the Boolean object; you can use this string to create an equivalent object.

toString()

Returns a string of either "true" or "false" depending upon the value of the object.

valueOf()

Returns the primitive value of the Boolean object.

String method

charAt()

Returns the character at the specified index.

charCodeAt()

Returns a number indicating the Unicode value of the character at the given index.

concat()

Combines the text of two strings and returns a new string.

indexOf()

Returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found.

lastIndexOf()

Returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found.

localeCompare()

Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

length()

Returns the length of the string.

match()

Used to match a regular expression against a string.

replace()

Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.

search()

Executes the search for a match between a regular expression and a specified string.

slice()

Extracts a section of a string and returns a new string.

split()

Splits a String object into an array of strings by separating the string into substrings.

substr()

Returns the characters in a string beginning at the specified location through the specified number of characters.

substring()

Returns the characters in a string between two indexes into the string.

toLocaleLowerCase()

The characters within a string are converted to lower case while respecting the current locale.

toLocaleUpperCase()

The characters within a string are converted to upper case while respecting the current locale.

toLowerCase()

Returns the calling string value converted to lower case.

toString()

Returns a string representing the specified object.

toUpperCase()

Returns the calling string value converted to uppercase.

valueOf()

Returns the primitive value of the specified object.

String HTML wrappers

Here is a list of each method which returns a copy of the string wrapped inside the appropriate HTML tag.

anchor()

Creates an HTML anchor that is used as a hypertext target.

big()

Creates a string to be displayed in a big font as if it were in a <big> tag.

blink()

Creates a string to blink as if it were in a <blink> tag.

bold()

Creates a string to be displayed as bold as if it were in a <b> tag.

fixed()

Causes a string to be displayed in fixed-pitch font as if it were in a <tt> tag

fontcolor()

Causes a string to be displayed in the specified color as if it were in a <font color="color"> tag.

fontsize()

Causes a string to be displayed in the specified font size as if it were in a <font size="size"> tag.

italics()

Causes a string to be italic, as if it were in an <i> tag.

link()

Creates an HTML hypertext link that requests another URL.

small()

Causes a string to be displayed in a small font, as if it were in a <small> tag.

strike()

Causes a string to be displayed as struck-out text, as if it were in a <strike> tag.

sub()

Causes a string to be displayed as a subscript, as if it were in a <sub> tag

sup()

Causes a string to be displayed as a superscript, as if it were in a <sup> tag

Array Methods

Here is a list of each method and its description.

concat()

Returns a new array comprised of this array joined with other array(s) and/or value(s).

every()

Returns true if every element in this array satisfies the provided testing function.

filter()

Creates a new array with all of the elements of this array for which the provided filtering function returns true.

forEach()

Calls a function for each element in the array.

indexOf()

Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.

join()

Joins all elements of an array into a string.

lastIndexOf()

Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

map()

Creates a new array with the results of calling a provided function on every element in this array.

pop()

Removes the last element from an array and returns that element.

push()

Adds one or more elements to the end of an array and returns the new length of the array.

reduce()

Apply a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

reduceRight()

Apply a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value.

reverse()

Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.

shift()

Removes the first element from an array and returns that element.

slice()

Extracts a section of an array and returns a new array.

some()

Returns true if at least one element in this array satisfies the provided testing function.

toSource()

Represents the source code of an object

sort()

Sorts the elements of an array.

splice()

Adds and/or removes elements from an array.

toString()

Returns a string representing the array and its elements.

unshift()

Adds one or more elements to the front of an array and returns the new length of the array.

Date Methods:

Here is a list of each method and its description.

Method

Date()

Returns today's date and time

getDate()

Returns the day of the month for the specified date according to local time.

getDay()

Returns the day of the week for the specified date according to local time.

getFullYear()

Returns the year of the specified date according to local time.

getHours()

Returns the hour in the specified date according to local time.

getMilliseconds()

Returns the milliseconds in the specified date according to local time.

getMinutes()

Returns the minutes in the specified date according to local time.

getMonth()

Returns the month in the specified date according to local time.

getSeconds()

Returns the seconds in the specified date according to local time.

getTime()

Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC.

getTimezoneOffset()

Returns the time-zone offset in minutes for the current locale.

getUTCDate()

Returns the day (date) of the month in the specified date according to universal time.

getUTCDay()

Returns the day of the week in the specified date according to universal time.

getUTCFullYear()

Returns the year in the specified date according to universal time.

getUTCHours()

Returns the hours in the specified date according to universal time.

getUTCMilliseconds()

Returns the milliseconds in the specified date according to universal time.

getUTCMinutes()

Returns the minutes in the specified date according to universal time.

getUTCMonth()

Returns the month in the specified date according to universal time.

getUTCSeconds()

Returns the seconds in the specified date according to universal time.

getYear()

Deprecated - Returns the year in the specified date according to local time. Use getFullYear instead.

setDate()

Sets the day of the month for a specified date according to local time.

setFullYear()

Sets the full year for a specified date according to local time.

setHours()

Sets the hours for a specified date according to local time.

setMilliseconds()

Sets the milliseconds for a specified date according to local time.

setMinutes()

Sets the minutes for a specified date according to local time.

setMonth()

Sets the month for a specified date according to local time.

setSeconds()

Sets the seconds for a specified date according to local time.

setTime()

Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

setUTCDate()

Sets the day of the month for a specified date according to universal time.

setUTCFullYear()

Sets the full year for a specified date according to universal time.

setUTCHours()

Sets the hour for a specified date according to universal time.

setUTCMilliseconds()

Sets the milliseconds for a specified date according to universal time.

setUTCMinutes()

Sets the minutes for a specified date according to universal time.

setUTCMonth()

Sets the month for a specified date according to universal time.

setUTCSeconds()

Sets the seconds for a specified date according to universal time.

setYear()

Deprecated - Sets the year for a specified date according to local time. Use setFullYear instead.

toDateString()

Returns the "date" portion of the Date as a human-readable string.

toGMTString()

Deprecated - Converts a date to a string, using the Internet GMT conventions. Use toUTCString instead.

toLocaleDateString()

Returns the "date" portion of the Date as a string, using the current locale's conventions.

toLocaleFormat()

Converts a date to a string, using a format string.

toLocaleString()

Converts a date to a string, using the current locale's conventions.

toLocaleTimeString()

Returns the "time" portion of the Date as a string, using the current locale's conventions.

toSource()

Returns a string representing the source for an equivalent Date object; you can use this value to create a new object.

toString()

Returns a string representing the specified Date object.

toTimeString()

Returns the "time" portion of the Date as a human-readable string.

toUTCString()

Converts a date to a string, using the universal time convention.

valueOf()

Returns the primitive value of a Date object.

Date Static Methods:

In addition to the many instance methods listed previously, the Date object also defines two static methods. These methods are invoked through the Date( ) constructor itself:

Date.parse( )

Parses a string representation of a date and time and returns the internal millisecond representation of that date.

Date.UTC( )

Returns the millisecond representation of the specified UTC date and time.

Math Methods

Here is a list of each method and its description.

abs()

Returns the absolute value of a number.

acos()

Returns the arccosine (in radians) of a number.

asin()

Returns the arcsine (in radians) of a number.

atan()

Returns the arctangent (in radians) of a number.

atan2()

Returns the arctangent of the quotient of its arguments.

ceil()

Returns the smallest integer greater than or equal to a number.

cos()

Returns the cosine of a number.

exp()

Returns EN, where N is the argument, and E is Euler's constant, the base of the natural logarithm.

floor()

Returns the largest integer less than or equal to a number.

log()

Returns the natural logarithm (base E) of a number.

max()

Returns the largest of zero or more numbers.

min()

Returns the smallest of zero or more numbers.

pow()

Returns base to the exponent power, that is, base exponent.

random()

Returns a pseudo-random number between 0 and 1.

round()

Returns the value of a number rounded to the nearest integer.

sin()

Returns the sine of a number.

sqrt()

Returns the square root of a number.

tan()

Returns the tangent of a number.

toSource()

Returns the string "Math".

RegExp Methods:

Here is a list of each method and its description.

Method

Description

exec()

Executes a search for a match in its string parameter.

test()

Tests for a match in its string parameter.

toSource()

Returns an object literal representing the specified object; you can use this value to create a new object.

toString()

Returns a string representing the specified object.
