---
title: Functional Programming
---
## Functional Programming

Functional programming is the process of building software by composing **pure functions**, avoiding **shared state**, **mutable data**, and **side-effects**. Functional programming is **declarative** (telling the computer what you want to do) rather than **imperative** (telling the computer exactly how to do that), and application state flows through pure functions. Contrast it with object-oriented programming, where application state is usually shared and co-located with methods in objects.

### Why Functional Programming?

* It's generally more concise
* It's generally more predictable
* It's easier to test than object-oriented code

### Adoption by Programing Languages

Many programming languages support functional programming like Haskell, F#, Common Lisp, Clojure, Erlang, OCaml. JavaScript also has the properties of an untyped functional language.

### Uses

Functional programming has long been popular in academia, but with few industrial applications. However, recently several prominent functional programming languages have been used in commercial or industrial systems. For example, the Erlang programming language, which was developed by the Swedish company Ericsson in the late 1980s, is used for building a range of applications at companies such as T-Mobile, Nortel, Facebook, Électricité de France and WhatsApp.

### Higher-Order Functions
Higher-order functions are a big part of functional programming. A higher-order function is a function that either takes a function(s) as a parameter or returns a function.

### Map
`map` is a higher-order function that calls a function to each element of a list, and returns the results as a *new* list. 

Here is an example of `map`:
```javascript
const myList = [6, 3, 5, 29];

let squares = myList.map(num => num * num); // [36, 9, 25, 841]
```


### More Information:

* [Wikipedia - Functional Programming](https://en.wikipedia.org/wiki/Functional_programming#Use_in_industry)

* [KeyCDN - Functional Programming – What Is It and Why Does It Matter?](https://www.keycdn.com/blog/functional-programming/)

* [Medium - What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
