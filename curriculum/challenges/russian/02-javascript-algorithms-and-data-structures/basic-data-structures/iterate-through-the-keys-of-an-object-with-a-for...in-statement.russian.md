---
id: 587d7b7d367417b2b2512b1d
title: 'Iterate Through the Keys of an Object with a for...in Statement'
challengeType: 1
videoUrl: ''
localeTitle: Итерация через ключи объекта с помощью for for ... in Statement
---

## Description
<section id="description"> Иногда вам может потребоваться повторить все ключи внутри объекта. Для этого требуется конкретный синтаксис в JavaScript, называемый выражением <dfn>for for ... in</dfn> . Для объекта наших <code>users</code> это может выглядеть так: <blockquote> для (разрешить пользователям пользователей) { <br> console.log (пользователь); <br> }; <br><br> // logs: <br> Алан <br> Джефф <br> Сара <br> Райан </blockquote> В этом заявлении мы определили <code>user</code> переменной, и, как вы можете видеть, эта переменная была сброшена во время каждой итерации каждому из ключей объекта, когда оператор зациклился на объекте, в результате чего каждое имя пользователя печаталось на консоль. <strong>ЗАМЕТКА:</strong> <br> Объекты не поддерживают упорядочение хранимых ключей, например массивов; таким образом, позиция клавиш на объекте или относительный порядок, в котором он появляется, не имеет значения при ссылке или доступе к этому ключу. </section>

## Instructions
<section id="instructions"> Мы определили функцию <code>countOnline</code> ; используйте оператор <dfn>for for ...</dfn> внутри этой функции, чтобы прокручивать пользователей в объекте <code>users</code> и возвращать число пользователей, у которых свойство <code>online</code> установлено <code>true</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>users</code> объект содержит пользователей <code>Jeff</code> и <code>Ryan</code> с <code>online</code> настройкой <code>true</code> и пользователи <code>Alan</code> и <code>Sarah</code> с <code>online</code> настройкой на <code>false</code>
    testString: 'assert(users.Alan.online === false && users.Jeff.online === true &&  users.Sarah.online === false &&  users.Ryan.online === true, "The <code>users</code> object contains users <code>Jeff</code> and <code>Ryan</code> with <code>online</code> set to <code>true</code> and users <code>Alan</code> and <code>Sarah</code> with <code>online</code> set to <code>false</code>");'
  - text: 'Функция <code>countOnline</code> возвращает количество пользователей, у которых свойство <code>online</code> установлено <code>countOnline</code> <code>true</code>'
    testString: 'assert((function() { users.Harry = {online: true}; users.Sam = {online: true}; users.Carl = {online: true}; return countOnline(users) })() === 5, "The function <code>countOnline</code> returns the number of users with the <code>online</code> property set to <code>true</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line

  // change code above this line
}

console.log(countOnline(users));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
