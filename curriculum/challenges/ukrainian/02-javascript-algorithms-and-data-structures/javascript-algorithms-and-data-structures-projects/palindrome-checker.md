---
id: aaa48de84e1ecc7c742e1124
title: Перевірка паліндрому
challengeType: 5
forumTopicId: 16004
dashedName: palindrome-checker
---

# --description--

Повернути `true` якщо заданий рядок є паліндромом. В іншому випадку, повернути `false`.

A <dfn>palindrome</dfn  - це слово чи речення, що однаково пишеться в обох напрямках (зліва направо та справа наліво), незважаючи на розділові знаки, регістр та пробіли.</p> 

<p spaces-before="0">
  <strong x-id="1">Примітка:</strong> Вам потрібно буде прибрати <strong x-id="1">усі неалфавітні символи</strong> (розділові знаки, пробіли та символи) і перетворити увесь текст в однаковий регістр (нижній або верхній регістр) для перевірки паліндромів.
</p>

<p spaces-before="0">
  Ми будемо пропускати рядки з різними форматами, наприклад <code>racecar</code>, <code>RaceCar</code>, і <code>race CAR</code> у числі інших.
</p>

<p spaces-before="0">
  Ми також будемо пропускати рядки з спеціальними символами, наприклад <code>2A3*3a2</code>, <code>2A3 3a2</code>, і <code>2_A3*3#A2</code>.
</p>

<h1 spaces-before="0">
  --hints--
</h1>

<p spaces-before="0">
  <code>palindrome("eye")</code> повинен повертатися як логічне значення.
</p>

<pre><code class="js">assert(typeof palindrome('eye') === 'boolean');
</code></pre>

<p spaces-before="0">
  <code>palindrome("eye")</code> повинен повертатися як <code>true</code>.
</p>

<pre><code class="js">assert(palindrome('eye') === true);
</code></pre>

<p spaces-before="0">
  <code>palindrome("_eye")</code> повинен повертатися як <code>true</code>.
</p>

<pre><code class="js">assert(palindrome('_eye') === true);
</code></pre>

<p spaces-before="0">
  <code>palindrome("race car")</code> повинен повертатися як <code>true</code>.
</p>

<pre><code class="js">assert(palindrome('race car') === true);
</code></pre>

<p spaces-before="0">
  <code>palindrome("not a palindrome")</code> повинен повертатися як <code>false</code>.
</p>

<pre><code class="js">assert(palindrome('not a palindrome') === false);
</code></pre>

<p spaces-before="0">
  <code>palindrome("A man, a plan, a canal. Panama")</code> повинен повертатися як <code>true</code>.
</p>

<pre><code class="js">assert(palindrome('A man, a plan, a canal. Panama') === true);
</code></pre>

<p spaces-before="0">
  <code>palindrome("never odd or even")</code> повинен повертатися як <code>true</code>.
</p>

<pre><code class="js">assert(palindrome('never odd or even') === true);
</code></pre>

<p spaces-before="0">
  <code>palindrome("nope")</code> повинен повертатися як <code>false</code>.
</p>

<pre><code class="js">assert(palindrome('nope') === false);
</code></pre>

<p spaces-before="0">
  <code>palindrome("almostomla")</code> повинен повертатися як <code>false</code>.
</p>

<pre><code class="js">assert(palindrome('almostomla') === false);
</code></pre>

<p spaces-before="0">
  <code>palindrome("My age is 0, 0 si ega ym.")</code> повинен повертатися як <code>true</code>.
</p>

<pre><code class="js">assert(palindrome('My age is 0, 0 si ega ym.') === true);
</code></pre>

<p spaces-before="0">
  <code>palindrome("1 eye for of 1 eye.")</code> повинен повертатися як <code>false</code>.
</p>

<pre><code class="js">assert(palindrome('1 eye for of 1 eye.') === false);
</code></pre>

<p spaces-before="0">
  <code>palindrome("0_0 (: /-\ :) 0-0")</code> повинен повертатися як <code>true</code>.
</p>

<pre><code class="js">assert(palindrome('0_0 (: /- :) 0-0') === true);
</code></pre>

<p spaces-before="0">
  <code>palindrome("five|\_/|four")</code> повинен повертатися як <code>false</code>.
</p>

<pre><code class="js">assert(palindrome('five|_/|four') === false);
</code></pre>

<h1 spaces-before="0">
  --seed--
</h1>

<h2 spaces-before="0">
  --seed-contents--
</h2>

<pre><code class="js">function palindrome(str) {
  return true;
}

palindrome("eye");
</code></pre>

<h1 spaces-before="0">
  --solutions--
</h1>

<pre><code class="js">function palindrome(str) {
  var string = str.toLowerCase().split(/[^A-Za-z0-9]/gi).join('');
  var aux = string.split('');
  if (aux.join('') === aux.reverse().join('')){
    return true;
  }

  return false;
}
</code></pre>
