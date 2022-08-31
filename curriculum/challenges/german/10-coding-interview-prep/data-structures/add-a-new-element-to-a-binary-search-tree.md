---
id: 587d8257367417b2b2512c7b
title: Füge ein neues Element in einen binären Suchbaum ein
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

In dieser Aufgabenreihe wird die Baumdatenstruktur vorgestellt. Bäume sind wichtige und vielseitige Datenstrukturen in der Informatik. Ihr Name rührt natürlich daher, dass sie den Bäumen, die wir aus der Natur kennen, sehr ähnlich sehen. Eine Baumdatenstruktur beginnt mit einem Knoten, der in der Regel als Wurzel bezeichnet wird, und verzweigt sich von hier aus zu weiteren Knoten, von denen jeder weitere Kindknoten haben kann, und so weiter und so fort. Die Datenstruktur wird in der Regel mit dem Wurzelknoten an der Spitze visualisiert; man kann sie sich als einen auf den Kopf gestellten natürlichen Baum vorstellen.

Lass uns zuerst ein paar grundlegende Begriffe lernen, denen man häufig in Zusammenhang mit Bäumen begegnet. Der Wurzelknoten ist an der Spitze des Baums. Die Datenpunkte im Baum heißen Knoten. Knoten, deren Zweige zu anderen Knoten führen, werden als Elternteil des Knotens bezeichnet, zu dem der Zweig führt (das Kind). Andere kompliziertere Begriffe lassen sich ebenfalls logisch herleiten. Ein Teilbaum bezieht sich auf alle Nachfahren eines bestimmten Knotens, Zweige können als Kanten bezeichnet werden, und Blattknoten sind Knoten am Ende des Baums, die keine Kinder haben. Schließlich ist zu beachten, das Bäume allgemein rekursive Datenstrukturen sind. Das heißt, alle Kinder eines Knotens sind Eltern ihres eigenen Teilbaums usw. Die rekursive Natur von Bäumen ist wichtig zu verstehen, wenn man Algorithmen für allgemeine Baumfunktionen entwickelt.

Besprechen wir zu Beginn eine bestimmte Art von Baum, den Binärbaum. Tatsächlich werden wir noch spezifischer und sprechen über den binären Suchbaum. Lass uns beschreiben, was das bedeutet. Während die Baumdatenstruktur eine beliebige Anzahl von Zweigen an einem einzelnen Knoten haben kann, kann ein Binärbaum nur zwei Zweige für jeden Knoten haben. Außerdem wird ein binärer Suchbaum in Bezug auf die untergeordneten Teilbäume so geordnet, dass der Wert jedes Knotens im linken Teilbaum kleiner oder gleich dem Wert des Elternknotens ist und der Wert jedes Knotens im rechten Teilbaum größer oder gleich dem Wert des Elternknotens ist. Es ist sehr hilfreich, sich diese Beziehung vor Augen zu führen, um sie besser zu verstehen:

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

Jetzt kann man das Verhältnis sehr leicht verstehen. Beachte, dass jeder Wert links von 8, dem Wurzelknoten, kleiner als 8 ist, und jeder Wert rechts davon größer als 8 ist. Beachte außerdem, dass diese Beziehung auch für jeden der Teilbäume gilt. Zum Beispiel ist das erste linke Kind ein Teilbaum. 3 ist der übergeordnete Knoten, und er hat genau zwei Kinderknoten - nach den Regeln für binäre Suchbäume wissen wir ohne hinzusehen, dass das linke Kind dieses Knotens (und jedes seiner Kinder) kleiner als 3 sein wird, und das rechte Kind (und jedes seiner Kinder) größer als 3 (aber auch kleiner als der Wurzelwert der jeweiligen Struktur), und so weiter.

Binäre Suchbäume sind sehr gebräuchliche und nützliche Datenstrukturen, da sie im Durchschnitt für verschiedene gängige Operationen wie Suchen, Einfügen und Löschen logarithmische Werte liefern.

# --instructions--

Fangen wir einfach an. Wir haben hier das Grundgerüst einer binären Suchbaumstruktur sowie eine Funktion zum Erstellen von Knoten für unseren Baum definiert. Beachte, dass jeder Knoten einen linken und rechten Wert haben kann. Diesen werden untergeordnete Teilbäume zugewiesen, sofern sie existieren. In unserem binären Suchbaum wirst du eine Methode erstellen, um neue Werte in den Baum einzufügen. Die Methode sollte `add` heißen und einen Integer-Wert akzeptieren, der dem Baum hinzugefügt wird. Achten Sie darauf, die Invariante eines binären Suchbaums beizubehalten: Der Wert in jedem linken Kind sollte kleiner oder gleich dem Elternwert sein, und der Wert in jedem rechten Kind sollte größer oder gleich dem Elternwert sein. An dieser Stelle müssen wir dafür sorgen, dass unser Baum keine doppelten Werte enthält. Wenn wir versuchen, einen Wert hinzuzufügen, der bereits existiert, sollte die Methode `null` zurückgeben. Andernfalls, wenn die Ergänzung erfolgreich ist, sollte `undefined` zurückgegeben werden.

**Hinweis:** Bäume sind natürlich rekursive Datenstrukturen!

# --hints--

Die `BinarySearchTree` Datenstruktur sollte vorhanden sein.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

Der binäre Suchbaum sollte eine Methode namens `add` beinhalten.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

Die Add-Methode sollte Elemente nach den Regeln des binären Suchbaums hinzufügen.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    const expectedResult = [1, 4, 7, 8, 34, 45, 73, 87];
    const result = test.inOrder();
    return expectedResult.toString() === result.toString();
  })()
);
```

Das Hinzufügen eines Elements, das bereits existiert, sollte `null` zurückgeben.

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    return test.add(4) == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    inOrder() {
      if (!this.root) {
        return null;
      }
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}
```
