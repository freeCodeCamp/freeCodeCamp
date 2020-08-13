---
id: 587d8259367417b2b2512c84
title: Create a Trie Search Tree
challengeType: 1
videoUrl: ''
localeTitle: 创建Trie搜索树
---

## Description
<section id="description">在这里，我们将继续从二叉搜索树开始，看看另一种称为trie的树结构。 trie是一种常用于保存字符串的有序搜索树，或者更通用的关联数组或其中键是字符串的动态数据集。当许多键具有重叠前缀时，它们非常擅长存储数据集，例如，字典中的所有单词。与二叉树不同，节点不与实际值相关联。相反，节点的路径表示特定的键。例如，如果我们想将字符串代码存储在trie中，我们将有四个节点，每个字母对应一个节点：c  -  o  -  d  -  e。然后，通过所有这些节点的路径将创建代码作为字符串 - 该路径是我们存储的密钥。然后，如果我们想要添加字符串编码，它将在d之后分支之前共享前三个代码节点。通过这种方式，可以非常紧凑地存储大型数据集。此外，搜索可以非常快，因为它实际上限于您存储的字符串的长度。此外，与二叉树不同，节点可以存储任意数量的子节点。正如您可能从上面的示例中猜到的那样，一些元数据通常存储在保存密钥结尾的节点上，以便在以后的遍历中仍可以检索密钥。例如，如果我们在上面的示例中添加了代码，我们需要某种方式来知道代码中的e代表先前输入的密钥的结尾。否则，当我们添加代码时，这些信息将会丢失。说明：让我们创建一个存储单词的trie。它将通过add方法接受单词并将它们存储在trie数据结构中。它还允许我们查询给定字符串是否是带有isWord方法的单词，并使用print方法检索输入到trie中的所有单词。 isWord应该返回一个布尔值，print应该将所有这些单词的数组作为字符串值返回。为了让我们验证这个数据结构是否正确实现，我们为树中的每个节点提供了一个Node结构。每个节点都是一个具有keys属性的对象，该属性是JavaScript Map对象。这将保存作为每个节点的有效密钥的各个字母。我们还在节点上创建了一个end属性，如果节点表示单词的终止，则可以将其设置为true。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Trie有一个add方法。
    testString: assert((function testTrie() { var test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; return (typeof test.add == 'function') }()));
  - text: Trie有一种打印方法。
    testString: assert((function testTrie() { var test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; return (typeof test.print == 'function') }()));
  - text: Trie有一个isWord方法。
    testString: assert((function testTrie() { var test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; return (typeof test.isWord == 'function') }()));
  - text: print方法将添加到trie的所有项目作为数组中的字符串返回。
    testString: assert((function testTrie() { var test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; test.add('jump'); test.add('jumps'); test.add('jumped'); test.add('house'); test.add('mouse'); var added = test.print(); return (added.indexOf('jump') != -1 && added.indexOf('jumps') != -1 && added.indexOf('jumped') != -1 && added.indexOf('house') != -1 && added.indexOf('mouse') != -1 && added.length == 5); }()));
  - text: isWord方法仅对添加到trie的单词返回true，对所有其他单词返回false。
    testString: assert((function testTrie() { var test = false; if (typeof Trie !== 'undefined') { test = new Trie() } else { return false; }; test.add('hop'); test.add('hops'); test.add('hopped'); test.add('hoppy'); test.add('hope'); return (test.isWord('hop') && !test.isWord('ho') && test.isWord('hopped') && !test.isWord('hopp') && test.isWord('hoppy') && !test.isWord('hoping')); }()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
var Node = function() {
  this.keys = new Map();
  this.end = false;
  this.setEnd = function() {
    this.end = true;
  };
  this.isEnd = function() {
    return this.end;
  };
};
var Trie = function() {
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
