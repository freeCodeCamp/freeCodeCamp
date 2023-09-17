# Помічники з навчальної програми

Тестувальник має доступ до декількох помічників, які можуть допомогти з тестуванням коду кемпера.

## Помічник CSS

Щоб створити екземпляр помічника в межах тестового блоку, використайте:

```js
const helper = new __helpers.CSSHelp(document);
```

У цьому прикладі змінна `document` посилається на об’єкт-документ вбудованого фрейму тестувальника.

### Методи

Існує декілька доступних методів для парсингу та тестування CSS.

#### `.getStyle()`

Метод `.getStyle()` приймає селектор CSS та повертає об’єкт оголошення стилю CSS.

Наприклад, якщо кемпер написав такий CSS:

```css
body {
  background: linear-gradient(45deg, rgb(118, 201, 255), rgb(247, 255, 222));
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
```

Ви отримаєте такий об’єкт:

```js
{
    0: "background-image",
    1: "background-position-x",
    2: "background-position-y",
    3: "background-size",
    4: "background-repeat-x",
    5: "background-repeat-y",
    6: "background-attachment",
    7: "background-origin",
    8: "background-clip",
    9: "background-color",
    10: "margin-top",
    11: "margin-right",
    12: "margin-bottom",
    13: "margin-left",
    14: "padding-top",
    15: "padding-right",
    16: "padding-bottom",
    17: "padding-left",
    18: "width",
    19: "height",
    20: "overflow-x",
    21: "overflow-y",
    "accentColor": "",
    "additiveSymbols": "",
    "alignContent": "",
    "alignItems": "",
    ...
}
```

Цей метод дозволяє перевірити, що були встановлені конкретні властивості:

```js
assert.strictEqual(helper.getStyle('body')?.width, '100%');
```

Помічник прикріплює метод `.getPropVal()` до об’єкта оголошення стилю, що дозволяє отримати значення конкретної властивості:

```js
assert.strictEqual(helper.getStyle('body').getPropVal('width'), '100%');
```

#### `.getCSSRules()`

Метод `.getCSSRules()` приймає в-правило з `media | fontface | import | keyframes` та повертає масив правил CSS, що відповідають цьому в-правилу.

Наприклад, якщо кемпер написав такий код:

```css
@media (max-width: 100px) {
  body {
    background-color: green;
  }
}
```

Поверненим значенням `helper.getCSSRules('media')` буде цей масив:

```js
[
    {
        conditionText: "(max-width: 100px)",
        cssRules: [
            selectorText: 'body',
            style: CSSStyleDeclaration,
            styleMap: StylePropertyMap,
            cssRules: CSSRuleList,
            type: 1,
            ...
        ],
        cssText: "@media (max-width: 100px) {\n  body { background-color: green; }\n}",
        ...
    }
]
```

Потім ви можете перевірити, чи кемпер написав правильний медіазапит:

```js
const hasCorrectHeight = helper.getCSSRules('media').some(x => x.style.height === '3px');;
assert.isTrue(hasCorrectHeight);
```

#### `.getRuleListsWithinMedia()`

Метод `.getRuleListsWithinMedia()` приймає медіатекст (наприклад, `("max-width: 200")`) та повертає правила CSS в межах цього медіазапиту.

Повернений результат дорівнює властивості медіаправила `cssRules` з поверненого значення `.getCSSRules("media")`.

### Менш поширені методи

Ці методи не настільки поширені, але доступні за необхідності.

#### `.getStyleDeclarations()`

Метод `.getStyleDeclarations()` приймає селектор CSS та повертає масив об’єктів оголошення стилю CSS (з методу `.getStyle()`).

#### `.isPropertyUsed()`

Метод `.isPropertyUsed()` приймає **властивість** CSS та перевіряє, чи її встановлено/використано в CSS.

#### `.getStyleRule()`

Метод `.getStyleRule()` приймає селектор CSS та повертає оголошення стилю CSS, схоже до `.getStyle()`. Однак оголошення, повернене з цього методу, містить додатковий метод `.isDeclaredAfter()`, який приймає селектор та повертає інформацію, чи це правило оголошене після передачі селектора.

#### `.getStyleSheet()`

Метод `.getStyleSheet()` повертає CSS кемпера, проаналізований в об’єкт таблиці стилів CSS.

## Вилучення змісту

До об’єкта `__helpers` можна застосувати декілька методів, щоб вилучити вміст з коду кемпера.

Для них НЕ потрібно створювати екземпляри, оскільки це статичні методи.

### Видалення коментарів

Методи `__helpers.removeCssComments()`, `__helpers.removeHTMLComments()` та `__helpers.removeJSComments()` дозволяють передати код кемпера (через змінну `code`), щоб вилучити коментарі, які відповідають синтаксису коментарів мови.

### Видалення пробілів

Метод `__helpers.removeWhitespace()` дозволяє передати код кемпера (через змінну `code`), щоб видалити всі пробіли.
