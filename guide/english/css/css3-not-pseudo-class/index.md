---
title: CSS3 :not() pseudo-class
---

## CSS3 :not() pseudo-class
When it comes to styling elements, CSS has powerful ways to apply styling to particular elements. By using *pseudo-classes* we can select the elements we want and apply styles accordingly. 

The most powerful of these pseudo-classes is `:not()`. It is different from the other pseudo-classes. It's known as a **functional pseudo-class**. This is because it takes a single argument like functions in programming languages such as JavaScript do. This argument has to be a simple selector like an element type, class name, ID or another pseudo-class. Compound selectors like `label.message` or complex selectors like `div p` will not work.

It returns all elements except the one that matches the selector in the argument. For example if we use the following selector:

```css
img:not(.info) {...}
```

it will match all images except the one that has the class of **info**. 

---

Let's say we have the following HTML where we only want to select `<li>` items that *do not* contain the class of *online*:

```html
<h2> Here is a list of some streamers<h2>
<ul id="streamers">
    <li class="online"></li>
    <li class="online"></li>
    <li class="offline"></li>
    <li class="online"></li>
    <li class="offline"></li>
    <li class="online"></li>
<ul>
```
In this case,  pseudo-classes like `:first-child` and `:last-child` will not be of any help. However, it's an easy job for `:not()`.

```css
li:not(.online) {
    background-color: red;
    color: #e91e63;
}
```

Our job becomes much easier with this powerful pseudo-class. But take care when using it to exclude multiple items as you may inadvertently include more than you intend.

A tricky example would be applying styles to input elements and excluding a few of them. Let's say we want to apply styles to input elements like text, email and password but at the same time we want to avoid styling checkbox, radio and submit input elements.

Your first choice might be to do something like this:

```css
input:not([type=checkbox]), input:not([type=radio]),
input:not([type=submit]) {...}
```

You might think there would be no problem with this. Since this is how we usually apply styles to html and body, you're not wrong in thinking that this would work too.

But unfortunately, this will not work. Each selector overwrites the previous one. This is equivalent to writing:

```css
input:not([type=checkbox]) {...}
input:not([type=radio]) {...}
input:not([type=submit]) {...}
```

Instead, if you want to exclude all 3 of the input elements without overwriting them, try chaining them.

```css
input:not([type=checkbox]):not([type=radio]):not([type=submit]) {...}
```

---

There is another way to make this work and is much more readable and easy to use than the chaining method.

```css
input:not([type=checkbox], [type=radio], [type=submit]) {...}
```

Unfortunately not all major browsers fully support it yet. I tried it in [jsfiddle](https://jsfiddle.net/NAPOLEON039/2p3bygx1/3/) in Firefox and it didn't work. If it worked, it would have increased the font size of the email input too.

So I would recommend using the chaining syntax for such cases until it is widely and fully supported.
