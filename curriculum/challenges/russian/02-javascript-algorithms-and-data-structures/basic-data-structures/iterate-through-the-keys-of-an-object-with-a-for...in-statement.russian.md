---
id: 587d7b7d367417b2b2512b1d
title: Iterate Through the Keys of an Object with a for...in Statement
challengeType: 1
forumTopicId: 301162
localeTitle: Итерация через ключи объекта с помощью for for ... in Statement
---

## Description
<section id='description'>
Иногда вам может потребоваться повторить все ключи внутри объекта. Для этого требуется конкретный синтаксис в JavaScript, называемый выражением <dfn>for for ... in</dfn> . Для объекта наших <code>users</code> это может выглядеть так: <blockquote> для (разрешить пользователям пользователей) { <br> console.log (пользователь); <br> }; <br><br> // logs: <br> Алан <br> Джефф <br> Сара <br> Райан </blockquote> В этом заявлении мы определили <code>user</code> переменной, и, как вы можете видеть, эта переменная была сброшена во время каждой итерации каждому из ключей объекта, когда оператор зациклился на объекте, в результате чего каждое имя пользователя печаталось на консоль. <strong>ЗАМЕТКА:</strong> <br> Объекты не поддерживают упорядочение хранимых ключей, например массивов; таким образом, позиция клавиш на объекте или относительный порядок, в котором он появляется, не имеет значения при ссылке или доступе к этому ключу.
</section>

## Instructions
<section id='instructions'>
Мы определили функцию <code>countOnline</code> ; используйте оператор <dfn>for for ...</dfn> внутри этой функции, чтобы прокручивать пользователей в объекте <code>users</code> и возвращать число пользователей, у которых свойство <code>online</code> установлено <code>true</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The function <code>countOnline</code> should use a `for in` statement to iterate through the object keys of the object passed to it.
    testString: assert(code.match(/for\s*\(\s*(var|let)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)\s*{/));
  - text: 'The function <code>countOnline</code> should return <code>1</code> when the object <code>{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }</code> is passed to it'
    testString: assert(countOnline(usersObj1) === 1);
  - text: 'The function <code>countOnline</code> should return <code>2</code> when the object <code>{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }</code> is passed to it'
    testString: assert(countOnline(usersObj2) === 2);
  - text: 'The function <code>countOnline</code> should return <code>0</code> when the object <code>{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }</code> is passed to it'
    testString: assert(countOnline(usersObj3) === 0);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countOnline(usersObj) {
  // change code below this line

  // change code above this line
}

```

</div>

### After Tests
<div id='js-teardown'>

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```

</section>
