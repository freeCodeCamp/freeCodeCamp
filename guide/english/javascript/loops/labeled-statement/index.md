---
title: Labeled Statement
---
## Labeled Statement

The **Labeled Statement** is used with the `break` and `continue` statements and serves to identify the statement to which the `break` and `continue` statements apply.

### Syntax
``` javascript
labelname:
  statements
```
### Usage
Without the use of a `labeled` statement the `break` statement can only break out of a loop or a `switch` statement. Using a `labeled` statement allows `break` to jump out of any code block.
#### Example
``` javascript
foo: {
  console.log("This prints:");
  break foo;
  console.log("This will never print.");
}
console.log("Because execution jumps to here!")
/* output
This prints:
Because execution jumps to here! */
```
When used with a `continue` statement the `labeled` statement allows you to skip a loop iteration, the advantage comes from being able to jump out from an inner loop to an outer one when you have nested loop statements. Without the use of a `labeled` statement you could only jump out of the existing loop iteration to the `next iteration of the same loop.`
#### Example
``` javascript
// without labeled statement, when j==i inner loop jumps to next iteration
function test() {
  for (var i = 0; i < 3; i++) {
    console.log("i=" + i);
    for (var j = 0; j < 3; j++) {
      if (j === i) {
        continue;
      }
      console.log("j=" + j);
    }
  }
}

/* output
i=0 (note j=0 is missing)
j=1
j=2
i=1
j=0 (note j=1 is missing)
j=2
i=2
j=0
j=1 (note j=2 is missing)
*/

// using a labeled statement we can jump to the outer (i) loop instead
function test() {
  outer: for (var i = 0; i < 3; i++) {
    console.log("i=" + i);
    for (var j = 0; j < 3; j++) {
      if (j === i) {
        continue outer;
      }
      console.log("j=" + j);
    }
  }
}

/*
i=0 (j only logged when less than i)
i=1
j=0
i=2
j=0
j=1
*/
```

### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label' target='_blank' rel='nofollow'>MDN</a>
