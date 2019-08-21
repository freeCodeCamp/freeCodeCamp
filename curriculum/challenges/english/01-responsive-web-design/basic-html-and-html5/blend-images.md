---
id: 5d3ffa56e5b42a8be2747034
title: Blend images
challengeType: 0
videoUrl: 
---

## Description
<section id='description'>
In this lesson we will look at cv.addWeighted. This function calculates the weighted sum of two arrays.
We use the functions: <code>cv.addWeighted(src1, alpha,	src2,	beta,	gamma, dst)</code>  where <code>src1</code> is first input array, <code>alpha</code> is a weight of the first array elements, <code>src2</code> is second input array, <code>beta</code> is a weight of the second array elements,<code>gamma</code> is a scalar added to the sum. <code>dst</code> output array that has the same size and number of channels as the input arrays.
The function addWeighted calculates the weighted sum of two arrays as follows:
dst= src1 * alpha + src2 * beta + gamma

</section>

## Instructions
<section id='instructions'>
You should use <code>cv.addWeighted()</code> to blend two images.
</section>

## Tests
<section id='tests'>

```yml
tests:
   - text: Use <code>cv.addWeighted</code> to blend two image
     testString: assert(code.match(/cv.addWeighted/g),'to blend image'); 
```
 
</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  function runSample() {
    let dst = new cv.Mat();
    let firstSrc = cv.imread("firstImageSrc");
    let secondSrc = cv.imread("secondImageSrc");
    let alpha = 0.5;
    let beta = 1; 
    let gamma = 0.0;
  
    cv.imshow("canvasOutput", dst);
    firstSrc.delete();
    secondSrc.delete();
    dst.delete();
  };
</script>

<img id="firstImageSrc" src="http://bit.ly/fcc-relaxing-cat" style="width:200px;height:200px;"/>

<img id="secondImageSrc" src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" style="width:200px;height:200px;"/>

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
<script>
  function runSample() {
    let dst = new cv.Mat();
    let firstSrc = cv.imread("firstImageSrc");
    let secondSrc = cv.imread("secondImageSrc");
    let alpha = 0.5;
    let beta = 1; 
    let gamma = 0.0;
    cv.addWeighted(firstSrc, alpha, secondSrc, beta, gamma, dst);
    cv.imshow("canvasOutput", dst);
    firstSrc.delete();
    secondSrc.delete();
    dst.delete();
  };
</script>

<img id="firstImageSrc" src="http://bit.ly/fcc-relaxing-cat" style="width:200px;height:200px;"/>

<img id="secondImageSrc" src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" style="width:200px;height:200px;"/>

<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" 
        onload= 'cv["onRuntimeInitialized"]=()=> { runSample() }' 
        type="text/javascript">
</script> 
```

</section>