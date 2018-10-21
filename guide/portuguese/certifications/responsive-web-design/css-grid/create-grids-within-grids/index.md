---
title: Create Grids within Grids
localeTitle: Criar grades dentro de grades
---
## Criar grades dentro de grades

Uma grade dentro de uma grade é feita da mesma forma que qualquer outra grade.

1.  Apenas aninhe um elemento dentro de outro,
2.  coloque os _dois_ em grades,
3.  e _POOF_ ! Você tem uma grade dentro de uma grade.

### Aninhando um elemento

Para qualquer atualização, aninhar um elemento se parece com isso: \`

Aqui está sua grade

Aqui está sua grade aninhada

\`

### Configurando seus elementos para grades

Depois disso, ajuste as seguintes propriedades CSS: \`.gridElement { / \* isso te dá uma grade \* / display: grade; }

.nestedGridElement { / \* isso lhe dá uma grade NESTADA \* / display: grade; } \`

### informação adicional

Depois disso, sinta-se à vontade para personalizar suas grades como quiser. isto é, `grid-template-columns: auto 1fr;` pode parecer bom nessa grade aninhada.