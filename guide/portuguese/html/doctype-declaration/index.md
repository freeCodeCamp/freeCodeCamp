---
title: Doctype Declaration
localeTitle: Declaração do Doctype
---
## Declaração do Doctype

A declaração de tipo de documento HTML, também conhecida como `DOCTYPE` , é a primeira linha de código necessária em todos os documentos HTML ou XHTML. A declaração `DOCTYPE` é uma instrução para o navegador da Web sobre qual versão do HTML a página está escrita. Isso garante que a página da web seja analisada da mesma maneira por diferentes navegadores da web.

No HTML 4.01, a declaração `DOCTYPE` refere-se a uma definição de tipo de documento (DTD). Um DTD define a estrutura e os elementos legais de um documento XML. Como o HTML 4.01 foi baseado no SGML (Standard Generalized Markup Language), era necessário referir-se a um DTD na declaração `DOCTYPE` .

Além disso, doctypes para HTML 4.01 exigiam a declaração de DTD `strict` , `transitional` ou de `frameset` , cada um com um caso de uso diferente, conforme descrito abaixo.

*   **DTD Estrito** : Usado para páginas da web que _excluem_ atributos e elementos que o W3C espera eliminar enquanto o suporte a CSS cresce
*   **DTD transitório** : usado para páginas da Web que _incluem_ atributos e elementos que o W3C espera eliminar enquanto o suporte CSS cresce
*   **DTD Frameset** : usado para páginas da Web com quadros

Em contraste, a declaração de `DOCTYPE` HTML5 é muito mais simples: ela não requer mais uma referência a DTDs, pois não é mais baseada em SGML. Veja os exemplos abaixo para uma comparação entre HTML 4.01 e HTML5 `DOCTYPE` s.

### Exemplos

Sintaxe do tipo de documento para HTML5 e além:

```html

<!DOCTYPE html> 
```

Sintaxe do tipo de documento para HTML 4.01 estrito:

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"> 
```

Sintaxe do tipo de documento para o HTML 4.01 transicional:

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
```

Sintaxe do tipo de documento para o conjunto de quadros HTML 4.01:

```html

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd"> 
```

## História

Durante os anos de formação do HTML, os padrões da Web não foram acordados ainda. Os fornecedores de navegadores criariam novos recursos da maneira que quisessem. Havia pouca preocupação com navegadores concorrentes. O resultado foi que os desenvolvedores da Web tiveram que escolher um navegador para desenvolver seus sites. Isso significa que os sites não renderizam bem em navegadores sem suporte. Essa situação não poderia continuar.

O W3C (World Wide Web Consortium) escreveu um conjunto de padrões da web para lidar com essa situação. Todos os fornecedores de navegadores e desenvolvedores da Web devem aderir a esses padrões. Isso garantiria que os sites fiquem bem em todos os navegadores. As mudanças exigidas pelos padrões foram bastante diferentes de algumas práticas existentes. Aderir a eles quebraria sites existentes não compatíveis com os padrões.

Para lidar com esse problema, os fornecedores começaram a programar modos de renderização em seus navegadores. Os desenvolvedores da Web precisariam adicionar uma declaração de tipo de documento ao topo de um documento HTML. A declaração doctype diria ao navegador qual modo de renderização deve ser usado para esse documento. Três modos de renderização separados estavam geralmente disponíveis nos navegadores. **O modo de padrões completos** renderiza páginas de acordo com os padrões da Web do W3C. **O modo Quirks** processa páginas de maneira não compatível com os padrões. **O modo de padrões quase** está próximo do modo de padrões completos, mas oferece suporte a um pequeno número de peculiaridades.

Na era moderna do HTML5, os padrões da web são totalmente implementados em todos os principais navegadores. Os sites da Web geralmente são desenvolvidos de maneira compatível com os padrões. Por causa disso, a declaração de tipo de documento HTML5 existe apenas para informar ao navegador para renderizar o documento no modo de padrões completos.

## Uso

A Declaração do Doctype deve ser a primeira linha de código em um documento HTML, além de comentários, que podem ser enviados antes, se necessário. Para documentos HTML5 modernos, a declaração do tipo de documento deve ser a seguinte:

`<!DOCTYPE html>`

#### Mais Informações:

Apesar de não estar mais em uso geral, há vários outros tipos de declaração de tipo de documento de versões anteriores do HTML. Existem também versões específicas para documentos XML. Para ler mais sobre isso e ver exemplos de código para cada um, dê uma olhada no [artigo](https://en.wikipedia.org/wiki/Document_type_declaration) da [Wikipedia](https://en.wikipedia.org/wiki/Document_type_declaration) .

[Uma nota do W3](https://www.w3.org/QA/Tips/Doctype)

[Entrada do glossário MDN](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)

[W3Schools](https://www.w3schools.com/tags/tag_doctype.asp)

[Uma explicação rápida de "Quirks Mode" e "Standards Mode"](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)