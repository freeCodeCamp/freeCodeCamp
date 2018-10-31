---
title: Switch Statements
---
## Switch Statements
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
A `switch` statement in programming is similar to an `if-else` statement, but has the benefit of sometimes being easier to read when there are a lot of conditions. Also it allows a `default` block to be added that will be executed if none of the other conditions are true.

### Syntax:
```javascript
switch(expression) {
  case 1:
    console.log('1');
    break;
   case 2:
     console.log('2');
     break;
   default:
     console.log('No true condition, default');
}
```

The above snippet shows the syntax for a basic `switch` statement. In this example, there are 3 different scenarios for:
- `expression = 1`: First condition is true, and `1` gets printed to the console.
- `expression = 2`: Second condition is true, and `2` gets printed to the console.
- `expression = 'anything else'`: Case 1 and Case 2 are both false, so the default condition is executed.

The `default` condition is a condition that will be executed if none of the other cases are true.


Note: One really important point to note here is that in the snippet above, `case 1:` and `case 2:` might seem to represent some kind of order, but `1` and `2` are nothing but the answers which the `(expression)` may get evaluated to. So therefore instead of 1 and 2 it can be anything which the `(expression)` may evaluate to and can be tested against.

For example:
```javascript
var someValue;
var expression = someValue;
switch(expression){
  case someValue:
    console.log('10'); // 10 would be printed to the console
    break;
  case 23:
    console.log('12');
    break;
  default:
    console.log('No matches');
}
```

Note: `expression` in the snippet above can be a string or number.


### Break
The `break` keyword is required in each case to make sure that only the code in that case gets executed. Without the break, multiple cases could be executed. When JavaScript reaches a `break` keyword, it breaks out of the switch block. If the `break` was left out of the above example, this is what would happen:

```javascript
var expression = 1;
switch(expression) {
  case 1:
    console.log('1');  // 1 would be printed to console
  case 2: // As there is no break after case 1, this case is also executed.
    console.log('2'); // 2 would be printed to the console.
    break; // break -> Switch statement is exited
  default:
    console.log('No true condition, default');
}
```


### Execute multiple cases:
`switch` statements also allow for the same code block to be executed by multiple cases. This can be done by adding 1 or more `case :` keywords before a code block.

Eg:
```javascript
switch (day) {
  case 4:
  case 5:
    console.log('it is nearly the weekend');
    break; 
  case 0:
  case 6:
    console.log('it is the weekend');
    break;
  default: 
    console.log('Looking forward to the Weekend');
}
```

In the above snippet:
- If `day` is `4` or `5` (Thursday or Friday), `it is nearly the weekend` will be printed to the console as the first case gets executed.
- If `day` is `0` or `6`, (Saturday or Sunday),`it is the weekend` will be printed to the console as the second case gets executed.
- If `day` is any other value, `Looking forward to the Weekend` will be printed to the console, as the default case gets executed.

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch' target='_blank' rel='nofollow'>MDN Documentation for switch</a> 
