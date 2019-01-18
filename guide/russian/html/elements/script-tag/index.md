---
title: Script Tag
localeTitle: Сценарий
---
## Сценарий

Тег HTML Script используется для того, чтобы либо содержать JavaScript на стороне клиента, либо ссылаться на внешний файл JavaScript, используя атрибут сценария «src».

Тег / элемент `<script>` используется для включения Javascript на стороне клиента в ваш HTML-файл, который можно использовать для добавления интерактивности и логики на ваш сайт

## Важно
Тег скрипт не должен содержать в себе атрибут type="text/javascript", хотя раньше это было необходимо.

```
<script> 
  //JavaScript code is written here 
 </script> 
 
 <script src="js/app.js"> 
```

Тег можно использовать для включения реального кода Javascript прямо в HTML как это
```
<script> 
  alert('hello this is my Javascript doing things!'); 
 </script> 
```

Или вы можете использовать его как способ ссылки на внешний файл javascript, как это
```
<script src="main.js" /> 
```

Здесь атрибут `src` элемента принимает путь к файлу Javascript

Теги скрипта загружаются в ваш HTML-код и синхронизированы, поэтому обычно лучше всего добавлять свои скрипты прямо перед концом `<body>` в вашем HTML-формате
```
  <script src="main.js" /> 
  <script> 
    alert('hello this is my Javascript doing things!'); 
  </script> 
 </body> 
```

Вы можете увидеть официальную документацию для элемента сценария в [Документах MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
