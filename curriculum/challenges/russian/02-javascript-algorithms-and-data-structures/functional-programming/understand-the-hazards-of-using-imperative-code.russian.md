---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1
videoUrl: ''
localeTitle: Понимание опасностей использования императивного кода
---

## Description
<section id="description"> Функциональное программирование - хорошая привычка. Он упрощает управление вашим кодом и избавляет вас от подлых ошибок. Но прежде чем мы туда доберемся, давайте посмотрим на императивный подход к программированию, чтобы подчеркнуть, где у вас могут быть проблемы. На английском (и на многих других языках) императивное время используется для команд. Аналогичным образом, императивный стиль программирования - это тот, который дает компьютеру набор операторов для выполнения задачи. Часто утверждения изменяют состояние программы, например, обновление глобальных переменных. Классическим примером является запись цикла <code>for</code> который дает точные указания для итерации по индексам массива. Напротив, функциональное программирование является формой декларативного программирования. Вы говорите компьютеру, что вы хотите сделать, вызвав метод или функцию. JavaScript предлагает множество предопределенных методов, которые обрабатывают общие задачи, поэтому вам не нужно записывать, как компьютер должен их выполнять. Например, вместо использования цикла <code>for</code> упомянутого выше, вы можете вызвать метод <code>map</code> который обрабатывает детали итерации по массиву. Это помогает избежать семантических ошибок, таких как «Ошибки по одному», которые были описаны в разделе «Отладка». Рассмотрим сценарий: вы просматриваете веб-страницы в своем браузере и хотите отслеживать открытые вкладки. Попробуем смоделировать это, используя простой объектно-ориентированный код. Объект Window состоит из вкладок, и обычно у вас открыто более одного окна. Заголовки каждого открытого сайта в каждом объекте Window хранятся в массиве. После работы в браузере (открытие новых вкладок, слияние окон и закрытие вкладок) вы хотите распечатать вкладки, которые все еще открыты. Закрытые вкладки удаляются из массива, а новые вкладки (для простоты) добавляются к концу. Редактор кода показывает реализацию этой функции с функциями для <code>tabOpen()</code> , <code>tabClose()</code> и <code>join()</code> . <code>tabs</code> массива являются частью объекта Window, который хранит имя открытых страниц. <h4> инструкции </h4><h4> Запустите код в редакторе. Он использует метод, который имеет побочные эффекты в программе, вызывая неправильный вывод. Окончательный список открытых вкладок должен быть <code>[&#39;FB&#39;, &#39;Gitter&#39;, &#39;Reddit&#39;, &#39;Twitter&#39;, &#39;Medium&#39;, &#39;new tab&#39;, &#39;Netflix&#39;, &#39;YouTube&#39;, &#39;Vine&#39;, &#39;GMail&#39;, &#39;Work mail&#39;, &#39;Docs&#39;, &#39;freeCodeCamp&#39;, &#39;new tab&#39;]</code> но результат будет немного отличаться. Проработайте код и посмотрите, можете ли вы решить проблему, затем перейдите к следующему заданию, чтобы узнать больше. </h4></section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Двигайтесь вперед, чтобы понять ошибку.'
    testString: 'assert(true, "Move ahead to understand the error.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // we keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
                    .tabOpen() // Open a new tab for cat memes
                    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
                    .join(workWindow.tabClose(1).tabOpen());

alert(finalTabs.tabs);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
