---
title: Using Arrayprototypereduce to Reduce Conceptual Boilerplate for Problems on Arrays
---
That's quite a mouthful! It could have just been titled as **Use <a>`Array.prototype.reduce()`</a> to Solve Array Problems Easily** or **`Array.prototype.reduce()` FTW!**. That would have been so much easier to read and parse.

But It was not. Loops in JavaScript are just like that. They are not terse, they make you beat around the bush for a while. As the joke goes, two things are most difficult in computer science - <a href='https://en.wikipedia.org/wiki/Cache_invalidation' target='_blank' rel='nofollow'>cache invalidation</a>, <a href='https://www.quora.com/Why-is-naming-things-hard-in-computer-science-and-how-can-it-can-be-made-easier' target='_blank' rel='nofollow'>naming things</a>, and <a href='https://en.wikipedia.org/wiki/Off-by-one_error' target='_blank' rel='nofollow'>off-by-one error</a>.

And then there is the danger of writing <a href='http://stackoverflow.com/questions/11488014/asynchronous-process-inside-a-javascript-for-loop' target='_blank' rel='nofollow'>asynchonous code inside a for loop without using closure from IIFE</a>.

This article would start with a claim - that you can avoid using a for-loop or while-loop to solve any `Array` related problems. Instead, you can solve all of them using `Array.prototype.reduce()`. If you wish to read forward; do make sure you know about recursive functions, and some of the cool functional tools like <a>`Array.prototype.map()`</a> or <a>`Array.prototype.filter()`</a>.

Grand claims require grand evidence. So let's demonstrate how we can get accustomed with using `reduce()`.

It's time you knew, that, if you haven't solved the FreeCodeCamp algorithm scripting sections, you might want to hold off on reading this next part. Some of the examples could very well match those problems.

This is the cliched spoiler alert; to make sure you give those problems an honest attempt and not take a peek at the solutions before you have even tried.

Also, if you already understand it well enough, perhaps you would like to review this piece of writing and provide feedback.

## Can I Reduce Any Array-related Problem?

Yes, you can! In fact, the problem doesn't even have to have an Array - _it just has to be a problem, where you can create an intermediate array_.

Let's take an example. It's quite common to create a <a href='https://en.wikipedia.org/wiki/Semantic_URL#Slug' target='_blank' rel='nofollow'>slug url</a> from standard white-spaced string such as news headlines, blog article headings or even questions on Q&A forums.

Say, we have to write a utility function, that creates this slug. You could probably write something like this:

    function createSlug(str){
      return str.split(" ").reduce(function(prev, next){
        return prev.concat(<a href='https://signalvnoise.com/posts/3124-give-it-five-minutes' target='_blank' rel='nofollow'>next.toLowerCase()]);
      }, [])
      .join("-");
    }

Don't take my word for it! Go ahead, and test it out in your console with some input like "Leo Finally Wins a Freaking Oscar!" See what it returns. I will wait...done? Ok, moving on.

Yes, it's not a robust implementation. It does not take care of some edge cases, also it assumes the joining should happen with `"-"`.

But it's a start. Notice how the usage of `reduce` takes the boilerplate out of your way -- the action happens only at the line:

    return prev.concat([next.toLowerCase()]);

That's the core of the functionality we want. In fact, we are so assured of its awesomeness, that we start the `function` body with a `return` statement!

You might very well imagine that, this looks like dark magic. Make sure that is not a knee-jerk reaction, because you are too used to writing loops. Just [give it five minutes</a>!

If the above code was not clear, you need to understand how `reduce` works. And by _understand_, I mean, know it like the back of your hand.

## But I Do NOT Understand Reduce At All!

Well, fear not! You are about to be a `reduce` Ninja in the next few minutes.

Every JavaScript function has three things you need to know, to understand how the function works:

*   The input
*   The output
*   The execution context

Yes, I can see you opening the official <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce' target='_blank' rel='nofollow'>MDN documentation</a> in a new tab! It's ok, go read that first. I am serious, this is no joke.

You should always start at the official documentation to understand something.

Good, now that you are confused with the `prev` and `next` inside the callback; you are ready to follow the text here.

`Array.prototype.reduce()` takes a callback and initial value as input arguments (The initial value is important. A lot of developers forget to provide the initial value correctly; and screw up their code).

As you must have seen in the documentation, it takes a few additional but optional arguments as well. But more on that later. Assuming `arr` is an arbitrary array.

    arr.reduce(function(){}, initialValue);

Now, let's have a closer look at the callback function, which is the first argument of `reduce`. This callback, in turn, takes two arguments. These two arguments are called in the official documentation as `prev` and `next`. Personally, I don't think those names do justice to their true nature.

So, throughout this text, we would be referring to them as `acc`, to represent accumulated value; and `item`, to denote the current item being accessed.

With these so far, here's what a `reduce` should look like:

    arr.reduce(function(acc, item){
     /* here you have to complete the function */
    }, initialValue);

Now, let's find out what would the value of these `acc` and `item` are. We have mentioned earlier that the `reduce` is a replacement for iterative constructs.

It stands to reason that `reduce` would take your custom callback function; and iterate over the Array on which `reduce` has been invoked.

Instead of describing these, let's ask the JS execution engine what these are!

    var arr = <a href='http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/' target='_blank' rel='nofollow'>10, 20, 30, 60];
    arr.reduce(function(acc, item){
       console.log(acc, item);
    }, 0);

