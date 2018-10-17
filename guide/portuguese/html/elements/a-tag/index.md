---
title: A Tag
localeTitle: Um dia
---
## Uma etiqueta

A tag `<a>` ou elemento de _âncora_ cria um hiperlink para outra página ou arquivo. Para vincular a uma página ou arquivo diferente, a tag `<a>` também deve conter um atributo `href` , que indica o destino do link.

O texto entre as tags `<a>` abertura e fechamento se torna o link.

Por padrão, uma página vinculada é exibida na janela atual do navegador, a menos que outro destino seja especificado.

#### Exemplo:

```html

  <a href= "https://guide.freecodecamp.org/">freeCodeCamp</a> 
```

Uma imagem também pode ser transformada em um link, colocando a tag `<img>` em uma tag `<a>` .

#### Exemplo:

```html

  <a href= "https://guide.freecodecamp.org/"><img src="logo.svg"></a> 
```

Também é possível determinar o alvo da tag `<a>` . Isso é feito usando o atributo de `target` . O atributo `target` possui os seguintes valores disponíveis `_blank|_self|_parent|_top|framename` .

`_blank` : abre o link em uma nova guia ou em uma nova janela, dependendo das preferências do usuário. `_self` : Abre o link no mesmo frame (comportamento padrão). `_parent` : abre o link no frame pai, por exemplo, quando o usuário clica em um link em um iframe. `_top` : abre o link no corpo inteiro da janela. `framename` : Abre o link no quadro especificado.

#### Exemplo:

```html

  <a href= "https://guide.freecodecamp.org/" target="_blank">freeCodeCamp</a> 
```

[freeCodeCamp](https://guide.freecodecamp.org/) Esse link é criado da mesma maneira que o bloco de código de exemplo sugere. Clique para ver como funciona.

#### Mais Informações:

*   [O elemento HTML <a>: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
*   [Uma tag: w3schools](https://www.w3schools.com/tags/tag_a.asp)
*   [Uma tag: htmlreference.io](http://htmlreference.io/element/a/)