---
id: 5d47f97b44cec26fdb0a6364
title: Contrast
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
   - text: Use <code>cv.convertScaleAbs</code> to change contrast and brightness
     testString: assert(code.match(/cv.convertScaleAbs()/g),' Use <code>cv.convertScaleAbs</code> to change contrast and brightness');
```
</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html

<script type="text/javascript">

  function contrast() {
    let mat = cv.imread("imageSrc");
    let dst = new cv.Mat();
    let cont = Number(document.getElementById("contrast").value);
    let brig = Number(document.getElementById("brightness").value);
    cv.convertScaleAbs(mat, dst, cont, brig);
    cv.imshow("canvasOutput", dst);
    mat.delete();
    dst.delete();
  };

</script>

<h2>OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>
contrast:<input type="range" min="1.0" max="3.0" step="0.1" value="1.5" id="contrast" onchange="contrast()">
brightness:<input type="range" min="0" max="100" step="1" value="50" id="brightness" onchange="contrast()">
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload='cv["onRuntimeInitialized"]=()=> { contrast() }'  type="text/javascript"></script>

```

</div>

</section>

## Solution
<section id='solution'>

```html

<script type="text/javascript">

  function contrast() {
    let mat = cv.imread("imageSrc");
    let dst = new cv.Mat();
    let cont = Number(document.getElementById("contrast").value);
    let brig = Number(document.getElementById("brightness").value);
    cv.convertScaleAbs(mat, dst, cont, brig);
    cv.imshow("canvasOutput", dst);
    mat.delete();
    dst.delete();
  };

</script>

<h2>OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>
contrast:<input type="range" min="1.0" max="3.0" step="0.1" value="1.5" id="contrast" onchange="contrast()">
brightness:<input type="range" min="0" max="100" step="1" value="50" id="brightness" onchange="contrast()">
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload='cv["onRuntimeInitialized"]=()=> { contrast() }'  type="text/javascript"></script>

```

</section>
