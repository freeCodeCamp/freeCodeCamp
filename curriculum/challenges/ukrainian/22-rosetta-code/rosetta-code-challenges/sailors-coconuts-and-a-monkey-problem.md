---
id: 59da22823d04c95919d46269
title: 'Задача про моряків, кокоси та мавп'
challengeType: 1
forumTopicId: 302304
dashedName: sailors-coconuts-and-a-monkey-problem
---

# --description--

Five sailors are shipwrecked on an island and collect a large pile of coconuts during the day.

Тієї ночі перший моряк прокидається і вирішує завчасно взяти свою першу частку, тому намагається поділити купки з кокосами порівно на п’ять маленьких частин, але дізнається, що залишається один кокос, тому він кидає його мавпі і потім ховає «свій» в один із п’яти однакових за розміром куп з кокосами і зіштовхує інші чотири купи разом для того, щоб знову утворити єдину видиму купу з кокосами і йде спати.

Коротко кажучи, кожен моряк встає протягом ночі один раз та виконує ті ж самі дії: ділить купу кокосів на 5 частин, знаходить один кокос, що залишився, і віддає його мавпі, потім зіштовхніть інші чотири купи разом, щоб утворити одну купу.

Вранці ( після спантеличених та окремих вчинків кожного з п’яти моряків протягом ночі), кокоси, що залишилися були поділені на п’ять однакових куп для кожного з моряків, після чого виявилося, що вони поділені порівно серед моряків без залишку. (Зранку нічого не залишилось для мавпи.)

# --instructions--

Створіть функцію, що повертає мінімальний можливий розмір початкової купи з кокосами, зібраної протягом дня для `N` моряків. **Примітка:** звичайно, у світі розповідаються казки про збирання будь-якої кількості кокосових горіхів за день і множинні поділи купи тощо, можуть виникнути у час, який відповідає сюжетній лінії, щоб таким чином не впливати на математику.

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
