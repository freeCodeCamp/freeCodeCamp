---
title: Scopes
---
If you've been programming in JavaScript for a while, you've undoubtedly run into a concept known as `scope`. What is `scope`? Why should you take the time to learn it?

In programmer speak, `scope` is the **current context of execution**. Confused? Let's take a look at the following piece of code:

    var foo = 'Hi, I am foo!';

    var baz = function () {
      var bar = 'Hi, I am bar too!';
        console.log(foo);
    }

    baz(); // Hi, I am foo!
    console.log(bar); // ReferenceError...

This is a simple example, but it does a good job of illustrating what is known as _Lexical scope_. JavaScript, and almost every other programming language has a _Lexical scope_. There is another kind of scope known as _Dynamic scope_, but we won't be discussing that.

Now, the term _Lexical scope_ sounds fancy, but as you will see it's really simple in principle. In a Lexical Scope, there are two kinds of scopes: the _global scope_ and a _local scope_.

Before you type the first line of code in your program, a _global scope_ is created for you. This contains all the variables that you declare in your program **outside any functions**.

In the example above, the variable `foo` is in the global scope of the program, while the variable `bar` is declared inside a function and is therefore **in the local scope of that function**.

Let's break down the example line by line. While you might be confused at this point, I promise you will have a much better understanding by the time you finish reading this.

On line 1 we are declaring the variable `foo`. Nothing too fancy here. Lets call this a left-hand size (LHS) reference to `foo`, because we are assigning a value to `foo` and it's on the left-hand side of the `equal` sign.

On line 3, we are declaring a function and assigning it to variable `baz`. This is another LHS reference to `baz`. We are assigning a value to it (remember, functions are values too!). This function is then called on line 8\. This is a RHS, or a right-hand side reference to `baz`. We are retrieveing `baz`'s value, which in this case is a function and then invoking it. Another RHS reference to `baz` would be if we assigned its value to another variable, for example `foo = baz`. This would be a LHS reference to `foo` and a RHS reference to `baz`.

The LHS and RHS references might sound confusing, but they are important for discussing scope. Think of it this way: a LHS reference is assigning a value to the variable, while a RHS reference is retrieving the value of the variable. They're just a shorter and more convenient way of saying 'retrieving the value' and 'assigning a value'.

Let's now breakdown what's happening inside the function itself.

When the compiler compiles the code inside a function, it enters the function's **local scope**.

On line 4, the variable `bar` is declared. This is a LHS reference to `bar`. On the next line, we have a RHS reference to `foo` inside the `console.log()`. Remember, we are retrieving `foo`'s value and then passing it as an argument to the method `console.log()`.

When we have a RHS reference to `foo`, the compiler looks for the declaration of the variable `foo`. The compiler doesn't find it in the function itself, or the **function's local scope** so it **goes up one level: to the global scope**.

At this point you're probably thinking that scope has something to do with variables. That is correct. A scope can be thought of as a container for variables. All variables that are created within a local scope are only accessible in that local scope. However, all local scopes can access the global scope. (I know you're probably even more confused right now, but just bear with me for a few more paragraphs).

So the compiler goes up to the global scope to find a LHS reference to the variable `foo`. It finds one on line 1, so it retrieves the value from the LHS reference, which is a string: `'Hi, I am foo!'`. This string is sent to the `console.log()` method, and outputted to the console.

The compiler has finished executing the code inside the function, so we come back out to line 9\. On line 9, we have a RHS reference for the variable `bar`.

Now, `bar` was declared in the local scope of `baz`, but there is a RHS reference for `bar` in the global scope. Since there is no LHS reference for `bar` in the global scope, the compiler can't find a value for `bar` and throws a ReferenceError.

But, you might ask, if the function can look outside itself for variables, or a local scope can peek into the global scope to find LHS references, why can't the global scope peek into a local scope? Well that's how lexical scope works!

    ... // global scope
    var baz = function() {
      ... // baz's scope
    }
    ... /// global scope

This is the same code from above which illustrates the scope. This forms a sort of hierarchy that goes up to the global scope:

`baz -> global`.

So, if there is a RHS reference for a variable inside `baz`'s scope, it can be fulfilled by a LHS reference for that variable in the global scope. But the opposite is **not true**.

What if we had another function inside `baz`?

    ... // global scope
    var baz = function() {
      ... // baz's scope

      var bar = function() {
         ... // bar's scope.
      }

    }
    ... /// global scope

In this case, the hierarchy or the **scope chain** would look like this:

`bar -> baz -> global`

Any RHS references inside `bar`'s local scope can be fullfilled by LHS references in the global scope or `baz`'s scope, but a RHS reference in `baz`'s scope cannot be fullfilled by a LHS reference in `bar`'s scope.

**You can only traverse down a scope chain, not up.**

There are two other important things you should know about JavaScript scopes. 

1. Scopes are declared by functions, not by blocks.
2. Functions can be forward-referenced, variables can't.

Observe (each comment describes scope at the line that it's written on):

```
    // outer() is in scope here because functions can be forward-referenced
    
    function outer() {
    
        // only inner() is in scope here
        // because only functions are forward-referenced
    
        var a = 1;
        
        //now 'a' and inner() are in scope
        
        function inner() {
            var b = 2
            
            if (a == 1) {
                var c = 3;
            }
            
            // 'c' is still in scope because JavaScript doesn't care
            // about the end of the 'if' block, only function inner()
        }
        
        // now b and c are out of scope
        // a and inner() are still in scope
        
    }
    
    // here, only outer() is in scope
 ```

# References

1.  <a href='https://github.com/getify/You-Dont-Know-JS/tree/master/scope%20%26%20closures' target='_blank' rel='nofollow'>Scopes and Closures</a> by Kyle Simpson. It goes into more details of how the scope mechanism works, and also has a superficial description of how the JavaScript compiler works, so if you're interested in that, definitely give it a read! It's free on GitHub and can be bought from O'Reilly.
2. <a href="https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/1617292850/ref=pd_lpo_sbs_14_img_0?_encoding=UTF8&psc=1&refRID=YMC2TB2C0DFHTQ3V62CA" target='_blank'>Secrets of the JavaScript Ninja</a> by John Resig and Bear Bibeault. A great guide for a more in-depth understanding of JavaScript.
