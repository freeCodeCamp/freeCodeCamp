---
id: 598f48a36c8c40764b4e52b3
title: Prevent Object Mutation
challengeType: 1
forumTopicId: 301207
localeTitle: Предотвращение мутации объектов
---

## Description
<section id='description'>
Как видно из предыдущей задачи, одно только объявление <code>const</code> не защищает ваши данные от мутации. Чтобы ваши данные не менялись, JavaScript предоставляет функцию <code>Object.freeze</code> для предотвращения мутации данных. После того, как объект будет заморожен, вы больше не сможете добавлять, обновлять или удалять из него свойства. Любая попытка изменить объект будет отклонена без ошибок. <blockquote> пусть obj = { <br> Название: &quot;FreeCodeCamp&quot;, <br> Обзор: «Высокий» <br> }; <br> Object.freeze (OBJ); <br> obj.review = &quot;bad&quot;; // будет проигнорирован. Мутация не допускается <br> obj.newProp = &quot;Test&quot;; // будет проигнорирован. Мутация не допускается <br> console.log (OBJ); <br> // {name: &quot;FreeCodeCamp&quot;, обзор: &quot;Awesome&quot;} </blockquote>
</section>

## Instructions
<section id='instructions'>
В этой задаче вы собираетесь использовать <code>Object.freeze</code> для предотвращения изменения математических констант. Вам необходимо заморозить объект <code>MATH_CONSTANTS</code> чтобы никто не мог изменять значение свойств <code>PI</code> , добавлять или удалять.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Do not replace <code>const</code> keyword.
    testString: getUserInput => assert(getUserInput('index').match(/const/g));
  - text: <code>MATH_CONSTANTS</code> should be a constant variable (by using <code>const</code>).
    testString: getUserInput => assert(getUserInput('index').match(/const\s+MATH_CONSTANTS/g));
  - text: Do not change original <code>MATH_CONSTANTS</code>.
    testString: getUserInput => assert(getUserInput('index').match(/const\s+MATH_CONSTANTS\s+=\s+{\s+PI:\s+3.14\s+};/g));
  - text: <code>PI</code> equals <code>3.14</code>.
    testString: assert(PI === 3.14);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line


  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

```

</div>

</section>

## Solution
<section id='solution'>

```js
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
```

</section>
