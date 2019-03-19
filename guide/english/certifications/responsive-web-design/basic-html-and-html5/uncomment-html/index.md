---
title: Uncomment HTML
---
## Uncomment HTML

The comment topic is often a bit confusing in the beginning.

Let's look at an example:
```
<!-- This is a commented block. 
It doesn't matter how long it is, if it has <h1>HTML elements</h1> in it or if it develops
into a
few lines,
everything between the first less than sign followed by exclamation mark and the last greater than sign is commented out -->
```

You can use comments in-line too: `<!-- Note about html goes here so you can remember why this is here -->` and here it is!

The only thing to consider is that when you see this set of characters `<!--` everything from there is commented out until you see this `-->`; these are the opening and closing tag of an HTML element!

##### UNCOMMENT
Uncomment means to take things out from the comment text: to uncomment the h3 element of the following sentence (which is all commented out):
```
<!-- <h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> -->
```

is as easy as:
```
<!-- <h1>Comment header</h1> --> <h3>Comment subtle</h3> <!-- <article>I am the text of the comment</article> -->
```

Notice how a closing comment tag (`-->`) has been added before the h3 HTML element to match the opening comment tag at the start of the sentence? We also added an opening comment tag (`<!--`) after it to match the closing tag at the end; in this way you have created two inline comments (one before the h3 element and one after). 

If you want to uncomment everything is even easier:
```
<h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article>
```
Just remove the opening and closing tags of the comment.

Commments are very valuable because it helps you remember the purpose of a section of code. You can use a many comments as you like. In fact, comments are a sign of careful and thoughtful coding. 

