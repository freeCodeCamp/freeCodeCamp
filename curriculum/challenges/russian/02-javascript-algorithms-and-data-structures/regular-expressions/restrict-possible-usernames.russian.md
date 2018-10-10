---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
videoUrl: ''
localeTitle: Ограничить возможные имена пользователей
---

## Description
<section id="description"> Имена пользователей используются повсюду в Интернете. Это то, что дает пользователям уникальную идентификацию на своих любимых сайтах. Вам нужно проверить все имена пользователей в базе данных. Вот несколько простых правил, которым должны следовать пользователи при создании своего имени пользователя. 1) Единственные числа в имени пользователя должны быть в конце. В конце может быть ноль или более. 2) Буквы пользователя могут быть строчными и прописными. 3) Имена пользователей должны иметь длину не менее двух символов. Двухбуквенное имя пользователя может использовать только буквы алфавита. </section>

## Instructions
<section id="instructions"> Измените регулярное выражение <code>userCheck</code> чтобы он соответствовал ограничениям, перечисленным выше. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Ваше регулярное выражение должно соответствовать <code>JACK</code>
    testString: 'assert(userCheck.test("JACK"), "Your regex should match <code>JACK</code>");'
  - text: Ваше регулярное выражение не должно совпадать с <code>J</code>
    testString: 'assert(!userCheck.test("J"), "Your regex should not match <code>J</code>");'
  - text: ''
    testString: 'assert(userCheck.test("Oceans11"), "Your regex should match <code>Oceans11</code>");'
  - text: Ваше регулярное выражение должно соответствовать <code>RegexGuru</code>
    testString: 'assert(userCheck.test("RegexGuru"), "Your regex should match <code>RegexGuru</code>");'
  - text: ''
    testString: 'assert(!userCheck.test("007"), "Your regex should not match <code>007</code>");'
  - text: Ваше регулярное выражение не должно совпадать <code>9</code>
    testString: 'assert(!userCheck.test("9"), "Your regex should not match <code>9</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
