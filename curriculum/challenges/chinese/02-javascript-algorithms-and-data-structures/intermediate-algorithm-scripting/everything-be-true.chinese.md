---
id: a10d2431ad0c6a099a4b8b52
title: Everything Be True
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 一切都是真的
---

## Description
<section id="description">检查谓词（第二个参数）是否对集合的所有元素（第一个参数）都是<dfn>真实的</dfn> 。换句话说，您将获得一个对象的数组集合。谓语<code>pre</code>将一个对象的属性，你需要返回<code>true</code> ，如果它的值是<code>truthy</code> 。否则，返回<code>false</code> 。在JavaScript中， <code>truthy</code>值是在布尔上下文中计算时转换为<code>true</code>的值。请记住，您可以通过点表示法或<code>[]</code>表示法访问对象属性。如果卡住，请记得使用<a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。尝试配对程序。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code>应该返回true。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), true);'
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;}, {&quot;user&quot;: &quot;Dipsy&quot;}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;}], &quot;sex&quot;)</code>应该返回false。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"), false);'
  - text: '<code>truthCheck([{&quot;user&quot;: &quot;Tinky-Winky&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 0}, {&quot;user&quot;: &quot;Dipsy&quot;, &quot;sex&quot;: &quot;male&quot;, &quot;age&quot;: 3}, {&quot;user&quot;: &quot;Laa-Laa&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 5}, {&quot;user&quot;: &quot;Po&quot;, &quot;sex&quot;: &quot;female&quot;, &quot;age&quot;: 4}], &quot;age&quot;)</code>应该返回false。'
    testString: 'assert.strictEqual(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 2}, {"user": "Dipsy", "sex": "male", "age": 0}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"), false);'
  - text: '<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: null}], &quot;onBoat&quot;)</code>应该返回false'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"), false);'
  - text: '<code>truthCheck([{&quot;name&quot;: &quot;Pete&quot;, &quot;onBoat&quot;: true}, {&quot;name&quot;: &quot;Repeat&quot;, &quot;onBoat&quot;: true, &quot;alias&quot;: &quot;Repete&quot;}, {&quot;name&quot;: &quot;FastFoward&quot;, &quot;onBoat&quot;: true}], &quot;onBoat&quot;)</code>应该返回true'
    testString: 'assert.strictEqual(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"), true);'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;yes&quot;}], &quot;single&quot;)</code>应该返回true'
    testString: 'assert.strictEqual(truthCheck([{"single": "yes"}], "single"), true);'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;&quot;}, {&quot;single&quot;: &quot;double&quot;}], &quot;single&quot;)</code>应该返回false'
    testString: 'assert.strictEqual(truthCheck([{"single": ""}, {"single": "double"}], "single"), false);'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: undefined}], &quot;single&quot;)</code>应返回false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": undefined}], "single"), false);'
  - text: '<code>truthCheck([{&quot;single&quot;: &quot;double&quot;}, {&quot;single&quot;: NaN}], &quot;single&quot;)</code>应返回false'
    testString: 'assert.strictEqual(truthCheck([{"single": "double"}, {"single": NaN}], "single"), false);'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function truthCheck(collection, pre) {
  // Is everyone being true?
  return pre;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
