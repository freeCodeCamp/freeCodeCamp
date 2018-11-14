---
title: Change Styles Based on Data
localeTitle: Cambiar estilos basados ​​en datos
---
## Cambiar estilos basados ​​en datos

Recuérdese una vez más cuál es la función de devolución de llamada con [esto](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

Hay dos formas de completar esta parte, ya sea con la lógica if-else o con el operador ternario.

**si-si la lógica**

Un ejemplo de [w3school](https://www.w3schools.com/js/js_if_else.asp)

\`\` \`javascript

dinero const = 50;

si (dinero <50) {

volver "Soy rico";

}

else {

volver "yo soy pobre";

}
```
What you need to remember is the bracket that the if-else logic associate with, (argument) and {statement} 
 
 **Try Yourself Now**  👩‍💻👨‍💻 
 
 
 
 **Ternary operator** 
 
 A more detailed explanation [here](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff). Ternary operator is a lot more concise and quicker to remember for a simple true or false statement. Read [this](https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394) 
```

javascript

condición? valor si es verdadero: valor si es falso
```
For someone who still not sure here is a solution by using If-else statement 
```

javascript .style ("color", (d) => { si (d <20) { devuelve 'rojo' } else { volver 'verde' } }) \`\` \`