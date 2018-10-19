---
title: Debugging JavaScript with Browser Devtools
localeTitle: Отладка JavaScript с помощью браузера Devtools
---
Как разработчик вы часто захотите отладить код. Возможно, вы уже использовали `console.log` в некоторых проблемах, что является самым простым способом для отладки.

В этой статье мы расскажем вам о самых крутых трюках, чтобы отлаживать с помощью встроенных средств отладки браузеров.

## Краткое описание редактора кода FreeCodeCamp:

Прежде чем перейти к отладке, вы можете пропустить некоторые секретные факты об этом _замечательном механизме проверки кода_ в FCC.

Мы используем настраиваемый [CodeMirror](http://codemirror.net/mode/javascript/index.html) , как редактор кода. Функция [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) используется для оценки кода JavaScript, представленного в виде строки из редактора. Когда вызывается `eval()` , браузеры будут выполнять ваш код. Мы узнаем больше, почему этот секрет важен в последующих разделах этой статьи.

## Теперь перейдем к трюкам:

## Google Chrome DevTools

Google Chrome - один из самых популярных браузеров со встроенным движком JavaScript под названием [V8](https://developers.google.com/v8/) и предлагает отличный набор инструментов для разработчиков под названием [Chrome DevTools](https://developer.chrome.com/devtools) . Очень рекомендуется посетить их [полное руководство по отладке JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging) .

### 1: Основы DevTools

#### Запуск Chrome DevTools

Хит `F12`

, В качестве альтернативы вы можете нажать

`Ctrl` + `Shift` + `I`

на Windows и Linux или

`Cmd` + `Shift` + `I`

на Mac, или если вы просто любите свою мышь, перейдите в `Menu > More Tools > Developer Tools` .

#### Знакомство с `Sources` и вкладками `console` .

Эти две вкладки, возможно, будут вашими лучшими друзьями во время отладки. Вкладка « `Sources` » может использоваться для визуализации всех скриптов, которые находятся на веб-странице, которую вы посещаете. На этой вкладке есть разделы для окна кода, дерева файлов, стек вызовов и окна просмотра и т. Д.

На вкладке `console` отображается весь выход журнала. Кроме того, вы можете использовать приглашение вкладки консоли для выполнения кода JavaScript. Его синонимом командной строки на Windows или терминалом в Linux.

_Совет. Переключайте консоль в любое время в DevTools с помощью `Esc` ._

### 2: Общие ярлыки и функции

В то время как вы можете посетить [полный список ярлыков](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts) , ниже приведены несколько наиболее используемых:

Возможности Windows, Linux Mac  
Поиск ключевого слова, регулярное выражение поддерживается. `Ctrl` + `F``Cmd` + `F`  
Поиск и `P``Cmd` файла `Ctrl` + `P``Cmd` + `P`  
Перейти к строке `Ctrl` + `G` + `:line_no``Cmd` + `G` + `:line_no`  
Добавьте точку останова `Ctrl` + `B` или нажмите на строку №. `Cmd` + `B` , или щелкните по строке №.  
Пауза / возобновление выполнения `F8` `F8`  
Перейдите к следующему вызову функции `F10` `F10`  
Шаг следующего вызова функции `F11` `F11`

### 3: Использование исходной карты для нашего кода

Одной из самых крутых функций, которые вам понравится, является [отладка Dynamic Script](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript) , на лету, через [Source Maps](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps) .

Каждый скрипт можно визуализировать на вкладке «Источник» DevTools. На вкладке источника есть все исходные файлы JavaScript. Но код из редактора кода выполняется через `eval()` в контейнере, который просто называется виртуальной машиной (VM) в рамках браузера.

Как вы, наверное, догадались, что наш код на самом деле является скриптом, который не имеет имени файла. Поэтому мы не видим этого на вкладке «Источник».

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": Блестки:") **_Вот идет хак!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": Блестки:")

Мы должны использовать `Source Maps` для присвоения имени JavaScript из нашего редактора. Его довольно просто:

Допустим, что мы находимся на вызове [Factorialize](https://www.freecodecamp.com/challenges/factorialize-a-number) , и наш код выглядит так:
```
function factorialize(num) { 
  if(num <= 1){ 
  ... 
 } 
 factorialize(5); 
```

Все, что нам нужно сделать, это добавить `//# sourceURL=factorialize.js` в начало кода, то есть первую строку:
```
//# sourceURL=factorialize.js 
 
 function factorialize(num) { 
  if(num <= 1){ 
  ... 
```

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": Блестки:") **_И Эврика, вот и все!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": Блестки:")

Теперь откройте DevTools и найдите имя файла. Добавить точки останова, отладить и наслаждаться!