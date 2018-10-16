---
title: For...Of Loop
localeTitle: Para ... De Loop
---
A instrução `for...of` instrução cria um loop iterando sobre objetos iteráveis ​​(incluindo objeto Array, Map, Set, Arguments e assim por diante), chamando um gancho de iteração customizado com instruções a serem executadas para o valor de cada propriedade distinta.

```javascript
    for (variable of object) { 
        statement 
    } 
```

| | Descrição | | ---------- | ------------------------------------- | | variável | Em cada iteração, um valor de uma propriedade diferente é atribuído à variável. | | objeto | Objeto cujas propriedades enumeráveis ​​são iteradas. |

## Exemplos

### Matriz

```javascript
    let arr = [ "fred", "tom", "bob" ]; 
 
    for (let i of arr) { 
        console.log(i); 
    } 
 
    // Output: 
    // fred 
    // tom 
    // bob 
```

### Mapa

```javascript
    var m = new Map(); 
    m.set(1, "black"); 
    m.set(2, "red"); 
 
    for (var n of m) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1,black 
    // 2,red 
```

### Conjunto

```javascript
    var s = new Set(); 
    s.add(1); 
    s.add("red"); 
 
    for (var n of s) { 
        console.log(n); 
    } 
 
    // Output: 
    // 1 
    // red 
```

### Argumentos objeto

```javascript
    // your browser must support for..of loop 
    // and let-scoped variables in for loops 
 
    function displayArgumentsObject() { 
        for (let n of arguments) { 
            console.log(n); 
        } 
    } 
 
 
    displayArgumentsObject(1, 'red'); 
 
    // Output: 
    // 1 
    // red 
```

# Outros recursos:

*   [Ligação MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for…of)
*   [Link do MSDN](https://msdn.microsoft.com/library/dn858238%28v=vs.94%29.aspx?f=255&MSPPError=-2147217396)
*   [argumentos @@ iterador](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)