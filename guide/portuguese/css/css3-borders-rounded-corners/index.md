---
title: CSS3 Border Radius Property
localeTitle: Propriedade de raio de borda CSS3
---
## Propriedade de raio de borda CSS3

Com CSS3, você pode dar qualquer elemento "cantos arredondados", usando a propriedade `border-radius` . O valor pode estar em qualquer unidade de comprimento CSS válida.

```css
  .rounded-corners { 
    border-radius: 20px; 
  } 
 
  .circle { 
    border-radius: 50%; 
  } 
```

![exemplos](https://github.com/kaithrendyle/guide-photos/blob/master/rounded-circle.png?raw=true)

**Nota:** A propriedade `border-radius` é, na verdade, uma propriedade abreviada para as propriedades `border-top-left-radius` , `border-top-right-radius` , `border-bottom-right-radius` e `border-bottom-left-radius` .

Se apenas um valor for fornecido, o raio da borda será o mesmo para todos os quatro cantos, como nos exemplos acima. Mas você também tem a opção de especificar valores diferentes para cada canto.

```css
.new-shape { 
  border-radius: 20px 50px 5px 0; /* top left, top right, bottom right, bottom left */ 
 } 
```

Se apenas dois valores forem fornecidos, o primeiro valor será aplicado ao canto superior esquerdo e inferior direito, e o segundo valor será aplicado ao canto superior direito e inferior esquerdo.

```css
.leaf-shape { 
  border-radius: 0 50%; 
 } 
```

Se três valores forem definidos, o primeiro aplica-se novamente ao raio superior esquerdo, o segundo valor indica superior direito e inferior esquerdo, deixando o terceiro valor para indicar o canto inferior direito.

```css
.odd-shape { 
  border-radius: 0 20px 50%; 
 } 
```

![exemplos](https://github.com/kaithrendyle/guide-photos/blob/master/odd-shapes.png?raw=true)

O arredondamento de um canto não precisa ser perfeitamente simétrico. Você pode especificar os raios horizontal e vertical usando uma barra ("/") para obter um canto com uma forma elíptica. \`\` \`css .elliptical-1 { border-radius: 50px / 10px; / \* raio horizontal / raio vertical \* / } .elliptical-2 { border-radius: 10px / 50px; }
```
![examples](https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-basic.png?raw=true) 
 
 Since only one pair of values is given in the above examples, all four corners are the same. But, of course, if you want a more complex shape, you may supply up to four values for the horizontal radiuses and four for the vertical radiuses. 
```

css .elliptical-3 { border-radius: 50px 20px 50px 20px / 20px 50px 20px 50px; / \* horizontal superior esquerdo, horizontal superior direito, horizontal inferior direito, horizontal inferior esquerdo / vertical superior esquerdo, vertical superior direito, vertical inferior direito, vertical inferior esquerdo \* / }
```
Notice how the shorthand above produces the same result as specifying individual properties below. Be aware that when corners are set individually the values are space-separated instead of slash-separated. 
```

css .elliptical-4 { border-top-left-radius: 50px 20px; / \* raio horizontal, raio vertical \* / border-top-right-radius: 20 px 50 px; border-bottom-right-radius: 50 px 20 px; border-bottom-left-radius: 20px 50px; } \`\` \` ![exemplos](https://github.com/kaithrendyle/guide-photos/blob/master/elliptical-advance.png?raw=true)

### Mais Informações:

*   Truques CSS: [Truques CSS](https://css-tricks.com/almanac/properties/b/border-radius/)
*   Documentação [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) : [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
*   Suporte ao Navegador: [caniuse](http://caniuse.com/#search=border-radius)