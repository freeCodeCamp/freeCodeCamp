---
title: Functional vs Class Components
localeTitle: Componentes funcionais vs classe
---
## Reagir Nativo - Componentes Funcionais vs Classe

No React Native, existem dois tipos principais de componentes que compõem um aplicativo - _componentes funcionais_ e _componentes de classe_ . Estes são estruturados da mesma forma que seriam em um aplicativo React regular para a web.

### Componentes de Classe

Os componentes de classe são classes do JavaScript ES2015 que estendem uma classe base do React chamado `Component` .

```js
class App extends Component { 
    render () { 
        return ( 
            <Text>Hello World!</Text> 
        ) 
    } 
 } 
```

Isso dá à classe `App` acesso aos métodos de ciclo de vida React, como `render` , bem como à funcionalidade state / props do pai.

### Componentes Funcionais

Componentes funcionais são mais simples. Eles não gerenciam seu próprio estado ou têm acesso aos métodos de ciclo de vida fornecidos pelo React Native. São literalmente antigas funções JavaScript. Eles também são conhecidos como componentes sem estado.

```js
const PageOne = () => { 
    return ( 
        <h1>Page One</h1> 
    ); 
 } 
```

### Resumo

Os componentes de classe são usados ​​como componentes de contêiner para manipular o gerenciamento de estado e agrupar componentes filhos. Os componentes funcionais geralmente são usados ​​apenas para fins de exibição - esses componentes chamam funções de componentes pai para manipular interações do usuário ou atualizações de estado.