---
title: Us State Map Visualization Using D3js
localeTitle: Visualización de mapa de estado de Estados Unidos usando D3js
---
![captura de pantalla 2016-05-19 a las 6 29 43 h.](//discourse-user-assets.s3.amazonaws.com/original/2X/a/a4a31935c10185c660c713ba7651a30e0a11f1e8.png)

## Explicación del proyecto:

**Tenemos los datos de muestra de los Estados de** EE. UU . **:** Número de accidentes graves informados para cada estado de EE. UU.

_Tenemos estos datos en tres categorías: el_ número más bajo reportado por un mes, el promedio de accidentes reportados en un año y el número más alto reportado en un mes, como se muestra en los datos de muestra a continuación.

Queremos dibujar un mapa de EE. UU. Y visualizar estos datos de modo que, cuando pasamos el mouse sobre un estado, debamos mostrar estos datos para ese estado en particular.

## Data de muestra:

`AZ: 13 41 57`

`CA: 41 60 81`

`NY: 6 35 54` y así sucesivamente.

## Consejos y recursos:

### Instrucciones paso a paso:

*   Primero, necesitaremos crear un mapa de los Estados Unidos.
    
    1.  Puede crear un mapa desde cero utilizando fuentes como - [Stately.](https://intridea.github.io/stately/)
        
    2.  Obtén un mapa ya creado de [freehtml5maps](http://freehtml5maps.com) o usa este [Javascript](http://bl.ocks.org/NPashaP/raw/a74faf20b492ad377312/3513ad985b2fa93ea35f2fc864cb30540c298171/uStates.js)
        
*   Añade tu mapa al javascript principal utilizado para la visualización.
    

Por ejemplo, `(script src="uStates.js")(/script) (!-- creates uStates. --)`

*   Cree una etiqueta Div para contener información sobre herramientas y cree SVG para mantener su mapa.

Por ejemplo,

`javascript (div id="tooltip")(/div) (svg width="960" height="600" id="statesvg")(/svg)`

*   Crear una función de información sobre herramientas para crear una cadena de contenido html en la información sobre herramientas div.

Esta función de información sobre herramientas devolverá una tabla y esta tabla se mostrará cada vez que pasemos el mouse sobre el estado. La tabla debería ser algo como esto (como se muestra en la primera figura): Arizona Low 13 Average 41 High 57

*   Dibuje estados en id (#statesvg en nuestro ejemplo) con datos y función de información sobre herramientas.

Por ejemplo, `uStates.draw("#statesvg", sampleData, tooltipFunc);`

**La salida final será algo como esto: (Pasó el mouse sobre California)**

![captura de pantalla 2016-05-19 a las 6 37 57 pm](//discourse-user-assets.s3.amazonaws.com/original/2X/2/2c17548386b8591d84ac8f2541fecd8d68e7365c.png)

## Referencias:

1.  [**D3.js**](https://d3js.org) Ejemplos y Documentaciones.
2.  [**NPashaP GitHub**](https://github.com/NPashaP)
3.  [**Majestuoso**](https://intridea.github.io/stately/)
4.  [**FreeHTML5Maps**](http://freehtml5maps.com)