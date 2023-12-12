---
id: 637f4e8072c65bc8e73dfe2c
title: Questão F de Trabalhando com textos
challengeType: 15
dashedName: working-with-text-question-f
---

# --description--

Você deve ter notado que em todos os exemplos desta lição, você faz a indentação de elementos que estejam dentro de outros elementos. Isso é conhecido como aninhamento de elementos.

Quando você aninha elementos dentro de outros elementos, cria um relacionamento de pai e filho entre eles. Os elementos aninhados são os filhos e o elemento dentro dos quais eles estão aninhados é o pai.

No exemplo seguinte, body é o pai e o parágrafo é o filho:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
  </body>
 </html>
```

Assim como nas relações humanas, os elementos-pai do HTML podem ter muitos filhos. Elementos no mesmo nível de aninhamento são considerados irmãos.

Por exemplo, os dois parágrafos do código a seguir são irmãos, já que ambos são filhos de body e estão no mesmo nível de aninhamento um do outro:

```html
<html>
  <head>
  </head>
  <body>
    <p>Lorem ipsum dolor sit amet.</p>
    <p>Ut enim ad minim veniam.</p>
  </body>
 </html>
```

Você usa a indentação para tornar o nível de aninhamento claro e legível para você e para outros desenvolvedores que trabalharão com o seu HTML no futuro. Recomenda-se a indentação de qualquer elemento filho com dois espaços.

As relações de pai, filho e irmãos entre os elementos se tornarão muito mais importantes depois, ao começar a estilizar seu HTML com CSS e ao adicionar um comportamento com JavaScript. Agora, porém, é apenas importante conhecer a distinção entre o modo como os elementos estão relacionados e a terminologia utilizada para descrever as suas relações.

# --question--

## --text--

Qual é a relação que um elemento tem com outro elemento aninhado dentro dele?

## --answers--

O elemento dentro do outro elemento é chamado de elemento pai.

---

O elemento dentro do outro elemento é chamado de elemento filho.

---

O elemento dentro do outro elemento é chamado de elemento irmão.


## --video-solution--

2
