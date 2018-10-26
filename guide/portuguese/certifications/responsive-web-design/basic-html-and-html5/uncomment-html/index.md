---
title: Uncomment HTML
localeTitle: HTML sem comentário
---
## HTML sem comentário

O tópico do comentário é muitas vezes um pouco confuso no início. Olhe para o exemplo:
```
<!-- This is a commented block. 
 It doesn't matter how long it is, if it has <h1>HTML elements</h1> in it or if it develops 
 into 
 few lines, 
 everything between the first weird series of character and the last is commented out --> 
```

Você pode usar o comentário na linha também: `<!-- Uh, I does not exists! -->` e aqui está!

A única coisa a considerar é que quando você vê este conjunto de char `<!--` tudo de lá é comentado desde que você encontrou o specular `-->` ; Estas são as tags de abertura e fechamento de um elemento HTML!

##### UNCOMMENT

Uncomment significa tirar coisas do texto do comentário: para descomentar o elemento h3 da seguinte frase (que é tudo comentado):
```
<!-- <h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> --> 
```

é tão fácil quanto:
```
<!-- <h1>Comment header</h1> --> <h3>Comment subtle</h3> <!-- <article>I am the text of the comment</article> --> 
```

Observe como foi adicionada uma tag de comentário de fechamento ( `-->` ) antes do elemento HTML h3 para corresponder à tag de comentário de abertura no início da sentença e adicionou uma tag de comentário de abertura ( `<!--` ) para corresponder ao fechamento tag no final: desta forma você criou dois comentários inline, um antes do elemento h3 e um depois !.

Se você quiser descomentar tudo, fica ainda mais fácil:
```
<h1>Comment header</h1> <h3>Comment subtle</h3> <article>I am the text of the comment</article> 
```

Basta remover a tag de abertura e fechamento do comentário.