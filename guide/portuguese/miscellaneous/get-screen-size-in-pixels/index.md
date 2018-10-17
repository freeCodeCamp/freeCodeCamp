---
title: Get Screen Size in Pixels
localeTitle: Obter tamanho da tela em pixels
---
Pode haver momentos em que seu aplicativo JS precisa saber qual é o tamanho da tela para poder executar determinadas ações.

Felizmente para nós, existem funções JavaScript embutidas que podem facilmente capturar diferentes dimensões da tela no dispositivo do usuário em pixels. O que usar depende do que você gostaria de fazer.

## Obter a resolução do usuário

Você pode querer fazer algo envolvendo a resolução do dispositivo do usuário. Nesse caso, você deve usar as propriedades built-in `screen.width` e `screen.height` . Estes lhe dão o tamanho da tela que você está lidando. **Esta não é a área com a qual você deve trabalhar na página; esses valores representam a totalidade da tela, ou seja, a resolução da tela do usuário.**

## Obter tamanho do navegador

Pode haver um aplicativo interessante para lidar com o tamanho atual do navegador. Se você precisar acessar essas dimensões, use os `screen.availWidth` e `screen.availHeight` propriedades para fazê-lo. Lembre-se, essas são as dimensões de toda a janela do navegador, da parte superior da janela do navegador até o local em que o navegador encontra uma barra de tarefas ou a borda da área de trabalho, dependendo da configuração.

**Uma observação interessante** : `screen.availHeight` também pode ser usado para descobrir o quão alta é uma barra de tarefas em um computador. Se a resolução do seu navegador for `1366 x 768` e `screen.availHeight` reportar 728 pixels, sua barra de tarefas `screen.availHeight` 40 pixels de altura. Você também pode calcular a altura da barra de tarefas subtraindo `screen.height` e `screen.availHeight` :
```
var taskbarHeight = parseInt(screen.height,10) - parseInt(screen.availHeight,10) + " pixels"; 
 /* 
 For a user that has a screen resolution of 1366 x 768 pixels, their taskbar is likely 40 pixels if using Windows 10 with no added accessibility features. 
 */ 
```

## Obter o tamanho da janela de visualização

Essas propriedades são interessantes e podem ser usadas para criar alguns efeitos bacanas. Você pode usar `window.innerHeight` e `window.innerWidth` para obter o tamanho da janela da página da web, conforme o usuário a vê. Esses valores não são estáticos e mudam dependendo do que está acontecendo com o próprio navegador. Em outras palavras, se o próprio navegador for pequeno, esses valores serão menores e, se o navegador estiver maximizado, eles serão maiores.

Se, por exemplo, você estiver trabalhando no Google Chrome e abrir o console (deve estar encaixado em um lado da janela), `window.innerHeight` será alterado para refletir a altura do console, pois parte da janela será bloqueada. Você pode testar isso chamando `window.innerHeight` , anote o valor, aumente o tamanho do console e chame `window.innerHeight` novamente.

Essas propriedades também serão alteradas se o navegador for maximizado ou redimensionado de alguma forma. No tamanho máximo de um navegador, a propriedade `window.innerWidth` é a mesma que `screen.width` e `screen.availWidth` (a menos que haja uma barra de tarefas ao lado; nesse caso, `screen.availWidth` não será igual). `window.innerHeight` é igual à quantidade de área na janela da própria página (a área da página da web).

## Obtenha Altura e Largura da Página da Web

Se você precisa ver quão alta ou larga é a sua página da web, existem propriedades para capturar essas dimensões: `document.body.offsetWidth` e `document.body.offsetHeight` . Essas propriedades representam o tamanho do conteúdo no corpo da própria página. Uma página sem conteúdo tem um `document.body.offsetHeight` de perto do mesmo valor que `window.innerHeight` dependendo de quais margens / preenchimento estão definidas no corpo do documento. Se margens e preenchimento forem definidos como `0` no elemento raiz html e no corpo do documento, `document.body.offsetHeight` e `window.innerHeight` serão iguais sem conteúdo.

Essas propriedades podem ser usadas para interagir com sua página / aplicativo, dependendo do que você deseja fazer.

## Conclusão

Qual propriedade usar é baseada somente no que você deseja fazer. Leia o que cada um deles faz e decida por si quais propriedades você precisa usar para o seu projeto.