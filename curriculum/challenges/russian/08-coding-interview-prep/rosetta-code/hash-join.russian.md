---
title: Hash join
id: 5956795bc9e2c415eb244de1
challengeType: 5
videoUrl: ''
localeTitle: Присоединиться
---

## Description
<section id="description"><p> <a href="https://en.wikipedia.org/wiki/Join_(SQL)#Inner_join" title="wp: Join_ (SQL) #Inner_join">Внутреннее соединение</a> - это операция, которая объединяет две таблицы данных в одну таблицу на основе совпадающих значений столбцов. Простейшим способом реализации этой операции является алгоритм <a href="https://en.wikipedia.org/wiki/Nested loop join" title="wp: Соединение вложенного цикла">объединения вложенных циклов</a> , но более масштабируемой альтернативой является алгоритм <a href="https://en.wikipedia.org/wiki/hash join" title="wp: hash join">хеш-соединения</a> . </p><p> Внедрите алгоритм «хеш-соединения» и продемонстрируйте, что он проходит тестовый сценарий, указанный ниже. </p><p> Вы должны представлять таблицы как структуры данных, которые кажутся естественными на вашем языке программирования. </p><p> Алгоритм «хеш-соединения» состоит из двух шагов: </p> Хэш-фаза. Создайте <a href="https://en.wikipedia.org/wiki/Multimap" title="wp: Multimap">мультимап</a> из одной из двух таблиц, сопоставляя их со всеми значениями столбца объединения со всеми строками, которые его содержат. Мультимап должен поддерживать хэш-ориентированный поиск, который масштабируется лучше, чем простой линейный поиск, потому что в этом весь смысл этого алгоритма. В идеале мы должны создать мультимап для меньшей таблицы, таким образом минимизируя время его создания и размер памяти. Фаза присоединения. Сканируйте другую таблицу и найдите соответствующие строки, просмотрев созданный ранее мультимап. <p> В псевдокоде алгоритм может быть выражен следующим образом: </p><pre> пусть A = первая входная таблица (или, в идеале, большая)
пусть B = вторая входная таблица (или, в идеале, меньшая)
пусть j <sub>A</sub> = идентификатор столбца соединения таблицы A
пусть j <sub>B</sub> = идентификатор столбца соединения таблицы B
пусть M <sub>B</sub> = мультимап для отображения из отдельных значений в несколько строк таблицы B (начинается пустым)
пусть C = выходная таблица (начинается пустая)
для каждой строки b в таблице B:
  место b в multimap M <sub>B</sub> под клавишей b (j <sub>B</sub> )
для каждой строки a в таблице A:
  для каждой строки b в мультимадре M <sub>B</sub> под ключом a (j <sub>A</sub> ):
    пусть c = конкатенация строки a и строки b
    поместите строку c в таблицу C <p></p>
