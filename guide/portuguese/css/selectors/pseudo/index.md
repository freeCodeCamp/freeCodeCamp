---
title: Pseudo
localeTitle: Pseudo
---
# Pseudo-Seletores

Pseudo-seletores fornecem uma maneira de direcionar elementos usando pseudo classes ou pseudo-elementos.

## Classes Pseudo Estruturais

Pseudo classes estruturais oferecem uma maneira de direcionar elementos com base em sua posição.

Classe | Descrição --------- | ------------ `:root` | Raiz do documento. No contexto dos documentos HTML, essa seria a tag `html` no topo. Isso pode significar diferentes elementos em outros documentos, como XML ou SVG. `:only-child` | Um elemento que é o único filho de seu elemento pai. `:first-child` | Primeiro filho de um pai. `:last-child` | Último filho de um elemento pai. `:nth-child(n)` | n-ésimo filho de seu pai. `:nth-last-child(n)` | n-ésimo filho do último filho. O reverso de `:nth-child` . `:only-of-type` | O único elemento do tipo dentro de seus irmãos com outros tipos. `:first-of-type` | O primeiro elemento do tipo entre seus irmãos. `:last-of-type` | O último elemento do tipo entre seus irmãos. `:nth-of-type(n)` | n-ésimo irmão do mesmo tipo. `:nth-last-of-type(n)` | n-ésimo irmão do mesmo tipo do último. O reverso de `:nth-of-type` . `:empty` | Um elemento sem elementos filho.

## Classes Pseudo do Estado da IU

As pseudo classes do estado da interface do usuário oferecem uma maneira de segmentar elementos com base em seu estado atual.

Classe | Descrição --------- | ------------ `:link` | Elementos de link não visitados. `:visited` | Um link já visitado. `:hover` | Um elemento sobre o qual o ponteiro do mouse está pairando. `:active` | Um elemento no qual o ponteiro do mouse foi clicado, mas ainda não foi liberado. `:focus` | Um elemento que tem foco. Importante para acessibilidade, por exemplo, ao usar a tecla `tab` para navegação. `:enabled` | Um elemento que está no estado ativado. `:disabled` | Um elemento que foi desativado. `:checked` | Uma caixa de seleção ou botão de opção selecionado.

## Pseudo-elementos

Os pseudo-elementos, por outro lado, são elementos ou elementos gerados dinamicamente em um lugar especial.

Seletor | Descrição --------- | ------------ `::first-line` | Primeira linha de um elemento, geralmente um contêiner ou um parágrafo. `::first-letter` | Uma letra de um elemento. Amplamente utilizado para styling drop-caps. `::before` | Um elemento dinâmico criado com conteúdo próprio antes do elemento real. `::after` | Um elemento dinâmico criado com conteúdo próprio após o elemento real.

## Mais Informações:

Informações adicionais podem ser encontradas nas referências abaixo.

*   [Especificação oficial do Seletor CSS3](https://www.w3.org/TR/css3-selectors/#structural-pseudos)
*   [Página de rede para desenvolvedores Mozilla em seletores](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)