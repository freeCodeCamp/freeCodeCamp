---
title: Hover Selector
localeTitle: Seletor de Pausa
---
## Seletor de Pausa

O CSS `:hover` selector é uma das muitas pseudo-classes que são usadas para estilizar elementos.

O seletor: hover é usado para selecionar elementos quando você passa o mouse sobre eles.

O seletor: hover pode ser usado em todos os elementos, não apenas em links.

Use o: seletor de link para estilizar links para páginas não visitadas, o: seletor visitado para estilizar links para páginas visitadas e o: seletor ativo para estilizar o link ativo.

Nota:: hover deve vir depois: link e: visitado (se estiverem presentes) na definição CSS, a fim de ser eficaz!

Sintaxe CSS :flutuar { declarações de css; }

O seletor de foco apenas aplica os estilos fornecidos na regra quando o elemento entra no estado de foco. É quando o usuário passa o mouse sobre o elemento.

```css
button { 
  color: white; 
  background-color: green; 
 } 
 
 button:hover { 
  background-color: white; 
  border: 2px solid green; 
  color: green; 
 } 
```

No exemplo acima, o estilo normal do botão é texto branco em um botão verde. Quando um usuário passa o mouse sobre o botão, a regra com o seletor em `:hover` ficará ativa e o estilo do botão será alterado.

#### Mais Informações:

[MDN `:hover` Google Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

Você pode encontrar muito mais pseudo-classes neste artigo sobre Docs de [Pseudo-classes MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) da Mozillia.