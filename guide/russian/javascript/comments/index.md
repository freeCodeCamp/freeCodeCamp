---
title: Comments
localeTitle: Комментарии
---
## Комментарии

Программисты используют комментарии для добавления в исходный код подсказок, заметок, предложений или предупреждений; они не влияют на фактический вывод кода. Комментарии могут быть очень полезными для объяснения цели вашего кода или того, что он должен делать.

Это всегда лучшая практика, когда вы начинаете комментировать чаще, поскольку это может помочь тем, кто читает ваш код, понять, что именно ваш код намеревается сделать.

JavaScript имеет два способа присвоения комментариев в коде.

Первый способ - `//` комментарий; весь текст, следующий за `//` в одной строке, в комментарий. Например:

```javascript
function hello() { 
  // This is a one line JavaScript comment 
  console.log("Hello world!"); 
 } 
 hello(); 
```

Второй способ - это `/* */` comment, который может использоваться как для однострочных, так и для многострочных комментариев. Например:

```javascript
function hello() { 
  /* This is a one line JavaScript comment */ 
  console.log("Hello world!"); 
 } 
 hello(); 
```

```javascript
function hello() { 
  /* This comment spans multiple lines. Notice 
     that we don't need to end the comment until we're done. */ 
  console.log("Hello world!"); 
 } 
 hello(); 
```

Вы также можете предотвратить выполнение кода Javascript, просто введя в действие коды кода следующим образом:

```javascript
function hello() { 
  /*console.log("Hello world!");*/ 
 } 
 hello(); 
```

#### Дополнительная информация:

[Как писать комментарии в JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)

### Многие IDE поставляются с комбинацией клавиш, чтобы прокомментировать строки.

1.  Выделите текст для комментариев
2.  Mac: Push Command (Apple Key) и "/"
3.  Windows: Push Control & "/"
4.  Вы также можете раскомментировать код, выполнив те же действия

Ярлык, чтобы прокомментировать раздел javascript во многих редакторах кода, состоит в том, чтобы выделить строки кода, который вы хотите прокомментировать, затем нажмите `Cmd/Ctrl + /` .

Комментарии также очень полезны для тестирования кода, поскольку вы можете предотвратить запуск определенной строки кода / блока

```javascript
function hello() { 
  // The statement below is not going to get executed 
  // console.log('hi') 
  } 
 hello(); 
```

```
function hello() { 
  // The statements below are not going to get executed 
  /* 
  console.log('hi'); 
  console.log('code-test'); 
  */ 
 } 
 hello(); 
```

#### Дополнительная информация:

*   [Как писать комментарии в JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)
