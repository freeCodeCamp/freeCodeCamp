---
id:
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
<h2>OpenCV.js</h2>
<p id="status">OpenCV.js is loading...</p>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>
<input type="button" id="myButton" onclick="contrast()" value="Run" disabled=true/>
contrast:<input type="range" min="1.0" max="3.0" step="0.1" value="1.5" id="contrast" onchange="contrast()">
brightness:<input type="range" min="0" max="100" step="1" value="50" id="brightness" onchange="contrast()">
<canvas id="canvasOutput" ></canvas>




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

function onOpenCvReady() {
  document.getElementById("status").innerHTML = "OpenCV.js is ready.";
  cv["onRuntimeInitialized"] = () => {document.getElementById("myButton").disabled = false;}
}
</script>

<script async src="https://docs.opencv.org/master/opencv.js" onload="onOpenCvReady();" type="text/javascript">
</script>
```

</div>



</section>

## Solution
<section id='solution'>

```html

```

</section>
