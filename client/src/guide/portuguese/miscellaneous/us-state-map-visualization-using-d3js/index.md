---
title: Us State Map Visualization Using D3js
localeTitle: Us State Map Visualização Usando D3js
---
![captura de tela 2016-05-19 at 6 29 43 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a4a31935c10185c660c713ba7651a30e0a11f1e8.png)

## Explicação do Projeto:

**Temos os dados da amostra dos Estados dos EUA:** Número de acidentes graves relatados para cada estado nos EUA.

_Temos esses dados em três categorias:_ Número mais baixo reportado por um mês, Média de acidentes reportados em um ano e Número mais alto relatado em um mês, conforme mostrado nos dados abaixo da amostra.

Queremos desenhar um mapa dos EUA e visualizar esses dados de forma que, quando passarmos o mouse sobre um estado, ele mostre esses dados para esse estado específico.

## Dados de amostra:

`AZ: 13 41 57`

`CA: 41 60 81`

`NY: 6 35 54` e assim por diante.

## Dicas e Recursos:

### Instruções passo a passo:

*   Primeiro, precisaremos criar um mapa dos EUA.
    
    1.  Você pode criar um mapa do zero usando fontes como - [Stately.](https://intridea.github.io/stately/)
        
    2.  Obtenha um mapa já criado de [freehtml5maps](http://freehtml5maps.com) ou use este [Javascript](http://bl.ocks.org/NPashaP/raw/a74faf20b492ad377312/3513ad985b2fa93ea35f2fc864cb30540c298171/uStates.js)
        
*   Adicione seu mapa ao javascript principal usado para visualização
    

Por exemplo, `(script src="uStates.js")(/script) (!-- creates uStates. --)`

*   Crie uma tag Div para manter a dica de ferramenta e crie o SVG para manter seu mapa.

Por exemplo,

`javascript (div id="tooltip")(/div) (svg width="960" height="600" id="statesvg")(/svg)`

*   Crie a função Tooltip para criar uma string de conteúdo html na div da dica de ferramenta.

Esta função de dica de ferramenta retornará uma tabela e essa tabela será mostrada sempre que passarmos o mouse sobre o estado Tabela deve ser algo assim (conforme mostrado na primeira figura): Arizona Baixa 13 Média 41 Alta 57

*   Desenhe estados em id (#statesvg no nosso exemplo) com dados e função tooltip.

Por exemplo, `uStates.draw("#statesvg", sampleData, tooltipFunc);`

**Saída final será algo como isto: (Pairou o mouse sobre a Califórnia)**

![captura de tela 2016-05-19 at 6 37 57 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2c17548386b8591d84ac8f2541fecd8d68e7365c.png)

## Referências:

1.  Exemplos e Documentações do [**D3.js.**](https://d3js.org)
2.  [**NPashaP GitHub**](https://github.com/NPashaP)
3.  [**Imponente**](https://intridea.github.io/stately/)
4.  [**FreeHTML5Maps**](http://freehtml5maps.com)