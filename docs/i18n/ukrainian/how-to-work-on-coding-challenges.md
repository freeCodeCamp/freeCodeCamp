# Як працювати над завданнями з кодом

Наша мета — розробити веселе та зрозуміле інтерактивне навчання.

Розробити інтерактивні завдання для програмування — важко. Було б набагато простіше написати довге пояснення чи створити відеоурок. Але для нашої основної навчальної програми ми використовуємо те, що найкраще працює для більшості людей — інтерактив, схожий на відеогру.

Ми хочемо, щоб кемпери досягли стану потоку. Ми хочемо, щоб вони наростили темп та пройшли навчальну програму з мінімальною кількістю помилок. Ми хочемо, щоб вони впевнено виконували проєкти та ознайомились з багатьма поняттями програмування.

Зауважте, що для версії 7.0 навчальної програми freeCodeCamp ми переходимо до [проєктноорієнтованої моделі з багатьма повтореннями](https://www.freecodecamp.org/news/python-curriculum-is-live/).

Ці завдання вимагають креативності та уваги до деталей. Ви не залишитесь без допомоги. Вас підтримуватиме ціла команда помічників, з якими можна поділитись власними ідеями та завданнями.

І як завжди, не соромтесь ставити запитання [на форумі у категорії «Contributors»](https://forum.freecodecamp.org/c/contributors) або [у чаті](https://discord.gg/PRyKn3Vbay).

Завдяки вашій допомозі ми створюємо інтерактивну навчальну програму для програмування, що допоможе мільйонам людей навчитися писати код.

Вміст кожного завдання зберігається у відповідному файлі markdown. Потім, щоб створити інтерактивну вебсторінку, цей файл конвертується у HTML за допомогою наших інструментів.

Ви можете знайти весь навчальний матеріал freeCodeCamp.org у каталозі [`/curriculum/challenges`](https://github.com/freeCodeCamp/freeCodeCamp/tree/main/curriculum/challenges).

## Налаштування інструментів для навчальної програми

Перш ніж працювати над навчальною програмою, потрібно налаштувати деякі інструменти, які допоможуть перевіряти ваші зміни. Ви можете використовувати будь-який варіант нижче:

- Ви можете [налаштувати freeCodeCamp локально](how-to-setup-freecodecamp-locally.md). Це **рекомендовано** для регулярних/повторних внесків. Це налаштування дозволяє працювати над змінами та перевіряти їх.
- Використовуйте безоплатне онлайн середовище Gitpod. Натисніть на кнопку нижче, щоб запустити готове середовище розробки для freeCodeCamp у своєму браузері. Це займе лише кілька хвилин.

  [![Відкрити у Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/freeCodeCamp/freeCodeCamp)

- Редагуйте файли на GitHub, натиснувши на значок олівця для відповідного файлу. Хоча це найшвидший спосіб, він **нерекомендований**, оскільки ви не можете перевірити свої зміни на GitHub. Якщо технічна підтримка вирішить, що ваші зміни потрібно перевірити локально, вам потрібно буде дотримуватись методів, описаних вище.

### Як працювати над практичними проєктами

Практичні проєкти мають деякі додаткові інструменти, які допомагають створити нові проєкти та кроки. Щоб дізнатися більше, див. [документацію](how-to-work-on-practice-projects.md).

## Шаблон завдання

````md
---
id: Unique identifier (alphanumerical, MongoDB_id)
title: 'Challenge Title'
challengeType: Integer, defined in `client/utils/challenge-types.js`
videoUrl: 'url of video explanation'
forumTopicId: 12345
---

# --description--

Challenge description text, in markdown

```html
<div>example code</div>
````

# --instructions--

Текст інструкції тестів у markdown

# --hints--

Тести для запуску коду користувача в поєднанні з текстом markdown та тестовим блоком коду.

```js
Код для першого тесту
```

Якщо вам потрібен динамічний вивід на основі коду користувача, --fcc-expected-- та --fcc-actual-- будуть змінені на очікувані та фактичні значення тестового припущення. Будьте обережними, якщо у вас є декілька припущень, оскільки перше невдале припущення визначить значення --fcc-expected-- та --fcc-actual--.

```js
assert.equal(
  'this will replace --fcc-actual--',
  'this will replace --fcc-expected--'
);
```

# --notes--

Додаткова інформація щодо завдання у markdown

# --seed--

## --before-user-code--

```lang
Код, перевірений перед кодом користувача.
```

## --after-user-code--

```lang
Код, перевірений після коду користувача і перед тестами.
```

## --seed-contents--

Шаблонний код для відображення у редакторі. Цей розділ повинен містити код лише у зворотних лапках:

```html
<body>
  <p class="main-text">Hello world!</p>
</body>
```

```css
body {
  margin: 0;
  background-color: #3a3240;
}

.main-text {
  color: #aea8d3;
}
```

```js
console.log('freeCodeCamp is awesome!');
```

# --solutions--

Розв’язки використовуються для тестів CI, щоб переконатись, що зміни до підказок працюватимуть як потрібно

```js
// перший розв’язок - мова має відповідати джерелу.
```

---

```js
// другий розв’язок - тобто, якщо джерело написане на HTML...
```

---

```js
// третій розв’язок і т. д. - ваш розв’язок має бути на HTML.
```

# --assignments--

Це покаже прапорець, де кемпери мають поставити галочку перед тим, як завершити завдання

---

Це покаже інший прапорець, де кемпери мають поставити галочку перед тим, як завершити завдання

# --question--

Наразі ці поля використовуються для завдань з Python з декількома варіантами відповіді.

## --text--

Запитання повинне бути тут.

## --answers--

Відповідь 1

### --feedback--

Тут буде зворотний зв’язок після того, як кемпери вгадають відповідь

---

Відповідь 2

---

Інші відповіді

## --video-solution--

Номер правильної відповіді знаходиться тут.
````

> [!NOTE]
>
> 1. Прикладами `lang` у прикладах вище є:
>
> - `html` - HTML/CSS
> - `js` - JavaScript
> - `jsx` - JSX

## Нумерація завдань

Кожне завдання вимагає `id`. Якщо ви не вкажете його, то MongoDB створить випадкове id, коли зберігатиме дані. Нам цього непотрібно, оскільки id завдань повинні бути послідовними у всіх середовищах (проміжному, робочому, розробницькому тощо).

Щоб згенерувати id в оболонці (припускаючи, що MongoDB запущене окремо):

1. Запустіть команду `mongo`.
2. Запустіть команду `ObjectId()`.

Наприклад:

```bash
$ mongo
MongoDB shell version v3.6.1
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.4.10
...
$ ObjectId()
ObjectId("5a474d78df58bafeb3535d34")
````

Результатом є новий id (наприклад, `5a474d78df58bafeb3535d34` вище).

Як тільки ви отримали id, розмістіть його у файлі markdown як поле `id` зверху, тобто

```yml
---
id: 5a474d78df58bafeb3535d34
title: Challenge Title
```

## Найменування завдань

Давати назву — важко. Проте ми полегшили цей процес, впровадивши деякі обмеження.

Усі назви завдань повинні бути чіткими та дотримуватись цього шаблону:

\[дієслово\]\[підрядна частина\]

Нижче подано декілька прикладів назв завдань:

- Використайте запис за годинниковою стрілкою, щоб визначити відступ елемента
- Стисніть масиви за допомогою .reduce
- Використайте дужкову нотацію, щоб знайти перший символ у рядку

## Опис/інструкції завдань

Речення повинні бути зрозумілими і стислими, з мінімальною кількістю жаргону. Якщо жаргон все-таки був використаний, то його потрібно пояснити звичайною мовою.

Надавайте перевагу коротким абзацам (1-4 речення). Найімовірніше, люди прочитають декілька коротких абзаців, а не суцільний текст.

Use american english, e.g., use `labeled` instead of `labelled`.

Challenge text should use the second person ("you") to help to give it a conversational tone. This way the text and instructions seem to speak directly to the camper working through the challenge. Try to avoid using the first person ("I", "we", "let's", and "us").

Don't use outbound links. These interrupt the flow. Campers should never have to google anything during these challenges. If there are resources you think campers would benefit from, add them to the challenge's Guide-related article.

You can add diagrams if necessary.

Don't use emojis or emoticons in challenges. freeCodeCamp has a global community, and the cultural meaning of an emoji or emoticon may be different around the world. Also, emojis can render differently on different systems.

Proper nouns should use correct capitalization when possible. Below is a list of words as they should appear in the challenges.

- JavaScript (великі літери «J» і «S», без скорочень)
- Node.js
- Іноді потрібно вживати деякі неточні форми, як-от «back end» і «front end» без дефіса, оскільки таке вживання більш поширене.

### Правило двох хвилин

Each challenge should be solvable within 120 seconds by a native English speaker who has completed the challenges leading up to it. This includes the amount of time it takes to read the directions/instructions understand the seeded code, write their code and get all the tests to pass.

If it takes longer than two minutes to complete the challenge, you have two options:

- Спростіть завдання, або
- Розділіть завдання на два кроки.

The 2-minute rule forces you, the challenge designer, to make your directions concise, your seed code clear, and your tests straightforward.

We track how long it takes for campers to solve challenges and use this information to identify challenges that need to be simplified or split.

### Модульність

Each challenge should teach exactly one concept, and that concept should be apparent from the challenge's name.

We can reinforce previously covered concepts through repetition and variations - for example, introducing h1 elements in one challenge, then h3 elements a few challenges later.

Our goal is to have thousands of 2-minute challenges. These can flow together and reiterate previously-covered concepts.

### Форматування тексту завдання

Here are specific formatting guidelines for challenge text and examples:

- Ключові слова мови знаходяться у зворотних лапках `` \` ``. Наприклад, назви тегів HTML чи назви властивостей CSS.
- Посилання на частини коду (тобто назви функцій, методів чи змінних) потрібно брати у зворотні лапки ``  \ ` ``. Розгляньте приклад нижче:

```md
Використовуйте `parseInt`, щоб перетворити змінну `realNumber` в ціле число.
```

- Посилання на назви файлів чи шляхи директорій (тобто `package.json`, `src/components`) потрібно брати у зворотні лапки `` \` ``.
- Перед блоками багаторядкового коду **має бути порожній рядок**. Наступний рядок повинен починатись з трьох зворотних лапок, після яких йде одна з [підтримуваних мов](https://prismjs.com/#supported-languages). Щоб закінчити блок коду, потрібно почати новий рядок, який має лише три зворотні лапки та **ще один порожній рядок**. Розгляньте приклад нижче:
- Пробіл має значення у markdown, тому ми рекомендуємо зробити його видимим у редакторі.

**Note:** If you are going to use an example code in YAML, use `yaml` instead of `yml` for the language to the right of the backticks.

The following is an example of code:

````md
```{language}

[ТУТ МІСЦЕ ДЛЯ ВАШОГО КОДУ]

````
````

- Додаткова інформація у нотатках повинна бути оточена порожніми рядками та відформатована: `**Примітка:** Решта тексту примітки...`
- Якщо потрібно написати декілька приміток, перерахуйте всі примітки в окремих реченнях, використовуючи такий формат: `**Примітки:** Текст першої примітки. Текст другої примітки.`
- Використовуйте одинарні лапки там, де потрібно

**Примітка:** Еквівалент _Markdown_ потрібно використовувати на місці тегів _HTML_.

## Написання тестів

Завдання повинні мати мінімальну кількість тестів, необхідних для підтвердження знань кемпера щодо певного поняття.

Наша мета — пояснити поняття, описане в завданні, та перевірити, що його зрозуміли.

Тести завдань можуть використовувати бібліотеки Node.js та Chai.js. Якщо необхідно, у змінній `code` можна отримати доступ до коду, створеного користувачами. Крім того, об’єкт `__helpers` надає декілька функцій, які полегшують процес написання тестів. The available functions are defined in the [curriculum-helpers](https://github.com/freeCodeCamp/curriculum-helpers/blob/main/lib/index.ts) repo.

## Форматування вихідного коду

Ось вказівки для форматування вихідного коду завдань:

- Використовуйте два пробіли для відступу
- Інструкції JavaScript закінчуються крапкою з комою
- Використовуйте подвійні лапки там, де потрібно

### Коментарі вихідного коду

У нас є [словник з коментарями](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json), який містить лише ті коментарі, які можна використовувати у вихідному коді. Використовуйте той самий регістр та інтервал, що в словнику коментарів. Не доповнюйте словник коментарів, не обговоривши з командою розробників.

Використані коментарі повинні мати пробіл між символами коментаря та самим коментарем. Коментарі потрібно використовувати в міру. Намагайтесь писати опис чи інструкції завдання так, щоб уникнути використання коментаря у вихідному коді.

Приклад дійсного однорядкового коментаря JavaScript:

```js
// Змініть код під цим рядком
````

Example of a valid CSS comment:

```css
/* Only change code above this line */
```

If a challenge only has a single place where code changes are needed, please use the comments in the following example to instruct the user where changes should be made.

```js
var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

If a challenge has multiple places where the user is expected to change code (i.e. the React challenges)

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello'
    };
    // Змініть код під цим рядком

    // Змініть код над цим рядком
  }
  handleClick() {
    this.setState({
      text: 'You clicked!'
    });
  }
  render() {
    return (
      <div>
        {/* Змініть код під цим рядком */}
        <button>Click Me</button>
        {/* змініть код над цим рядком */}
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```

### Переклад коментарів початкового коду

There are separate comment dictionaries for each language. The [English version of the comment dictionary](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/curriculum/dictionaries/english/comments.json) is the basis for the translations found in the corresponding non-English versions of the files. The non-English version of the Chinese comment dictionary would be located at `/curriculum/dictionaries/chinese/comments.json`. Each dictionary consists of an array of objects with a unique `id` property and a `text` property. Only the `text` should be modified to encompass the translation of the corresponding English comment.

Some comments may contain a word/phrase that should not be translated. For example, variable names or proper library names like "React" should not be translated. See the comment below as an example. The word `myGlobal` should not be translated.

```text
Оголосіть змінну myGlobal під цим рядком
```

> [!NOTE]
> 
> Ми працюємо над інтеграцією, щоб дозволити працювати над словником коментарів для i18n.

## Підказки та розв’язки

Each challenge has a `Get a Hint` button, so a user can access any hints/solutions which have been created for the challenge. Curriculum hints/solutions topics are located on [our forum](https://forum.freecodecamp.org/c/guide) under the `Guide` category.

If you find a problem with an existing challenge's hints/solutions topic, you can make suggestions in the [contributors category](https://forum.freecodecamp.org/c/contributors) on the forum. Moderators and users with trust level 3 will review the comments and decide whether or not to include the changes in the corresponding hint/solutions topic.

### Додавання нових тем для підказок чи розв’язків завдань

Take the following steps when adding a new challenge hints/solutions-related topic.

1. Розпочніть з тих самих кроків для створення нової теми, але зверніть увагу на наступні щодо заголовка.
2. Заголовок теми повинен починатись з `freeCodeCamp Challenge Guide:`, з’єднаного з назвою завдання навчальної програми. Наприклад, якщо завдання має назву `Chunky Monkey`, заголовком теми буде `freeCodeCamp Challenge Guide: Chunky Monkey`.
3. `camperbot` повинен бути власником цих тем/дописів, тому попросіть адміністратора змінити власника головного допису на `camperbot`.
4. Після створення нової теми створюється id теми форуму. Він розташований в кінці URL-адреси теми форуму. Цей id потрібно додати до передмови файлу завдання за допомогою звичайного запиту на злиття, щоб кнопка `Get a Hint` посилалась на тему.

### Вказівки щодо змісту тем підказок і розв’язків

When proposing a solution for a curriculum challenge-related Guide topic, the full code must be added. This includes all the original seed code plus any changes needed to pass all the challenge tests. The following template should be used when creating new hints/solutions topics:

````md
# Тут назва завдання

---

## Пояснення проблеми

Тут узагальнюється те, що потрібно зробити (без повторення опису та/або інструкцій). Це додатковий розділ

#### Релевантні посилання

- [Текст посилання](link_url_goes_here)
- [Текст посилання](link_url_goes_here)

---

## Підказки

### Підказка 1

Тут підказка

### Підказка 2

Тут підказка

---

## Розв’язок

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function myFunc() {
  console.log('Hello World!');
}
````

#### Пояснення коду

- Тут пояснення коду
- Тут пояснення коду

#### Релевантні посилання

- [Текст посилання](link_url_goes_here)
- [Текст посилання](link_url_goes_here)

</details>
````

## Тестування завдань

Перш ніж [створити запит на злиття](how-to-open-a-pull-request.md) для своїх змін, вам потрібно переконатись, що зроблені зміни не призводять до проблем у завданні.

1. Запустіть нижчеподану команду з кореневого каталогу для того, щоб перевірити всі завдання

````
pnpm run test:curriculum
```

2. Щоб перевірити окреме завдання, використайте його id з цією командою

```
FCC_CHALLENGE_ID=646cf6cbca98e258da65c979 pnpm run test:curriculum
```

3. Ви можете перевірити блок або суперблок завдань за допомогою цих команд

```
FCC_BLOCK='Basic HTML and HTML5' pnpm run test:curriculum
```

```
FCC_SUPERBLOCK='responsive-web-design' pnpm run test:curriculum
```

Ви також можете перевірити завдання за заголовками, виконавши такі кроки:

1. Перейдіть до каталогу `curriculum`:

   ```
   cd curriculum
   ```

2. Run the following for each challenge file for which you have changed (replacing `challenge-title-goes-here` with the full title of the challenge):

   ```
   pnpm run test -- -g challenge-title-goes-here
   ```

> [!TIP]
> You can set the environment variable `LOCALE` in the `.env` to the language of the challenge(s) you need to test.
>
> The currently accepted values are `english` and `chinese`, with `english` being set by default.

## Proposing a Pull Request (PR)

After you've committed your changes, check here for [how to open a Pull Request](how-to-open-a-pull-request.md).

## Useful Links

Creating and Editing Challenges:

1. [Challenge types](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/client/utils/challenge-types.js#L1-L13) - what the numeric challenge type values mean (enum).

2. [Contributing to FreeCodeCamp - Writing ES6 Challenge Tests](https://www.youtube.com/watch?v=iOdD84OSfAE#t=2h49m55s) - a video following [Ethan Arrowood](https://twitter.com/ArrowoodTech) as he contributes to the old version of the curriculum.

## Helper Scripts

> [!NOTE]
> If you are working with the step-based challenges, refer to the [Work on Practice Projects](how-to-work-on-practice-projects.md) section.

There are a few helper scripts that can be used to manage the challenges in a block. Note that these commands should all be run in the block directory. For example:

```bash
cd curriculum/challenges/english/02-javascript-algorithms-and-data-structures/basic-algorithm-scripting
```

### Додати нове завдання

To add a new challenge at the end of a block, call the script:

```bash
pnpm run create-next-challenge
```

This will prompt you for the challenge information and create the challenge file, updating the `meta.json` file with the new challenge information.

### Видалити завдання

To delete a challenge, call the script:

```bash
pnpm run delete-challenge
```

This will prompt you to select which challenge should be deleted, then delete the file and update the `meta.json` file to remove the challenge from the order.

### Вставити завдання

To insert a challenge before an existing challenge, call the script:

```bash
pnpm run insert-challenge
```

This will prompt you for the challenge information, then for the challenge to insert before. For example, if your choices are:

```bash
a
b
c
```

If you choose `b`, your new order will be:

```bash
a
new challenge
b
c
```

### Оновити порядок завдань

If you need to manually re-order the challenges, call the script:

```bash
pnpm run update-challenge-order
```

This will take you through an interactive process to select the order of the challenges.

## Розв’язання проблем розробки

### Виявлено нескінченний цикл

If you see the following error in the console while previewing a challenge:

```text
Potential infinite loop detected on line <number>...
```

This means that the loop-protect plugin has found a long-running loop or recursive function. If your challenge needs to do that (e.g. it contains an event loop that is supposed to run indefinitely), then you can prevent the plugin from being used in the preview. To do so, add `disableLoopProtectPreview: true` to the block's `meta.json` file.

If your tests are computationally intensive, then you may see this error when they run. If this happens then you can add `disableLoopProtectTests: true` to the block's `meta.json` file.

It's not typically necessary to have both set to true, so only set them as needed.
