---
id: 587d7b8e367417b2b2512b5d
title: Ризики використання Imperative Code
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

Функціональне програмування - хороша звичка. Це дозволяє вам легко керувати своїм кодом та рятує від підступних помилок. Але перед тим, як перейти до цього, варто розібрати імперативний метод програмування, щоб підкреслити моменти, з якими у вас можуть виникнути проблеми.

В англійській (та багатьох інших мовах) імператив використовується для надання команд. Так само у програмуванні імперативний стиль - це той, який надає комп'ютеру набір інструкцій, щоб виконати завдання.

Часто інструкції змінюють статус програми, як, наприклад, оновлення глобальних змінних. Типовий приклад - написання циклу `for`, який дає точні вказівки для ітерації по індексам масиву.

У той же час функціональне програмування - це форма декларативного програмування. Ви вказуєте комп'ютеру, що потрібно зробити, викликаючи метод чи функцію.

JavaScript пропонує багато попередньо визначених методів, які оброблюють загальні завдання. Тому вам не потрібно прописувати, як комп'ютер має виконати їх. Наприклад, замість використання циклу `for` згаданого вище, ви можете викликати метод `map`, який оброблює деталі ітерації по індексам масиву. Це допомагає уникнути смислових помилок, таких як, наприклад, "Помилка неврахованої одиниці", про які йшлося в розділі "Debugging".

Розглянемо ситуацію: ви переглядаєте веб-сторінки і хочете відслідковувати відкриті вкладки. Змоделюємо це, використовуючи звичайний об'єктно-орієнтований код.

Об'єкт Window складається з вкладок і, як правило, їх відкрито декілька. Назви кожного відкритого сайту в кожному об'єкті Window зберігаються в масиві. Після роботи в браузері (відкриття та закриття вкладок, об'єднанні вікон) ви хочете роздрукувати вкладки, які все ще відкриті. Закриті вкладки видаляються з масиву, а нові (для спрощення) додаються в кінець.

Редактор коду показує реалізацію цієї функціональності з функціями: `tabOpen()`, `tabClose()`, and `join()`. Масив `tabs` - це частина об'єкту Window, яка зберігає назви відкритих сторінок.

# --instructions--

Перевірте код у редакторі. Метод, який він використовує, має побічні ефекти у програмі та спричиняє некоректну поведінку. Остаточний список відкритих вкладок, збережених у `finalTabs.tabs`, має бути `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`, але список, створений кодом, трохи відрізняється.

Змініть `Window.prototype.tabClose`, щоб видалити правильну вкладку.

# --hints--

`finalTabs.tabs` мають бути `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --seed--

## --seed-contents--

```js
// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
const Window = function(tabs) {
  this.tabs = tabs;
};

Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab');
  return this;
};

Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.slice(0, index);
  const tabsAfterIndex = this.tabs.slice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  return this;
 };

const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);

const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
```
