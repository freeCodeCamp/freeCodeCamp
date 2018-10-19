---
title: Create Grids within Grids
localeTitle: Crear cuadrículas dentro de cuadrículas
---
## Crear cuadrículas dentro de cuadrículas

Una cuadrícula dentro de una cuadrícula se hace igual que cualquier otra cuadrícula.

1.  Solo anida un elemento dentro de otro,
2.  ponlos a _ambos_ en cuadrículas,
3.  y _POOF_ ! Tienes una cuadrícula dentro de una cuadrícula.

### Anidando un elemento

Para cualquier refrescante, anidar un elemento se ve así: \`

Aquí está tu cuadrícula

Aquí está tu cuadrícula anidada

\`

### Ajustando tus elementos a grillas

Después de eso, ajusta las siguientes propiedades CSS: \`.gridElement { / \* Esto te da una cuadrícula \* / pantalla: rejilla; }

.nestedGridElement { / \* Esto te da una cuadrícula NESTED \* / pantalla: rejilla; } \`

### Información Adicional

Después de eso, siéntete libre de personalizar tus grillas como quieras. es decir, `grid-template-columns: auto 1fr;` Podría verse bien en esa cuadrícula anidada.