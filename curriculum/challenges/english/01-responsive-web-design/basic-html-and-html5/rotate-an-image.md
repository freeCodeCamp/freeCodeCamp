---
id: 5d4acfab0b988955b7e0c1e8
title: Rotate an image
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
In many cases we need to rotate image. In openCV you can do this way to matrix transformations.
We use the function: <code>cv.rotate(src, dst, rotateCode)</code> to rotate on 90 degree where <code>src</code> is an input image, <code>dst</code> is destination one and <code>rotateCode</code> is a rotation code.

</section>

## Instructions
<section id='instructions'>
You should use <code>cv.rotate()</code> to rotate image.
Also we need to use <code>cv.ROTATE_90_CLOCKWISE</code> to conver image in shades of gray.
</section>

## Tests
<section id='tests'>

```yml
tests:
   - text: Use <code>cv.rotate</code> to rotate image 
     testString: assert(code.match(/cv.rotate/g),'Use <code>cv.imread</code> to read image and create a matix of image');
   - text: Use <code>cv.ROTATE_90_CLOCKWISE</code> like argument in <code>cv.rotate</code> to rotate image on 90 degree 
     testString: assert(code.match(/cv.ROTATE_90_CLOCKWISE/g),'Use <code>cv.ROTATE_90_CLOCKWISE</code> like argument in <code>cv.rotate</code> to rotate image on 90 degree  ');

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html

<script>

  function runSample() {
    let src = cv.imread("imgSrc");
    let dst = new cv.Mat();
   
    cv.imshow("canvasOutput", dst);
    src.delete();
    dst.delete();
  };

</script>

<img id="imgSrc" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { runSample() }'
        type="text/javascript">
</script>
```
</div>

</section>

## Solution
<section id='solution'>

```html
<script type="text/javascript">

  function runSample() {
    let src = cv.imread("imgSrc");
    let dst = new cv.Mat();
    cv.rotate(src, dst, cv.ROTATE_90_CLOCKWISE);
    cv.imshow("canvasOutput", dst);
    src.delete();
    dst.delete();
  };

</script>

<img id="imgSrc" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { runSample() }'
        type="text/javascript">
</script>
```
</section>