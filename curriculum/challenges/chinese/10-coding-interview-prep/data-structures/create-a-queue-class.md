---
id: 587d8250367417b2b2512c60
title: 创建队列类
challengeType: 1
videoUrl: ''
dashedName: create-a-queue-class
---

# --description--

与堆栈一样，队列是元素的集合。但与堆栈不同，队列遵循FIFO（先入先出）原则。添加到队列的元素将被推送到队列的尾部或末尾，并且只允许删除队列前面的元素。我们可以使用数组来表示队列，但就像堆栈一样，我们希望限制我们对队列的控制量。队列类的两个主要方法是enqueue和dequeue方法。 enqueue方法将元素推送到队列的尾部，dequeue方法移除并返回队列前面的元素。其他有用的方法是front，size和isEmpty方法。说明编写一个将元素推送到队列尾部的入队方法，一个删除并返回前面元素的出列方法，一个让我们看到前面元素的前方法，一个显示长度的大小方法，以及一个isEmpty方法检查队列是否为空。

# --hints--

您的`Queue`类应该有一个`enqueue`方法。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.enqueue === 'function';
  })()
);
```

您的`Queue`类应该有一个`dequeue`方法。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.dequeue === 'function';
  })()
);
```

您的`Queue`类应该有一个`front`方法。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.front === 'function';
  })()
);
```

您的`Queue`类应该有一个`size`方法。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.size === 'function';
  })()
);
```

您的`Queue`类应该有一个`isEmpty`方法。

```js
assert(
  (function () {
    var test = new Queue();
    return typeof test.isEmpty === 'function';
  })()
);
```

`dequeue`方法应该删除并返回队列的前端元素

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.dequeue() === 'Smith';
  })()
);
```

`front`方法应该返回队列的front元素的值

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    test.enqueue('John');
    return test.front() === 'Smith';
  })()
);
```

`size`方法应该返回队列的长度

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return test.size() === 1;
  })()
);
```

如果队列中有元素，则`isEmpty`方法应返回`false`

```js
assert(
  (function () {
    var test = new Queue();
    test.enqueue('Smith');
    return !test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Queue() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function Queue () { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    // Only change code below this line
    this.enqueue = function(item) {
        collection.push(item);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function() {
        return collection.length === 0 ? true : false;
    }
    // Only change code above this line
}
```
