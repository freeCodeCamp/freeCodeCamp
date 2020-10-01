---
id: 587d8255367417b2b2512c74
challengeType: 1
videoUrl: ''
title: 创建优先级队列类
---

## Description
<section id="description">在此挑战中，您将创建一个优先级队列。优先级队列是一种特殊类型的队列，其中项目可能具有指定其优先级的附加信息。这可以简单地用整数表示。项目优先级将覆盖确定序列项目已出列的放置顺序。如果具有较高优先级的项目在具有较低优先级的项目之后排队，则较高优先级项目将在所有其他项目之前出列。例如，让我们假设我们有一个包含三个项目的优先级队列： <code>[[&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code>这里第二个值（整数）表示项目优先级。如果我们将优先级为<code>1</code> <code>[&#39;human&#39;, 1]</code>排入队列（假设优先级较低，则优先级较低），那么它将成为第一个出列的项目。该集合将是这样的： <code>[[&#39;human&#39;, 1], [&#39;kitten&#39;, 2], [&#39;dog&#39;, 2], [&#39;rabbit&#39;, 2]]</code> 。我们已经开始在代码编辑器中编写<code>PriorityQueue</code> 。您需要添加一个<code>enqueue</code>方法来添加具有优先级的项目，一个用于删除项目的<code>dequeue</code>方法，一个用于返回队列中项目数量的<code>size</code>方法，一个用于返回队列<code>front</code>元素的<code>front</code>方法，以及最后一个<code>isEmpty</code>方法，如果队列为空则返回<code>true</code> ，否则返回<code>false</code> 。入<code>enqueue</code>应接受上面显示格式的项目（ <code>[&#39;human&#39;, 1]</code> ），其中<code>1</code>表示优先级。 <code>dequeue</code>应该只返回当前项目，而不是其优先级。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的<code>Queue</code>类应该有一个<code>enqueue</code>方法。
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.enqueue === 'function')}()));
  - text: 您的<code>Queue</code>类应该有一个<code>dequeue</code>方法。
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.dequeue === 'function')}()));
  - text: 您的<code>Queue</code>类应该有一个<code>size</code>方法。
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.size === 'function')}()));
  - text: 您的<code>Queue</code>类应该有一个<code>isEmpty</code>方法。
    testString: assert((function(){var test = new PriorityQueue();  return (typeof test.isEmpty === 'function')}()));
  - text: 当项目入队和出列时，您的PriorityQueue应使用<code>size</code>方法正确跟踪当前项目数。
    testString: assert((function(){var test = new PriorityQueue(); test.enqueue(['David Brown', 2]); test.enqueue(['Jon Snow', 1]); var size1 = test.size(); test.dequeue(); var size2 = test.size(); test.enqueue(['A', 3]); test.enqueue(['B', 3]); test.enqueue(['C', 3]); return (size1 === 2 && size2 === 1 && test.size() === 4)}()));
  - text: 当队列为空时， <code>isEmpty</code>方法应该返回<code>true</code> 。
    testString: assert((function(){var test = new PriorityQueue(); test.enqueue(['A', 1]); test.enqueue(['B', 1]); test.dequeue(); var first = test.isEmpty(); test.dequeue(); return (!first && test.isEmpty()); }()));
  - text: 优先级队列应该在具有较低优先级的项之前返回具有较高优先级的项，否则以先进先出顺序返回项。
    testString: assert((function(){var test = new PriorityQueue(); test.enqueue(['A', 5]); test.enqueue(['B', 5]); test.enqueue(['C', 5]); test.enqueue(['D', 3]); test.enqueue(['E', 1]); test.enqueue(['F', 7]); var result = []; result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); result.push(test.dequeue()); return result.join('') === 'EDABCF';}()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function PriorityQueue () {
    this.collection = [];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line

    // Only change code above this line
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
