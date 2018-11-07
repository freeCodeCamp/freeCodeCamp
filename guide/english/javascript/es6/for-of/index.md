---
title: for-of loop
---

## for-of Loop

for-of loop can be used to iterate over the things which are not arrays but are iterable like a DOM collection, string, set, arguments or map.

```javascript
const fruits = ['Orange','Apple','Grapes','Banana'];
for (const fruit of fruits)
{
    console.log(fruit);
}
```

The above snippet is going to return us the items in the array above.

## for-of loop in knowing index
What if we want to know the index of each item too.In that case we can iterate over fruits.entries() which gives us the ArrayIterator.

```javascript
for (const fruit of fruits.entries())
{
    console.log(fruit);
}
```
In the above snippet, fruit is going to be an array with two items. 0th item is going to contain the index and the 1st item would contain the actual fruit name.The output would be like :
```
[0, "Orange"]

[1, "Apple"]

[2, "Grapes"]

[3, "Banana"]
```
We can further destructure fruit like below:

```javascript
for (const [index,fruit] of fruits.entries())
{
    console.log(index,fruit);
}
```

## for-of loop in iterating over unknown number of arguments

for-of loop is very helpful in iterating over the unknown number of arguments to a function. 

Suppose we want to add the numbers which are passed to a function and the number of arguments is not fixed.

'arguments' is a special keyword in javascript which gives us the Array-ish (not array) type and gives us all of the arguments.

```javascript
function addNumbers()
{
    let sum = 0;
    for (const num of arguments)
       sum+=num;
    return sum;
}
addNumbers(1, 2, 3, 4, 5); // 15
```

Here arguments is not a true array still we can iterate over it using for-of loop.

## for-of loop to iterate over string

We can use for-of loop to iterate over string to give us character by character of the string.

```javascript
const name = 'John Doe';
for (const char of name)
    console.log(char); 
```
which results in following output:
characters 'J' ,'o','h','n',' ','D','o','e'

## for-of loop to iterate over DOM collection

DOM collections are not the true array type. They are usually NodeList for most of the browsers. If we create a number of paragraphs and want to iterate over them to assign some event on each of paragraph, we can make use of for-of loop.

```javascript
const paragraphs = document.querySelectorAll('p');
```

Here paragraphs is a NodeList which can be iterated over using for-of loop.

```javascript
for (const para of paragraphs)
{
    console.log(para);
    // We can add event listeners to each para here
}
```

#### More Information

[ES6 In Depth: Iterators and the for-of loop](https://hacks.mozilla.org/2015/04/es6-in-depth-iterators-and-the-for-of-loop/)
