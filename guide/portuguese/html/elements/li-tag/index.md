---
title: Li Tag
localeTitle: Tag Li
---
## Tag Li

A tag `<li>` define um item da lista em uma lista. A tag `<li>` pode ser usada com listas não ordenadas ( `<ul>` ), listas ordenadas ( `<ol>` ) e menus ( `<menu>` ).

Para definir um item da lista, agrupe os elementos desejados em uma tag `<li>` . `<li>` elementos `<li>` devem estar contidos em um elemento pai que seja uma lista.

### Exemplo

```html

<body> 
  <ul> 
    <li> 
      <p>I'm a list item</p> 
    </li> 
    <li> 
      <p>I'm a list item too</p> 
    </li> 
    <li> 
      <p>Me three/p> 
    </li> 
  </ul> 
 </body> 
```

Em uma lista ordenada, `<li>` aparece como um item com um marcador.

*   Primeiro item
*   Segundo item
*   Terceiro item

Em uma lista não ordenada, `<li>` aparece como um item numerado.

1.  Primeiro item
2.  Segundo item
3.  Terceiro item

Esse contador de exibição numérico pode ser personalizado usando a propriedade CSS _list-style-type_ .

Exemplos:

```html

<!-- In a simple unordered list --> 
 <ul> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ul> 
 
 <!-- In a simple ordered list --> 
 <ol> 
  <li>First item</li> 
  <li>Second item</li> 
  <li>Third item</li> 
 </ol> 
 
 <!-- In a menu list --> 
 <menu> 
  <li>Menu item one</li> 
  <li>Menu item two</li> 
  <li>Menu item three</li> 
 </menu> 
```

### Atributos

O elemento `<li>` possui os seguintes elementos:

#### Tipo

O atributo `type` define o tipo de numeração que será usado na lista. Os seguintes valores são usados ​​para determinar qual estilo de numeração será usado:

*   `1` : números
*   `a` : letras minúsculas
*   `A` : letras maiúsculas
*   `i` : numerais minúsculos
*   `I` : numerais maiúsculos

#### Exemplo

```html

<body> 
  <ol type="I"> 
    <li>list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

O HTMl acima irá gerar:

1.  item de lista
2.  item de lista
3.  item de lista

#### Valor

O atributo `value` especifica a ordem numérica do `<li>` atual. Este atributo aceita apenas um valor numérico e só pode ser usado com uma lista ordenada. Todos os itens da lista que se seguem serão ordenados numericamente com base na entrada numérica do atributo `value` .

#### Exemplo

```html

<body> 
  <ol> 
    <li value="4">list item</li> 
    <li>list item</li> 
    <li>list item</li> 
  </ol> 
 </body> 
```

O HTML acima irá gerar:

4.  item de lista
5.  item de lista
6.  item de lista

### Aninhando outra lista como um item

Além de criar itens individuais, você também pode usar tags `<li>` para criar uma lista aninhada, ordenada ou não. Para fazer isso, você aninha um `<ol>` ou `<ul>` _dentro de_ uma tag `<li>` .

Aqui está uma lista não ordenada com uma lista ordenada aninhada.

*   Primeiro item
*   Segundo item

1.  Primeiro subitem
2.  Segundo subitem

*   Terceiro item

E aqui está uma lista ordenada com uma lista aninhada e não ordenada.

1.  Primeiro item
2.  Segundo item

*   Primeiro subitem
*   Segundo subitem

1.  Terceiro item

```html

<!-- An unordered list with a nested, ordered list. --> 
 <ul> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ol> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ol> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ul> 
 
 <!-- An ordered list with a nested, unordered list. --> 
 <ol> 
  <li>First item</li> 
  <li>Second item  <!-- No closing </li> tag before the nested list --> 
    <ul> 
      <li>First sub-item</li> 
      <li>Second sub-item</li> 
    </ul> 
  </li>            <!-- The closing </li> tag comes after the nested list --> 
  <li>Third item</li> 
 </ol> 
```

#### Mais Informações:

*   [O elemento HTML <li>: MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li)
*   [Tag HTML <li>: w3schools](https://www.w3schools.com/cssref/pr_list-style-type.asp)
*   [Propriedade de estilo de lista CSS: CSS-Tricks](https://css-tricks.com/almanac/properties/l/list-style/)