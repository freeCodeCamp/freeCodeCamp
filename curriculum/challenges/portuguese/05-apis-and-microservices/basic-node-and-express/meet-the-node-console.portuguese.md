---
id: 587d7fb0367417b2b2512bed
title: Meet the Node console
localeTitle: Conheça o console do nó
challengeType: 2
---

## Description
<section id='description'> 
Durante o processo de desenvolvimento, é importante poder verificar o que está acontecendo em seu código. O nó é apenas um ambiente JavaScript. Como o JavaScript do lado do cliente, você pode usar o console para exibir informações de depuração úteis. Na sua máquina local, você veria a saída do console em um terminal. Na Glitch você pode abrir os logs na parte inferior da tela. Você pode alternar o painel de registro com o botão "Registros" (no canto superior esquerdo, sob o nome do aplicativo). 
Para começar, basta imprimir o clássico "Hello World" no console. Recomendamos manter o painel de registro aberto enquanto trabalha nesses desafios. Lendo os logs você pode estar ciente da natureza dos erros que podem ocorrer. 
</section>

## Instructions
<section id='instructions'> 
Modifique o arquivo <code>myApp.js</code> para registrar "Hello World" no console. 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>"Hello World"</code> deve estar no console
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/hello-console'').then(data => { assert.isTrue(data.passed, ''"Hello World" is not in the server console''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
