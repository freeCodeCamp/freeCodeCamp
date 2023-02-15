---
id: 63ecc5909bf07d8217f0bc2c
videoId: LGQuIIv2RVA
title: CSS Foundations Question E
challengeType: 15
dashedName: css-foundations-question-e
---
# --description--

Okay, we went over quite a bit so far. The only thing left for now is to go over how to add all this CSS to our HTML. There are three methods to do so.

External `CSS` is the most common method you will come across, and it involves creating a separate file for the `CSS` and linking it inside of an `HTML`’s opening and closing `<head>` tags with a self-closing `<link>` element:

First, we add a self-closing `<link>` element inside of the opening and closing `<head>` tags of the HTML file. The `href` attribute is the location of the `CSS` file, either an absolute `URL` or, what you’ll be utilizing, a `URL` relative to the location of the `HTML` file. In our example above, we are assuming both files are located in the same directory. The `rel` attribute is required, and it specifies the relationship between the `HTML` file and the linked file.

Then inside of the newly created `styles.css` file, we have the selector (the `div` and `p`), followed by a pair of opening and closing curly braces, which create a “declaration block”. Finally, we place any declarations inside of the declaration block. `color: white; ` is one declaration, with `color` being the property and `white` being the value, and `background-color: black;` is another declaration.

A note on file names: `styles.css` is just what we went with as the file name here. You can name the file whatever you want as long as the file type is `.css`, though “style” or “styles” is most commonly used.

A couple of the pros to this method are:

1. It keeps our `HTML` and `CSS` separated, which results in the HTML file being smaller and making things look cleaner.
2. We only need to edit the `CSS` in one place, which is especially handy for websites with many pages that all share similar styles.

# --question--    

## --text--

Which of the following best describes the purpose of the `rel` attribute in the `<link>` element when linking an external `CSS` file to an `HTML` file?

## --answers--

It specifies the location of the `CSS` file relative to the location of the `HTML` file.

---

It specifies the relationship between the `HTML` file and the linked file.

---

It specifies the type of file being linked (e.g. "stylesheet").


## --video-solution--

2
