---
title: A Guide to Class and Id Selectors
---
## A Guide to Class and Id Selectors

This is an article based on CSS selectors. CSS is used for styling HTML elements and the webpage in general. For CSS to style an element on the page, it needs to select that element first.

This is like selecting a file on your computer before deleting it. You need to tell your machine exactly which file you want to modify or delete. Similarly, you need to tell CSS which element to target when applying different styles and colors on it.

Although CSS can select elements very well, you can instruct it to select very specific elements. By the end of this article, you will walk away with the knowledge to select and style specific elements.

### What is class and ID?

Let's say you have 5 paragraph elements in your HTML code.

```html
<p> First paragraph </p>
<p> Second paragraph </p>
<p> Third paragraph </p>
<p> Fourth paragraph </p>
<p> Fifth paragraph </p>
```

You can give each of them a font color of red using CSS.

```css
p {
	color: red;
}
```

That's pretty easy! But what if you only want to give the second paragraph a font color? That's a bit difficult right now. Since we have no way of identifying each paragraph element individually, we can't select them separately.

*Class and ID to the rescue*

Class and ID act like identity cards for HTML elements. Both help in separating one element from another but are slightly different.

---

Let's say you meet a guy from some club. When you ask that person for their club identity card, they show one with their club's name on it. Now all members from the same club will have the same identity card right?

If there are 3 clubs - A, B and C - then all members of club A will have the same identity cards. All members of club B will also have the same ones, although they will be different from club A and club C's identity cards. That's how you know who is from which club.

That's how `class` works. You can give a bunch of elements a class and they will be in a single club. Just like a new rule in the club has to be followed by all club members, similarly, all new style rules are applied to elements in the same club.

```html
<p class="bike"> Hayabusa </p>
<p class="car"> Chevrolet </p>
<p class="bike"> Hayley-Davidson </p>
<p class="car"> Lamborghini </p>
```

Here we have 4 paragraphs. If you look at the class names, there are 2 "clubs". Now we can select the club (or group) we want and apply the styles we want on them.

```css
.bike {
	color: blue;
}
```

You can select a group instead of a particular element by prepending the group name with a period `.` and apply the styles you want to that group. In this example, the font color of blue is only applied to the paragraphs that have the class of `bike`. 

---

If you understood what `class` is, then ID will be easy to understand.

From our previous example, a club identity card represents the club and all the members have it. However if you ask for their individual identity proof, a person will show a different identity card that only they have. Everyone has a different one and can be used to identify them individually.

This is what ID is. Just like personal identity cards, only one HTML element can have a particular `id`. No two elements have the same `id`. 

```html
<p id="car"> Ferrari </p>
<p id="car"> Ford </p>
<!-- This is incorrect-->

<p id="harley"> Harley-Davidson </p>
<p id="hayabusa"> Hayabusa </p>
<!--This is correct since an id is only used once.-->
```

An `id` can also be similar to a private key for your locker cabinet in the club. Everyone in the club has the same club identity card, but everyone's locker key is different and unique.

Similar to the `class` example, you can select a particular element and apply styles to it by prepending the id name with `#`.

```css
#hayabusa {
	font-style: bold;
}
```

---

It's easy to remember - use `.` before the name for *class* and a `#` before the name for *id*. 

Both have their own uses.

>class is used when styles are to be applied on multiple elements and id is used when styles are to be applied on a particular element.

Keep this in mind when you use class and id to select and style particular elements.

With this, you have added more tools to your toolbox for styling elements on a webpage.


