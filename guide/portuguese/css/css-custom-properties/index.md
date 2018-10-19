---
title: CSS Custom Properties
localeTitle: Propriedades personalizadas CSS
---
## Propriedades personalizadas CSS

As propriedades customizadas de CSS também são chamadas de variáveis ​​CSS. Desde outubro de 2018, as propriedades personalizadas de CSS ainda são uma tecnologia experimental. Considere [o suporte ao navegador](https://developer.mozilla.org/en-US/docs/Web/CSS/--*#Browser_compatibility) antes de usar o recurso em produção.

### Declarando propriedades personalizadas

Dentro de um seletor, as propriedades personalizadas são declaradas usando dois hífens (-) e o nome, seguido pelo valor. O valor pode ser simples, como uma cor (RGB, hexcode, etc.) ou tamanho (usando pixel, em, rem, etc.), ou pode ser mais complexo, como uma definição de dropshadow. Veja os exemplos abaixo.

```css
:root {
  --firstVariable: red;
  --headerSize: 16px;
  --dropShadow: 1px 1px 2px 2px rgba(100,100,100,0.2);
```

Declarar propriedades personalizadas no seletor `:root` torna essas propriedades disponíveis globalmente. O seletor `:root` pode ser considerado o mesmo que o seletor `html` .

### Usando Propriedades Personalizadas

Para usar uma propriedade customizada, é utilizada a função `var()`, que usa um único argumento do nome da propriedade customizada. 
```css 
h1 {
  font-size: var(--headerSize);
}
 
.card {
  box-shadow: var(--dropShadow);
}
```

### Propriedades Personalizadas Cascateadas 
Quando propriedades personalizadas são declaradas no seletor `:root`, essas propriedades são disponíveis globalmente; todos os estilos podem usar a propriedade. Se uma propriedade personalizada precisa diferente para um elemento específico, classe ou id, a propriedade do mesmo poder ser declarada naquele seletor. O compilador irá primeiramente olhar para o nome da propriedade dentro do seletor imediatamente encapsulando, e depois mover para o `:root` 

```css
:root {
  --font-color: red;
}

h1 {
  --font-color: blue;
}

h1 {
  font-color: var(--font-color); /* blue */
}

h2 {
  font-color: var(--font-color); /* red */
}
```

#### Mais Informações:

Para mais informações visite:

*   [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
*   [Documento de Recomendação para o Candidato do W3C](https://www.w3.org/TR/css-variables/)
*   [Suporte de Navegador](https://caniuse.com/#feat=css-variables)
