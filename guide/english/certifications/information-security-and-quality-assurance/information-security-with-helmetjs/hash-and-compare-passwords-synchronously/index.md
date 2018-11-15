---
title: Hash and Compare Passwords Synchronously
---
## Hash and Compare Passwords Synchronously

### Hint

- The code for this lesson goes between the `//START_SYNC` and `//END_SYNC` lines in your server file.
- Use bcrypt's `hashSync()` method to hash a `plain text password` with a specific number of `salt rounds`, and set the results to a variable.
- Then use bcrypt's `compareSync()` method to compare a `plain text password` against the variable.

### Solution

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
