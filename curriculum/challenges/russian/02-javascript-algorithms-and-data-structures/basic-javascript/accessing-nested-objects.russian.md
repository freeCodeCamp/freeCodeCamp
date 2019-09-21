---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
videoUrl: https://scrimba.com/c/cRnRnfa
forumTopicId: 16161
localeTitle: Доступ к вложенным объектам
---

## Description
<section id='description'>
Доступ к дополнительным свойствам объектов можно получить, объединив нотацию точки или скобки. Вот вложенный объект: <blockquote> var ourStorage = { <br> &quot;стол письменный&quot;: { <br> «ящик»: «степлер» <br> }, <br> «кабинет»: { <br> &quot;верхний ящик&quot;: { <br> «folder1»: «файл», <br> &quot;folder2&quot;: &quot;секреты&quot; <br> }, <br> «нижний ящик»: «сода» <br> } <br> }; <br> ourStorage.cabinet [&quot;верхний ящик&quot;]. folder2; // &quot;секреты&quot; <br> ourStorage.desk.drawer; // &quot;степлер&quot; </blockquote>
</section>

## Instructions
<section id='instructions'>
Войдите в объект <code>myStorage</code> и назначьте содержимое свойства <code>glove box</code> переменной <code>gloveBoxContents</code> . Используйте обозначения в виде скобок для свойств с пробелом в их имени.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>gloveBoxContents</code> should equal "maps"
    testString: assert(gloveBoxContents === "maps");
  - text: Use dot and bracket notation to access <code>myStorage</code>
    testString: assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined; // Change this line

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
```

</section>
