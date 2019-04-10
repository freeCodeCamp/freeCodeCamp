---
title: Font Tag
localeTitle: Tag de fonte
---
## Tag de fonte

_Este recurso foi preterido no HTML 4.01 e removido no HTML 5._

O elemento de fonte HTML `<font>` define o tamanho da fonte, cor e face para o seu conteúdo. Ele foi normalizado no HTML 3.2, mas foi descontinuado no HTML 4.01 e agora está obsoleto no HTML5. Embora ainda possa funcionar em alguns navegadores, é aconselhável parar de usá-lo, pois ele pode ser removido a qualquer momento. Fontes de estilo podem ser alcançadas e muito melhor controladas através de CSS, na verdade, todo estilo deve ser escrito usando apenas CSS.

O **primeiro** comportamento do elemento `<font>` :

*   **Cor:** Esse atributo permite definir a cor do texto para uma cor nomeada como 'azul' ou uma cor hexadecimal no formato de #RRGGBB.
*   **Face:** Esse atributo permite definir a família de fontes e conter uma lista separada por vírgulas de um ou mais nomes de fonte. Se a primeira fonte da lista não for suportada pelo navegador, ela será movida para a segunda fonte. Se nenhuma fonte for suportada ou listada, o navegador normalmente usa uma fonte para esse sistema.
*   **Tamanho:** esse atributo permite especificar o tamanho da fonte. Há duas maneiras de fazer isso, seja definindo um valor numérico ou um valor relativo. Os valores numéricos variam de 1 a 7, sendo 1 o menor e 3 o padrão. Valores relativos, como -2 ou +2, definem o valor relativo ao tamanho do elemento `<basefont>` ou '3' ao valor padrão.

Um exemplo:

```html

<font face="fontNameHere" size="7" color="blue">My Text Here</font> 
```

#### Mais Informações:

*   [MDN - tag de fonte HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font)
*   [MDN - Fonte CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/font)