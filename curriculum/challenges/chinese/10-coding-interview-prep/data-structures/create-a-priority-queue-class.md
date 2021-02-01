---
id: 587d8255367417b2b2512c74
title: 创建优先级队列类
challengeType: 1
videoUrl: ''
dashedName: create-a-priority-queue-class
---

# --description--

在此挑战中，您将创建一个优先级队列。优先级队列是一种特殊类型的队列，其中项目可能具有指定其优先级的附加信息。这可以简单地用整数表示。项目优先级将覆盖确定序列项目已出列的放置顺序。如果具有较高优先级的项目在具有较低优先级的项目之后排队，则较高优先级项目将在所有其他项目之前出列。例如，让我们假设我们有一个包含三个项目的优先级队列： `[['kitten', 2], ['dog', 2], ['rabbit', 2]]`这里第二个值（整数）表示项目优先级。如果我们将优先级为`1` `['human', 1]`排入队列（假设优先级较低，则优先级较低），那么它将成为第一个出列的项目。该集合将是这样的： `[['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]` 。我们已经开始在代码编辑器中编写`PriorityQueue` 。您需要添加一个`enqueue`方法来添加具有优先级的项目，一个用于删除项目的`dequeue`方法，一个用于返回队列中项目数量的`size`方法，一个用于返回队列`front`元素的`front`方法，以及最后一个`isEmpty`方法，如果队列为空则返回`true` ，否则返回`false` 。入`enqueue`应接受上面显示格式的项目（ `['human', 1]` ），其中`1`表示优先级。 `dequeue`应该只返回当前项目，而不是其优先级。

# --hints--

您的`Queue`类应该有一个`enqueue`方法。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.enqueue === 'function';
  })()
);
```

您的`Queue`类应该有一个`dequeue`方法。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.dequeue === 'function';
  })()
);
```

您的`Queue`类应该有一个`size`方法。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.size === 'function';
  })()
);
```

您的`Queue`类应该有一个`isEmpty`方法。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    return typeof test.isEmpty === 'function';
  })()
);
```

当项目入队和出列时，您的PriorityQueue应使用`size`方法正确跟踪当前项目数。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['David Brown', 2]);
    test.enqueue(['Jon Snow', 1]);
    var size1 = test.size();
    test.dequeue();
    var size2 = test.size();
    test.enqueue(['A', 3]);
    test.enqueue(['B', 3]);
    test.enqueue(['C', 3]);
    return size1 === 2 && size2 === 1 && test.size() === 4;
  })()
);
```

当队列为空时， `isEmpty`方法应该返回`true` 。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 1]);
    test.enqueue(['B', 1]);
    test.dequeue();
    var first = test.isEmpty();
    test.dequeue();
    return !first && test.isEmpty();
  })()
);
```

优先级队列应该在具有较低优先级的项之前返回具有较高优先级的项，否则以先进先出顺序返回项。

```js
assert(
  (function () {
    var test = new PriorityQueue();
    test.enqueue(['A', 5]);
    test.enqueue(['B', 5]);
    test.enqueue(['C', 5]);
    test.enqueue(['D', 3]);
    test.enqueue(['E', 1]);
    test.enqueue(['F', 7]);
    var result = [];
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    result.push(test.dequeue());
    return result.join('') === 'EDABCF';
  })()
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```js
function PriorityQueue() {
  this.collection = [];
  this.printCollection = function () {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function (newitem) {
    if (this.isEmpty()) {
      return this.collection.push(newitem);
    }

    this.collection = this.collection.reverse();
    var found_index = this.collection.findIndex(function (item) {
      return newitem[1] >= item[1];
    });
    if (found_index === -1) {
      this.collection.push(newitem);
    } else {
      this.collection.splice(found_index, 0, newitem);
    }
    this.collection = this.collection.reverse();
  };
  this.dequeue = function () {
    if (!this.isEmpty()) {
      return this.collection.shift()[0];
    } else {
      return "The queue is empty.";
    }
  };
  this.size = function () {
    return this.collection.length;
  };
  this.front = function () {
    return this.collection[0][0];
  };
  this.isEmpty = function () {
    return this.size() > 0 ? false : true;
  };
  // Only change code above this line
}
```
