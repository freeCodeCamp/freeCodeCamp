---
title: Test Driven Development
localeTitle: Desenvolvimento Orientado a Testes
---
## Desenvolvimento Orientado a Testes

Test Driven Development (TDD) é uma das abordagens do Agile Software Development. Baseia-se no conceito de que

> você deve escrever um caso de teste para o seu código mesmo antes de escrever o código

Aqui, escrevemos primeiro o teste unitário e depois escrevemos o código para concluir o teste com sucesso. Isso economiza tempo gasto para realizar teste de unidade e outros testes semelhantes, pois estamos indo adiante com a iteração bem-sucedida do teste, além de levar à obtenção de modularidade no código. É basicamente composto por 4 etapas

*   Escreva um caso de teste
    
*   Veja o teste falhar (vermelho)
    
*   Faça o teste passar, fazendo com que os crimes no processo (Verde)
    
*   Refatorar o código para estar de acordo com os padrões (Refatorar)
    
    Essas etapas seguem o princípio do Refator Vermelho-Verde. Red-Green certifique-se de escrever o código mais simples possível para resolver o problema, enquanto o último passo garante que o código que você escreve está de acordo com os padrões.
    

Cada novo recurso do seu sistema deve seguir as etapas acima.

![fluxo de tdd](http://www.agiledata.org/images/tddSteps.jpg)

#### Mais Informações:

[Introdução](http://agiledata.org/essays/tdd.html) do Agile Data [ao TDD](http://agiledata.org/essays/tdd.html)

Wiki no [TDD](https://en.wikipedia.org/wiki/Test-driven_development)

Martin Fowler [está morto em TDD?](https://martinfowler.com/articles/is-tdd-dead/) (Uma série de conversas gravadas sobre o assunto)

Livro de Kent Beck [Test Driven Development by Example](https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530)

[Ciclos de TDD do](http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) tio Bob