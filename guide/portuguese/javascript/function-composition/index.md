---
title: Function Composition
localeTitle: Função Composição
---## Composição função

A composição da função é a aplicação pontual de uma função ao resultado de outra. Os desenvolvedores fazem isso de maneira manual todos os dias quando o ninho funciona:

```javascript
compose = (fn1, fn2) => value => fn2(fn1(value)) 
```

Mas isso é difícil de ler. Existe uma maneira melhor de usar a composição de funções. Em vez de lê-los de dentro para fora:

```javascript
add2AndSquare = (n) => square(add2(n)) 
```

Podemos usar uma função de ordem superior para encadear de forma ordenada.

```javascript
add2AndSquare = compose( add2, square) 
```

Uma simples implementação de composição seria:

```javascript
compose = (f1, f2) => value => f2( f1(value) ); 
```

Para obter ainda mais flexibilidade, podemos usar a função reduceRight:

```javascript
compose = (...fns) => (initialVal) => fns.reduceRight((val, fn) => fn(val), initialVal); 
```

A leitura da composição da esquerda para a direita permite um claro encadeamento de funções de ordem superior. Exemplos do mundo real estão adicionando autenticações, registro e propriedades de contexto. É uma técnica que permite a reutilização no mais alto nível. Aqui estão alguns exemplos de como usá-lo:

```javascript
// example 
 const add2        = (n) => n + 2; 
 const times2      = (n) => n * 2; 
 const times2add2  = compose(add2, times2); 
 const add6        = compose(add2, add2, add2); 
 
 times2add2(2);  // 6 
 add2tiems2(2);  // 8 
 add6(2);        // 8 
```

Você pode pensar que isso é uma programação funcional avançada e não é relevante para programação frontend. Mas também é útil em aplicativos de página única. Por exemplo, você pode adicionar comportamento a um componente React usando componentes de ordem superior:

```javascript
function logProps(InputComponent) { 
  InputComponent.prototype.componentWillReceiveProps = function(nextProps) { 
    console.log('Current props: ', this.props); 
    console.log('Next props: ', nextProps); 
  }; 
  return InputComponent; 
 } 
 
 // EnhancedComponent will log whenever props are received 
 const EnhancedComponent = logProps(InputComponent); 
```

Em conclusão, a composição da função permite a reutilização da funcionalidade em um nível muito alto. Se as funções forem bem estruturadas, permitirá que os desenvolvedores criem novos comportamentos com base no comportamento existente.

Também aumenta a legibilidade das implementações. Em vez de funções de aninhamento, você pode limpar funções de cadeia e criar funções de ordem superior com nomes significativos.