</pre> Прецедент <p> вход </p><table><tbody><tr><td style="padding: 4px; margin: 5px;"><table style="border:none; border-collapse:collapse;"><tbody><tr><td style="border:none"> <i>A =</i> </td><td style="border:none"><table><tbody><tr><th style="padding: 4px; margin: 5px;"> Возраст </th><th style="padding: 4px; margin: 5px;"> имя </th></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Иона </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Алан </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> слава </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Popeye </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Алан </td></tr></tbody></table></td><td style="border:none; padding-left:1.5em;" rowspan="2"></td><td style="border:none"> <i>B =</i> </td><td style="border:none"><table><tbody><tr><th style="padding: 4px; margin: 5px;"> символ </th><th style="padding: 4px; margin: 5px;"> Немезида </th></tr><tr><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Киты </td></tr><tr><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Пауки </td></tr><tr><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> привидения </td></tr><tr><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Zombies </td></tr><tr><td style="padding: 4px; margin: 5px;"> слава </td><td style="padding: 4px; margin: 5px;"> Buffy </td></tr></tbody></table></td></tr><tr><td style="border:none"> <i>j <sub>A</sub> =</i> </td><td style="border:none"> <i><code>Name</code> (т.е. столбец 1)</i> </td><td style="border:none"> <i>j <sub>B</sub> =</i> </td><td style="border:none"> <i><code>Character</code> (т.е. столбец 0)</i> </td></tr></tbody></table></td><td style="padding: 4px; margin: 5px;"></td></tr></tbody></table><p> Вывод </p><table><tbody><tr><th style="padding: 4px; margin: 5px;"> A.Age </th><th style="padding: 4px; margin: 5px;"> Имя </th><th style="padding: 4px; margin: 5px;"> B.Character </th><th style="padding: 4px; margin: 5px;"> B.Nemesis </th></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Киты </td></tr><tr><td style="padding: 4px; margin: 5px;"> 27 </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Иона </td><td style="padding: 4px; margin: 5px;"> Пауки </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> привидения </td></tr><tr><td style="padding: 4px; margin: 5px;"> 18 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Zombies </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> слава </td><td style="padding: 4px; margin: 5px;"> слава </td><td style="padding: 4px; margin: 5px;"> Buffy </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> привидения </td></tr><tr><td style="padding: 4px; margin: 5px;"> 28 </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Алан </td><td style="padding: 4px; margin: 5px;"> Zombies </td></tr></tbody></table><p></p><p></p><p> Порядок строк в выходной таблице не имеет значения. </p><p> Если вы используете численные индексированные массивы для представления строк таблицы (вместо обращения к столбцам по имени), вы можете представить выходные строки в форме <code style="white-space:nowrap">[[27, &quot;Jonah&quot;], [&quot;Jonah&quot;, &quot;Whales&quot;]]</code> , </p><hr></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hashJoin</code> - это функция.
    testString: 'assert(typeof hashJoin === "function", "<code>hashJoin</code> is a function.");'
  - text: '<code>hashJoin([{ age: 27, name: &quot;Jonah&quot; }, { age: 18, name: &quot;Alan&quot; }, { age: 28, name: &quot;Glory&quot; }, { age: 18, name: &quot;Popeye&quot; }, { age: 28, name: &quot;Alan&quot; }], [{ character: &quot;Jonah&quot;, nemesis: &quot;Whales&quot; }, { character: &quot;Jonah&quot;, nemesis: &quot;Spiders&quot; }, { character: &quot;Alan&quot;, nemesis: &quot;Ghosts&quot; }, { character:&quot;Alan&quot;, nemesis: &quot;Zombies&quot; }, { character: &quot;Glory&quot;, nemesis: &quot;Buffy&quot; }, { character: &quot;Bob&quot;, nemesis: &quot;foo&quot; }])</code> должен возвращать <code>[{&quot;A_age&quot;: 27,&quot;A_name&quot;: &quot;Jonah&quot;, &quot;B_character&quot;: &quot;Jonah&quot;, &quot;B_nemesis&quot;: &quot;Whales&quot;}, {&quot;A_age&quot;: 27,&quot;A_name&quot;: &quot;Jonah&quot;, &quot;B_character&quot;: &quot;Jonah&quot;, &quot;B_nemesis&quot;: &quot;Spiders&quot;}, {&quot;A_age&quot;: 18,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Ghosts&quot;}, {&quot;A_age&quot;: 18,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Zombies&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Glory&quot;, &quot;B_character&quot;: &quot;Glory&quot;, &quot;B_nemesis&quot;: &quot;Buffy&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Ghosts&quot;}, {&quot;A_age&quot;: 28,&quot;A_name&quot;: &quot;Alan&quot;, &quot;B_character&quot;: &quot;Alan&quot;, &quot;B_nemesis&quot;: &quot;Zombies&quot;}]</code>'
    testString: 'assert.deepEqual(hashJoin(hash1, hash2), res, "<code>hashJoin([{ age: 27, name: "Jonah" }, { age: 18, name: "Alan" }, { age: 28, name: "Glory" }, { age: 18, name: "Popeye" }, { age: 28, name: "Alan" }], [{ character: "Jonah", nemesis: "Whales" }, { character: "Jonah", nemesis: "Spiders" }, { character: "Alan", nemesis: "Ghosts" }, { character:"Alan", nemesis: "Zombies" }, { character: "Glory", nemesis: "Buffy" }, { character: "Bob", nemesis: "foo" }])</code> should return <code>[{"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Whales"}, {"A_age": 27,"A_name": "Jonah", "B_character": "Jonah", "B_nemesis": "Spiders"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 18,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}, {"A_age": 28,"A_name": "Glory", "B_character": "Glory", "B_nemesis": "Buffy"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Ghosts"}, {"A_age": 28,"A_name": "Alan", "B_character": "Alan", "B_nemesis": "Zombies"}]</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hashJoin (hash1, hash2) {
  // Good luck!
  return [];
}

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
