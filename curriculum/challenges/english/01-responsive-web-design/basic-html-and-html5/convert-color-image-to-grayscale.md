---
id: 5d383f6f2cd33e8211fad377
title: Convert color image to grayscale
challengeType: 0
videoUrl: 
---

## Description
<section id='description'>
There are more than 150 color-space conversion methods available in OpenCV.js. In this lesson we will look into the most widely used one: RGBA to Gray.
The function converts an input image from one color space to another. In case of a transformation to-from RGBA color space, the order of the channels should be specified explicitly. Note that the default color format in OpenCV.js is often referred to as RGBA.
We use the function: <code>cv.cvtColor (src, dst, code) </code> where <code>src</code> is an input image,<code>dst</code> - destination one and <code>code</code> is a color conversion code.
Convert color image to grayscale is a great way to take up less memory, because  grayscale image consists of a single color. That means total size of image in bytes is 3 times less than RGB.
</section>

## Instructions
<section id='instructions'>
You should use <code>cv.cvtColor()</code> to conver an image to another color spase.
Also we need to use <code>cv.COLOR_RGBA2GRAY</code> to conver image in shades of gray.
</section>

## Tests
<section id='tests'>

```yml
tests:
   - text: Use <code>cv.imread</code> to read image and create a matix of image
     testString: assert(code.match(/cv.imread/g),'Use <code>cv.imread</code> to read image and create a matix of image'); 
   - text: Use <code>cv.cvtColor()</code> to use filters 
     testString: assert(code.match(/cv.cvtColor/g),'Use <code>cv.cvtColor()</code> to use filters '); 
   - text: <code>COLOR_RGBA2GRAY</code> is not argument in <code>cv.cvtColor()</code>
     testString:  assert(code.match(/COLOR_RGBA2GRAY/g),'<code>COLOR_RGBA2GRAY</code> is not argument in <code>cv.cvtColor()</code>');
   - text: Use <code>cv.imshow</code> to input image
     testString: assert(code.match(/cv.imshow/g),'Use <code>cv.imshow</code> to input image'); 
  
```
</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='html-seed'>

```html

<script>
  function draw() {
    let src = cv.imread("imageSrc");
    let dst = new cv.Mat();  

    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  };
</script>


<h2>OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat" />
<p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js" 
        onload='cv["onRuntimeInitialized"]=()=> { draw() }' 
        type="text/javascript">
</script>
```
</div>
</section>

## Solution
<section id='solution'>

```html

<script>
  function draw() {
    let src = cv.imread("imageSrc");
    let dst = new cv.Mat();  
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  };
</script>


<h2>OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat" />
<p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { draw() }' 
        type="text/javascript">
</script>
```
</section>