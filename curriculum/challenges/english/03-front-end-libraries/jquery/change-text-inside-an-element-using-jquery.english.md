---
id: 564944c91be2204b269d51e3
title: Change Text Inside an Element Using jQuery
challengeType: 6
isHidden: false
forumTopicId: 16773
---

## Description
<section id='description'>
Using jQuery, you can change the text between the start and end tags of an element. You can even change HTML markup.
jQuery has a function called <code>.html()</code> that lets you add HTML tags and text within an element. Any content previously within the element will be completely replaced with the content you provide using this function.
Here's how you would rewrite and emphasize the text of our heading:
<code>$("h3").html("&#60;em&#62;jQuery Playground&#60;/em&#62;");</code>
jQuery also has a similar function called <code>.text()</code> that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.
Change the button with id <code>target4</code> by emphasizing its text.
<a href="https://www.freecodecamp.org/news/html-elements-explained-what-are-html-tags/#em-element" target="_blank">View our news article for &#60;em&#62;</a> to learn the difference between <code>&#60;i&#62;</code> and <code>&#60;em&#62</code> and their uses.
Note that while the <code>&#60;i&#62;</code> tag has traditionally been used to emphasize text, it has since been adopted for use as a tag for icons. The <code>&#60;em&#62;</code> tag is now widely accepted as the tag for emphasis. Either will work for this challenge.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should emphasize the text in your <code>target4</code> button by adding HTML tags.
    testString: assert.isTrue((/<em>|<i>\s*#target4\s*<\/em>|<\/i>/gi).test($("#target4").html()));
  - text: The text should otherwise remain unchanged.
    testString: assert($("#target4") && $("#target4").text().trim() === '#target4');
  - text: You should not alter any other text.
    testString: assert.isFalse((/<em>|<i>/gi).test($("h3").html()));
  - text: You should be using <code>.html()</code> and not <code>.text()</code>.
    testString: assert(code.match(/\.html\(/g));
  - text: You should select <code>button id="target4"</code> with jQuery.
    testString: assert(code.match(/\$\(\s*?(\"|\')#target4(\"|\')\s*?\)\.html\(/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target4").html('<em>#target4</em>');
  });
</script>

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

</section>
