---
id: 5d414905ef3f574940200d32
title: Resize  openCV
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
<code>p</code> elements are the preferred element for paragraph text on websites. <code>p</code> is short for "paragraph".
You can create a paragraph element like this:
<code>&#60;p&#62;I'm a p tag!&#60;/p&#62;</code>
</section>

## Instructions
<section id='instructions'>
Create a <code>p</code> element below your <code>h2</code> element, and give it the text "Hello Paragraph".
<strong>Note:</strong> As a convention, all HTML tags are written in lowercase, for example <code>&#60;p&#62;&#60;/p&#62;</code> and not <code>&#60;P&#62;&#60;/P&#62;</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You must have <code>cv.resize</code> in your code to resize image
    testString: assert(code.match(/cv.resize/g),'You must have <code>cv.resize</code> in your code to resize image'); 
 ```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html

<script type="text/javascript">

  function runResize(){
    let src = cv.imread("src");
    let dst = new cv.Mat();
    let dsize = new cv.Size(src.cols / 2, src.rows / 2);
    cv.resize(src, dst, dsize);
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  }
</script> 

<img id="src" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload= 'cv["onRuntimeInitialized"]=()=> { runResize() }' type="text/javascript"></script>
```

</div>

</section>

## Solution
<section id='solution'>

```html
<script type="text/javascript">

  function runResize(){
    let src = cv.imread("src");
    let dst = new cv.Mat();
    let dsize = new cv.Size(src.cols / 2, src.rows / 2);
    cv.resize(src, dst, dsize);
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  }
</script> 

<img id="src" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload= 'cv["onRuntimeInitialized"]=()=> { runResize() }' type="text/javascript"></script>
```

</section>
