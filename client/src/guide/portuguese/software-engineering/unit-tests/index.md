---
title: Unit Tests
localeTitle: Testes Unitários
---
## Testes Unitários

O teste unitário é um tipo de teste encontrado na parte inferior da pirâmide de teste de software. Isso envolve quebrar a base de código em partes menores (ou unidades) e testá-las isoladamente. Dependendo do tipo de linguagem de programação (ou paradigma), isso pode ser contra qualquer coisa que você defina como uma unidade, embora a prática mais comum seja contra funções.

### Por que fazê-lo?

*   **Proteção** - Teste de unidade protege contra a introdução de bugs novos ou antigos para programação defensiva
*   **Confiança** - Você pode adicionar alterações, reutilizar ou refatorar códigos (ambos muito comuns) e ter certeza de que não adicionou um bug
*   **Documentação** - O teste de unidade documenta o comportamento e o fluxo de código, facilitando a compreensão de alguém novo no código
*   **Isolation** - isola um módulo do recurso inteiro. Essa abordagem obriga você a pensar em um módulo por si só e perguntar qual é o seu trabalho?
*   **Qualidade** - Como o teste de unidade força você a pensar e usar sua própria API, ele impõe interfaces e padrões bons / extensíveis. Pode indicar qualquer acoplamento ou complexidade excessiva que deva ser abordado. Código ruim geralmente é muito mais difícil de testar
*   **Padrão da indústria** - O teste de unidade é uma disciplina comum nos dias de hoje e é um requisito para uma grande parte das empresas de software
*   **Menos bugs** - Pesquisas substanciais sugerem que a aplicação de testes a uma aplicação pode reduzir a densidade de bugs de produção em 40% - 80%.

### Exemplo (em Javascript)

Suponha que haja uma função escrita no arquivo **add.js**

```javascript
var add = function(number1, number2){ 
  return number1 + number2; 
 } 
```

Agora, a fim de escrever o teste unitário desta função em particular, podemos usar ferramentas de teste como o [mocha](http://mochajs.org/)

```javascript
const mocha = require('mocha') 
 const chai = require('chai')  // It is an assertion library 
 describe('Test to check add function', function(){ 
  it('should add two numbers', function(){ 
    (add(2,3)).should.equal(5)  //Checking that 2+3 should equal 5 using the given add function 
  }); 
 }); 
```

### Desenvolvimento Orientado a Testes

O teste unitário é uma característica fundamental da abordagem de desenvolvimento orientado a testes (TDD) para o desenvolvimento de software. Nesta abordagem, o código para recursos ou funções específicas é escrito através do uso repetido de um ciclo muito curto. Primeiro, o desenvolvedor escreve um conjunto de testes unitários automatizados e garante que eles falhem inicialmente. Em seguida, o desenvolvedor implementa a quantidade mínima de código necessária para passar nos casos de teste. Uma vez que tenha sido validado que o código está se comportando conforme o esperado, o desenvolvedor volta atrás e refatora o código para aderir a qualquer padrão de codificação relevante.

### Mais Informações

Martin Fowler em testes unitários: [martinfowler.com](https://www.martinfowler.com/bliki/UnitTest.html)

Robert Martin também conhecido como "Dr. Bob" em TDD: [butunclebob.com](http://www.butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd)

Eric Elliot em testes unitários e TDD: [Medium](https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9)