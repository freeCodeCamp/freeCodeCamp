---
title: Hash and Compare Passwords Synchronously
---
# Hash and Compare Passwords Synchronously


---
## Hints

### Hint 1

The code for this lesson goes between the `//START_SYNC` and `//END_SYNC` lines in your server file.

### Hint 2
Use bcrypt's `hashSync()` method to hash a `plain text password` with a specific number of `salt rounds`, and set the results to a variable.

### Hint 3
Then use bcrypt's `compareSync()` method to compare a `plain text password` against the variable.


---
## Solutionss

<details><summary>Solution 1 (Click to Show/Hide)</summary>

- In the `server.js` file, add:
```javascript
let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash);
let result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result);
```
between the `//START_SYNC` and `//END_SYNC` lines.
- Check the console to see the results from the methods.

**Note:** Be sure to submit the link to the **live demo** of your project.
</details>
