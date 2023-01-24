---
id: 587d7b8e367417b2b2512b5d
title: Ризики використання імперативного коду
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

Функційне програмування – хороша навичка. Воно дозволяє легко керувати кодом та рятує від підступних помилок. Але перед тим, як перейти до цього, варто розібрати імперативний метод програмування, щоб підкреслити моменти, з якими у вас можуть виникнути проблеми.

В англійській мові (та багатьох інших) імператив використовується для надання команд. Аналогічно, імперативний стиль у програмуванні – це стиль, який надає комп’ютеру набір інструкцій, щоб виконати завдання.

Інструкції часто змінюють стан програми, як, наприклад, оновлення глобальних змінних. Типовий приклад – написання циклу `for`, який дає точні вказівки для ітерації над індексами масиву.

Функційне програмування, навпаки, є формою декларативного програмування. Ви вказуєте комп’ютеру, що потрібно зробити, викликаючи метод чи функцію.

JavaScript пропонує багато попередньо визначених методів, які обробляють типові завдання. Тому вам не потрібно прописувати, як комп’ютер повинен виконувати їх. Наприклад, замість використання вищезгаданого циклу `for`, ви можете викликати метод `map`, який обробляє деталі ітерації над індексами масиву. Це допомагає уникнути семантичних помилок, як-от «Помилки неврахованої одиниці», про які йшлося в розділі налагодження.

Уявимо ситуацію: ви переглядаєте вебсторінки і хочете відслідковувати відкриті вкладки. Змоделюємо це, використавши звичайний об’єктноорієнтований код.

Об’єкт-вікно складається з вкладок і, як правило, їх відкрито декілька. Назви кожного відкритого сайту в кожному об’єкті-вікні зберігаються у масиві. Після роботи в браузері (відкриття та закриття вкладок, об’єднання вікон) потрібно надрукувати досі відкриті вкладки. Закриті вкладки видаляються з масиву, а нові (для спрощення) додаються в кінець.

У текстовому редакторі ця функціональність реалізована за допомогою функцій `tabOpen()`, `tabClose()` та `join()`. Масив `tabs` є частиною об’єкта-вікна, який зберігає назви відкритих сторінок.

# --instructions--

Перевірте код у редакторі. Він використовує метод, який має побічні ефекти у програмі та спричиняє некоректну поведінку. Кінцевим списком відкритих вкладок, збережених у `finalTabs.tabs`, має бути `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`, але список, який надав код, трішки відрізняється.

Змініть `Window.prototype.tabClose` так, щоб видалялась правильна вкладка.

# --hints--

`finalTabs.tabs` має бути `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

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
