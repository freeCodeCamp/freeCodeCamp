---
id: 5d428542352db8b32553fd9d
title: Blur
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
   - text: IDN
     testString: assert($("draw").length) ; 
  # - text: You test
  #   testString:  assert(imrid("imageSrc").test(draw()));
```
  <!-- testString: assert.isTrue((/hello(\s)+world/gi).test($('h1').text()), 'Your <code>h1</code> element should have the text "Hello World".'); -->
</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script async src = "https://docs.opencv.org/master/opencv.js" onload = "onOpenCvReady();" type = "text/javascript"></script>
<script type = "text/javascript">

  function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is load.';
    cv["onRuntimeInitialized"]=()=> {
       document.getElementById("run").disabled=false;
    }
  }
  function runBlur() {
    let src = cv.imread('imageSrc');
    let dst = new cv.Mat();
    let kernelSize = new cv.Size(3, 3);
    cv.blur(src, dst, kernelSize);
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  }
  </script>


  <h2>Blure OpenCV.js</h2>
  <p id="status">OpenCV.js is loading...</p>

  <div> <input type="button" id="run"  onclick="runBlur()" value="Run" disabled=true /></div>

  <img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>
  <canvas id="canvasOutput" ></canvas>
```

</div>



</section>

## Solution
<section id='solution'>

```html
 
```

</section>