---
title: ES6
localeTitle: ES6
---
## ES6

A 6ª edição do ECMAScript é chamada ES6.

Também é conhecido como ES2015.

As mudanças adicionam muito açúcar sintático que permite aos desenvolvedores criar aplicativos em um estilo orientado a objetos.

> Exemplo ES5:

```javascript
var User = function () { 
  function User(name) { 
    this._name = name; 
  } 
 
  User.prototype.getName = function getName(x) { 
    return 'Mr./Mrs. ' + this._name; 
  }; 
 
  return User; 
 }(); 
```

> Exemplo ES6:

```javascript
class User { 
  constructor(name) { 
    this._name = name 
  } 
 
  getName() { 
    return `Mr./Mrs. ${this._name}` 
  } 
 } 
```

Muitos novos recursos de sintaxe foram introduzidos, incluindo:

*   classes,
*   módulos,
*   templating
*   para / de loops,
*   expressões geradoras,
*   funções de seta,
*   coleções,
*   promessas.

Atualmente, a maioria dos recursos está disponível em todos os navegadores populares. A [tabela de compatibilidade](https://kangax.github.io/compat-table/es6/) contém todas as informações sobre disponibilidade de recursos de todos os navegadores modernos.

Freqüentemente novos recursos chegam que fazem parte do sucessor ES7. Uma maneira comum é traduzir o JavaScript moderno (ES6, ES7 e outras propostas experimentais) para o ES5. Isso garante que também navegadores antigos possam executar o código. Existem ferramentas como o [Babel](https://babeljs.io/) que transforma o novo JavaScript em ES5.

Além do açúcar sintático proveniente dos padrões ECMAScript, existem recursos que requerem um [Polyfill](https://babeljs.io/docs/usage/polyfill) . Geralmente eles são necessários porque implementações de classes / métodos inteiras foram adicionadas ao padrão.