---
id: 5d47f97b44cec26fdb0a6364
title: Modify contrast and brightness
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
<code>cv.convertScaleAbs()</code> method will help you change contrast and brightness of the picture in the current color space.
</section>

## Instructions
<section id='instructions'>
In the current sample we using <code>cv.convertScaleAbs(src, dst, contrast, brightness)</code> function.
As arguments we using source picture(src), <code>cv.Mat()</code> for result(dst), contrast(value vary from 1.0 to 3.0) and brightness(value vary from 0 to 100).
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

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { contrast() }'  
        type="text/javascript">
</script>

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

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { contrast() }'  
        type="text/javascript">
</script>

```

</section>
