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
To pass the test on this challenge, change your <code>h1</code> element's text to say "Hello World".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h1</code> element should have the text "Hello World".
    testString: assert.isTrue((/hello(\s)+world/gi).test($('h1').text()), 'Your <code>h1</code> element should have the text "Hello World".');
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
 <h2>Gray && HSV filter in OpenCV.js</h2>
  <p id="status">OpenCV.js is loading...</p>
  <div>
      <img id="imageSrc" src="https://bit.ly/fcc-relaxing-cat"/>
      <div class="caption"> <input type="button" id="Run"  onclick="runDetectAndColor()" value="Run" /></div>
      <div class="caption">Gray:</div>
      <canvas id="canvasOutput" ></canvas> 
  </div>

  <script async src="https://docs.opencv.org/master/opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>
  <script type="text/javascript">

   function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is load.';

    cv["onRuntimeInitialized"]=()=>{
      let mat = cv.imread("imageSrc");
      let dst = new cv.Mat();  
      cv.cvtColor(mat, dst, cv.COLOR_RGBA2GRAY);
      cv.imshow('canvasOutput', dst);
      mat.delete();
      dst.delete();
    }
   }
  </script>
```

</div>



</section>

## Solution
<section id='solution'>

```html
 
```

</section>