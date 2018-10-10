---
id: 5a24bbe0dba28a8d3cbd4c5d
title: Create a Complex JSX Element
challengeType: 6
isRequired: false
videoUrl: ''
localeTitle: Создание сложного элемента JSX
---

## Description
<section id="description"> Последняя задача была простым примером JSX, но JSX также может представлять собой более сложный HTML. Одна важная вещь, которую нужно знать о вложенном JSX, состоит в том, что она должна возвращать один элемент. Этот один родительский элемент будет обертывать все остальные уровни вложенных элементов. Например, несколько элементов JSX, написанных как братья и сестры без родительского элемента оболочки, не будут препровождаться. Вот пример: <b>Действительный JSX:</b> <blockquote> &lt;DIV&gt; <br> &lt;p&gt; Пункт 1 &lt;/ p&gt; <br> &lt;p&gt; Пункт второй &lt;/ p&gt; <br> &lt;p&gt; Пункт третий &lt;/ p&gt; <br> &lt;/ DIV&gt; </blockquote> <b>Недопустимый JSX:</b> <blockquote> &lt;p&gt; Пункт 1 &lt;/ p&gt; <br> &lt;p&gt; Пункт второй &lt;/ p&gt; <br> &lt;p&gt; Пункт третий &lt;/ p&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Определите новую константу <code>JSX</code> которая отображает <code>div</code> который содержит следующие элементы в порядке: список <code>h1</code> , <code>p</code> и неупорядоченный список, содержащий три элемента <code>li</code> . Вы можете включать любой текст, который вы хотите в каждом элементе. <strong>Примечание.</strong> При рендеринге нескольких элементов, подобных этому, их можно скопировать в круглые скобки, но это не требуется строго. Также обратите внимание, что эта проблема использует тег <code>div</code> для обертывания всех дочерних элементов в одном родительском элементе. Если вы удалите <code>div</code> , JSX больше не будет переполняться. Помните об этом, так как он будет применяться и при возврате элементов JSX в компонентах React. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Постоянный <code>JSX</code> должен возвращать элемент <code>div</code> .
    testString: 'assert(JSX.type === "div", "The constant <code>JSX</code> should return a <code>div</code> element.");'
  - text: В <code>div</code> должен быть тег <code>p</code> как второй элемент.
    testString: 'assert(JSX.props.children[1].type === "p", "The <code>div</code> should contain a <code>p</code> tag as the second element.");'
  - text: <code>div</code> должен содержать знак <code>ul</code> в качестве третьего элемента.
    testString: 'assert(JSX.props.children[2].type === "ul", "The <code>div</code> should contain a <code>ul</code> tag as the third element.");'
  - text: <code>div</code> должен содержать тег <code>h1</code> как первый элемент.
    testString: 'assert(JSX.props.children[0].type === "h1", "The <code>div</code> should contain an <code>h1</code> tag as the first element.");'
  - text: <code>ul</code> должна содержать три элемента <code>li</code> .
    testString: 'assert(JSX.props.children[2].props.children.length === 3, "The <code>ul</code> should contain three <code>li</code> elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='jsx-seed'>

```jsx
// write your code here

```

</div>


### After Test
<div id='jsx-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
