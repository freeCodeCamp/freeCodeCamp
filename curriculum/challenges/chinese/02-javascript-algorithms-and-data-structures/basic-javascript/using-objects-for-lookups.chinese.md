---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
videoUrl: ''
localeTitle: 使用对象进行查找
---

## Description
<section id="description">对象可以被认为是键/值存储，就像字典一样。如果您有表格数据，则可以使用对象“查找”值而不是<code>switch</code>语句或<code>if/else</code>链。当您知道输入数据限制在特定范围内时，这非常有用。以下是简单反向字母查找的示例： <blockquote> var alpha = { <br> 1： “Z”， <br> 2： “Y”， <br> 3： “X”， <br> 4： “W”， <br> ... <br> 24： “C”， <br> 25： “B”， <br> 26： “A” <br> }; <br>阿尔法[2]; //“Y” <br>阿尔法[24]; // “C” <br><br> var value = 2; <br>阿尔法[值]。 //“Y” </blockquote></section>

## Instructions
<section id="instructions">将switch语句转换为名为<code>lookup</code>的对象。使用它来查找<code>val</code>并将关联的字符串分配给<code>result</code>变量。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>phoneticLookup(&quot;alpha&quot;)</code>应该等于<code>&quot;Adams&quot;</code>
    testString: assert(phoneticLookup("alpha") === 'Adams');
  - text: <code>phoneticLookup(&quot;bravo&quot;)</code>应该等于<code>&quot;Boston&quot;</code>
    testString: assert(phoneticLookup("bravo") === 'Boston');
  - text: <code>phoneticLookup(&quot;charlie&quot;)</code>应该等于<code>&quot;Chicago&quot;</code>
    testString: assert(phoneticLookup("charlie") === 'Chicago');
  - text: <code>phoneticLookup(&quot;delta&quot;)</code>应该等于<code>&quot;Denver&quot;</code>
    testString: assert(phoneticLookup("delta") === 'Denver');
  - text: <code>phoneticLookup(&quot;echo&quot;)</code>应该等于<code>&quot;Easy&quot;</code>
    testString: assert(phoneticLookup("echo") === 'Easy');
  - text: <code>phoneticLookup(&quot;foxtrot&quot;)</code>应该等于<code>&quot;Frank&quot;</code>
    testString: assert(phoneticLookup("foxtrot") === 'Frank');
  - text: <code>phoneticLookup(&quot;&quot;)</code>应该等于<code>undefined</code>
    testString: assert(typeof phoneticLookup("") === 'undefined');
  - text: 您不应该修改<code>return</code>语句
    testString: assert(code.match(/return\sresult;/));
  - text: 您不应该使用<code>case</code> ， <code>switch</code>或<code>if</code>语句
    testString: assert(!/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g,'')));

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
