---
title: Attributes
localeTitle: Atributos
---
# Atributos HTML

Elementos HTML podem ter atributos, que contêm informações adicionais sobre o elemento.

Os atributos HTML geralmente vêm em pares nome-valor e sempre vão na tag de abertura de um elemento. O nome do atributo diz que tipo de informação você está fornecendo sobre o elemento e o valor do atributo é a informação real.

Por exemplo, um elemento de âncora ( `<a>` ) em um documento HTML cria links para outras páginas ou outras partes da página. Você usa o atributo `href` na tag de abertura `<a>` para informar ao navegador onde o link envia um usuário.

Aqui está um exemplo de um link que envia os usuários para a página inicial do freeCodeCamp:

```html

<a href="www.freecodecamp.org">Click here to go to freeCodeCamp!</a> 
```

Observe que o nome do atributo ( `href` ) e o valor ("www.freeCodeCamp.org") são separados por um sinal de igual e aspas envolvem o valor.

Existem muitos atributos HTML diferentes, mas a maioria deles só funciona em determinados elementos HTML. Por exemplo, o atributo `href` não funcionará se for colocado em uma tag de abertura `<h1>` .

No exemplo acima, o valor fornecido para o atributo `href` pode ser qualquer link válido. No entanto, alguns atributos têm apenas um conjunto de opções válidas que você pode usar ou os valores precisam estar em um formato específico. O atributo `lang` informa ao navegador o idioma padrão do conteúdo em um elemento HTML. Os valores para o `lang` atributo deve usar linguagem ou códigos de países, padrão, tais como `en` para Inglês, ou `it` para o italiano.

## Atributos booleanos

Alguns atributos HTML não precisam de um valor porque eles têm apenas uma opção. Estes são chamados de atributos booleanos. A presença do atributo em uma tag será aplicada a esse elemento HTML. No entanto, não há problema em escrever o nome do atributo e defini-lo como igual à única opção do valor. Nesse caso, o valor geralmente é o mesmo que o nome do atributo.

Por exemplo, o elemento `<input>` em um formulário pode ter um atributo `required` . Isso requer que os usuários preencham esse item antes de enviarem o formulário.

Aqui estão exemplos que fazem a mesma coisa:

```html

<input type="text" required > 
 <input type="text" required="required" > 
```

## Outros recursos

[Links HTML](#) [Atributo Href](#) [Atributo Lang](#) [Elemento de entrada HTML](#) [Atributo Obrigatório](#)
