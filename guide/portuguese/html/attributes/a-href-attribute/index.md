---
title: A Href Attribute
localeTitle: Um atributo Href
---
## Um atributo Href

O atributo `<a href>` refere-se a um destino fornecido por um link. A `a` (âncora) tag é morto sem o `<href>` atributo. Às vezes, no seu fluxo de trabalho, você não deseja um link ativo ou ainda não saberá o destino do link. Nesse caso, é útil definir o atributo `href` como `"#"` para criar um link inativo. O atributo `href` pode ser usado para vincular a arquivos ou arquivos locais na Internet.

Por exemplo:

```html

<html> 
  <head> 
    <title>Href Attribute Example</title> 
  </head> 
  <body> 
    <h1>Href Attribute Example</h1> 
      <p> 
        <a href="https://www.freecodecamp.org/contribute/">The freeCodeCamp Contribution Page</a> shows you how and where you can contribute to freeCodeCamp's community and growth. 
      </p> 
    </h1> 
  </body> 
 </html> 
```

O atributo `<a href>` é suportado por todos os navegadores.

#### Mais atributos:

`hreflang` : especifica o idioma do recurso vinculado. `target` : especifica o contexto no qual o recurso vinculado será aberto. `title` : define o título de um link, que aparece para o usuário como uma dica de ferramenta.

### Exemplos

```html

<a href="#">This is a dead link</a> 
 <a href="https://www.freecodecamp.org">This is a live link to freeCodeCamp</a> 
 <a href="https://html.com/attributes/a-href/">more with a href attribute</a> 
```

### Âncoras in-page

Também é possível definir uma âncora para determinado local da página. Para fazer isso, você deve primeiro colocar uma guia no local na página com a tag e o atributo necessário "name" com qualquer descrição de palavra-chave, assim:

```html

<a name="top"></a> 
```

Qualquer descrição entre tags não é necessária. Depois disso, você pode colocar um link que leva a essa âncora em qualquer lugar na mesma página. Para fazer isso, você deve usar a tag com o atributo necessário "href" com o símbolo # (sharp) e a descrição da âncora de palavras-chave, assim:

```html

<a href="#top">Go to Top</a> 
```

### Links de Imagem

O `<a href="#">` também pode ser aplicado a imagens e outros elementos HTML.

### Exemplo

```html

<a href="#"><img itemprop="image" style="height: 90px;" src="http://www.chatbot.chat/assets/images/header-bg_y.jpg" alt="picture">  </a> 
```

### Exemplo

[![cenário](http://www.chatbot.chat/assets/images/header-bg_y.jpg)](#)

### Mais alguns exemplos de href

```html

<base href="https://www.freecodecamp.org/a-href/">This gives a base url for all further urls on the page</a> 
 <link href="style.css">This is a live link to an external stylesheet</a> 

```