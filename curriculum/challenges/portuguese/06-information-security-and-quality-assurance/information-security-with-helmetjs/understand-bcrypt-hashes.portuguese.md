---
id: 58a25bcef9fc0f352b528e7c
title: Understand BCrypt Hashes
challengeType: 2
videoUrl: ''
localeTitle: Entenda os Hashes do BCrypt
---

## Description
<section id="description"> Como lembrete, este projeto está sendo construído sobre o seguinte projeto inicial no <a href="https://glitch.com/#!/import/github/freeCodeCamp/boilerplate-bcrypt/">Glitch</a> , ou clonado a partir do <a href="https://github.com/freeCodeCamp/boilerplate-bcrypt/">GitHub</a> . Os hashes BCrypt são muito seguros. Um hash é basicamente uma impressão digital dos dados originais - sempre única. Isso é realizado alimentando os dados originais em um algoritmo e retornando um resultado de tamanho fixo. Para complicar ainda mais esse processo e torná-lo mais seguro, você também pode <em>salgar</em> seu hash. Salgar seu hash envolve adicionar dados aleatórios aos dados originais antes do processo de hash, o que dificulta ainda mais a quebra do hash. Os hashes BCrypt sempre se parecerão com <code>$2a$13$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> que tem uma estrutura. O primeiro pequeno bit de dados <code>$2a</code> está definindo que tipo de algoritmo de hash foi usado. A próxima parte de <code>$13</code> define o <em>custo</em> . O custo é sobre a quantidade de energia necessária para calcular o hash. Ele está em uma escala logarítmica de custo 2 e determina quantas vezes os dados são colocados através do algoritmo de hash. Por exemplo, a um custo de 10 você é capaz de hash 10 senhas por segundo em um computador médio, no entanto, a um custo de 15 leva 3 segundos por hash ... e para levá-lo ainda mais, a um custo de 31 seria leva vários dias para concluir um hash. Um custo de 12 é considerado muito seguro neste momento. A última parte do hash <code>$ZyprE5MRw2Q3WpNOGZWGbeG7ADUre1Q8QO.uUUtcbqloU0yvzavOm</code> , parece com uma grande sequência de números, pontos e letras, mas na verdade são duas partes separadas de informações. Os primeiros 22 caracteres são o sal em texto simples, e o resto é a senha com hash! <hr> Para começar a usar o BCrypt, adicione-o como uma dependência em seu projeto e exija-o como &#39;bcrypt&#39; em seu servidor. Envie sua página quando achar que está certo. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: BCrypt é uma dependência
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/package.json") .then(data => { var packJson = JSON.parse(data); assert.property(packJson.dependencies, "bcrypt", "Your project should list "bcrypt" as a dependency"); }, xhr => { throw new Error(xhr.statusText); })'
  - text: O BCrypt foi devidamente requerido
    testString: 'getUserInput => $.get(getUserInput("url")+ "/_api/server.js").then(data => {assert.match(data, /bcrypt.*=.*require.*("|")bcrypt("|")/gi, "You should correctly require and instantiate socket.io as io.");}, xhr => { throw new Error(xhr.statusText); })'

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
