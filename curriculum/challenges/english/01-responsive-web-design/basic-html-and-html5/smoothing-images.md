---
id: 5d428542352db8b32553fd9d
title: Smoothing Images
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
Image blurring is achieved by convolving the image with a low-pass filter kernel. It is useful for removing noises. It actually removes high frequency content (eg: noise, edges) from the image. So edges are blurred a little bit in this operation
We use the functions: <code>cv.blur(src, dst, ksize)</code>  where <code>src</code> is an input image,<code>dst</code> - destination one and <code>ksize</code> blurring kernel size. 
</section>

## Instructions
<section id='instructions'>
You should use <code>cv.blur</code> to sumooth image. And use src, dst, kernelSize as arguments.
</section>

## Tests
<section id='tests'>

```yml
tests:
   - text:  You must have <code>cv.blur</code> in your code
     testString: assert(code.match(/cv.blur/g),'You must have <code>cv.blur</code> in your code'); 
 ```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  function runBlur() {
    let src = cv.imread('imageSrc');
    let dst = new cv.Mat();
    let kernelSize = new cv.Size(3, 3);
 
    cv.imshow('canvasOutput', dst);
    src.delete();
    dst.delete();
  }
</script>

<h2>Blur OpenCV.js</h2>
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { runBlur() }'
        type="text/javascript">
</script>
```

</div>

</section>

## Solution

<section id='solution'>

```html
<script>
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
<img id="imageSrc" src="http://bit.ly/fcc-relaxing-cat"/>
<p></p>
<canvas id="canvasOutput" ></canvas>

<script async src="https://docs.opencv.org/master/opencv.js"
        onload='cv["onRuntimeInitialized"]=()=> { runBlur() }'
        type="text/javascript">
</script>
```
</section>