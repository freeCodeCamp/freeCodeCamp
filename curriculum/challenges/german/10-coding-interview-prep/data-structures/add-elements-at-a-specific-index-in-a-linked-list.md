---
id: 587d8252367417b2b2512c67
title: Füge Elemente an einem bestimmten Index in einer verknüpften Liste hinzu
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

Erstellen wir eine Methode addAt(index,element), die ein Element an einem bestimmten Index hinzufügt. Genauso wie wir Elemente an einem bestimmten Index entfernen, müssen wir den aktuellen Index im Auge behalten, wenn wir die verknüpfte Liste durchlaufen. Wenn der aktuelle Index mit dem angegebenen Index übereinstimmt, müssen wir die nächste Eigenschaft des vorherigen Knotens neu zuweisen, um auf den neu hinzugefügten Knoten zu verweisen. Der neu eingefügte Knoten soll auf den nächsten Knoten des momentanen Index verweisen. Um auf das Beispiel der Conga-Reihe zurückzukommen: Eine neue Person möchte sich der Reihe anschließen, aber sie möchte in der Mitte stehen. Du stehst in der Mitte, also entfernst du deine Hände von der Person vor dir. Die neue Person kommt und legt ihre Hände auf die Person, die du zuvor berührt hast und du legst deine Hände auf eine neue Person.

# --instructions--

Erstelle eine `addAt(index,element)`-Methode, die Elemente an einem gegebenen Index einfügt. Gib false zurück, falls ein Element nicht hinzugefügt werden konnte. **Hinweis:** Vergiss dabei nicht zu überprüfen, ob ein gegebener Index negativ oder länger als die Länge der Liste selbst ist.

# --hints--

Deine `addAt`-Methode sollte `head` dem neuen Knoten zuweisen, falls der eingegebene Index 0 ist.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'fish');
    return test.head().element === 'fish' && test.head().next.element === 'cat';
  })()
);
```

Deine `addAt`-Methode sollte die Länge der verknüpften Liste um eins für jeden neuen Knoten erhöhen, der der verknüpften Liste hinzugefügt wird.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.size() === 3;
  })()
);
```

Deine `addAt`-Methode sollte `false` zurückgeben, falls ein Knoten nicht hinzugefügt werden konnte.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.addAt(4, 'cat') === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if (head === null){
        head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }
    length++;
  };
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  }
}
```
