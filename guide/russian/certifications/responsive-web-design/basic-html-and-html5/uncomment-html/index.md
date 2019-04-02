---
title: Uncomment HTML
localeTitle: Uncomment HTML
---
## Uncomment HTML

Тема комментария часто немного запутанна в начале. Посмотрите на пример:
```
<!-- This is a commented block. 
 It doesn't matter how long it is, if it has <h1>HTML elements</h1> in it or if it develops 
 into 
 few lines, 
 everything between the first weird series of character and the last is commented out --> 
```

Вы также можете использовать комментарий в строке: `<!-- Uh, I does not exists! -->` и вот оно!

Единственное, что нужно учитывать, это то, что когда вы видите этот набор char `<!--` все, оттуда, закомментировано, поскольку вы находите specular `-->` ; это тег открытия и закрытия HTML-элемента!

##### раскомментировать

Uncomment означает, что вы берете вещи из текста комментария: раскомментировать элемент h3 из следующего предложения (которое все прокомментировано):
```
<!-- <h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> --> 
```

так же просто:
```
<!-- <h1>Comment header</h1> --> <h3>Comment subtle</h3> <!-- <article>I am the text of the comment</article> --> 
```

Обратите внимание на добавление закрывающего тега комментария ( `-->` ) до того, как HTML-элемент h3 будет соответствовать тегу открытия комментария в начале предложения и добавит тег открытия комментария ( `<!--` ) после него, чтобы он соответствовал закрытию тег в конце: таким образом вы создали два встроенных комментария: один перед элементом h3 и один после !.

Если вы хотите расколоть, все будет еще проще:
```
<h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> 
```

Просто удалите открывающий и закрывающий тег комментария.