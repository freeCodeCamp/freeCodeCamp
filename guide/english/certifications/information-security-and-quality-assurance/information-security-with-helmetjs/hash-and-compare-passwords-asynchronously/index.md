---
title: Hash and Compare Passwords Asynchronously
---
## Hash and Compare Passwords Asynchronously

### Hint

- The code for this lesson goes between the `//START_ASYNC` and `//END_ASYNC` lines in your server file.
- Use bcrypt's `hash()` method to hash a `plain text password` with a specific number of `salt rounds`.
- Then use bcrypt's `compare()` method to compare a `plain text password` with the results from the hash.

### Solution

- In the `server.js` file, add:
```javascript
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  console.log(hash); 
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
      console.log(res); 
  });
});
```
between the `//START_ASYNC` and `//END_ASYNC` lines.
- Check the console to see the results from the methods.

**Note:** Be sure to submit the link to the **live demo** of your project.
