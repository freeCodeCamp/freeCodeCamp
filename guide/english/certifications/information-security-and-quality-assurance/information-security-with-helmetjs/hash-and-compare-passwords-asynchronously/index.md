---
title: Hash and Compare Passwords Asynchronously
---
# Hash and Compare Passwords Asynchronously


---
## Hints

### Hint 1

The code for this lesson goes between the `//START_ASYNC` and `//END_ASYNC` lines in your server file.

### Hint 2
Use bcrypt's `hash()` method to hash a `plain text password` with a specific number of `salt rounds`.

### Hint 3
Then use bcrypt's `compare()` method to compare a `plain text password` with the results from the hash.


---
## Solutionss

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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
</details>
