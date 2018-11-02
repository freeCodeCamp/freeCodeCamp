---
title: Change Styles Based on Data
localeTitle: Alterar estilos com base em dados
---
## Alterar estilos com base em dados

Lembre-se mais uma vez qual é a função de callback com [este](https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced)

Há duas maneiras de concluir essa parte, com lógica if-else ou operador ternário.

**lógica if-else**

Um exemplo de [w3school](https://www.w3schools.com/js/js_if_else.asp)

\`\` \`javascript

dinheiro const = 50;

if (dinheiro <50) {

return "Eu sou rico";

}

outro {

return "Eu sou pobre";

}
```
What you need to remember is the bracket that the if-else logic associate with, (argument) and {statement} 
 
 **Try Yourself Now**  👩‍💻👨‍💻 
 
 
 
 **Ternary operator** 
 
 A more detailed explanation [here](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff). Ternary operator is a lot more concise and quicker to remember for a simple true or false statement. Read [this](https://www.thoughtco.com/javascript-by-example-use-of-the-ternary-operator-2037394) 
```

javascript

condição? valor se verdadeiro: valor se falso
```
For someone who still not sure here is a solution by using If-else statement 
```

javascript .style ("cor", (d) => { se (d <20) { retornar 'vermelho' } outro { retornar 'verde' } }) \`\` \`