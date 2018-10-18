---
title: Get Started
localeTitle: Iniciar
---
## Iniciar

Bootstrap é uma estrutura de código aberto e livre desenvolvida pelo Twitter, que fornece uma variedade de modelos para uso com o desenvolvimento web frontend. O uso do Bootstrap facilita a criação de um website totalmente responsivo e é um framework que vale a pena aprender.

#### O que é um site responsivo

Um site responsivo é um site que redimensiona e reorganiza esses itens na página, dependendo do tamanho do navegador. Com um site responsivo, se você redimensionar seu navegador, poderá ver as alterações ocorrendo em tempo real. Bootstrap faz seu site responsivo para você.

#### Como adiciono o Bootstrap à minha página

Adicionar bootstrap à sua página é um processo rápido, basta adicionar o seguinte às tags `<head>` no seu código.

```html

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"> 
```

Você também precisará adicionar o seguinte entre as tags `body` em seu código. Com o bootstrap você estará usando tags `<div>` quando usar muitos dos recursos do Bootstrap, cada tag terá seu próprio conjunto de classes aplicadas que permite que a tag execute sua tarefa. Outras seções deste guia do Bootstrap mostrarão mais exemplos de como o Bootstrap usa tags `<div>` . (As tags `<div>` não são exclusivas do Bootstrap, entretanto o Bootstrap faz uso delas.). Abaixo está o código que seria adicionado às tags `body` em seu código para concluir os primeiros passos. Lembre-se de que, embora isso crie o contêiner, a página permanecerá em branco até você adicionar conteúdo ao contêiner.

```html

<div class="alert alert-success" role="alert"> 
    <strong>Congratulations!</strong> 
    <p>Bootstrap is now working on this page</p> 
 </div> 
```

**Parabéns!**

Bootstrap está trabalhando agora nesta página

#### Mais Informações

*   [Site oficial do Bootstrap](http://getbootstrap.com/getting-started/)