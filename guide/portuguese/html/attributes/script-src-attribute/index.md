---
title: Script Src Attribute
localeTitle: Atributo Src Script
---
## Atributo Src Script

O atributo 'src' em um tag é o caminho para um arquivo ou recurso externo que você deseja vincular ao seu documento HTML.

Por exemplo, se você tivesse seu próprio arquivo JavaScript personalizado chamado 'script.js' e quisesse adicionar sua funcionalidade à sua página HTML, você o adicionaria assim:

```html

<!DOCTYPE html> 
 <html lang="en"> 
  <head> 
    <title>Script Src Attribute Example</title> 
  </head> 
  <body> 
 
  <script src="./script.js"></script> 
  </body> 
 </html> 
```

Isso apontaria para um arquivo chamado 'script.js' que está no mesmo diretório que o arquivo .html. Você também pode vincular a outros diretórios usando '..' no caminho do arquivo.

```html

<script src="../public/js/script.js"></script> 
```

Isso eleva o nível de um diretório para um diretório 'público' e depois para um diretório 'js' e depois para o arquivo 'script.js'.

Você também pode usar o atributo 'src' para vincular a arquivos .js externos hospedados por terceiros. Isso é usado se você não quiser baixar uma cópia local do arquivo. Apenas observe que, se o link mudar ou o acesso à rede estiver inativo, o arquivo externo ao qual você está vinculando não funcionará.

Este exemplo vincula a um arquivo jQuery.

```html

<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> 
```

#### Mais Informações:

[Artigo do MDN no HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-src) tag</a></p></x-turndown>