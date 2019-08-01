---
id: 5d414905ef3f574940200d32
title: Resize  openCV
challengeType: 0
videoUrl:
---

## Description
<section id='description'>
<code>p</code> elements are the preferred element for paragraph text on websites. <code>p</code> is short for "paragraph".
You can create a paragraph element like this:
<code>&#60;p&#62;I'm a p tag!&#60;/p&#62;</code>
</section>

## Instructions
<section id='instructions'>
Create a <code>p</code> element below your <code>h2</code> element, and give it the text "Hello Paragraph".
<strong>Note:</strong> As a convention, all HTML tags are written in lowercase, for example <code>&#60;p&#62;&#60;/p&#62;</code> and not <code>&#60;P&#62;&#60;/P&#62;</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Test
    testString: assert(code.match(/\run///resive/), Test');
  - text: Your <code>p</code> element should have the text "Hello Paragraph".
    testString: assert.isTrue((/hello(\s)+paragraph/gi).test($("p").text()), 'Your <code>p</code> element should have the text "Hello Paragraph".');
  - text: Make sure your <code>p</code> element has a closing tag.
    testString: assert(code.match(foo/g) && code.match(foo/g).length === code.match(/g).length, 'Make sure your <code>p</code> element has a closing tag.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
  <h2>Blure OpenCV.js</h2>
  <p id="status">OpenCV.js is loading...</p>

  <div class="caption"> <input type="button" id="run"  onclick="runResize()" value="Run" disabled=true /></div>

  <img id="src" src="http://bit.ly/fcc-relaxing-cat"/>
  <canvas id="canvasOutput" ></canvas>

  <script async src="https://docs.opencv.org/master/opencv.js" onload="onOpenCvReady();" type="text/javascript"></script>

  <script type="text/javascript">

    function onOpenCvReady() {
        document.getElementById('status').innerHTML = 'OpenCV.js is load.';
        cv["onRuntimeInitialized"]=()=> {
            document.getElementById("run").disabled = false;
        }
    }

    function runResize(){
        let src = cv.imread("src");
        let dst = new cv.Mat();
        let dsize = new cv.Size(src.cols / 2, src.rows / 2);
        cv.resize(src, dst, dsize);
        cv.imshow('canvasOutput', dst);
        src.delete();
        dst.delete();
    }
  </script> 

```

</div>



</section>

## Solution
<section id='solution'>

```html

```

</section>
