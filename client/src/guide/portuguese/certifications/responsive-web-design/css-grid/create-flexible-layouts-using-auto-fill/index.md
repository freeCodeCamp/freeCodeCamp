---
title: Create Flexible Layouts Using auto-fill
localeTitle: Criar layouts flexíveis usando o preenchimento automático
---
## Criar layouts flexíveis usando o preenchimento automático

Esse desafio expõe o desafio anterior, adicionando o valor de **preenchimento automático** à função de _repetição_ . Isso fará com que o número de divs seja expandido com base no tamanho da viewport em vez do valor da coluna especificado anteriormente. Na seção **antes** abaixo, o valor de **coluna de modelo de grade** "3" é especificado.

_Tenha em mente que os seguintes trechos de código são apenas exemplos e não o desafio exato do currículo do freeCodeCamp._

### Antes

```css
    grid-template-columns: repeat(3, minmax(50px, 2fr)); 
```

### Depois de

```css
    grid-template-columns: repeat(auto-fill, minmax(50px, 2fr)); 
```

* * *

### Recursos

Você pode consultar a seção **Sintaxe** da página a seguir para ver o valor de **preenchimento automático** : [Rede de desenvolvedores da Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat)