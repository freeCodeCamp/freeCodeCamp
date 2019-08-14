---
id: 5d414905ef3f574940200d32
title: Resize  openCV
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
Changing images sizes is the most common image processing procedure. OpenCV comes with a function cv.resize() for this purpose. The size of the image can be specified manually, or you can specify the scaling factor.
We use the function: <code>cv.resize(src, dst, dsize) </code> where <code>src</code> is an input image,<code>dst</code> - destination one and <code>dsize</code> is a size of output image.
</section>

## Instructions
<section id='instructions'>
You should use <code>cv.resize()</code> to resize image, and use src, dst, dsize as arguments of function.

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

  function runSample(){
    let src = cv.imread("src");
    let dst = new cv.Mat();
    let dsize = new cv.Size(src.cols / 2, src.rows / 2);

    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  }
</script> 

<img id="src" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" 
        onload= 'cv["onRuntimeInitialized"]=()=> { runSample() }' 
        type="text/javascript">
</script>
```

</div>

</section>

## Solution
<section id='solution'>

```html
<script type="text/javascript">

  function runSample(){
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

<script async src="https://docs.opencv.org/master/opencv.js" 
        onload= 'cv["onRuntimeInitialized"]=()=> { runSample() }' 
        type="text/javascript">
</script>
```

</section>
