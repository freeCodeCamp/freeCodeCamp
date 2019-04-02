---
title: Add Rounded Corners with border-radius
localeTitle: Adicionar cantos arredondados com raio de borda
---
## Adicionar cantos arredondados com raio de borda

Às vezes você quer ter cantos arredondados em vez de quadrados. Neste caso, usamos a propriedade "border-radius" para determinar o quão arredondado queremos que nossos cantos sejam.

Para ajustar a redondeza de um canto, use:

```css
.example { 
 border-radius: 5px; 
 } 
```

Quanto maior o número, mais arredondado.

```css
.example { 
 border-radius: 20px; 
 } 
```

Usando a propriedade border-radius, podemos arredondar os cantos do nosso elemento, quer isso signifique arredondar uma borda, uma imagem de plano de fundo ou a cor de preenchimento do próprio elemento. Você só vai notar os novos cantos arredondados se houver uma mudança de cor!

Se você incluir apenas um número, esse raio será aplicado aos quatro cantos. Se você usar dois valores, o primeiro se aplica aos cantos superior esquerdo e inferior direito, enquanto o segundo se aplica ao canto superior direito e inferior esquerdo.

```css
.exampleTwoValues { 
 border-radius: 5px 10px; 
 } 
```

Se você usar quatro valores, os valores serão aplicados à parte superior esquerda, superior direita, inferior direita e inferior esquerda.

```css
.exampleFourValues { 
 border-radius: 5px 7px 10px 15px; 
 } 
```

Se você usar três valores, o primeiro se aplica ao canto superior esquerdo, o segundo se aplica ao canto superior direito e inferior esquerdo, e o terceiro se aplica ao canto inferior direito.

```css
.exampleThreeValues { 
 border-radius: 5px 10px 15px; 
 } 

```