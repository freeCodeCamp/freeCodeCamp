---
id: 59e09e6d412c5939baa02d16
title: Виконайте алгоритм Маркова
challengeType: 5
forumTopicId: 302260
dashedName: execute-a-markov-algorithm
---

# --description--

Створіть інтерпретацію для сторінки [алгоритм Маркова](https://en.wikipedia.org/wiki/Markov algorithm "wp: Markov algorithm").

Граматична побудова правил:

<pre>[ruleset] ::= (([comment] | [rule]) [newline]+)*
[comment] ::= # {[будь-який символ]}
[rule] ::= [pattern] [whitespace] -> [whitespace] [.] [replacement]
[whitespace] ::= ([tab] | [space]) [[whitespace]]
</pre>

У кожному рядку по одному правилу.

Якщо `.` (крапка) стоїть перед \[replacement], тоді це кінцеве правило, у випадку котрого інтерпретатор повинен зупинити виконання.

Набір правил складається з послідовності певних норм та умовних додатків.

Правила

Використовуйте поточні вправи на початку:

**Правило 1:**

<pre># Цей файл з правилами взято з Вікіпедії:
#
<code>http://en.wikipedia.org/wiki/Markov_Algorithm</code>
A -> яблуко
B -> мішок
S -> магазин
T -> артикль "the"
магазин -> мій брат
невикористаний -> .кінцеве правило
</pre>

Зразок тексту `я купив B As у T S.` має повернути речення`я купив мішок яблук у мого брата.`

**Правило 2:**

Перевірка кінцевого правила

<pre># Трохи змінено правила з Вікіпедії
A -> яблуко
B -> сумка
S -> . магазин
T -> the
магазин -> мій брат
ніколи не використовувався -> .кінцева умова
</pre>

Зразок тексту `я купив B As у T S.`повинен згенерувати`я купив мішок яблук у цьому магазині.`

**Правило 3:**

Ці вправи призначені для правильної заміни порядку, вони можуть закрити замінні послідовності, базовані на простих регулярних виразах, якщо символів спеціальних регулярних виразів не оминули.

<pre># BNF правила синтаксичного тестування
-> яблуко
WWW -> з
Bgage -> ->.*
B -> сумка
->. -> гроші
W -> WW
S -> . магазин
T -> 
магазин -> мій брат
ніколи не використовувався -> закінчення правила
</pre>

Зразок тексту `я купив As B W свої Bgage у T S.` повинний перетворитися у `я купив мішок яблук за свої гроші у T магазині.`

**Правило 4:**

Ці тести для правильного порядку сканування правил може ловити підпрограми, що сканують в неправильному порядку. Це реалізує загальний двовимірний механізм множення. (Зверніть увагу, що вхідний вираз повинен бути в підкресленнях у цій реалізації.)

<pre>### Унарний механізм множення для тестування виконання алгоритму Маркова
### За методом Дона Феллоуза.
Одинарна додаткова система:
_+1 -> _1+
1+1 -> 11+
# Передача для конвертування від поділу множинного до звичайного
# додаток
1! -> !1,! -> !+
_! -> _
# Одинарне множення шляхом дублювання лівої сторони, часів правої сторони
1*1 -> x,@y
1x -> xX
X, -> 1,1
X1 -> 1X
_x -> _X
,x -> ,X
y1 -> 1y
y_ -> _
# Наступний етап додавання
1@1 -> x,@y
1@_ -> @_
,@_ -> !_
++ -> +
# Припинення очищення для додатку:
_1 -> 1
1+_ -> 1
_+_ ->
</pre>

Зразок тексту `_1111*11111_` повинний згенерувати наступне`11111111111111111111`

**Правило 5:**

Проста [Машина Тюрінга](http://en.wikipedia.org/wiki/Turing_machine "link: http&#x3A;//en.wikipedia.org/wiki/Turing_machine"), здійснюючи трьохстановий [busy beaver](http://en.wikipedia.org/wiki/Busy_beaver "link: http&#x3A;//en.wikipedia.org/wiki/Busy_beaver").

Стрічка складається з`0`s та`1`s, станами є `A`, `B`, `C` і `H` (для `H`alt), початкова позиція визначається написанням літери стану перед символом початку. Усі частини початкової стрічки, на яких працює машина, мають вказані у вхідних даних.

Окрім демонстрації того, що алгоритм Маркова є довершенням Тюрінга, він допоміг мені виявити проблему у реалізації C++, котра не була помічною у попередніх правилах.

<pre># Машина Тюрінга: трьохстановий Busy beaver:
#
#стан А, символ 0=> пишемо 1, переносимо праворуч, новий стан В
А0 -> 1B
# стан А, символ 1=> пишемо 1, переносимо ліворуч, новий стан C
0A1 -> C01
1A1 -> C11
# стан В, символ 0 => пишемо 1, переносимо ліворуч, новий стан А
0B0 -> A01
1B0 -> A11
# стан B, символ 1 => пишемо 1, переносимо праворуч, новий стан В
B1 -> 1B
# стан С, символ => 1 пишемо 1, переносимо ліворуч, новий стан В
0C0 -> B01
1C0 -> B11
# стан С, символ => 1 пишемо 1, переносимо ліворуч, зупиняємо
0C1 -> H01
1C1 -> H11
</pre>

Цей набір правил повинен перетворитися з `000000A000000` у `00011H1111000`

# --hints--

`markov` повинен бути функцією.

```js
assert(typeof markov === 'function');
```

`markov(["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` повинно повертати "я купив мішок яблук у мого брата".

```js
assert.deepEqual(markov(rules[0], tests[0]), outputs[0]);
```

`markov(["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As from T S.")` має повертати "я купив мішок яблук у цьому магазині".

```js
assert.deepEqual(markov(rules[1], tests[1]), outputs[1]);
```

`markov(["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],"I bought a B of As W my Bgage from T S.")` має повертати "я купив мішок яблук за мої грошу у цьому магазині".

```js
assert.deepEqual(markov(rules[2], tests[2]), outputs[2]);
```

`Марков(["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",", -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> ! ","++ -> +","_1 -> 1","1+_ -> ","_+_ -> "],"_11*11111_")` повинен повернути "11111111111111111111111111111111111111".

```js
assert.deepEqual(markov(rules[3], tests[3]), outputs[3]);
```

`markov(["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"],"")` повинен повернути "00011H1111000".

```js
assert.deepEqual(markov(rules[4], tests[4]), outputs[4]);
```

# --seed--

## --after-user-code--

```js

let rules=[["A -> apple","B -> bag","S -> shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","B -> bag","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["A -> apple","WWWW -> with","Bgage -> ->.*","B -> bag","->.* -> money","W -> WW","S -> .shop","T -> the","the shop -> my brother","a never used -> .terminating rule"],
            ["_+1 -> _1+","1+1 -> 11+","1! -> !1",",! -> !+","_! -> _","1*1 -> x,@y","1x -> xX","X, -> 1,1","X1 -> 1X","_x -> _X",",x -> ,X","y1 -> 1y","y_ -> _","1@1 -> x,@y","1@_ -> @_",",@_ -> !_","++ -> +","_1 -> 1","1+_ -> 1","_+_ -> "],
            ["A0 -> 1B","0A1 -> C01","1A1 -> C11","0B0 -> A01","1B0 -> A11","B1 -> 1B","0C0 -> B01","1C0 -> B11","0C1 -> H01","1C1 -> H11"]];
let tests=["I bought a B of As from T S.",
            "I bought a B of As from T S.",
            "I bought a B of As W my Bgage from T S.",
            "_1111*11111_",
            "000000A000000"];
let outputs=["I bought a bag of apples from my brother.",
            "I bought a bag of apples from T shop.",
            "I bought a bag of apples with my money from T shop.",
            "11111111111111111111",
            "00011H1111000"]

```


## --seed-contents--

```js
function markov(rules,test) {

}
```

# --solutions--

```js
function markov(rules,test) {
    let pattern = new RegExp("^([^#]*?)\\s+->\\s+(\\.?)(.*)");
    let origTest = test;

    let captures = [];

    rules.forEach(function(rule){
        let m = pattern.exec(rule);
        for (let j = 0; j < m.length; j++)
            m[j] = m[j + 1];
        captures.push(m);
    });

    test = origTest;
    let copy = test;
    for (let j = 0; j < captures.length; j++) {
        let c = captures[j];
        test = test.replace(c[0], c[2]);
        if (c[1]==".")
            break;
        if (test!=copy) {
            j = -1;
            copy = test;
        }
    }
    return test;
}
```
