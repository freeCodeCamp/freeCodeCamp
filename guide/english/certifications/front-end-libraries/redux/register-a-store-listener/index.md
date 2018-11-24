---
title: Register a Store Listener
---
## Register a Store Listener
Let's break the instructions down to figure exactly what it's asking. 
>*Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method.*

We can summarize these steps into small chunks:
1. write a callback function
2. increment the global variable count
3. pass function to `store.subscribe()` method.

Awesome! Now let's review some of the basics again.

### What is a "callback function" in plain English?
A callback function is simply a function that get's called after another function is done being executed. In the real-world, it might be something like this:
```javascript
// You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed.
let carIsBroken = true;
const callCarOwner = () => console.log('Hello your car is done!');
const fixCar = (carIsBroken, callCarOwner) => {
  if (carIsBroken === true) {
    carIsBroken = false;
  }
  console.log(carIsBroken);
  // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'.
  callCarOwner();
}
fixCar(carIsBroken, callCarOwner);
```

### How do you increase a number variable?
We can do this by using the "+=" operator. 
```javascript
let count = 1;
const addOne = () => count +=1;
```
### How do you pass a function to a method?
We can pass a function to a method the same way we might pass a variable to a method. Just pass it in as an argument!
```javascript
function sayHi() {
  console.log('Hi!');
}
store.subscribe(sayHi);
```

Want to update this? [Edit this stub on GitHub.](https://github.com/freecodecamp/guides/tree/master/src/pages/certifications/front-end-libraries/redux/register-a-store-listener/index.md)
 
