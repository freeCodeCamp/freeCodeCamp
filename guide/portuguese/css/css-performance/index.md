---
title: CSS Performance
localeTitle: Desempenho CSS
---
## Desempenho CSS

Na maioria das vezes, o CSS não é o motivo pelo qual sua página da Web é carregada lentamente. Em alguns casos, isso pode reduzir o tempo de carregamento de seus sites, se o seu arquivo CSS estiver cheio de centenas de seletores sem desempenho. Aqui estão algumas diretrizes básicas sobre como escrever CSS rápido e sustentável.

### Desempenho de diferentes seletores

Veja este exemplo:

```css
#unique-id { }         // fastest 
 .general-class { }  // also fast 
 li { }              // ok 
 * { }               // slow 
```

Não é novidade que os seletores de ID são os mais rápidos, seguidos pelas classes. Elementos de tag simples, como `div` ou `li` são processados ​​lentamente.

### Como um elemento é selecionado

imagine o seguinte CSS:

```css
nav ul li a { 
  color: #fff; 
 } 
```

Isso não é uma boa ideia. Existem maneiras melhores de selecionar um elemento de link em sua navegação. Mas como o computador realmente seleciona o elemento certo? Primeiro ele encontra cada `a` elemento em sua página. Então verifica se está dentro de um elemento `li` , dentro de uma `ul` dentro de uma `div` . Então, um navegador leu os seletores da direita para a esquerda. Se você tiver centenas de links, isso pode levar algum tempo para ser processado. Então, o que você deve fazer?

### Melhore o desempenho do CSS

Como um princípio básico:

*   Evite seletores descendentes, como `ul li a` etc.
*   Não se coíbe de usar muitos nomes de classes descritivos `.footer-nav-link`
*   Tente usar o seletor filho em vez disso, se quiser selecionar um filho direto de um elemento `.image-container > img`
*   Evite usar seletores universais `* { }`

### Isso é realmente tudo necessário?

Isso pode ter sido um problema há 20 anos, quando os computadores não eram tão rápidos quanto são hoje. Por favor, não evite completamente os seletores descendentes no futuro. Mas tenha em mente que seu objetivo é escrever CSS sustentável, então um pouco de raciocínio pode ser apropriado. Às vezes, o `nav ul li a` não é uma boa ideia em uma página com centenas de links.