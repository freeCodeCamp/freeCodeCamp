---
id: 5d47f97b44cec26fdb0a6364
title: Contrast
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
This function helps you lighten and change the contrast of the image that stays in one color space. 
We use the function: <code>cv.convertScaleAbs(src, dst, contrast, brightness) </code>, where <code>src</code> is an input image,<code>dst</code> is a destination one, and <code>contrast</code> is a number argument that defines the color depth, <code>brightness</code> is a number argument that enlightens image.
</section>

## Instructions
<section id='instructions'>
You should use <code>cv.convertScaleAbs()</code> to change contrast and brightness
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
