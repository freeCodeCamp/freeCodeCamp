---
title: Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()
---
# Ask Browsers to Access Your Site via HTTPS Only with helmet.hsts()


---
## Hints

### Hint 1
You want your `app` to `use` helmet's `hsts()` method.

### Hint 2
Don't forget to give the methed the appropriate `maxAge` and `force` configurations.


---
## Solutionss

<details><summary>Solution 1 (Click to Show/Hide)</summary>

- In the `myApp.js` file, create a variable to use for the `maxAge` configuration by adding `var ninetyDaysInMilliseconds = 90*24*60*60*1000;` under the seventh instructions.
- Then, on the next line add `app.use(helmet.hsts({ maxAge: ninetyDaysInMilliseconds, force: true }));`.

**Note:** Be sure to submit the link to the **live demo** of your project.
</details>
