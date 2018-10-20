---
title: Observer pattern
localeTitle: Padrão observador
---
O padrão Observer oferece um modelo de assinatura no qual os objetos se inscrevem em um evento e são notificados quando o evento ocorre.

## Padrão observador

Esse padrão é a base da programação orientada a eventos. No desenvolvimento de front-end, esse é um padrão essencial para dimensionar de forma sólida a lógica de sua aplicação. Nesse padrão, você faz a diferença entre o **sujeito** e os **observadores** . Os assuntos são os próprios eventos, como um _clique_ , um _pressionamento de tecla_ ou um sinal do servidor. Todos os **observadores** assinados são notificados quando um assunto muda de estado (quando um evento é disparado). Para mais informações sobre eventos leia aqui [Programação Dirigida por Evenet](https://www.technologyuk.net/software-development/designing-software/event-driven-programming.shtml)

### Inscrevendo-se

A vantagem desse padrão é ter uma coleção de objetos assinados que responderão a um evento em vez de chamar uma função em todos os objetos que devem ser notificados. Outra vantagem é que os observadores são inscritos por meio de uma interface, que permite que as mudanças na função do evento estejam apenas dentro da função.

## Outros recursos

Um exemplo de código e mais no [Observer Design Pattern](http://www.dofactory.com/javascript/observer-design-pattern)