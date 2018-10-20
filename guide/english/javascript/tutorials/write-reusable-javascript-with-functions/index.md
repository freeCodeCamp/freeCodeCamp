---
title: Write Reusable JavaScript with Functions
---
In JavaScript, we can divide up our code into reusable parts called functions.

Here's an example of a function:

    function functionName() {
      console.log("Hello World");
    }

You can `call` or `invoke` this function by using its name followed by parentheses, like this:

    functionName();

Each time the function is called it will print out the message "Hello World" on the dev console. All of the code between the curly braces will be executed every time the function is called.

Here is another example:

    function otherFunctionName (a, b) {
        return(a + b);
    }

We can `call` or `invoke` our function like this:

    otherFunctionName(1,2);

and it will run and return its return value to us.