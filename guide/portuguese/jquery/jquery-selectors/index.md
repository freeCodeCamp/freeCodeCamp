---
title: jQuery Selectors
localeTitle: Seletores de jQuery
---
## Seletores de jQuery

O jQuery usa seletores de estilo CSS para selecionar partes ou elementos de uma página HTML. Em seguida, ele permite que você faça algo com os elementos usando métodos jQuery ou funções.

Para usar um desses seletores, digite um sinal de dólar e parênteses depois dele: `$()` . Isso é um atalho para a função `jQuery()` . Dentro dos parênteses, adicione o elemento que você deseja selecionar. Você pode usar aspas simples ou duplas. Depois disso, adicione um ponto após os parênteses e o método que você deseja usar.

No jQuery, os seletores de classe e ID são como aqueles em CSS.

Aqui está um exemplo de um método jQuery que seleciona todos os elementos de parágrafo e adiciona uma classe de "selecionados" a eles:

```javascript
<p>This is a paragraph selected by a jQuery method.</p> 
 <p>This is also a paragraph selected by a jQuery method.</p> 
 
 $("p").addClass("selected"); 
```

No jQuery, os seletores de classe e ID são os mesmos que no CSS. Se você quiser selecionar elementos com uma determinada classe, use um ponto ( `.` ) E o nome da classe. Se você quiser selecionar elementos com um determinado ID, use o símbolo de hash ( `#` ) e o nome do ID. Observe que o HTML não faz distinção entre maiúsculas e minúsculas, portanto, é uma prática recomendada manter a marcação HTML e os seletores CSS em letras minúsculas.

Selecionando por classe:

```javascript
<p class="p-with-class">Paragraph with a class.</p> 
 
 $(".p-with-class").css("color", "blue"); // colors the text blue 
```

Selecionando por ID:

```javascript
<li id="li-with-id">List item with an ID.</li> 
 
 $("#li-with-id").replaceWith("<p>Socks</p>"); 
```

Você também pode selecionar determinados elementos junto com suas classes e IDs:

### Selecionando por classe

Se você quiser selecionar elementos com uma determinada classe, use um ponto (.) E o nome da classe.

```html

<p class="pWithClass">Paragraph with a class.</p> 
```

```javascript
$(".pWithClass").css("color", "blue"); // colors the text blue 
```

Você também pode usar o seletor de classe em combinação com um nome de tag para ser mais específico.

```html

<ul class="wishList">My Wish List</ul>`<br> 
```

```javascript
$("ul.wishList").append("<li>New blender</li>"); 
```

### Selecionando por ID

Se você quiser selecionar elementos com um determinado valor de ID, use o símbolo de hash (#) e o nome da ID.

```html

<li id="liWithID">List item with an ID.</li> 
```

```javascript
$("#liWithID").replaceWith("<p>Socks</p>"); 
```

Como no seletor de classe, isso também pode ser usado em combinação com um nome de tag.

```html

<h1 id="headline">News Headline</h1> 
```

```javascript
$("h1#headline").css("font-size", "2em"); 
```

### Seletores que atuam como filtros

Existem também seletores que atuam como filtros - eles geralmente começam com dois-pontos. Por exemplo, o `:first` seletor seleciona o elemento que é o primeiro filho de seu pai. Aqui está um exemplo de uma lista não ordenada com alguns itens da lista. O seletor de jQuery abaixo da lista seleciona o primeiro elemento `<li>` na lista - o item de lista "Um" - e, em seguida, usa o método `.css` para transformar o texto em verde.

```html

   <ul> 
      <li>One</li> 
      <li>Two</li> 
      <li>Three</li> 
   </ul> 
```

```javascript
$("li:first").css("color", "green"); 
```

**Nota:** Não se esqueça que aplicar css em JavaScript não é uma boa prática. Você deve sempre dar seus estilos em arquivos css.

Outro seletor de filtragem `:contains(text)` , seleciona elementos que possuem um determinado texto. Coloque o texto que você deseja combinar entre parênteses. Aqui está um exemplo com dois parágrafos. O seletor do jQuery pega a palavra "Moto" e muda sua cor para amarelo.

```html

    <p>Hello</p> 
    <p>World</p> 
```

```javascript
$("p:contains('World')").css("color", "yellow"); 
```

Da mesma forma, o `:last` selector seleciona o elemento que é o último filho de seu pai. O seletor de JQuery abaixo seleciona o último elemento `<li>` na lista - o item de lista "Três" - e, em seguida, usa o método `.css` para transformar o texto em amarelo.

`$("li:last").css("color", "yellow");`

**Nota:** No seletor jQuery, `World` está entre aspas simples, porque já está dentro de um par de aspas duplas. Sempre use aspas simples entre aspas duplas para evitar o encerramento não intencional de uma string.

**Seletores Múltiplos** No jQuery, você pode usar vários seletores para aplicar as mesmas alterações a mais de um elemento, usando uma única linha de código. Você faz isso separando os diferentes ids com uma vírgula. Por exemplo, se você deseja definir a cor do plano de fundo de três elementos com ids cat, dog e rat, respectivamente, para vermelho, simplesmente faça:
```
$("#cat,#dog,#rat").css("background-color","red"); 
```

Estes são apenas alguns dos seletores disponíveis para uso no jQuery. Veja a seção Mais Informações para um link para a lista completa no site da jQuery.

#### Mais Informações:

*   [Lista completa de seletores de jQuery](http://api.jquery.com/category/selectors/)