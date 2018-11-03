---
title: Introduction to HTML5 Elements
localeTitle: Introdução aos elementos HTML5
---
## Introdução aos elementos HTML5

Enrolar um elemento HTML em torno de outro (s) elemento (s) HTML significa colocar o (s) elemento (s) _interno_ (s) após a tag de abertura do wrapper e antes de sua tag de fechamento.  

O exemplo abaixo representa um elemento `h1` e um elemento `h4` envolvido em um elemento de `header` :
```
<header> 
  <h1> Big title </h1> 
  <h4> Tiny subtitle </h4> 
 </header> 
```

Como você pode ver, o `header` contém os outros elementos que terminam no mesmo nível (o `h1` termina antes do `h4` iniciar e ambos são aninhados no `header` ).