Executing the above in browser or Node console would give you this as output:

    0 10
    undefined 20
    undefined 30
    undefined 60

Notice the number of outputs are same as number of elements in the Array `[10, 20, 30, 60]`. In fact, it prints out the elements of the Array!

So, we can deduce that `reduce()` takes your custom callback and executes it on each element of the Array. While doing so, it makes the current item available to the custom callback as `item` argument.

But what about `acc`? We see that other than the first line, when `item = 10`, it is `undefined`. In the first line, which corresponds to the first iteration, its value is same as `initialvalue`.

In short, our `acc` accumulator, is not accumulating!

But then, how do we make it accumulate? Let's try executing this:

    var arr = [10, 20, 30, 60];
    arr.reduce(function(acc, item){
       console.log(acc, item);
       return acc;
    }, 0);

This time the output changes to:

    0 10
    0 20
    0 30
    0 60

As you can see, the value of `acc` would remain constant throughout. And that is expected - we are not altering the value of `acc` anywhere in the custom callback. We return whatever `reduce` makes available at a given iteration.

But we did realize something - the value of `acc` for current iteration, would be the `return` value from custom callback from previous iteration. And ultimately, when the iteration is over, the final value of `acc` would be returned by `reduce` call.

This leaves only one important part in our understanding - the value of execution context, or [`this`</a>!

So, we again approach our friendly neighbor, the JS console and execute this:

    var arr = <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode' target='_blank' rel='nofollow'>10, 20, 30, 60];
    arr.reduce(function(acc, item){
       console.log(acc, item, this);
       return acc;
    }, 0);

If you are in [strict mode</a>, it would return `undefined` as value of `this`. Otherwise, in-browser, it would point to <a href='https://developer.mozilla.org/en-US/docs/Web/API/Window' target='_blank' rel='nofollow'>`window`</a> object as `this`. Can we override and set it on our own, using <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind' target='_blank' rel='nofollow'>`bind`</a>? Sure! just use `bind` with the callback:

    var arr = <a href='https://en.wikipedia.org/wiki/Loop_invariant' target='_blank' rel='nofollow'>10, 20, 30, 60];
    arr.reduce(function(acc, item){
       console.log(acc, item, this);
       return acc;
    }.bind(arr), 0);

I have bound the array `arr` itself; but you can set it to any object in your environment.

## Understanding Reduce

Let's summarize our understanding of this `reduce` function for easy reference:

*   Reduce takes a custom callback as its first argument, and some initial value as its second argument.
*   It's important we don't forget about the second argument, the initial value; and we explicitly set it while using it.
*   The input arguments to the custom callback is accumulated value `acc`; and the current item in Array, `item`.
*   The value of `acc` for next iteration would be the returned value from inside the callback, in current iteration.
*   Whole point of using `reduce()` is to form the `acc` properly; to return it finally from the `reduce()` call.

Don't you try remembering them by cramming! Instead, let's remember them by applying them in real code.

## Using Reduce

Let's start a simple Array operation off the top-of our head - _finding maximum in an Array_

For the sake of brevity, I am assuming it's an integer Array.

To form a solution, we need to think of how to form the `acc` as `reduce` takes our callback and iterates over the Array.

An idea I find helpful, is to think in terms of [loop-invariants</a>. We want to come up with a formulation that no matter what the size or content of the Array; `acc` should always have the maximum value so far.

Say, My Array is `[20, 50, 5, 60]`. After two iterations; `item` would be `5` and `acc` should be `max(20, 50) = 50`.

The only way `acc` always gets the maximum of _subarray traversed so far_, is if we always pick maximum of current `item` and `acc` - and return he winner!

So, here's what the function would look like:

    var arr = [20, 50, 5, 60];
    arr.reduce(function(acc, item){
      return Math.max(acc, item);
    }, 0);

It could be tempting to rewrite it as follows, in tandem with functional programming principles;

    var arr = [20, 50, 5, 60];
    arr.reduce(Math.max, 0);

but this would not work and would return `NaN`. Here's the reason - `acc` and `item` are not the **only** arguments to the custom callback. When you call [`Math.max()`](//forum.freecodecamp.com/t/javascript-math-max/14682) tries to call it on non-numeric arguments, resulting in `NaN`.

Notice that I didn't put much thought into picking the initial value. I just picked it as `0`; resulting in a bug!

So, what if my Array is consisted of values less than zero? Say, `arr = <a href='https://en.wikipedia.org/wiki/Least_common_multiple' target='_blank' rel='nofollow'>-7, -56, -5, -2]`. The returned value would be `0`, which is not even present in the Array `arr`.

Instead, we should pick the lowest possible value for initial value.

    var arr = [-20, -50, -5, -60];
    arr.reduce(function(acc, item){
      return Math.max(acc, item);
    }, -Infinity);

We are getting there. We should hone our skills on another Array related problem. Just to have some fun, let's go with a bit tougher one.

Say, we are to find [LCM</a> of an Array of integers. Now, from theory, we know that LCM of two numbers would be product of them, divided by their <a href='https://en.wikipedia.org/wiki/Greatest_common_divisor' target='_blank' rel='nofollow'>HCF</a>.

Eucledian algorithm for HCF finding exists; and abundant are its implementation. No point wasting your time making you write an HCF function when you can write one yourself, or find one.

Rather, let's look at how to extend LCM of two numbers into LCM of multiple numbers. Newsflash - it's not product of entire array divided by their HCF. Nope. That would be mathematically wrong.

LCM of three numbers would be LCM of first two numbers; then LCM of the first LCM with the remaining number. Similarly, you can formulate a strategy to find out LCM of sub-array first, then take another number and find its LCM with the first LCM.

So, how do we formulate the solution? We need to think of `acc` in the middle of an iteration. The final `acc` should be the LCM of the entire array, no doubt. But during the `nth` iteration also; `acc` should hold the LCM of the `(n-1)` elements traversed so far.

And yes, the initial value. It should be a number, whose LCM with another number would be the other number. Clearly, it is `1`.

Let's write our `reduce` solution.

    var arr = <a href='http://www.freecodecamp.com/challenges/symmetric-difference' target='_blank' rel='nofollow'>1, 2, 3, 4, 5, 6];
    arr.reduce(function(acc, item){
      return acc * item / hcf(acc, item);
    }, 1);

I am assuming an `hcf()` function is available in the environment. I picked the entries in a way; it should return `60` as answer.

## More Reduce

Reduce is not just a function to provide you with utilities to solve some Mathy problems like sum of the array, hcf of the array, minimum of the array etc.

It is perfectly capable of going above and beyond. We shall be dealing with some complex examples for now.

Say, you wish to flatten nested arrays. And yes, before you start jumping up-and-down in your seat - the nesting could be any arbitrary level deep.

For instance, we could take this Array to test our code with.

    var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]];

