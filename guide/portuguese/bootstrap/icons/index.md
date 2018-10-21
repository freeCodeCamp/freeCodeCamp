---
title: Icons
localeTitle: Ícones
---
## Ícones

A estrutura do Bootstrap fornece Glyphicons para o ícone. O Bootstrap não inclui uma biblioteca de ícones por padrão, mas tem algumas recomendações para você escolher. Embora a maioria dos conjuntos de ícones inclua vários formatos de arquivo, preferimos implementações de SVG para sua melhor acessibilidade e suporte a vetores.

### Como usar

Para usar o ícone Bootstrap, crie uma tag de span com o `glyphicon` classe base e a classe de ícones individual. Use-o somente em elementos que não contenham conteúdo de texto e não tenham elementos filhos.

**Exemplo de código:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

`<span class="glyphicon glyphicon-cog"></span>`

A estrutura do Bootstrap fornece mais de 250 ícones chamados glifos. Eles vêm em formato de fonte do conjunto Glyphicon Halflings.

### Como usar

Para usar ícones de bootstrap, basta criar a tag `<span>` e aplicar a classe CSS aplicável ao ícone. Um exemplo de código foi fornecido abaixo.

**Exemplo de código:**

`<span class="glyphicon glyphicon-search" aria-hidden="true"></span>`

### Lista de Classes de Bootstrap Glyphicon

Este é um exemplo das classes CSS que o bootstrap fornece para glyphicons. Mais deles é avalible [aqui](https://getbootstrap.com/docs/3.3/components/#glyphicons)

`.glyphicon glyphicon-plus` Este é o ícone de adição / adição do bootstrap.

`.glyphicon glyphicon-trash` Este é o ícone de lixo / eliminação do bootstrap.

_Nota: Não inclua o ponto no Atributo de Classe HTML, referindo-se às classes com um ponto só é usado ao ajustar as classes em CSS._

### Bootstrap Icon in Buttons

```html

  <button type="button" class="btn btn-default" aria-label="Left Align"> 
    <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span> 
  </button> 
```

_Nota: O ícone Glyphicons do Bootstrap não está disponível no bootstrap V4_

### Mais Informações:

*   [Bootstrap Glyphicons ícones Doc](https://getbootstrap.com/docs/3.3/components/#glyphicons)