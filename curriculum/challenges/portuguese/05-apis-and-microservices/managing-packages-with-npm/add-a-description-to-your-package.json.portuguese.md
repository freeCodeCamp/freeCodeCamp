---
id: 587d7fb3367417b2b2512bfc
title: Add a Description to Your package.json
localeTitle: Adicione uma descrição ao seu pacote.json
challengeType: 2
---

## Description
<section id='description'> 
A próxima parte de um bom pacote.json é o campo de descrição, onde uma descrição curta, mas informativa, sobre o seu projeto pertence. 
Se algum dia você planeja publicar um pacote para npm, lembre-se de que essa é a string que deve vender sua ideia ao usuário quando ele decidir se instala seu pacote ou não. No entanto, esse não é o único caso de uso para a descrição: é uma ótima maneira de resumir o que um projeto faz, tão importante para seus projetos normais do Node.js ajudar outros desenvolvedores, futuros mantenedores ou até mesmo seu futuro a entender o projeto rapidamente. 
Independentemente do que você planeja para o seu projeto, uma descrição é definitivamente recomendada. Vamos adicionar algo semelhante a isto: 
<code>"description": "A project that does something awesome",</code> 
Instruções 
Adicione uma descrição ao package.json em seu projeto Glitch. 
Lembre-se de usar aspas duplas para nomes de campos (") e vírgulas (,) para separar campos. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'package.json deve ter uma chave de "descrição" válida'
    testString: 'getUserInput => $.get(getUserInput(''url'') + ''/_api/package.json'').then(data => { var packJson = JSON.parse(data); assert(packJson.description, ''"description" is missing''); }, xhr => { throw new Error(xhr.responseText); })'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
