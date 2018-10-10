---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
videoUrl: ''
localeTitle: Restringir nomes de usuário possíveis
---

## Description
<section id="description"> Os nomes de usuários são usados ​​em toda a internet. Eles são o que dão aos usuários uma identidade única em seus sites favoritos. Você precisa verificar todos os nomes de usuários em um banco de dados. Aqui estão algumas regras simples que os usuários devem seguir ao criar seu nome de usuário. 1) Os únicos números no nome de usuário devem estar no final. Pode haver zero ou mais deles no final. 2) As letras do nome de usuário podem ser minúsculas e maiúsculas. 3) Nomes de usuários devem ter pelo menos dois caracteres. Um nome de usuário de duas letras só pode usar caracteres alfabéticos. </section>

## Instructions
<section id="instructions"> Altere o regex <code>userCheck</code> para ajustar as restrições listadas acima. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu regex deve corresponder ao <code>JACK</code>
    testString: 'assert(userCheck.test("JACK"), "Your regex should match <code>JACK</code>");'
  - text: Seu regex não deve corresponder a <code>J</code>
    testString: 'assert(!userCheck.test("J"), "Your regex should not match <code>J</code>");'
  - text: Seu regex deve corresponder a <code>Oceans11</code>
    testString: 'assert(userCheck.test("Oceans11"), "Your regex should match <code>Oceans11</code>");'
  - text: Seu regex deve corresponder ao <code>RegexGuru</code>
    testString: 'assert(userCheck.test("RegexGuru"), "Your regex should match <code>RegexGuru</code>");'
  - text: Seu regex não deve corresponder a <code>007</code>
    testString: 'assert(!userCheck.test("007"), "Your regex should not match <code>007</code>");'
  - text: Seu regex não deve corresponder a <code>9</code>
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
