---
title: What Does JavaScript Void 0 Mean
localeTitle: Что такое JavaScript Пустота 0 Среднее значение
---
## Что такое JavaScript Пустота 0 Среднее значение

**Оператор void JavaScript вычисляет выражение и возвращает undefined** .

Использование консоли для проверки того же:

![ConsoleOutput](https://github.com/srawat19/-Guide_Images/blob/master/VoidConsole.PNG?raw=true)

**_Примечание_** : **void** независимо от любого переданного значения _всегда возвращает **undefined,** как показано выше_ . Но, **пустое с операндом 0 является предпочтительным** .

**Два способа использования операнда 0 -> void (0) или void 0.** Любой из них в порядке.

#### Когда использовать Javascript void (0)?

При щелчке по ссылке вы не хотите, чтобы браузер загружал новую страницу или обновлял одну и ту же страницу (в зависимости от указанного URL). Вместо этого выполните JavaScript, прикрепленный к этой ссылке.

#### Пример примера 1 с Javascript void (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0);alert('Hello ! I am here')">Click Me</a> 
 </body> 
 </html> 
```

#### Выход :

При нажатии на ссылку ClickMe появляется предупреждение:

![Output1](https://github.com/srawat19/-Guide_Images/blob/master/voidOutput1.PNG?raw=true)

#### Пример примера 2 с Javascript void (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0)" ondblclick="alert('Hi,i didnt refresh the page')" )>Click Me</a> 
 </body> 
 </html> 
```

#### Выход :

Когда вы дважды щелкните по ссылке, появится всплывающее предупреждение без обновления страницы.

#### Пример примера 3 с Javascript void (0):

```html

<html> 
 <body> 
 <a href="javascript:void(0);https://www.google.co.in/" 
 ondblclick="alert('Hello !! You will see me and not get redirected to google.com ')">Click Me</a> 
 </body> 
 </html> 
```

#### Выход :

Когда вы дважды щелкните по ссылке, появится всплывающее предупреждение, и его закрытие также не будет перенаправлено на google.com.

#### Пример примера без Javascript void (0):

```html

<html> 
 <body> 
 <a href="https://www.google.co.in/" ondblclick="alert('Hello !! You will see me and then get redirected to google.com even if not needed')">Click Me</a> 
 </body> 
 </html> 
```

#### Выход :

Когда вы дважды щелкните по ссылке, появится всплывающее предупреждение, и его закрытие будет перенаправлено на google.com.

#### Заключение :

Оператор **void** полезен, когда вам нужно предотвратить нежелательное обновление или перенаправление страницы. Скорее, выполните некоторую операцию javascript.

#### Дополнительная информация:

1) [Документы Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/void) 2) [Понимание пустоты 0](https://www.quackit.com/javascript/tutorial/javascript_void_0.cfm)