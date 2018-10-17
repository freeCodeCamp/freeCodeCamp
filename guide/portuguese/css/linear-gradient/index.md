---
title: Linear Gradient
localeTitle: Gradiente linear
---
## Gradiente linear

Este é um esboço. [Ajude nossa comunidade a expandi-lo](https://github.com/freecodecamp/guides/tree/master/src/pages/css/linear-gradient/index.md) .

[Este guia de estilo rápido ajudará a garantir que sua solicitação de recebimento seja aceita](https://github.com/freecodecamp/guides/blob/master/README.md) .

#### Mais Informações:

No Linear Gradient, as cores fluem em uma única direção, ou seja, da esquerda para a direita, de cima para baixo ou de qualquer ângulo que você escolher.

![Um gradiente com duas paradas de cor](https://cdn.discordapp.com/attachments/261391445074771978/371707961422118912/image.png)

**Um gradiente linear com duas paradas de cor**

### Sintaxe-

Para criar um gradiente linear, você deve definir pelo menos duas paradas de cor (elas são as cores nas quais as transições são criadas). Ela é declarada nas propriedades de **segundo** **plano** ou de **segundo plano** .
```
background: linear-gradient(direction, colour-stop1, colour-stop2, ...); 
```

**Nota: Se nenhuma direção for especificada, a transição é de cima para baixo por padrão**

### Transições de gradiente diferentes

**De cima para baixo:**
```
background: linear-gradient(red, yellow); 
```

![De cima para baixo](https://cdn.discordapp.com/attachments/261391445074771978/371702268803809301/image.png)

**Esquerda para a direita :**

Para torná-lo da esquerda para a direita, você adiciona um parâmetro adicional no início do gradiente linear () começando com a palavra **para a** qual indica a direção:
```
background: linear-gradient(to right, red , yellow); 
```

![Esquerda para a direita](https://cdn.discordapp.com/attachments/261391445074771978/371702990161051648/image.png)

**Posições diagonais:**

Você também pode fazer a transição de um gradiente diagonalmente, especificando as posições iniciais horizontais e verticais, por exemplo, superior esquerdo ou inferior direito.

Aqui está uma amostra para um gradiente começando no canto superior esquerdo
```
 background: linear-gradient(to bottom right, red, yellow); 
```

![Canto superior esquerdo](https://cdn.discordapp.com/attachments/261391445074771978/371705382105776128/image.png)

### Usando ângulos para especificar a direção do gradiente

Você também pode usar ângulos, para ser mais preciso ao especificar a direção do gradiente:
```
background: linear-gradient(angle, colour-stop1, colour-stop2); 
```

O ângulo é especificado como um ângulo entre uma linha horizontal e a linha de gradiente.
```
background: linear-gradient(90deg, red, yellow); 
```

![90 graus](https://cdn.discordapp.com/attachments/261391445074771978/371710718698848256/image.png)

### Usando mais de duas cores-

Você não está limitado a apenas duas cores, você pode usar quantas cores separadas por vírgulas quiser.
```
background: linear-gradient(red, yellow, green); 
```

![Um gradiente com 3 pontos de cor](https://cdn.discordapp.com/attachments/261391445074771978/371706534591201281/image.png)

Você também pode usar outras sintaxes de cores, como códigos RGB ou hexadecimais, para especificar as cores.

### Cor dura pára-

Você pode não apenas usar gradientes para fazer a transição com cores desbotadas, mas também pode usá-los para mudar de uma cor sólida para outra cor sólida instantaneamente.
```
background: linear-gradient(to right,red 15%, yellow 15%); 
```

![Pára de cor dura](https://cdn.discordapp.com/attachments/261391445074771978/371716730046775318/image.png)

**Mais informações** [\- Gradiente linear no Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient)