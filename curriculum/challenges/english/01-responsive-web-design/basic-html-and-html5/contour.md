---
id: 5d4299689da0aed2a684435c
title: Contour
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
   - text: You must have <code>cv.Canny</code> in your code
     testString: assert(code.match(/cv.Canny/g),'<code>cv.Canny</code> is not in initializes');
   - text: You need to use a <code>cv.findContours</code> to find contour on image
     testString: assert(code.match(/cv.findContours/g),' You need to use a <code>cv.findContours</code> to find contour on image');
   - text: You need to use a <code>cv.drawContours</code> to draw contour
     testString: assert(code.match(/cv.drawContours/g),'You need to use a <code>cv.drawContours</code> to draw contour');
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script type="text/javascript">
  function contour() {
    let mat = cv.imread("imageSrc");
    let edged = new cv.Mat();
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();

    cv.Canny(mat, edged, 100, 200);

    cv.findContours(edged, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);

    cv.drawContours(mat, contours, -1, new cv.Scalar(0, 255, 0, 255));

    cv.imshow("canvasOutput", mat);
    edged.delete();
    contours.delete();
    hierarchy.delete();
  };
</script>

<h2>OpenCV.js</h2>        
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>    
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload='cv["onRuntimeInitialized"]=()=> { contour() }' type="text/javascript">
</script>
```

</div>

</section>

## Solution
<section id='solution'>

```html
<script type="text/javascript">
  function contour() {
    let mat = cv.imread("imageSrc");
    let edged = new cv.Mat();
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();

    cv.Canny(mat, edged, 100, 200);

    cv.findContours(edged, contours, hierarchy, cv.RETR_CCOMP, cv.CHAIN_APPROX_SIMPLE);

    cv.drawContours(mat, contours, -1, new cv.Scalar(0, 255, 0, 255));

    cv.imshow("canvasOutput", mat);
    edged.delete();
    contours.delete();
    hierarchy.delete();
  };
</script>

<h2>OpenCV.js</h2>        
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>    
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" onload='cv["onRuntimeInitialized"]=()=> { contour() }' type="text/javascript">
</script>
```

</section>
