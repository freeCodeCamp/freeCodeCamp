---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
videoUrl: ''
localeTitle: Использование объектов для поиска
---

## Description
<section id="description"> Объекты можно рассматривать как хранилище ключей / значений, например словарь. Если у вас есть табличные данные, вы можете использовать объект для «поиска», а не для оператора <code>switch</code> или цепочки <code>if/else</code> . Это наиболее полезно, когда вы знаете, что ваши входные данные ограничены определенным диапазоном. Вот пример простого обратного алфавитного поиска: <blockquote> var alpha = { <br> 1: &quot;Z&quot;, <br> 2: &quot;Y&quot;, <br> 3: &quot;X&quot;, <br> 4: &quot;W&quot;, <br> ... <br> 24: &quot;С&quot;, <br> 25: &quot;В&quot;, <br> 26: &quot;A&quot; <br> }; <br> альфа [2]; // &quot;Y&quot; <br> альфа [24]; // &quot;C&quot; <br><br> var value = 2; <br> альфа [значение]; // &quot;Y&quot; </blockquote></section>

## Instructions
<section id="instructions"> Преобразуйте оператор switch в объект под названием <code>lookup</code> . Используйте его, чтобы посмотреть <code>val</code> и назначить связанную строку переменной <code>result</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>phoneticLookup(&quot;alpha&quot;)</code> должен равняться <code>&quot;Adams&quot;</code>
    testString: 'assert(phoneticLookup("alpha") === "Adams", "<code>phoneticLookup("alpha")</code> should equal <code>"Adams"</code>");'
  - text: <code>phoneticLookup(&quot;bravo&quot;)</code> должен равняться <code>&quot;Boston&quot;</code>
    testString: 'assert(phoneticLookup("bravo") === "Boston", "<code>phoneticLookup("bravo")</code> should equal <code>"Boston"</code>");'
  - text: <code>phoneticLookup(&quot;charlie&quot;)</code> должен равняться <code>&quot;Chicago&quot;</code>
    testString: 'assert(phoneticLookup("charlie") === "Chicago", "<code>phoneticLookup("charlie")</code> should equal <code>"Chicago"</code>");'
  - text: <code>phoneticLookup(&quot;delta&quot;)</code> должен равняться <code>&quot;Denver&quot;</code>
    testString: 'assert(phoneticLookup("delta") === "Denver", "<code>phoneticLookup("delta")</code> should equal <code>"Denver"</code>");'
  - text: <code>phoneticLookup(&quot;echo&quot;)</code> должен равняться <code>&quot;Easy&quot;</code>
    testString: 'assert(phoneticLookup("echo") === "Easy", "<code>phoneticLookup("echo")</code> should equal <code>"Easy"</code>");'
  - text: <code>phoneticLookup(&quot;foxtrot&quot;)</code> должен равняться <code>&quot;Frank&quot;</code>
    testString: 'assert(phoneticLookup("foxtrot") === "Frank", "<code>phoneticLookup("foxtrot")</code> should equal <code>"Frank"</code>");'
  - text: <code>phoneticLookup(&quot;&quot;)</code> должно быть равно <code>undefined</code>
    testString: 'assert(typeof phoneticLookup("") === "undefined", "<code>phoneticLookup("")</code> should equal <code>undefined</code>");'
  - text: Вы не должны изменять оператор <code>return</code>
    testString: 'assert(code.match(/return\sresult;/), "You should not modify the <code>return</code> statement");'
  - text: 'Вы не должны использовать <code>case</code> , <code>switch</code> или <code>if</code>'
    testString: 'assert(!/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g,"")), "You should not use <code>case</code>, <code>switch</code>, or <code>if</code> statements"); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
