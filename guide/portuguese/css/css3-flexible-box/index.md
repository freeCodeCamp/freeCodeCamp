---
title: CSS3 Flexible Box
localeTitle: Caixa Flexível CSS3
---
## Caixa Flexível CSS3

O modelo Flexbox oferece uma maneira eficiente de layout, alinhamento e distribuição de espaço entre os elementos do documento, mesmo quando a viewport e o tamanho dos elementos são dinâmicos ou desconhecidos.

A ideia mais importante por trás do modelo Flexbox é que o contêiner pai pode alterar a largura / altura / ordem dos itens para melhor preencher o espaço disponível. Um contêiner de flexão expande os itens para preencher o espaço livre disponível ou os reduz para evitar estouro. 1

#### Uso básico

O Flexbox pode ser usado para centralizar qualquer quantidade de elementos dados dentro de um elemento. Um exemplo básico disso é o seguinte código:

`css .center-elements-inside { display: flex; flex-direction: row; justify-content: center; }`

Vamos quebrar este exemplo. Primeiro, definimos a propriedade de exibição como "flexível" para podermos aplicar nossas propriedades de flexbox. Em seguida, declaramos a maneira como o flexbox lidará com nossos elementos. Isso pode ser em uma linha ou em uma coluna. Configurá-lo para linha alinhará os elementos horizontais dentro do elemento. A coluna irá alinhá-los na vertical.

Agora vamos dar uma breve olhada em "justify-content". Esta propriedade declara como os elementos são distribuídos dentro do elemento pai. Nós escolhemos o valor "center". Isso significa que todos os elementos dentro desse elemento serão centralizados. Poderíamos ainda escolher valores tais como "flex-start" e "flex-end", que alinhariam os elementos no início ou no fim da linha, respectivamente.

#### Mais Informações:

Para obter uma compreensão completa do Flexbox, leia [Entendendo](https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af) o Flexbox. [Tudo o que você precisa saber](https://medium.freecodecamp.org/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af) na página do FreeCodeCamp Medium.

Para um guia interativo, vá até [o Guia Completo do Flexbox - Aprendendo com os Exemplos](https://medium.freecodecamp.org/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676)

Ambos são ótimos recursos de Ohans Emmanuel.

Ainda outro grande guia visual que é detalhado, mas fácil de seguir, pode ser encontrado no [Guia do Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) por [CSS-Tricks.](https://css-tricks.com)

### Fontes

1.  [Coyier, Chris. "Um Guia Completo para o Flexbox" CSS-Tricks. Última atualização em 28 de setembro de 2017.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
