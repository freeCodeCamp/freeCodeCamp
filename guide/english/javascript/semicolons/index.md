---
title: Semicolons
---
Semicolons are not required in Javascript. This is because Javascript has a feature called "Automatic Semicolon Insertion" or ASI for short. ASI puts semicolons in your Javascript for you. It is always active by default and it's a part of the language and can not be disabled.

ASI has a set of rules it uses to determine where it should insert semicolons. If there is already a semicolon in place, it won't change anything. See <a href='http://stackoverflow.com/a/2846298/3467946' target='_blank' rel='nofollow'>this StackOverflow answer</a> for more information on how ASI works.

There is only one case where ASI fails: when a line starts with an opening bracket `(`. To avoid this causing errors, when a line starts with an opening bracket, you can put a semicolon at the beginning of the line that has the opening bracket:
```js
;(function() {
  console.log('Hi!')
})
```
Note that this is only required if you don't use semicolons.

A consistent coding style makes code more readable. Decide whether you will or won't use semicolons, and do so everywhere.


## Errors you might run into

When Javascript was first made it was meant to aid beginners to get into programming. Nobody wants to be searching for a dang semi-colon in their code when they first start programming. So the choice of semi-colons was implemented, as stated above they are technically there. 

For example:
```javasctipt 
function foo(x) {
  return
    function(y) {
      return x + y;
    }
} 
let z = foo(10);
z(10)// TypeError z is not a function
// Because of Automatic Semicolon Insertion, our inner function does not exist.
```
Javascript will implement semi-colons where they are expected. 

### Other resources

<a href='http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding' target='_blank' rel='nofollow'>An Open Letter to JavaScript Leaders Regarding Semicolons</a>
