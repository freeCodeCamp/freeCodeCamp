---
title: Iterate with JavaScript While Loops
---
Another type of JavaScript loop is called a `while loop` because it runs `while` something is true, and stops once that something is no longer true. Unlike the `for loop`, which is made up of three parts, the `while loop` only contains a condition statement.

    var ourArray = [];
    var i = 0;
    while(i < 5) {
      ourArray.push(i);
      i++;
    }
 
 It is important to remember to increase the variable used in this example, without the addition of `i++` the loop would continue forver.
