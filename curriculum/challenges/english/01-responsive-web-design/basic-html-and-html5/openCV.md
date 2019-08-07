---
id: 5d383f6f2cd33e8211fad377
title: Enter in openCV
challengeType: 0
videoUrl: 
---

## Description
<section id='description'>
Welcome to freeCodeCamp's HTML coding challenges. These will walk you through web development step-by-step.
First, you'll start by building a simple web page using HTML. You can edit <code>code</code> in your <code>code editor</code>, which is embedded into this web page.
Do you see the code in your code editor that says <code>&#60;h1&#62;Hello&#60;/h1&#62;</code>? That's an HTML <code>element</code>.
Most HTML elements have an <code>opening tag</code> and a <code>closing tag</code>.
Opening tags look like this:
<code>&#60;h1&#62;</code>
Closing tags look like this:
<code>&#60;/h1&#62;</code>
The only difference between opening and closing tags is the forward slash after the opening bracket of a closing tag.
Each challenge has tests you can run at any time by clicking the "Run tests" button. When you pass all tests, you'll be prompted to submit your solution and go to the next coding challenge.
</section>

## Instructions
<section id='instructions'>
I don't know what is happaning
</section>

## Tests
<section id='tests'>

```yml
tests:
   - text: Use <code>cv.imread</code> to read image and create a matix of image
     testString: assert(code.match(/cv.imread/g),'Use <code>cv.imread</code> to read image and create a matix of image'); 
   - text: Use <code>cv.cvtColor()</code> to use filters 
     testString: assert(code.match(/cv.cvtColor/g),'Use <code>cv.cvtColor()</code> to use filters '); 
   - text: <code>COLOR_RGBA2GRAY</code> is not argument in <code>cv.cvtColor()</code>
     testString:  assert(code.match(/COLOR_RGBA2GRAY/g),'<code>COLOR_RGBA2GRAY</code> is not argument in <code>cv.cvtColor()</code>');
   - text: Use <code>cv.imshow</code> to input image
     testString: assert(code.match(/cv.imshow/g),'Use <code>cv.imshow</code> to input image'); 
  
```
</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='html-seed'>

```html

<script>
  function draw() {
    let src = cv.imread("imageSrc");
    let dst = new cv.Mat();  
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  };
</script>


<h2>OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat" />
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload='cv["onRuntimeInitialized"]=()=> { draw() }' type="text/javascript"></script>
```
</div>
</section>

## Solution
<section id='solution'>

```html

<script>
  function draw() {
    let src = cv.imread("imageSrc");
    let dst = new cv.Mat();  
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  };
</script>


<h2>OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat" />
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload='cv["onRuntimeInitialized"]=()=> { draw() }' type="text/javascript"></script>
```
</section>