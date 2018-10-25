---
title: Comments
localeTitle: Comentários
---
## Comentários

Os programadores usam comentários para adicionar dicas, anotações, sugestões ou avisos ao seu código-fonte; eles não têm efeito na saída real do código. Os comentários podem ser muito úteis para explicar a intenção do que seu código está ou deveria estar fazendo.

É sempre uma boa prática começar comentando com mais frequência do que não, já que isso pode ajudar aqueles que lêem seu código a entender exatamente o que seu código pretende fazer.

JavaScript tem duas maneiras de atribuir comentários em seu código.

A primeira maneira é o `//` comentário; todo o texto seguindo `//` na mesma linha em um comentário. Por exemplo:

```javascript
function hello() { 
  // This is a one line JavaScript comment 
  console.log("Hello world!"); 
 } 
 hello(); 
```

A segunda maneira é o `/* */` comment, que pode ser usado para comentários de linha única e multilinha. Por exemplo:

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

Você também pode impedir a execução de código Javascript apenas commeting as linhas de código como este:

```javascript
function hello() { 
  /*console.log("Hello world!");*/ 
 } 
 hello(); 
```

#### Mais Informações:

[Como escrever comentários em JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)

### Muitos IDEs vêm com um atalho de teclado para comentar linhas.

1.  Realce o texto a ser comentado
2.  Mac: Comando push (tecla Apple) e "/"
3.  Windows: controle de envio e "/"
4.  Você também pode descomentar o código, executando as mesmas etapas

Um atalho para comentar uma seção de javascript em muitos editores de código é destacar as linhas de código que você deseja comentar, então pressione `Cmd/Ctrl + /` .

Os comentários também são muito úteis para o teste de código, pois você pode impedir que uma determinada linha de código / bloco seja executada.

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

#### Mais Informações:

*   [Como escrever comentários em JavaScript](https://www.digitalocean.com/community/tutorials/how-to-write-comments-in-javascript)