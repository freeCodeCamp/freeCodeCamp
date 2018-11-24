---
title: Object Destructuring
localeTitle: Destruturação de Objetos
---
# Destruturação de Objetos

A desestruturação é uma maneira conveniente de extrair vários valores dos dados armazenados em Objetos. Ele pode ser usado em locais que recebem dados (como o lado esquerdo de uma atribuição). Este recurso é introduzido no `ECMAScript 6` .

Como extrair os valores é especificado através de padrões (leia sobre exemplos).

### Atribuição básica
```
var userInfo = {name: 'neel', age: 22}; 
 var {name, age} = userInfo; 
 
 console.log(name); // neel 
 console.log(age); // 22 
```

### Atribuição sem declaração

Uma variável pode ser atribuída a seu valor com a desestruturação separada de sua declaração.
```
var name, age; 
 
 ({name, age} = {name: 'neel', age: 22}); 
```

> O `( .. )` ao redor da instrução de atribuição é uma sintaxe obrigatória ao usar a atribuição de desestruturação de literal de objeto sem uma declaração.
> 
> `{name, age} = {name: 'neel', age: 22}` não é uma sintaxe independente válida, pois o `{name, age}` no lado esquerdo é considerado um bloco e não um literal de objeto.
> 
> No entanto, `({name, age} = {name: 'neel', age: 22})` é válido, assim como `var {name, age} = {name: 'neel', age: 22}`

### Atribuindo a novos nomes de variáveis

Uma propriedade pode ser descompactada de um objeto e atribuída a uma variável com um nome diferente da propriedade do objeto.
```
var userInfo = {a: 'neel', b: 22}; 
 var {a: name, b: bar} = userInfo; 
 
 console.log(name); // neel 
 console.log(bar); // 22 
```

### Valores padrão

Uma variável pode receber um padrão, caso o valor descompactado do objeto seja `undefined` .
```
var {name = 'ananonumys', age = 20} = {name: 'neel'}; 
 
 console.log(name); // neel 
 console.log(age); // 20 
```

### Atribuindo a novos nomes de variáveis ​​e fornecendo valores padrão

Uma propriedade pode ser tanto

1.  descompactado de um objeto e atribuído a uma variável com um nome diferente e
2.  atribuído um valor padrão no caso de o valor descompactado ser `undefined` .
```
var {a:name = 'ananonumys', b:age = 20} = {age: 22}; 
 
 console.log(name); // ananonumys 
 console.log(age); // 22 
```

### Configurando o valor padrão de um parâmetro de função

#### Versão ES5
```
function getUserInfo(data) { 
  data = data === undefined ? {} : data; 
  var name = data.name === undefined ? 'ananonumys' : data.name; 
  var age = data.age === undefined ? 20 : data.age; 
  var location = data.location === undefined ? 'india' : data.location; 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

#### Versão ES2015
```
function getUserInfo({name = 'ananonumys', age = 20, location = 'india'} = {}) { 
  console.log(name, age, location); 
  // print user data 
 } 
 
 getUserInfo({ 
  name: 'neel', 
  age: 22, 
  location: 'canada' 
 }); 
```

> Na assinatura da função para `getUserInfo` acima, o lado esquerdo desestruturado é atribuído a um literal de objeto vazio no lado direito: `{name = 'ananonumys', age = 20, location = 'india'} = {}` . Você também pode ter escrito a função sem a atribuição do lado direito. No entanto, se você deixar de fora a atribuição do lado direito, a função procurará pelo menos um argumento a ser fornecido quando invocada, enquanto na sua forma atual, você pode simplesmente chamar `getUserInfo()` sem fornecer nenhum parâmetro. O design atual é útil se você quiser chamar a função sem fornecer nenhum parâmetro, o outro pode ser útil quando você deseja garantir que um objeto seja passado para a função.

### Objeto aninhado e desestruturação de matriz
```
var metadata = { 
    title: 'Scratchpad', 
    translations: [ 
       { 
        locale: 'de', 
        localization_tags: [], 
        last_edit: '2014-04-14T08:43:37', 
        url: '/de/docs/Tools/Scratchpad', 
        title: 'JavaScript-Umgebung' 
       } 
    ], 
    url: '/en-US/docs/Tools/Scratchpad' 
 }; 
 
 var {title: englishTitle, translations: [{title: localeTitle}]} = metadata; 
 
 console.log(englishTitle); // "Scratchpad" 
 console.log(localeTitle);  // "JavaScript-Umgebung" 
```

### Para iteração e desestruturação
```
var people = [ 
  { 
    name: 'Mike Smith', 
    family: { 
      mother: 'Jane Smith', 
      father: 'Harry Smith', 
      sister: 'Samantha Smith' 
    }, 
    age: 35 
  }, 
  { 
    name: 'Tom Jones', 
    family: { 
      mother: 'Norah Jones', 
      father: 'Richard Jones', 
      brother: 'Howard Jones' 
    }, 
    age: 25 
  } 
 ]; 
 
 for (var {name: n, family: {father: f}} of people) { 
  console.log('Name: ' + n + ', Father: ' + f); 
 } 
 
 // "Name: Mike Smith, Father: Harry Smith" 
 // "Name: Tom Jones, Father: Richard Jones" 
```

### Descompactando campos de objetos passados ​​como parâmetro de função
```
function userId({id}) { 
  return id; 
 } 
 
 function whois({displayName, fullName: {firstName: name}}) { 
  console.log(displayName + ' is ' + name); 
 } 
 
 var user = { 
  id: 42, 
  displayName: 'jdoe', 
  fullName: { 
      firstName: 'John', 
      lastName: 'Doe' 
  } 
 }; 
 
 console.log('userId: ' + userId(user)); // "userId: 42" 
 whois(user); // "jdoe is John" 
```

Isso descompacta o `id` , `displayName` e `firstName` do objeto do usuário e os imprime.

### Nomes e Desestruturação da Propriedade de Objetos Computados
```
let key = 'z'; 
 let {[key]: foo} = {z: 'bar'}; 
 
 console.log(foo); // "bar" 
```

Veja também: **Destruturação de Objetos** | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring)