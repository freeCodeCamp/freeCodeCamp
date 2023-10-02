---
id: 587d7dbf367417b2b2512bbc
title: Dividir os estilos em partes menores com partials
challengeType: 0
forumTopicId: 301459
dashedName: split-your-styles-into-smaller-chunks-with-partials
---

# --description--

<dfn>Partials</dfn> no Sass são arquivos separados que possuem segmentos de código CSS. Estes são importados e usados em outros arquivos Sass. Essa é uma ótima maneira de agrupar código semelhante em um módulo para mantê-lo organizado.

Nomes de partials começam com o caractere sublinhado (`_`), que diz para Sass que é um pequeno segmento de CSS e para não convertê-lo em um arquivo CSS. Além disso, os arquivos Sass terminam com a extensão de arquivo `.scss`. Para trazer o código partial para outro arquivo Sass, use a diretiva `@import`.

Por exemplo, se todos os seus mixins são salvos em uma partial chamada "\_mixins.scss", e eles são necessários no arquivo "main.scss", essa é a forma de como usá-los no arquivo principal:

```scss
@import 'mixins'
```

Observe que o sublinhado e a extensão de arquivo não são necessários na instrução `import` - o Sass entende que é partial. Uma vez que um partial é importado para um arquivo, todas as variáveis, mixins e outro código estão disponíveis para uso.

# --instructions--

Escreva uma declaração `@import` para importar uma partial chamada `_variables.scss` para o arquivo main.scss.

# --hints--

O código deve usar a diretiva `@import` e não deve incluir o sublinhado no nome do arquivo.

```js
assert(code.match(/@import\s+?('|")variables\1/gi));
```

# --seed--

## --seed-contents--

```html
<!-- The main.scss file -->
```

# --solutions--

```html
@import 'variables'
```
