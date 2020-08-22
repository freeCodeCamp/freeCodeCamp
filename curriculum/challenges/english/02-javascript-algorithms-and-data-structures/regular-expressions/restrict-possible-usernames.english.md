---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
isHidden: false
forumTopicId: 301363
---

## Description
<section id='description'>
Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
1) Usernames can only use alpha-numeric characters.
2) The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
3) Username letters can be lowercase and uppercase.
4) Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
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
  - text: Your regex should not match <code>c57bT3</code>
    testString: assert(!userCheck.test("c57bT3"));  

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
