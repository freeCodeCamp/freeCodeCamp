---
title: Output 
---
## Output

There are 4 common ways in which data can be output to the console. These will be the primarily used output methods as part of your development process.

#### `console.log`
It is the most commonly used way to output the data. It's a common practice to insert a couple of these between statements to uderstand how the data is flowing and processed. Also, you can use `debugger` or breakpoints in devtools to do the same without polluting your code.

```javascript
var numbers  = [ 1, 2, 3, 4, 5, 6, 7];
numbers.forEach(function(number){
  console.log(number + ' is divisible by 2', number%2 == 0);
});
```

#### `console.warn`

As you guessed by the name this is used for showing warnings, and its typical yellow color differentiates it from an error's red text & `console.log`.


```javascript
function isAdult(age){
  if(Number(age) < 18){
    console.warn('You are not an adult');
    return false;
   }
   return true;
}
```


#### `console.error`
This is used when throwing an exception or an error. Errors usually show up in red text.


#### `console.table`
Suppose you got a list of items or movies in a json object and you want to check that out in table format, then `console.table` is your best bet. It automatically detects rows and column headers from data.

*Try to run the code below in your console*
```javascript
var data = {
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "rgba": [255,255,255,1],
      "hex": "#000"
    },
    {
      "color": "white",
      "category": "value",
      "rgba": [0,0,0,1],
      "hex": "#FFF"
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "rgba": [255,0,0,1],
      "hex": "#FF0"
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "rgba": [0,0,255,1],
      "hex": "#00F"
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "rgba": [255,255,0,1],
      "hex": "#FF0"
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "rgba": [0,255,0,1],
      "hex": "#0F0"

    },
  ]
}

console.table(data.colors);
```

Also, you can control & filter the type of output you wish to see in console.

1. All
2. Verbose
3. Warning
4. Errors


#### More Information:
- <a href='https://developers.google.com/web/tools/chrome-devtools/console/console-reference' target='_blank' rel='nofollow'>Complete reference of console object by Google</a>
- <a href='https://developer.mozilla.org/en-US/docs/Web/API/Console' target='_blank' rel='nofollow'>Console MDN</a>

