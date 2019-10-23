---
id: 5900f3a81000cf542c50feba
challengeType: 5
title: 'Problem 59: XOR decryption'
videoUrl: ''
localeTitle: 'Problema 59: Descriptografia XOR'
---

## Description
<section id="description"> Cada caractere em um computador recebe um código único e o padrão preferido é o ASCII (Código Padrão Americano para Intercâmbio de Informações). Por exemplo, letras maiúsculas A = 65, asterisco (*) = 42 e letra minúscula k = 107. Um método moderno de criptografia é pegar um arquivo de texto, converter os bytes em ASCII, e XOR cada byte com um determinado valor, tirado de um chave secreta. A vantagem da função XOR é que, usando a mesma chave de criptografia no texto cifrado, restaura o texto simples; por exemplo, 65 XOR 42 = 107 e, em seguida, 107 XOR 42 = 65. Para criptografia inquebrável, a chave tem o mesmo tamanho da mensagem de texto simples e a chave é composta de bytes aleatórios. O usuário manteria a mensagem criptografada e a chave de criptografia em locais diferentes e, sem as duas metades, é impossível descriptografar a mensagem. Infelizmente, esse método é impraticável para a maioria dos usuários, portanto, o método modificado é usar uma senha como chave. Se a senha for menor que a mensagem, o que é provável, a chave será repetida ciclicamente em toda a mensagem. O saldo desse método é usar uma chave de senha suficientemente longa para segurança, mas curta o suficiente para ser memorável. Sua tarefa foi facilitada, pois a chave de criptografia consiste em três caracteres minúsculos. Usando cipher.txt (clique com o botão direito e &#39;Salvar link / destino como ...&#39;), um arquivo contendo os códigos ASCII criptografados e o conhecimento de que o texto sem formatação deve conter palavras comuns em inglês, descriptografar a mensagem e localizar a soma do texto. Valores ASCII no texto original. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert.strictEqual(euler59(), 107359, "<code>euler59()</code> should return 107359.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler59() {
  // Good luck!
  return true;
}

euler59();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
