---
id: 5900f42f1000cf542c50ff40
title: 'Завдання 194: Кольорові конфігурації'
challengeType: 1
forumTopicId: 301832
dashedName: problem-194-coloured-configurations
---

# --description--

Розглянемо графіки, побудовані з одиницями А:
<img class="img-responsive" alt="одиниця графіку A" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-1.png" style="display: inline-block; background-color: white; padding: 10px;" />
 і В: <img class="img-responsive" alt="graph unit B" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-2.png" style="display: inline-block; background-color: white; padding: 10px;" />, де одиниці склеяні по вертикальних краях, як у графіку <img class="img-responsive" alt="graph with four units glued along the vertical edges" src="https://cdn.freecodecamp.org/curriculum/project-euler/coloured-configurations-3.png" style="display: inline-block; background-color: white; padding: 10px;" />.

Конфігурація типу $(a,b,c)$ є графіком, який побудований з $a$ одиниць A і $b$ одиниць B таким чином, щоб вершини графіку були забарвлені з використанням до $c$ кольорів, і не мали двох суміжних вершин однакового кольору. Складний графік вище – приклад конфігурації типу $(2,2,6)$, точніше типу $(2,2,c)$ для усіх $c ≥ 4$

Нехай $N(a,b,c)$ буде кількістю конфігурацій типу $(a,b,c)$. Наприклад, $N(1,0,3) = 24$, $N(0,2,4) = 92928$ і $N(2,3) = 20736$.

Знайдіть останні 8 цифр з $N(25,75, ^)$.

# --hints--

`coloredConfigurations()` має видати `61190912`.

```js
assert.strictEqual(coloredConfigurations(), 61190912);
```

# --seed--

## --seed-contents--

```js
function coloredConfigurations() {

  return true;
}

coloredConfigurations();
```

# --solutions--

```js
// solution required
```
