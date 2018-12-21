---
title: Understanding the Differences between the freeCodeCamp and Browser Console
---
## Understanding the Differences between the freeCodeCamp and Browser Console

#### Hint:
So were exactly do you run this *console.log()* command?
In order to see the difference between the live console (terminal of freecodecamp) and our browser console we need to open up the console in our browser. 
Contemporary internet browser have a built in feature called Developer Tools which, among others contains a live console. 
In this console we can execute Javascript commands and see the result. It behaves in a same manner as the window we write code here in Freecodecamp!

***Please follow the instructions provided and copy paste the JS code provided to the example from FCC to your browser's console!***

Depending on your browser, in order to open up the Javascript console you need to:

## Chrome: 
* Click the the following: Menu->More Tools->Developer Tools->Console tab 
* or else , for keyboard shortcut: Ctrl + Shift + J (Windows/Linux)

## Firefox: 
* Click the the following: Menu->Developer->Web Console 
* or else , for keyboard shortcut: Ctrl + Shift + K (Windows/Linux)

## Safari:
* Click the the following: Safari->Preferences->Advanced
and to the option presented enable: "Show Develop menu in menu bar" 
Lastly, click: Develop->Show Error Console 

## Edge:
* Click the the following: ''...'' symbol->Developer Tools-> Console tab



#### Solution:
``` javascript
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo);

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear();


// Use console.log() to print the outputOne variable
console.log(outputOne);
```
