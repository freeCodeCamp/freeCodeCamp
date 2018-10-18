---
title: Label Tag
localeTitle: Dia da etiqueta
---
# Tag de etiqueta

< **_label_** > define um rótulo para um  tipo elemento / tag.

### Uso
```
<label for="id">Label</label> 
 <input type="text" name="text" id="id" value="yourvalue"><br> 
```

Como você pode ver, o atributo _for_ da tag deve ser igual ao atributo id do elemento relacionado para vinculá-los.

### Suporte de Plataforma

| Browser | Suporte a Elemento | |: -----: |: -------------: | Internet Explorer |: marca de _seleção_ branca: | | Mozilla Firefox |: marca de _seleção_ branca: | Google Chrome |: marca de _seleção_ branca: | | Opera |: marca de _seleção_ branca: | | Safari |: marca de _seleção_ branca: |

### Atributos

Atributo | Valor | Descrição | |: -------: |: ----: |: ---------: | | for | _id do_ elemento _| Especifica qual elemento de formulário um rótulo está vinculado | | form | form_ id | Especifica um ou mais formulários aos quais o rótulo pertence |

### Atributo Global

A tag < **label** > suporta os atributos globais em HTML.

### Atributo do Evento

A tag < **label** > suporta os atributos do evento em HTML.

> O elemento < **label** > não é renderizado como algo especial para o usuário. No entanto, ele fornece uma melhoria de usabilidade para usuários de mouse, porque se o usuário clicar no texto dentro do elemento, ele alterna o controle.

#### Mais Informações:

# [https://www.w3schools.com/jsref/dom _obj_ label.asp](https://www.w3schools.com/jsref/dom_obj_label.asp)

## Rótulo

A tag `<label>` define um rótulo para um elemento `<input>` .

Um rótulo pode ser vinculado a um elemento usando o atributo "for" ou colocando o elemento dentro do elemento.

```html

<label for="peas">Do you like peas? 
  <input type="checkbox" name="peas" id="peas"> 
 </label> 
```

```html

<label>Do you like peas? 
  <input type="checkbox" name="peas"> 
 </label> 
```

#### Mais Informações:

[MDN - Tag Tabel](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)  
[W3School - etiqueta de etiqueta](https://www.w3schools.com/tags/tag_label.asp)