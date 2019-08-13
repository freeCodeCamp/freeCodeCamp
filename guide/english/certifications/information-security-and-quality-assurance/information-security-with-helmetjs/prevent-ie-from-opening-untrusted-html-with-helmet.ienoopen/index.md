---
title: Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()
---
# Prevent IE from Opening Untrusted HTML with helmet.ieNoOpen()


---
## Hints

### Hint 1
You want your `app` to `use` helmet's `ieNoOpen()` method on each request.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

In the `myApp.js` file add `app.use(helmet.ieNoOpen());` under the sixth instructions.

**Note:** Be sure to submit the link to the **live demo** of your project.

</details>