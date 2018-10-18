---
title: Life Cycle Methods Of A Component
localeTitle: Métodos de Ciclo de Vida de um Componente
---## Métodos de Ciclo de Vida de um Componente

Quando começamos a trabalhar com componentes, precisamos executar várias ações para atualizar o estado ou executar algumas ações quando algo muda nesse componente. Neste cenário, os métodos de ciclo de vida de um componente são úteis !! Então, vamos mergulhar neles neste artigo.

Em termos gerais, podemos dividir os métodos do ciclo de vida em **3** categorias.

1.  Montagem
2.  Atualizando
3.  Desmontando

Como os métodos do ciclo de vida são auto-explicativos, vou mencionar os nomes dos métodos. Por favor, sinta-se à vontade para contribuir com este artigo, se necessário.

## Montagem:

uma. `constructor()`

b. `componentWillMount()`

c. `render()`

d. `componentDidMount()`

## Atualizando:

uma. `componentWillRecieveProps()`

b. `shouldComponentUpdate()`

c. `componentWillUpdate()`

d. `render()`

e. `componentDidUpdate()`

## Desmontando:

uma. `componentWillUnmount()`

## Alguns fatos interessantes para notar:

*   `constructor` , `componentWillMount` , `componentDidMount` e `componentWillUnmount` serão chamados apenas uma vez durante o ciclo de vida de um componente.
*   `componentWillUpdate` e `componentDidUpdate` só serão executados se e somente se `shouldComponentUpdate` retornar true.
*   `componentWillUnmount()` será chamado pouco antes de desmontar qualquer componente e, portanto, pode ser usado para liberar a memória usada, fechar quaisquer conexões com o banco de dados, etc.

Muitas coisas podem ser aprendidas mergulhando na codificação. Então, sujem suas mãos codificando.

Nota:

> "Os avisos de descontinuação serão ativados com uma versão 16.x futura, **mas os ciclos de vida herdados continuarão funcionando até a versão 17.** " 1
> 
> "Mesmo na versão 17, ainda será possível usá-los, mas eles serão aliados com um prefixo" UNSAFE\_ "para indicar que podem causar problemas. Também preparamos um [script automatizado para renomeá-los](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles) no código existente." 1

Em outras palavras, esses métodos de ciclo de vida previos ainda estarão disponíveis como:

*   `UNSAFE_componentWillMount`
*   `UNSAFE_componentWillReceiveProps`
*   `UNSAFE_componentWillUpdate`

## Novos métodos de ciclo de vida

Novos métodos de ciclo de vida serão introduzidos no React 17

*   `getDerivedStateFromProps` será uma alternativa mais segura para `componentWillReceiveProps` .
*   `getSnapshotBeforeUpdate` será adicionado para suportar a leitura segura de propriedades das atualizações do DOM são feitas

Muitas coisas podem ser aprendidas mergulhando na codificação. Então, sujem suas mãos codificando.

### Fontes

1.  [Vaughn, Brian. "Reagir v16.3.0: Novos Ciclos de Vida e API de Contexto". 29 de março de 2018. Acesso em: 22 de maio de 2018.](https://reactjs.org/blog/2018/03/29/react-v-16-3.html)

### Recursos

[Atualização na renderização assíncrona](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)