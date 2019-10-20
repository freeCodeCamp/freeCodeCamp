---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
forumTopicId: 301363
localeTitle: Ограничить возможные имена пользователей
---

## Description
<section id='description'>
Имена пользователей используются повсюду в Интернете. Это то, что дает пользователям уникальную идентификацию на своих любимых сайтах. Вам нужно проверить все имена пользователей в базе данных. Вот несколько простых правил, которым должны следовать пользователи при создании своего имени пользователя. 1) Единственные числа в имени пользователя должны быть в конце. В конце может быть ноль или более. 2) Буквы пользователя могут быть строчными и прописными. 3) Имена пользователей должны иметь длину не менее двух символов. Двухбуквенное имя пользователя может использовать только буквы алфавита.
</section>

## Instructions
<section id='instructions'>
Измените регулярное выражение <code>userCheck</code> чтобы он соответствовал ограничениям, перечисленным выше.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should match <code>JACK</code>
    testString: assert(userCheck.test("JACK"));
  - text: Your regex should not match <code>J</code>
    testString: assert(!userCheck.test("J"));
  - text: Your regex should match <code>Jo</code>
    testString: assert(userCheck.test("Jo"));
  - text: Your regex should match <code>Oceans11</code>
    testString: assert(userCheck.test("Oceans11"));
  - text: Your regex should match <code>RegexGuru</code>
    testString: assert(userCheck.test("RegexGuru"));
  - text: Your regex should not match <code>007</code>
    testString: assert(!userCheck.test("007"));
  - text: Your regex should not match <code>9</code>
    testString: assert(!userCheck.test("9"));
  - text: Your regex should not match <code>A1</code>
    testString: assert(!userCheck.test("A1"));
  - text: Your regex should not match <code>BadUs3rnam3</code>
    testString: assert(!userCheck.test("BadUs3rnam3"));
  - text: Your regex should match <code>Z97</code>
    testString: assert(userCheck.test("Z97"));

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
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```

</section>
