---
title: Flexbox
localeTitle: flexbox
---
## Flexbox

Flexbox é uma nova maneira de estruturar conteúdo em CSS3. Ele fornece uma maneira maravilhosa de criar websites responsivos que funcionam bem em diferentes tamanhos de tela e conteúdo de pedidos.

Existem 3 etapas simples para usar o flexbox.

1.  Converter contêiner pai em um contêiner flexível usando _display: flex;_ na seção css
2.  Ajuste o arranjo de recipientes diferentes usando _flex-direction_
3.  Ajuste itens individuais usando propriedades como justificar o conteúdo, alinhar itens etc.

O Flexbox Layout visa fornecer uma maneira mais eficiente de dispor, alinhar e distribuir o espaço entre os itens em um contêiner, mesmo quando seu tamanho é desconhecido e / ou dinâmico (assim, a palavra "flex"). é dar ao contêiner a capacidade de alterar a largura / altura de seus itens (e ordem) para melhor preencher o espaço disponível. ![flexUsage](https://cdn.css-tricks.com/wp-content/uploads/2011/08/flexbox.png)

*   **eixo principal** : O eixo principal de um contêiner flexível é o eixo principal ao longo do qual os itens flexíveis são dispostos. Cuidado, não é necessariamente horizontal; isso depende da propriedade de flex-direction (veja abaixo).
*   **início principal | main-end** Os itens flexíveis são colocados dentro do contêiner, começando da partida principal e indo para a extremidade principal.
:*   **tamanho principal** : A largura ou altura de um item flexível, o que estiver na dimensão principal, é o tamanho principal do item. A propriedade de tamanho principal do item flexível é a propriedade 'width' ou 'height', o que estiver na dimensão principal.
*   **eixo transversal** : O eixo perpendicular ao eixo principal é chamado de eixo transversal. Sua direção depende da direção do eixo principal.
*   **cross-start | cross-end** : As linhas flexíveis são preenchidas com itens e colocadas no contêiner começando no lado de início cruzado do contêiner flexível e indo em direção ao lado da extremidade cruzada.
*   **Tamanho cruzado** : a largura ou a altura de um item flexível, o que estiver na dimensão transversal, é o tamanho cruzado do item. A propriedade de tamanho cruzado é qualquer um de 'largura' ou 'altura' que esteja na dimensão transversal.

#### Mais Informações:

[Este é um ótimo artigo](https://medium.freecodecamp.org/an-animated-guide-to-flexbox-d280cf6afc35) para ler mais sobre o flexbox Este é um guia prático altamente recomendado que ilustra as diferentes propriedades flexíveis aplicadas ao contêiner flex e aos itens flexíveis: [https://css-tricks.com/snippets/css/a-guide-to-flexbox/](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)