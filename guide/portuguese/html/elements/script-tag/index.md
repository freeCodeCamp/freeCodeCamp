---
title: Script Tag
localeTitle: Tag de Script
---
## Tag de Script

A tag HTML Script é usada para conter o JavaScript do lado do cliente ou fazer referência a um arquivo JavaScript externo usando o atributo "src" do script.

A tag / elemento `<script>` é usada para incorporar o Javascript do lado do cliente em seu arquivo HTML, que pode ser usado para adicionar interatividade e lógica ao seu site
```
<script> 
  //JavaScript code is written here 
 </script> 
 
 <script src="js/app.js"> 
```

A tag pode ser usada para englobar o código JavaScript real no próprio HTML dessa forma
```
<script> 
  alert('hello this is my Javascript doing things!'); 
 </script> 
```

Ou você pode usá-lo como uma maneira de fazer referência a um arquivo javascript externo como este
```
<script src="main.js" /> 
```

Aqui o atributo `src` do elemento leva em um caminho para um arquivo Javascript

As tags de script são carregadas em seu HTML em ordem e sincronizadas, portanto, geralmente é uma prática recomendada adicionar seus scripts antes do final de sua tag `<body>` em seu HTML.
```
  <script src="main.js" /> 
  <script> 
    alert('hello this is my Javascript doing things!'); 
  </script> 
 </body> 
```

Você pode ver a documentação oficial do elemento script no [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)