---
title: CSS Method
localeTitle: Método CSS
---
## Método CSS

O método jQuery `.css()` obtém o valor de uma propriedade de estilo calculado para o primeiro elemento no conjunto de elementos correspondentes ou define uma ou mais propriedades CSS para cada elemento correspondente.

### Obtendo

Para retornar o valor de uma propriedade CSS especificada, use a seguinte sintaxe:

```js
    $(selector).css(propertyName); 
```

Por exemplo:

```js
    $('#element').css('background'); 
```

Nota: Aqui podemos usar qualquer seletor de css, por exemplo: element (seletor de tags HTML), .element (Class Selector), #element (seletor de ID).

### Configuração

Para definir uma propriedade CSS especificada, use a seguinte sintaxe:

```js
    $(selector).css(propertyName,value); 
```

Por exemplo:

```js
    $('#element').css('background','red'); 
```

Para definir várias propriedades CSS, você terá que usar a sintaxe literal do objeto como esta:

```js
    $('#element').css({ 
        'background': 'gray', 
        'color': 'white' 
    }); 
```

Se você quiser alterar uma propriedade rotulada com mais de uma palavra, consulte este exemplo:

Para alterar `background-color` de `background-color` de um elemento

```js
    $('#element').css('background-color', 'gray'); 
```

#### Mais Informações:

Documentação: [api.jquery](http://api.jquery.com/css/)