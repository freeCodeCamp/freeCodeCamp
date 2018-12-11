---
title: Change Styles Based on Data
---
## Change Styles Based on Data


Remind yourself once again what is the callback function with [this](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

There is two ways you can complete this part, either with if-else logic or ternary operator. 

 **if-else logic**

An example from [w3school](https://www.w3schools.com/js/js_if_else.asp)

```javascript 

const money = 50;

if (money < 50) {

  return "I\'m rich";

}

else {

  return "I`'m poor";

}

```

What you need to remember is the bracket that the if-else logic associate with, (argument) and {statement}

**Try Yourself Now**  👩‍💻👨‍💻



**Ternary operator**

A more detailed explanation [here](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff). Ternary operator is a lot more concise and quicker to remember for a simple true or false statement. Read [this](https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394)
```javascript 

condition ? value if true : value if false 

```

For someone who still not sure here is a solution by using If-else statement
```javascript
      .style("color", (d) => {
        if (d < 20){
          return 'red'
        }
        else {
          return 'green'
        }
      })
```


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
