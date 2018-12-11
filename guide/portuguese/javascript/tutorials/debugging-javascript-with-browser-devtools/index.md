---
title: Debugging JavaScript with Browser Devtools
localeTitle: Depurando JavaScript com Devtools do Navegador
---
Como desenvolvedor, você freqüentemente desejará depurar código. Você pode já ter usado o `console.log` em alguns dos desafios, que é a maneira mais simples de depurar.

Neste artigo, contaremos alguns dos truques mais legais para depurar usando as ferramentas de depuração nativas dos navegadores.

## Uma breve visão do FreeCodeCamp Code Editor:

Antes de entrar na depuração, vamos divulgar alguns fatos secretos sobre o _incrível mecanismo de verificação de código_ da FCC.

Nós usamos um [CodeMirror](http://codemirror.net/mode/javascript/index.html) personalizado, como o editor de código. Uma [função `eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) é usada para avaliar o código JavaScript representado como uma string do editor. Quando `eval()` é chamado, os navegadores executam seu código nativamente. Vamos aprender mais por que esse segredo é importante nas próximas seções deste artigo.

## Agora seguindo para os truques:

## Google Chrome DevTools

O Google Chrome é um dos navegadores mais populares com um mecanismo JavaScript integrado chamado [V8](https://developers.google.com/v8/) e oferece um ótimo conjunto de ferramentas para desenvolvedores chamado [Chrome DevTools](https://developer.chrome.com/devtools) . É altamente recomendável visitar o [guia de depuração completo do JavaScript](https://developer.chrome.com/devtools/docs/javascript-debugging) .

### 1: Noções básicas de DevTools

#### Iniciando as DevTools do Chrome

Bata `F12`

. Alternativamente, você pode pressionar

`Ctrl` + `Shift` + `I`

no Windows e Linux ou

`Cmd` + `Shift` + `I`

no Mac, ou Se você simplesmente ama seu mouse, vá para `Menu > More Tools > Developer Tools` .

#### Conhecer as `Sources` e as guias do `console` .

Estas duas abas são talvez seus melhores amigos durante a depuração. A guia `Sources` pode ser usada para visualizar todos os scripts que estão na página da Web que você está visitando. Esta guia possui seções para a janela de código, árvore de arquivos, pilha de chamadas e janelas de observação, etc.

A guia do `console` é onde vai toda a saída do log. Além disso, você pode usar o prompt da guia do console para executar o código JavaScript. Seu tipo de sinônimo para o prompt de comando no Windows, ou terminal no Linux.

_Dica: Alterne o console a qualquer momento nas DevTools usando a tecla `Esc` ._

### 2: Atalhos comuns e recursos

Enquanto você pode visitar a [lista completa de atalhos](https://developers.google.com/web/tools/chrome-devtools/iterate/inspect-styles/shortcuts) , abaixo estão alguns que são mais usados:

Recurso Windows, Linux Mac  
Procurar por uma palavra-chave, regex é suportado. `Ctrl` + `F``Cmd` + `F`  
Pesquise e abra um arquivo `Ctrl` + `P``Cmd` + `P`  
Pule para a linha `Ctrl` + `G` + `:line_no``Cmd` + `G` + `:line_no`  
Adicione um ponto de interrupção `Ctrl` + `B` ou clique na linha no. `Cmd` + `B` , ou clique na linha no.  
Pausar / retomar a execução do script `F8` `F8`  
Passar para a próxima chamada de função `F10` `F10`  
Entre na próxima chamada de função `F11` `F11`

### 3: Usando um Mapa de Origem para nosso Código

Um dos recursos mais legais que você vai adorar é [depurar o Dynamic Script](https://developer.chrome.com/devtools/docs/javascript-debugging#breakpoints-dynamic-javascript) , em tempo real, via [Source Maps](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps) .

Cada script pode ser visualizado na guia Origem dos DevTools. A guia de origem possui todos os arquivos de origem JavaScript. Mas o código do editor de código é executado via `eval()` em um contêiner chamado simplesmente de máquina virtual (VM) dentro do processo do navegador.

Como você deve ter adivinhado até agora, nosso código é na verdade um script que não possui um nome de arquivo. Então, não vemos isso na guia Origem.

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": brilhos:") **_Aqui vem o hack!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": brilhos:")

Devemos aproveitar o `Source Maps` para atribuir um nome ao JavaScript do nosso editor. É bem simples:

Vamos dizer que estamos no desafio [Factorialize](https://www.freecodecamp.com/challenges/factorialize-a-number) , e nosso código é assim:
```
function factorialize(num) { 
  if(num <= 1){ 
  ... 
 } 
 factorialize(5); 
```

Tudo o que precisamos fazer é adicionar `//# sourceURL=factorialize.js` ao topo do código, ou seja, a primeira linha:
```
//# sourceURL=factorialize.js 
 
 function factorialize(num) { 
  if(num <= 1){ 
  ... 
```

> ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": brilhos:") **_E Eureka é isso!_** ![:sparkles:](//forum.freecodecamp.com/images/emoji/emoji_one/sparkles.png?v=2 ": brilhos:")

Agora abra o DevTools e procure o nome do arquivo. Adicione pontos de quebra, depure e desfrute!