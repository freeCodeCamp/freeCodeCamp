---
title: Override Styles in Subsequent CSS
localeTitle: Substituir estilos no CSS subseqüente
---
## Substituir estilos no CSS subseqüente

O bit mais importante a ser lembrado quando se deseja substituir estilos em CSS subseqüente é a ordem em que as classes são criadas.

O último estilo atualizado terá precedência sobre as classes anteriormente escritas.

Por exemplo:

```html

<style> 
  body { 
    color: purple; 
  } 
  .red-text { 
    color: red; 
  } 
  .blue-text { 
    color: blue; 
  { 
 </style> 
```

Agora, quando você cria qualquer texto no `body` , ele terá a cor do texto `purple` atribuída a ele.

Para começar a experimentar o processo de substituição, agora você pode adicionar a classe `"red-text"` para ver os resultados.

Usando o formato acima, o texto abaixo substituirá a `purple` fonte anteriormente `purple` por `red` .

```html

<h1 class="red-text">Example</h1> 
```

Quando você quiser adicionar várias classes, você pode usar este formato:

```html

<h1 class="class-name1 class-name2 class-name3">Example</h1> 
```

Agora você pode adicionar a última classe criada acima ( `"blue-text"` ) ao mesmo exemplo acima para ver os resultados.

```html

<h1 class="red-text blue-text">Example</h1> 
```

Isso selecionará automaticamente a última classe criada na sua seção de estilos, que nesse caso era `"blue-text"` .

Mesmo se você aplicar o `red-text` da primeira classe atrás do `blue-text` da segunda classe, o processo de substituição escolherá a última classe criada. Nesse caso, essa classe é o `blue-text` .

Então, por exemplo:

```html

<h1 class="blue-text red-text">Example</h1> 
```

Isso ainda exibirá uma `blue` fonte `blue` devido à ordem na seção de estilos.

A classe de `blue-text` foi criada por último, na parte de baixo ( `</style>` ).