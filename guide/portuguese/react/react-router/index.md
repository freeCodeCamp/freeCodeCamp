---
title: React Router
localeTitle: React Router
---
# React Router ect para iniciantes

# Instalação

O React Router foi dividido em três pacotes: `react-router` , `react-router-dom` e `react-router-native` .

Você quase nunca precisa instalar diretamente o roteador reage. Esse pacote fornece os principais componentes e funções de roteamento para os aplicativos do React Router. Os outros dois fornecem componentes específicos do ambiente (navegador e reagir-nativo), mas ambos também reexportam todas as exportações do roteador-reagente.

Estamos construindo um site (algo que será executado em navegadores), então vamos instalar o react-router-dom.

`npm install --save react-router-dom`

# O roteador

Ao iniciar um novo projeto, você precisa determinar qual tipo de roteador usar. Para projetos baseados em navegador, existem e componentes. O `<BrowserRouter>` deve ser usado quando você tem um servidor que lida com solicitações dinâmicas (sabe como responder a qualquer URI possível), enquanto o deve ser usado para sites estáticos (onde o servidor só pode responder a solicitações de arquivos que ele conhece).

Normalmente é preferível usar um `<BrowserRouter>` , mas se o seu site estiver hospedado em um servidor que só serve arquivos estáticos, então o `<HashRouter>` é uma boa solução.

Para o nosso projeto, vamos supor que o site será apoiado por um servidor dinâmico, então o nosso componente de roteador de escolha é o `<BrowserRouter>` .

# Declaração de Importação

```javascript
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
```

## IndexRoute e links

Agora, vamos adicionar navegação para nos colocar entre as páginas.

Para fazer isso, estaremos usando o componente `<Link>` . `<Link>` é semelhante ao uso de uma marca de âncora html.

Dos docs:

A principal maneira de permitir que os usuários naveguem pelo seu aplicativo.  irá renderizar uma tag âncora totalmente acessível com a href apropriada. Para fazer isso, vamos primeiro criar um componente Nav. Nosso componente Nav conterá componentes `<Link>` , e ficará assim:

```javascript
const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
 )

```