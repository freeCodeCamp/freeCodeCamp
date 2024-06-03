---
id: 59da22823d04c95919d46269
title: 'Задача про моряків, кокоси та мавпочку'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

П’ять моряків розбилися на острові і назбирали багато кокосів протягом дня.

Тієї ночі перший моряк прокидається і вирішує завчасно взяти свою частину, тому намагається поділити всі кокоси порівно на п’ять маленьких купок. Моряк дізнається, що залишається один кокос, тому він кидає його мавпочці, а потім ховає «свою» частину і зіштовхує інші чотири купки разом для того, щоб знову утворити одну купку з кокосами і йде спати.

Коротко кажучи, кожен моряк встає протягом ночі один раз та робить те ж саме: ділить купку кокосів на 5 частин, дізнається про зайвий кокос і віддає його мавпочці, а потім зіштовхує інші чотири купки разом, щоб утворити одну.

Вранці (після таємних вчинків кожного з п’яти моряків протягом ночі) кокоси, що залишилися, були поділені на п’ять однакових купок для кожного з моряків, після чого виявилося, що вони поділені порівно серед моряків без залишку. (Зранку нічого не залишилось для мавпочки.)

# --instructions--

Створіть функцію, яка повертає мінімальну можливу кількість кокосів в початковій купці, зібраній протягом дня для `N` моряків. **Примітка:** звичайно, події задачі відбуваються в казковому світі, де збирання кокосів та поділ купок можуть відбуватись в час, який відповідає сюжетній лінії, щоб не впливати на розрахунки.

# --hints--

`splitCoconuts` має бути функцією.

```js
assert(typeof splitCoconuts === 'function');
```

`splitCoconuts(5)` має повернути 3121.

```js
assert(splitCoconuts(5) === 3121);
```

`splitCoconuts(6)` має повернути 233275.

```js
assert(splitCoconuts(6) === 233275);
```

`splitCoconuts(7)` має повернути 823537.

```js
assert(splitCoconuts(7) === 823537);
```

# --seed--

## --seed-contents--

```js
function splitCoconuts(intSailors) {

  return true;
}
```

# --solutions--

```js
function splitCoconuts(intSailors) {
  let intNuts = intSailors;
  let result = splitCoconutsHelper(intNuts, intSailors);
  while (!result) {
    intNuts += 1;
    result = splitCoconutsHelper(intNuts, intSailors);
  }

  return intNuts;
}

function splitCoconutsHelper(intNuts, intSailors, intDepth) {
  const nDepth = intDepth !== undefined ? intDepth : intSailors;
  const portion = Math.floor(intNuts / intSailors);
  const remain = intNuts % intSailors;

  if (portion <= 0 || remain !== (nDepth ? 1 : 0)) {
    return null;
  }

  if (nDepth) {
    return splitCoconutsHelper(
      intNuts - portion - remain, intSailors, nDepth - 1
    );
  }

  return intNuts;
}
```
