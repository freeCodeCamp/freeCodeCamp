---
title: SVG Shapes
localeTitle: Formas SVG
---
## Formas SVG

Diversas formas podem ser criadas usando o desenho SVG. Um desenho SVG pode usar e combinar sete formas: Caminho, Retângulo, Círculo, Elipse, Linha, Polilinha e Polígono.

### Caminho

O elemento `path` é o mais comumente visto e é geralmente gerado por programas projetados para exportar código SVG.

```svg
  <path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z" /> 
```

O `path` exemplo acima gerará um símbolo "mais" (+) quando usado dentro de um desenho SVG. Os elementos de `path` SVG não são criados manualmente, mas gerados por meio de programas de design que podem manipular gráficos vetoriais, como o Illustrator ou o Inkscape.

### Retângulo

O retângulo `rect` desenha um retângulo na tela e aceita seis atributos.

```svg
  <rect x="0" y="0" width="100" height="50" rx="10" ry="10" /> 
```

`x` e `y` atribuir a posição do canto superior esquerdo do rectângulo, e `width` e `height` atribuir o tamanho do rectângulo. `rx` e `ry` atribuem o raio dos cantos do retângulo, semelhante à propriedade border-radius do CSS.

### Círculo

O círculo do elemento do `circle` aceita três atributos.

```svg
  <circle cx="100" cy="100" r="50" /> 
```

`cx` e `cy` atribuir a posição do centro do círculo, e `r` designa o raio (tamanho) do círculo.

### Elipse

O elemento de elipse, `ellipse` , é semelhante ao elemento de `circle` , exceto que o raio é dividido em dois atributos.

```svg
  <ellipse cx="100" cy="100" rx="50" ry="20" /> 
```

Novamente, `cx` e `cy` atribuem a posição do centro da elipse, e agora `rx` e `ry` atribuem o raio horizontal e vertical da elipse, respectivamente. Um `rx` maior dará uma elipse "gorda", e um `ry` maior dará uma elipse mais magra. Se `rx` e `ry` forem iguais, formará um círculo.

### Linha

O elemento de `line` é simples e aceita quatro atributos.

```svg
  <line x1="0" x2="100" y1="50" y2="70" /> 
```

Os atributos `x1` e `y1` atribuem o primeiro ponto da linha e os atributos `x2` e `y2` atribuem o segundo ponto da linha.

### Polilinha

Uma `polyline` é uma série de linhas retas conectadas, atribuídas em um único atributo.

```svg
  <polyline points="0 100, 50 70, 60 40, 20 0" /> 
```

O atributo `points` atribui uma lista de pontos, cada ponto separado por uma vírgula.

### Polígono

O elemento `polygon` é também uma série de linhas retas conectadas, mas, neste caso, a última linha se reconectará automaticamente ao ponto inicial.

```svg
  <polygon points="0 100, 50 70, 60 40, 20 0" /> 
```

Este exemplo desenhará a mesma forma da `polyline` acima, mas desenhará uma linha extra para "fechar" a série de linhas.

## Mais Informações

Documentação [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) : [MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)