---
id: 56533eb9ac21ba0edf2244b6
title: Escape Sequences in Strings
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
---

## Description
<section id='description'>
Quotes are not the only characters that can be <dfn>escaped</dfn> inside a string. There are two reasons to use escaping characters:<ol><li>To allow you to use characters you may not otherwise be able to type out, such as a carriage return.</li><li>To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.</li></ol>We learned this in the previous challenge.
<table class="table table-striped"><thead><tr><th>Code</th><th>Output</th></tr></thead><tbody><tr><td><code>\'</code></td><td>single quote</td></tr><tr><td><code>\"</code></td><td>double quote</td></tr><tr><td><code>\\</code></td><td>backslash</td></tr><tr><td><code>\n</code></td><td>newline</td></tr><tr><td><code>\r</code></td><td>carriage return</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\b</code></td><td>word boundary</td></tr><tr><td><code>\f</code></td><td>form feed</td></tr></tbody></table>
<em>Note that the backslash itself must be escaped in order to display as a backslash.</em>
</section>

## Instructions
<section id='instructions'>
Assign the following three lines of text into the single variable <code>myStr</code> using escape sequences.
<blockquote>FirstLine<br/>&nbsp;&nbsp;&nbsp;&nbsp;\SecondLine<br/>ThirdLine</blockquote>
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.
Here is the text with the escape sequences written out.
<q>FirstLine<code>newline</code><code>tab</code><code>backslash</code>SecondLine<code>newline</code>ThirdLine</q>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myStr</code> should not contain any spaces
    testString: assert(!/ /.test(myStr));
  - text: <code>myStr</code> should contain the strings <code>FirstLine</code>, <code>SecondLine</code> and <code>ThirdLine</code> (remember case sensitivity)
    testString: assert(/FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr));
  - text: <code>FirstLine</code> should be followed by the newline character <code>\n</code>
    testString: assert(/FirstLine\n/.test(myStr));
  - text: <code>myStr</code> should contain a tab character <code>\t</code> which follows a newline character
    testString: assert(/\n\t/.test(myStr));
  - text: <code>SecondLine</code> should be preceded by the backslash character <code>\</code>
    testString: assert(/\\SecondLine/.test(myStr));
  - text: There should be a newline character between <code>SecondLine</code> and <code>ThirdLine</code>
    testString: assert(/SecondLine\nThirdLine/.test(myStr));
  - text: <code>myStr</code> should only contain characters shown in the instructions
    testString: assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');    

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var myStr; // Change this line


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(){
if (myStr !== undefined){
console.log('myStr:\n' + myStr);}})();
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

</section>
