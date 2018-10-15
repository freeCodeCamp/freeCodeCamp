---
title: Debugging Node files using CLI commands
---

## Debugging Node files using CLI commands

In this tutorial you will learn how you can debug your Node.js code on the command line. Your plain JavaScript code can be easily debugged using the DevTools of a browser. For Node, you can debug your code without ever leaving your Command Line Interface (CLI).

Let's say you have a file named as `contents.js`. You would run the file using the `node` command.

```bash
node contents.js
```

This much must be already known to you since you're writing Node.js code. Now any errors that pop up must be debugged. To run the file in debug mode append the keyword `inspect` while running the file.

```bash
node inspect contents.js
```

Now this command will open your file in debug mode. From here on, you can step through your code one line at a time by pressing the **N** key on your keyboard. 

The debugger will start at the very first line. By pressing **N**, you can move the debugger to the next line. If there was an error on the first line, it would show an error instead of moving to the second line. This is very useful. If for example, there is an error on the 17th line, it will show you the error before moving forward.

There can be an error in your logic, meaning, you want a certain value to be displayed but instead it shows a different value. In that case, adding `console.log()`s might help you and with debug mode, it will become easier to identify the cause of the error.

---
Now sometimes, it happens that your source code is huge. You go into debug mode to debug your errors and you are certain that the error is from a function on line 52. But since debug mode starts at line 1, do you have no choice but to visit line 52 one by one? Absolutely not!

Simply add the keyword `debugger` before the function.

```javascript
console.log("Outside the function....everything's going smoothly");

debugger;

function doesSomething() {
	//some logic
    console.log("Something went wrong inside here!");
}
```

Now open the file again in debug mode and this time press **C** on your keyboard. 

Pressing **N** moves the debugger to the next line and pressing **C** tells the debugger to go through the entire code in one go. That is the same as running without debug mode. *But*, your code has an addition this time. You guessed it - the `debugger` keyword. Pressing **C** would normally run the code till the end, but because of adding `debugger`, it will stop right before the function starts. 

So after running your file in debug mode, pressing **C** will skip the code and stop exactly before the function at the `debugger` keyword. After that, you can start stepping through the function one line at a time till you pinpoint your error.
