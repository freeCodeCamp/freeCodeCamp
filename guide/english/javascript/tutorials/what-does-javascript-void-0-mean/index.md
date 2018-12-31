---
title: What Does JavaScript Void 0 Mean
---
## What Does JavaScript Void 0 Mean

**JavaScript's void operator evaluates an expression and returns undefined**.

Using console to verify the same :-

![ConsoleOutput](https://github.com/srawat19/-Guide_Images/blob/master/VoidConsole.PNG?raw=true)

***Note***  :-  **void** irrespective of any value passed along , *always returns **undefined** as shown above*.
But, **void with operand 0 is preferred**. 

**Two ways of using operand 0 -> void(0) or void 0.** Either of them is fine.

#### When to use Javascript void (0) ?
When on link click, you don't want the browser to load a new page or refresh the same page( depending on the URL specified ). 
Instead,perform the JavaScript attached to that link.

#### Sample Example 1 with Javascript void (0) :

```html
<html>
<body>
<a href="javascript:void(0);alert('Hello ! I am here')">Click Me</a>
</body>
</html>
```
#### Output :
When clicked on ClickMe link,an alert pops up as below :

![Output1](https://github.com/srawat19/-Guide_Images/blob/master/voidOutput1.PNG?raw=true)

#### Sample Example 2 with Javascript void (0) :

```html
<html>
<body>
<a href="javascript:void(0)" ondblclick="alert('Hi,i didnt refresh the page')" )>Click Me</a>
</body>
</html>
```
#### Output :
When you double click the link,an alert will popup without any page refresh.


#### Sample Example 3 with Javascript void (0) :

```html
<html>
<body>
<a href="javascript:void(0);https://www.google.co.in/" 
ondblclick="alert('Hello !! You will see me and not get redirected to google.com ')">Click Me</a>
</body>
</html>
```
#### Output :
When you double click the link,an alert will popup,closing it will also not redirect to google.com.


#### Sample Example without Javascript void (0) :

```html
<html>
<body>
<a href="https://www.google.co.in/" ondblclick="alert('Hello !! You will see me and then get redirected to google.com even if not needed')">Click Me</a>
</body>
</html>
```

#### Output :
When you double click the link,an alert will popup, closing it will redirect to google.com.

#### Conclusion :
**void** operator is useful when you need to prevent any unwanted page refresh or redirection.
Rather,perform some javascript operation.

#### More Information:
1) <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void' target='_blank' rel='nofollow'>Mozilla Docs</a>
2) <a href='https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm' target='_blank' rel='nofollow'>Understanding void 0</a>


