---
id: 587d78a9367417b2b2512ae8
title: Дізнайтеся, як працюють криві Безьє
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

В останньому завданні були представлені властивості `animation-timing-function` та декілька ключових слів, які змінюють швидкість анімації. CSS пропонує інші варіанти, окрім ключових слів, які забезпечують ще точніший контроль над відтворенням анімації за допомогою кривих Безьє.

У анімаціях CSS криві Безьє використовуються з функцією `cubic-bezier`. Форма кривої демонструє, як буде відтворена анімація. Крива лежить на координатній системі 1 до 1. Вісь x цієї координатної системи позначає тривалість анімації (уявіть часову шкалу), а вісь y — зміни в анімації.

Функція `cubic-bezier` складається з чотирьох основних точок, які розташовані на координатній сітці 1 на 1: `p0`, `p1`, `p2`, та `p3`. `p0` та `p3` налаштовані для вас: це початкова та кінцева точки, які завжди розташовані відповідно у початку координат (0, 0) та (1, 1). Ви встановлюєте значення x та у для інших двох точок, і їхнє розміщення у координатній сітці задає форму кривої для даної анімації. Усе це виконується мовою CSS, надаючи значення x та y початкам виділення `p1` та `p2` у вигляді: `(x1, y1, x2, y2)`. Підсумовуючи, ось приклад кривої Безьє в коді CSS:

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

У прикладі вище значення x та y рівнозначні (x1 = 0.25 = y1 and x2 = 0.75 = y2), а ми пам'ятаємо з геометрії, що це лінія, яка простягається від початку координат до точки (1, 1). Ця анімація є лінійною зміною елемента протягом тривалості анімації і така ж, як за допомогою ключового слова `linear`. Інакше кажучи, вона змінюється постійно.

# --instructions--

Для елемента з ідентифікатором `ball1` змініть значення властивості `animation-timing-function` з `linear` на його еквівалентне значення функції `cubic-bezier`. Використовуйте значення точки, як у прикладі вище.

# --hints--

Значення властивості `animation-timing-function` для елемента з ідентифікатором `ball1` має бути лінійно-еквівалентним функції `cubic-bezier`.

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

Значення властивості `animation-timing-function` для елемента з ідентифікатором `ball2` не повинно змінюватися.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>

  .balls{
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
    left: 56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