This looks sufficiently complex to begin with - nested arrays, empty nested arrays with varying depth.

The output should be `[1, 2, 3, 'cat', 'dog', 'fish', 'bird']`

It's time to formulate a strategy. We clearly need to distinguish between an array and an element. Also, `acc` should be the array being formed throughout the iteration; meaning the initial value would be an empty array `[]`.

Throughout the callback function code, we would simply extract the content from the `item`, which can be a deeply nested array; and we would <a>`Array.prototype.concat()`</a> it with the `acc` value. It's better to use `concat()` over <a>`Array.prototype.push()`</a>; because `push()` alters the original array; while `concat()` creates a new array and returns it.

And since we don't know the level of nesting at any given instant; we must go call our custom callback recursively. Meaning, we have to write it somewhere else and call it by name inside `reduce()`.

    var arr = [[1, 2, 3], ['cat', 'dog', ['fish', 'bird'], [[[]]]]];

    function flattenArray(arr) {
      return arr.reduce(function(acc, item){
        if(Array.isArray(item)){
          return acc.concat(flattenArray(item)); // recursively call to flatten nested array
        return acc.concat(item); // this does the ordering. If you want reverse ordered output, just reverse it!
      }, [])

    }

    // call it like this
    flattenArray(arr);

Of course, this requires some background in recursive functions; but that's not too difficult to pick up, compared to the matter of this long one!

Yes, go ahead and play with it. But notice how we can simply write 3-4 lines of clean functions keeping a few simple guidelines in mind - and do something as complex as that reliably. This is readable and maintainable.

For instance, if you want to alter or tweak the logic the logic later (Say you want to upper case some string or encode some string); you can easily identify where to alter. The actual nesting happens inside the `if` condition. And the way we have used the `reduce` call there - it maintains the order of elements as they are in the array.

Let's take another seemingly complex example, and bring it to its knees weilding the sword of `reduce`!

We are to find out the [symmetrical differences</a> of two or more arrays. It looks daunting; but then you start to think.

What would the initial value be? Of course, we are forming an array; so it would be an empty array `<a href='https://github.com/reactjs/redux' target='_blank' rel='nofollow'>]` to begin with. Then there's the `acc` - since our final solution would contain a diff-ed array; it would have to be an array too. This would keep piling on the symmetric differences of the arrays encountered so far.

Just to be clear, this function could accept arbitrary number of arrays; so, we have to convert them all to an array of arrays for easy manipulation.

    function symDiff(args){
      // convert args to an Array
      var argsArray = Array.prototype.slice.call(arguments);

      // now do the reduce magic!
      argsArray.reduce(function(acc, item){
        return acc
          .filter(function(itemInAcc){
            return item.indexOf(itemInAcc) === -1;
          })
          .concat(item.filter(function(itemInItem){
            return acc.indexOf(itemInItem) === -1;
          }));
      }. []);
    }

Yes, I know. It looks big. So, let's see if we can refactor to make it small. Notice that both the `filter` functions do same work; except with altered set of argument pairs. Cool! Let's create a separate function and call it twice with those arguments.

    function symDiff(args){
      // convert args to an Array
      var argsArray = Array.prototype.slice.call(arguments);

      // now do the reduce magic!
      argsArray.reduce(function(acc, item){
        var funWithFiltering = function(arr1, arr2){
          return arr1.filter(function(itemInArr1){
            return arr2.indexOf(itemInArr1) === -1;
          });
        };

        return funWithFiltering(acc, item).concat(funWithFiltering(item, acc));
      }. []);
    }

This looks better. But there is still one other problem. This would keep duplicates in the array. If that is not needed, we could just as easily write another function using `reduce` to remove the duplicates.

    function removeDuplicates(arr){
      arr.filter(item, index, self){
        // Keep only the first instance of the array, as given by indexOf()
        // Remove other elements from Array
        return self.indexOf(item) === index;
      }
    }

We cannot keep on ignoring this any longer. I have been using `filter` while promising to use `reduce`, right? The reason is simple - `filter` can be written with `reduce`. In fact, any array operation, in theory; can be implemented with `reduce()`.

Do give it a try! Implement `map` and `filter` with `reduce`. You have to take care of optional arguments too.

## Wrapping up

Whoa that was quite a lot! But I think I have made a strong case of using `reduce` whenever you want to use a loop to get it done. Be habituated with it like its your first nature.

As soon as you get a problem on some String transformation or Array manipuation; start by writing

    return arr.reduce(function(acc, item){_}, _);

And then fill in the blanks. When you are using `reduce()`, you are thinking in terms of interaction of every element with another element. You are forming the output by acculumating it from start to finish.

The framework [Redux</a> embraces the `reduce` principle and is gaining high popularity in web design.

Also notice another salient feature - `reduce` forces or guides you to form your solution without altering anything existing. For instance, in the last example; we were filtering and concatenating - but we knew it would work as is; because the first set of operation did not change any of the `acc` or `item` within that iteration.

This would be a great time to level with you, that, the `initialValue` parameter is <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Parameters' target='_blank' rel='nofollow'>optional</a>. You don't need to provide it explicitly.

If you omit this; for the first iteration `acc` would be the first item in the array, and `item` would be the second item in the array. This would mean we can write a sum of array utility just omitting it. Or, we don't need to think of `-Infinity` in case of finding maximum value in array - it would work just fine if we remove the initial value.

But in some complex situations, it would be better to visualize and formulate the solution in terms of some base - some initialization. However, if you are more comfortable without it, to each his own!

If you have any further questions or suggestions, come join our <a href='https://gitter.im/FreeCodeCamp/FreeCodeCamp' target='_blank' rel='nofollow'>gitter chatroom</a>; and tell us how you `reduce`!