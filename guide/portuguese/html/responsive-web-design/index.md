---
title: Responsive Web Design
localeTitle: Web design responsivo
---
## Web design responsivo

Web design responsivo é o conceito de criação de páginas da Web que se adaptam a diferentes tamanhos de tela. Geralmente envolve o uso de diferentes layouts, tamanhos de fonte e colocação de menus de navegação.

Para criar uma página da Web responsiva, o CSS é comumente usado para estilizar seus elementos HTML. Alguns métodos comuns em CSS usados ​​para criar projetos da Web responsivos são:

1.  Escrever [consultas de mídia](https://guide.freecodecamp.org/css/media-queries)
2.  Usando [estruturas CSS](https://guide.freecodecamp.org/css/css-frameworks) pré-existentes
3.  Usando o [modelo Flexbox](https://guide.freecodecamp.org/css/layout/flexbox)
4.  Usando o [CSS Grid](https://guide.freecodecamp.org/css/layout/grid-layout)

### 1\. Consultas de mídia

Consultas de mídia informam ao navegador da Web para ignorar ou substituir propriedades da página da Web com base em atributos específicos, como largura da tela ou se o usuário está imprimindo.
```
@media (query) { 
  /* The browser will use the CSS rules within the curly braces when the query is true */ 
 } 
```

O exemplo a seguir define `padding-left` e `padding-right` dentro da classe `more-padding` quando a largura da tela é menor ou igual a 768px.
```
@media screen and (max-width: 768px) { 
    .more-padding { 
        padding-left: 10px; 
        padding-right: 10px; 
    } 
 } 
```

### 2\. Frameworks CSS

Estruturas CSS como [Bootstrap](https://www.getbootstrap.com/) , [Material Design Lite](https://getmdl.io/) e [Foundation](https://foundation.zurb.com/) têm classes CSS pré-construídas que simplificam a codificação de projetos responsivos. Essas classes operam como classes HTML padrão.

Neste exemplo, `col-md-9` e `col-sm-6` definem a largura da tag `<div>` base em se a tela é pequena ou média.

```html

<div class="col-12 col-md-6"></div> 
```

O framework Bootstrap divide uma linha em doze colunas. No exemplo acima, o `<div>` se espalhará em nove ou seis deles. O sistema de grade, mostrado abaixo, é fundamental para como o Bootstrap facilita o design responsivo.

![Grid Example](https://www.javatpoint.com/bootstrappages/images/bootstrapgrid.jpg "Exemplo básico de grade")

### Mais Informações:

1.  [Tutorial do CSS Flexbox Complete em 8 minutos](https://medium.freecodecamp.org/css-flexbox-interactive-tutorial-in-8-minutes-including-cheat-sheet-6214e00de3d2)
2.  [Seção CSS Freecodecamp](https://guide.freecodecamp.org/css) .
3.  [Tutorial de CSS Flexbox por CodingTutorials360](https://www.youtube.com/watch?v=zBjUEDzK-ow)