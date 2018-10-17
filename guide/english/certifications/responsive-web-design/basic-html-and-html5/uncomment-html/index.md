---
title: Uncomment HTML
---
## Uncomment HTML

The comment topic is often a bit confusing at the start.
Look at the example:
```
<!-- This is a commented block. 
It doesn't matter how long it is, if it has <h1>HTML elements</h1> in it or if it develops
into 
few lines,
everything between the first weird series of character and the last is commented out -->
```

You can use comment in-line too: `<!-- Uh, I does not exists! -->` and here it is!

The only thing to consider is that when you see this set of char `<!--` everything from there is commented out since you find the specular `-->`; these are the opening and closing tag of an HTML element!

##### UNCOMMENT
Uncomment means take things out from the comment text: to uncomment the h3 element of the following sentence (which is all commented out):
```
<!-- <h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> -->
```

is as easy as:
```
<!-- <h1>Comment header</h1> --> <h3>Comment subtle</h3> <!-- <article>I am the text of the comment</article> -->
```

Notice how it has been added a closing comment tag (`-->`) before the h3 HTML element to match the opening comment tag at the start of the sentence and added an opening comment tag (`<!--`) after it to match the closing tag at the end: in this way you have created two inline comments, one before the h3 element and one after!. 

If you want to uncomment everything is even easier:
```
<h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article>
```
Just remove the opening and closing tag of the comment.
