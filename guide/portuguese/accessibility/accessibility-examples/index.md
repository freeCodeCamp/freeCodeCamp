---
title: Accessibility Examples
localeTitle: Exemplos de acessibilidade
---
## Exemplos de acessibilidade em aplicativos práticos

Estou escrevendo este breve guia para fornecer exemplos práticos de como implementar acessibilidade em sites. A acessibilidade não foi enfatizada durante a escola nem está sendo enfatizada o suficiente no mundo real do desenvolvimento web. Espero que este artigo, juntamente com muitos outros, incentive os desenvolvedores a criar sites acessíveis a partir de agora. Sempre me ajudou a obter exemplos práticos de como fazer as coisas. Portanto, este guia se concentrará nos exemplos do mundo real que encontrei no meu dia a dia como desenvolvedor da Web.

### Ignorando a Navegação

Para que os usuários não com visão tenham uma experiência agradável em seu website, eles precisam acessar o conteúdo de maneira rápida e eficiente. Se você nunca experimentou um site através de um leitor de tela, eu recomendo fazê-lo. É a melhor maneira de testar a facilidade com que um site pode ser navegado para usuários sem visão. O NVDA é um aplicativo de leitura de tela muito bom que é fornecido gratuitamente. Mas se você usar o leitor de tela e achar útil considerar fazer uma doação para a equipe de desenvolvimento. O leitor de tela pode ser baixado do [nvaccess.org](https://www.nvaccess.org/download/) .

Para permitir que usuários sem visão pule para o conteúdo principal de um site e evite navegar por todos os links de navegação principais:

1.  Crie um "link de navegação de salto" que fica diretamente abaixo da tag de `body` abertura.

```html

<a tabindex="0" class="skip-link" href="#main-content">Skip to Main Content</a> 
```

`tabindex="0"` é adicionado para garantir que o link seja focado no teclado em todos os navegadores. Mais informações sobre a acessibilidade do teclado podem ser encontradas em [webaim.org](https://webaim.org/techniques/keyboard/tabindex) .

2.  O link "ignorar navegação" precisa estar associado à tag html principal em seu documento da página da Web usando a tag de ID.

```html

<main id="main-content"> 
  ...page content 
 </main> 
```

3.  Ocultar o link "ignorar navegação" por padrão. Isso garante que o link fique visível apenas para os usuários com visão quando o link estiver em foco.

*   Crie uma classe para o link que pode ser estilizado com CSS. No meu exemplo, adicionei o `skip-link` da classe.

```css
.skip-link { 
  position: absolute; 
  width: 1px; 
  height: 1px; 
  padding: 0; 
  overflow: hidden; 
  clip: rect(0, 0, 0, 0); 
  white-space: nowrap; 
  -webkit-clip-path: inset(50%); 
  clip-path: inset(50%); 
  border: 0; 
 } 
 .skip-link:active, .skip-link:focus { 
  position: static; 
  width: auto; 
  height: auto; 
  overflow: visible; 
  clip: auto; 
  white-space: normal; 
  -webkit-clip-path: none; 
  clip-path: none; 
 } 
```

Esses estilos CSS ocultam o link por padrão e exibem apenas o link quando ele está recebendo o foco do teclado. Para mais informações, visite o [a11yproject](http://a11yproject.com/posts/how-to-hide-content) e esta [postagem do blog](http://hugogiraudel.com/2016/10/13/css-hide-and-seek/) .

### Tabelas Acessíveis

### Guias Acessíveis