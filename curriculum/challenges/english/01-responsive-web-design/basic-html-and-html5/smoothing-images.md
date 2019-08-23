---
id: 5d428542352db8b32553fd9d
title: Smoothing Images
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
<code>cv.blur()</code> method will help you smooth picture via using convolution of the picture with a low-pass filter kernel. This is can be used for removing noises and high frequency content.
In this sample we are using next OpenCV function:
<code>cv.blur(src, dst, kernelSize)</code>
</section>

## Instructions
<section id='instructions'>
In the current sample you should use <code>cv.blur()</code> for smooth the
picture. As arguments you should use source image, destination <code>cv.Mat()</code> for resulting picture and choose kernel size for math conversion.
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
