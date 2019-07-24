---
title: Avoid Inferring the Response MIME Type with helmet.noSniff()
---
# Avoid Inferring the Response MIME Type with helmet.noSniff()


---
## Hints

### Hint 1

- You want your `app` to `use` helmet's `noSniff()` method on each request.


---
## Solutionss

<details><summary>Solution 1 (Click to Show/Hide)</summary>

- In the `myApp.js` file add `app.use(helmet.noSniff());` under the fifth instructions.

**Note:** Be sure to submit the link to the **live demo** of your project.

</details>