---
title: Code Smells
---
## Code Smells

A Code Smell in computer programming is a surface indication that there might be a problem regarding your system and the quality of your code. This problem might require refactoring to be fixed.

It is important to understand that smelly code works, but is not of good quality.

#### Examples:
1. Duplicated code - Blocks of code that have been replicated across the code base. This may indicate that you need to generalize the code into a function and call it in two places, or it may be that the way the code works in one place is completely unrelated to the way it works in another place, despite having been copied.
2. Large classes - Classes having too many lines of code. This may indicate that the class is trying to do too many things, and needs to be broken up into smaller classes.
3. [Magic numbers](https://en.wikipedia.org/wiki/Magic_number_(programming)) - Variables (or `if` statements) scattered in the code that hold numeric values with no apparent meaning. 
4. Many-parameter methods - Methods that take more that 2 or 3 parameters usually indicate that the method does more than one thing and should be broken down to multiple methods.
5. Unclear method or variable naming - A programmer should be able to understand what a method does without looking at the method's body. If the name or the parameter naming is vague, it is an indicator that the method should be refactored to reveal its purpose in the code.

#### More Information:
* _Refactoring: Improving the Design of Existing Code - Kent Beck, Martin Fowler_
* _Clean Code: A Handbook of Agile Software Craftsmanship - Martin, Robert C. (2009)._
* [Code Smells on Wikipedia](https://en.wikipedia.org/wiki/Code_smell)
* [Code Smells on Jeff Atwood's Blog (Coding Horror)](https://blog.codinghorror.com/code-smells/)
* [Code Smells on Ward Cunningham's C2 Wiki](http://wiki.c2.com/?CodeSmell)
* [Martin Fowler - Code Smell](https://martinfowler.com/bliki/CodeSmell.html)
