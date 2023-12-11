---
id: 6489c96782cf2e4f86f03ae2
title: Questão B sobre a cascata do CSS
challengeType: 15
dashedName: the-cascade-of-css-question-b
---

# --description--

Uma declaração de CSS mais específica terá precedência sobre as declarações menos específicas. Estilos em linha, que você viu em uma aula anterior, têm a mais alta especificidade comparada aos seletores, enquanto cada tipo de seletor tem seu próprio nível de especificidade, que contribui para a declaração ser mais ou menos específica. Outros seletores contribuem para a especificidade, mas concentre-se apenas naqueles que você viu até agora:

1. Seletores de ID (seletor mais específico)
2. Seletores de classe
3. Seletores de tipo

A especificidade só será levada em conta quando um elemento tiver declarações múltiplas e conflitantes que o tenham como alvo, uma espécie de critério de desempate. Um seletor de ID sempre vencerá qualquer número de seletores de classe, um seletor de classe sempre vencerá qualquer número de seletores de tipo e um seletor de tipo sempre vencerá qualquer número de algo menos específico que ele. Quando nenhuma declaração tem um seletor com uma especificidade superior, uma quantidade maior de um único seletor vencerá uma quantidade menor desse mesmo seletor.

# --question--

## --text--

Qual das seguintes opções é a ordem correta de especificidade para os seletores do CSS, do mais específico ao menos específico?

## --answers--

Seletores de tipo, seletores de classe, seletores de ID

---

Seletores de ID, seletores de classe, seletores de tipos

---

Seletores de classe, seletores de tipo, seletores de ID

---

Seletores de ID, seletores de tipo, seletores de classe

## --video-solution--

2
