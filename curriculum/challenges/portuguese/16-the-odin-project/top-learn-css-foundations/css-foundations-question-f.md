---
id: 63ee353e0d8d4841c3a7091f
videoId: LGQuIIv2RVA
title: Questão F sobre a Introdução ao CSS
challengeType: 15
dashedName: css-foundations-question-f
---

# --description--

Tudo bem, você já passou por um bocado até aqui. A única coisa que falta por enquanto é ver como adicionar esse CSS ao HTML. Existem três métodos para fazer isso.

O CSS externo é o método mais comum que você encontrará. Ele envolve a criação de um arquivo separado para o CSS e a vinculação desse arquivo dentro das tags de abertura e fechamento de um elemento `<head>` do HTML na forma de um elemento `<link>` de fechamento próprio:

Primeiro, você adiciona um elemento `<link>` de fechamento próprio dentro das tags de abertura e fechamento de `<head>` do arquivo HTML. O atributo `href` é o local do arquivo CSS, que pode ser um URL absoluto ou um URL relativo à localização do arquivo HTML (você usará essa última opção). No exemplo acima, você está assumindo que ambos os arquivos estão localizados no mesmo diretório. O atributo `rel` é necessário e especifica a relação entre o arquivo HTML e o arquivo vinculado.

Então, dentro do arquivo de estilos recém-criado `styles.css`, você tem o seletor (`div` e `p`), seguido por um par de chaves de abertura e de fechamento, que criam um "bloco de declaração". Por fim, colocamos as declarações dentro do bloco da declaração. `color: white;` é uma declaração, com `color` sendo a propriedade e `white` o valor. `background-color: black;` é outra declaração.

Uma observação sobre os nomes dos arquivos: `styles.css` é simplesmente um nome escolhido como nome do arquivo aqui. Você pode nomear o arquivo como quiser, desde que o tipo de arquivo seja `.css`. No entanto, "style" ou "styles" é o nome mais comumente usado.

Algumas das vantagens desse método são:

1. Ele mantém o HTML e o CSS separados, fazendo com que o arquivo HTML seja menor e mais limpo.
2. Você só precisa editar o CSS em um lugar, o que é especialmente útil para sites com muitas páginas e que compartilham estilos semelhantes.

# --question--

## --text--

Qual das opções a seguir melhor descreve a finalidade do atributo `rel` no elemento `<link>` ao vincular um arquivo CSS externo a um arquivo HTML?

## --answers--

Ele especifica o local do arquivo CSS com relação ao local do arquivo HTML.

---

Ele mostra a relação entre o arquivo HTML e o documento vinculado.

---

Ele especifica o tipo de arquivo que está sendo vinculado (por exemplo, "stylesheet" – ou folha de estilos).


## --video-solution--

2
