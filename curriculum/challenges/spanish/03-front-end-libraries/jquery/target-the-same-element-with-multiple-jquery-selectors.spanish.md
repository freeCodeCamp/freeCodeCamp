---
id: bad87fee1348bd9aed908626
title: Target the Same Element with Multiple jQuery Selectors
localeTitle: Apunta el mismo elemento con múltiples selectores jQuery
required:
  - link: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.css'
challengeType: 6
---

## Description
<section id='description'> 
Ahora conoce tres formas de apuntar elementos: por tipo: <code>$(&quot;button&quot;)</code> , por clase: <code>$(&quot;.btn&quot;)</code> , y por id <code>$(&quot;#target1&quot;)</code> . 
Aunque es posible agregar varias clases en una sola llamada <code>.addClass()</code> , las agregaremos al mismo elemento de <em>tres maneras diferentes</em> . 
Usando <code>.addClass()</code> , agregue solo una clase a la vez al mismo elemento, de tres maneras diferentes: 
Agregue la clase <code>animated</code> a todos los elementos con el <code>button</code> tipo. 
Agregue la clase <code>shake</code> a todos los botones con la clase <code>.btn</code> . 
Agregue la clase <code>btn-primary</code> al botón con id <code>#target1</code> . 
<strong>Nota</strong> <br> Solo debes apuntar a un elemento y agregar solo una clase a la vez. En total, sus tres selectores individuales terminarán agregando las tres clases <code>shake</code> , <code>animated</code> y <code>btn-primary</code> a <code>#target1</code> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: &#39;Use el selector <code>$(&quot;button&quot;)</code> .&#39;
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?button\s*?(?:"|")/gi), "Use the <code><section id='tests'>

```yml
tests:
  - text: 'Use the <code>$&#40"button"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?button\s*?(?:"|")/gi), "Use the <code>$&#40"button"&#41</code> selector.");'
  - text: 'Use the <code>$&#40".btn"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?\.btn\s*?(?:"|")/gi), "Use the <code>$&#40".btn"&#41</code> selector.");'
  - text: 'Use the <code>$&#40"#target1"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?#target1\s*?(?:"|")/gi), "Use the <code>$&#40"#target1"&#41</code> selector.");'
  - text: Only add one class with each of your three selectors.
    testString: 'assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?("|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2, "Only add one class with each of your three selectors.");'
  - text: 'Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.'
    testString: 'assert($("#target1").hasClass("animated") && $("#target1").hasClass("shake") && $("#target1").hasClass("btn-primary"), "Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.");'
  - text: Only use jQuery to add these classes to the element.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>#40"button"&#41</code> selector.");'
  - text: &#39;Use el selector <code>$(&quot;.btn&quot;)</code> .&#39;
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?\.btn\s*?(?:"|")/gi), "Use the <code><section id='tests'>

```yml
tests:
  - text: 'Use the <code>$&#40"button"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?button\s*?(?:"|")/gi), "Use the <code>$&#40"button"&#41</code> selector.");'
  - text: 'Use the <code>$&#40".btn"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?\.btn\s*?(?:"|")/gi), "Use the <code>$&#40".btn"&#41</code> selector.");'
  - text: 'Use the <code>$&#40"#target1"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?#target1\s*?(?:"|")/gi), "Use the <code>$&#40"#target1"&#41</code> selector.");'
  - text: Only add one class with each of your three selectors.
    testString: 'assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?("|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2, "Only add one class with each of your three selectors.");'
  - text: 'Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.'
    testString: 'assert($("#target1").hasClass("animated") && $("#target1").hasClass("shake") && $("#target1").hasClass("btn-primary"), "Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.");'
  - text: Only use jQuery to add these classes to the element.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>#40".btn"&#41</code> selector.");'
  - text: &#39;Use el selector <code>$(&quot;#target1&quot;)</code> .&#39;
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?#target1\s*?(?:"|")/gi), "Use the <code><section id='tests'>

```yml
tests:
  - text: 'Use the <code>$&#40"button"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?button\s*?(?:"|")/gi), "Use the <code>$&#40"button"&#41</code> selector.");'
  - text: 'Use the <code>$&#40".btn"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?\.btn\s*?(?:"|")/gi), "Use the <code>$&#40".btn"&#41</code> selector.");'
  - text: 'Use the <code>$&#40"#target1"&#41</code> selector.'
    testString: 'assert(code.match(/\$\s*?\(\s*?(?:"|")\s*?#target1\s*?(?:"|")/gi), "Use the <code>$&#40"#target1"&#41</code> selector.");'
  - text: Only add one class with each of your three selectors.
    testString: 'assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?("|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2, "Only add one class with each of your three selectors.");'
  - text: 'Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.'
    testString: 'assert($("#target1").hasClass("animated") && $("#target1").hasClass("shake") && $("#target1").hasClass("btn-primary"), "Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.");'
  - text: Only use jQuery to add these classes to the element.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>#40"#target1"&#41</code> selector.");'
  - text: Solo agrega una clase con cada uno de tus tres selectores.
    testString: 'assert(code.match(/addClass/g) && code.match(/addClass\s*?\(\s*?("|")\s*?[\w-]+\s*?\1\s*?\)/g).length > 2, "Only add one class with each of your three selectors.");'
  - text: &#39;Su elemento <code>#target1</code> debería tener las clases <code>animated</code> , <code>shake</code> y <code>btn-primary</code> &#39;.
    testString: 'assert($("#target1").hasClass("animated") && $("#target1").hasClass("shake") && $("#target1").hasClass("btn-primary"), "Your <code>#target1</code> element should have the classes <code>animated</code>&#130; <code>shake</code> and <code>btn-primary</code>.");'
  - text: Solo use jQuery para agregar estas clases al elemento.
    testString: 'assert(!code.match(/class.*animated/g), "Only use jQuery to add these classes to the element.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<script>
  $(document).ready(function() {

  });
</script>

<!-- Only change code above this line. -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
