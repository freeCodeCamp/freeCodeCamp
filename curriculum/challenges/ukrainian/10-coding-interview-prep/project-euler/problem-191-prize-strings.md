---
id: 5900f42b1000cf542c50ff3e
title: 'Завдання 191: Призові стрічки'
challengeType: 1
forumTopicId: 301829
dashedName: problem-191-prize-strings
---

# --description--

Певна школа пропонує грошові винагороди дітям, що не запізнюються та не пропускають уроків. Якщо дитина відсутня три дні поспіль або запізнюється більше одного разу – вона втрачає приз.

Протягом n-нного денного періоду для кожної дитини формується тризначний рядок, що складається з оцінок L (late – запізнення), O (on time – вчасно), і A (absent – відсутній).

Хоча за 4 дні можна створити вісімдесят один тризначний рядок, рівно сорок три приведуть до призу:

```markup
OOOO OOOA OOOL OOAO OOAA OOAL OOLO OOLA OAOO OAOA
OAOL OAAO OAAL OALO OALA OLOO OLOA OLAO OLAA AOOO
AOOA AOOL AOAO AOAA AOAL AOLO AOLA AAOO AAOA AAOL
AALO AALA ALOO ALOA ALAO ALAA LOOO LOOA LOAO LOAA
LAOO LAOA LAAO
```

Скільки "призових рядків" буде за 30-денний період?

# --hints--

`prizeStrings()` має видати `1918080160`.

```js
assert.strictEqual(prizeStrings(), 1918080160);
```

# --seed--

## --seed-contents--

```js
function prizeStrings() {

  return true;
}

prizeStrings();
```

# --solutions--

```js
// solution required
```
