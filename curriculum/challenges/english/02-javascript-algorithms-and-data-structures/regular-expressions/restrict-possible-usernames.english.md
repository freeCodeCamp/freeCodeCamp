---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
---

## Description
<section id='description'>
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
</section>

## Instructions
<section id='instructions'>
Change the regex <code>userCheck</code> to fit the constraints listed above.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your regex should match <code>JACK</code>
    testString: assert(userCheck.test("JACK"), 'Your regex should match <code>JACK</code>');
  - text: Your regex should not match <code>J</code>
    testString: assert(!userCheck.test("J"), 'Your regex should not match <code>J</code>');
  - text: Your regex should match <code>Oceans11</code>
    testString: assert(userCheck.test("Oceans11"), 'Your regex should match <code>Oceans11</code>');
  - text: Your regex should match <code>RegexGuru</code>
    testString: assert(userCheck.test("RegexGuru"), 'Your regex should match <code>RegexGuru</code>');
  - text: Your regex should not match <code>007</code>
    testString: assert(!userCheck.test("007"), 'Your regex should not match <code>007</code>');
  - text: Your regex should not match <code>9</code>
    testString: assert(!userCheck.test("9"), 'Your regex should not match <code>9</code>');
  - text: Your regex should not match <code>A1</code>
    testString: assert(!userCheck.test("A1"), 'Your regex should not match <code>A1</code>');
  - text: Your regex should not match <code>BadUs3rnam3</code>
    testString: assert(!userCheck.test("BadUs3rnam3"), 'Your regex should not match <code>BadUs3rnam3</code>');

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
const userCheck = /^[A-Za-z]{2,}\d*$/;
```

</section>
