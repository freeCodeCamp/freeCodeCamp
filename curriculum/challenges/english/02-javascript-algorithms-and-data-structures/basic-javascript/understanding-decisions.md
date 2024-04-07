---
id: 6612eba87bc1910774356543
videoId: Fk3tdDAWkCI
title: Understanding Decisions with if statements
challengeType: 11
dashedName: understanding-decisions
---

# --description--

Here's a fun way to understand decision statements in JavaScript:

Hey there, fellow coder! Today, let's dive into the world of decision-making in JavaScript, where your code can take different paths based on conditions, just like choosing your own adventure!

**The If Statement:** 

Think of the `if` statement as a magic door that opens only if a certain condition is met. For example, if your health is low, you might want to use a health potion. In code, it looks like this:

```javascript
   if (health <= 20) {
     useHealthPotion();
   }
   ```

**The Switch Statement:** 

Imagine you're at a crossroads with different paths to take. The `switch` statement is like choosing which path to follow based on a signpost. For example, if it's raining, you might take the umbrella path. Here's how it looks in code:
 
 ```javascript
   switch (weather) {
     case 'rainy':
       takeUmbrella();
       break;
     case 'sunny':
       wearSunscreen();
       break;
     default:
       enjoyTheWeather();
   }
   ```

**The Ternary Operator:** 

This one is like a quick yes-or-no decision. It's perfect for short, one-line choices. For instance, if you're hungry, you might decide to eat. Here's how it works:

```javascript
   let isHungry = true;
   let action = isHungry ? 'Eat' : 'Wait';
   ```

So, the next time you're coding and need your program to make decisions, think of these statements as your trusty tools to guide your code down the right path. Happy coding!

# --question--

## --text--

What will be the output if the price is 299.

```js
if(price>199){
  price = price - 90;
}
```

## --answers--

299

---

249

---

259

## --video-solution--

2
