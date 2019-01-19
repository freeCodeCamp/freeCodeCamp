---
title: Template Literals
---

## Template Literals

## Introduction:
When we want to use one or more variables to make a string, it becomes very painful as we have to use the + sign to concatenate and keep track of quotes.

Now with ES6, we can make the string using backticks. Then, insert the variable like this, `${variable}`.

```javascript
const name='John';
const city='London';

Older Style:
const sentence ='My name is '+ name +'. I live in '+ city.
ES6 way:
const sentence = `My name is ${name}. I live in ${city}`;
Here ${name} and ${city} are going to be interpolated by the variable name and city respectively.
```
## MultiLine Strings:
Older style:

When we wanted to span our string into multiple lines, we had to use backslashes.
```javascript
const multipleLineString= "We have \
multiple lines \
here";
```
Now when we want to create a mutiline string, we can make use of template strings. We can surround our string with backticks. This approach is extremely helpful when we want to create some dynamic html markup.
```javascript
const htmlMarkup = `
<html>
<head></head>
<title>Template string</title>
<body>Hello World</body>
</html>`;
```
## Nesting of Template Strings:
We can nest them inside of each other.
```javascript
const cities =[
{name:'Delhi', year: 2010},
{name:'Mumbai', year: 2015},
{name:'Kolkata', year: 2017}];


const markup = `
<ul>
${cities.map(city=>`<li>I lived in ${city.name} in the year ${city.year}</li>`).join('')}
</ul>`;
```
Here the join operator after map function removes the extra commas which are added after each li.

## If statements and Functions 
We can also use If statements inside the template strings.

```javascript
const data = {name: 'John', city: 'London', birthyear: 1900};
const markup = `<div>${data.name} lives in ${data.city}. ${data.birthyear ? `<div>He was born in the year ${data.birthyear}</div>`:''}</div>`;
```

In the example above, if birthyear is defined, then the div with contents "He was born in the year" is generated otherwise there would be no div created.

We can also call functions inside the template strings.


