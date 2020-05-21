---
id: 5a23c84252665b21eecc7ecb
title: K-d tree
challengeType: 5
isHidden: false
forumTopicId: 302295
---

## Description

<section id='description'>

A k-d tree (short for <i>k</i>-dimensional tree) is a space-partitioning data structure for organizing points in a k-dimensional space.
k-d trees are a useful data structure for several applications, such as searches involving a multidimensional search key (e.g. range searches and nearest neighbor searches).
k-d trees are a special case of binary space partitioning trees. k-d trees are not suitable, however, for efficiently finding the nearest neighbor in high dimensional spaces. As a general rule, if the dimensionality is <i>k</i>, the number of points in the data, <i>N</i>, should be <i>N</i> ≫ 2<sup><i>k</i></sup>.
Otherwise, when k-d trees are used with high-dimensional data, most of the points in the tree will be evaluated and the efficiency is no better than exhaustive search, and other methods such as approximate nearest-neighbor are used instead.

</section>

## Instructions

<section id='instructions'>

Write a function to perform a nearest neighbour search using k-d tree. The function takes two parameters: an array of k-dimensional points, and a single k-dimensional point whose nearest neighbour should be returned by the function. A k-dimensional point will be given as an array of k elements.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>kdNN</code> should be a function.
    testString: assert(typeof kdNN == 'function');
  - text: <code>kdNN([[[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [9, 2])</code> should return an array.
    testString: assert(Array.isArray(kdNN([[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [9, 2])));
  - text: <code>kdNN([[[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [9, 2])</code> should return <code>[ 8, 1 ]</code>.
    testString: assert.deepEqual(kdNN([[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [9, 2]), [8, 1]);
  - text: <code>kdNN([[[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [7, 1])</code> should return <code>[ 8, 1 ]</code>.
    testString: assert.deepEqual(kdNN([[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [7, 1]), [8, 1]);
  - text: <code>kdNN([[[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [3, 2])</code> should return <code>[ 2, 3 ]</code>.
    testString: assert.deepEqual(kdNN([[2, 3], [5, 4], [9, 6], [4, 7], [8, 1], [7, 2]], [3, 2]), [2, 3]);
  - text: <code>kdNN([[2, 3, 1], [9, 4, 5], [4, 6, 7], [1, 2, 5], [7, 8, 9], [3, 6, 1]], [1, 2, 3])</code> should return <code>[ 1, 2, 5 ]</code>.
    testString: assert.deepEqual(kdNN([[2, 3, 1], [9, 4, 5], [4, 6, 7], [1, 2, 5], [7, 8, 9], [3, 6, 1]], [1, 2, 3]), [1, 2, 5]);
  - text: <code>kdNN([[2, 3, 1], [9, 4, 5], [4, 6, 7], [1, 2, 5], [7, 8, 9], [3, 6, 1]], [4, 5, 6])</code> should return <code>[ 4, 6, 7 ]</code>.
    testString: assert.deepEqual(kdNN([[2, 3, 1], [9, 4, 5], [4, 6, 7], [1, 2, 5], [7, 8, 9], [3, 6, 1]], [4, 5, 6]), [4, 6, 7]);
  - text: <code>kdNN([[2, 3, 1], [9, 4, 5], [4, 6, 7], [1, 2, 5], [7, 8, 9], [3, 6, 1]], [8, 8, 8])</code> should return <code>[ 7, 8, 9 ]</code>.
    testString: assert.deepEqual(kdNN([[2, 3, 1], [9, 4, 5], [4, 6, 7], [1, 2, 5], [7, 8, 9], [3, 6, 1]], [8, 8, 8]), [7, 8, 9]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function kdNN(fpoints, fpoint) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function kdNN(fpoints, fpoint) {
  function Node(obj, dimension, parent) {
    this.obj = obj;
    this.left = null;
    this.right = null;
    this.parent = parent;
    this.dimension = dimension;
  }

  function kdTree(points, metric, dimensions) {
    var self = this;

    function buildTree(points, depth, parent) {
      var dim = depth % dimensions.length,
        median,
        node;

      if (points.length === 0) {
        return null;
      }
      if (points.length === 1) {
        return new Node(points[0], dim, parent);
      }

      points.sort(function(a, b) {
        return a[dimensions[dim]] - b[dimensions[dim]];
      });

      median = Math.floor(points.length / 2);
      node = new Node(points[median], dim, parent);
      node.left = buildTree(points.slice(0, median), depth + 1, node);
      node.right = buildTree(points.slice(median + 1), depth + 1, node);

      return node;
    }

    this.root = buildTree(points, 0, null);

    this.insert = function(point) {
      function innerSearch(node, parent) {
        if (node === null) {
          return parent;
        }

        var dimension = dimensions[node.dimension];
        if (point[dimension] < node.obj[dimension]) {
          return innerSearch(node.left, node);
        } else {
          return innerSearch(node.right, node);
        }
      }

      var insertPosition = innerSearch(this.root, null),
        newNode,
        dimension;

      if (insertPosition === null) {
        this.root = new Node(point, 0, null);
        return;
      }

      newNode = new Node(
        point,
        (insertPosition.dimension + 1) % dimensions.length,
        insertPosition
      );
      dimension = dimensions[insertPosition.dimension];

      if (point[dimension] < insertPosition.obj[dimension]) {
        insertPosition.left = newNode;
      } else {
        insertPosition.right = newNode;
      }
    };

    this.nearest = function(point, maxNodes, maxDistance) {
      var i, result, bestNodes;

      bestNodes = new BinaryHeap(function(e) {
        return -e[1];
      });

      function nearestSearch(node) {
        var bestChild,
          dimension = dimensions[node.dimension],
          ownDistance = metric(point, node.obj),
          linearPoint = {},
          linearDistance,
          otherChild,
          i;

        function saveNode(node, distance) {
          bestNodes.push([node, distance]);
          if (bestNodes.size() > maxNodes) {
            bestNodes.pop();
          }
        }

        for (i = 0; i < dimensions.length; i += 1) {
          if (i === node.dimension) {
            linearPoint[dimensions[i]] = point[dimensions[i]];
          } else {
            linearPoint[dimensions[i]] = node.obj[dimensions[i]];
          }
        }

        linearDistance = metric(linearPoint, node.obj);

        if (node.right === null && node.left === null) {
          if (
            bestNodes.size() < maxNodes ||
            ownDistance < bestNodes.peek()[1]
          ) {
            saveNode(node, ownDistance);
          }
          return;
        }

        if (node.right === null) {
          bestChild = node.left;
        } else if (node.left === null) {
          bestChild = node.right;
        } else {
          if (point[dimension] < node.obj[dimension]) {
            bestChild = node.left;
          } else {
            bestChild = node.right;
          }
        }

        nearestSearch(bestChild);

        if (bestNodes.size() < maxNodes || ownDistance < bestNodes.peek()[1]) {
          saveNode(node, ownDistance);
        }

        if (
          bestNodes.size() < maxNodes ||
          Math.abs(linearDistance) < bestNodes.peek()[1]
        ) {
          if (bestChild === node.left) {
            otherChild = node.right;
          } else {
            otherChild = node.left;
          }
          if (otherChild !== null) {
            nearestSearch(otherChild);
          }
        }
      }

      if (maxDistance) {
        for (i = 0; i < maxNodes; i += 1) {
          bestNodes.push([null, maxDistance]);
        }
      }

      if (self.root) nearestSearch(self.root);

      result = [];

      for (i = 0; i < Math.min(maxNodes, bestNodes.content.length); i += 1) {
        if (bestNodes.content[i][0]) {
          result.push([bestNodes.content[i][0].obj, bestNodes.content[i][1]]);
        }
      }
      return result;
    };
  }

  function BinaryHeap(scoreFunction) {
    this.content = [];
    this.scoreFunction = scoreFunction;
  }

  BinaryHeap.prototype = {
    push: function(element) {
      // Add the new element to the end of the array.
      this.content.push(element);
      // Allow it to bubble up.
      this.bubbleUp(this.content.length - 1);
    },

    pop: function() {
      // Store the first element so we can return it later.
      var result = this.content[0];
      // Get the element at the end of the array.
      var end = this.content.pop();
      // If there are any elements left, put the end element at the
      // start, and let it sink down.
      if (this.content.length > 0) {
        this.content[0] = end;
        this.sinkDown(0);
      }
      return result;
    },

    peek: function() {
      return this.content[0];
    },

    size: function() {
      return this.content.length;
    },

    bubbleUp: function(n) {
      // Fetch the element that has to be moved.
      var element = this.content[n];
      // When at 0, an element can not go up any further.
      while (n > 0) {
        // Compute the parent element's index, and fetch it.
        var parentN = Math.floor((n + 1) / 2) - 1,
          parent = this.content[parentN];
        // Swap the elements if the parent is greater.
        if (this.scoreFunction(element) < this.scoreFunction(parent)) {
          this.content[parentN] = element;
          this.content[n] = parent;
          // Update 'n' to continue at the new position.
          n = parentN;
        }
        // Found a parent that is less, no need to move it further.
        else {
          break;
        }
      }
    },

    sinkDown: function(n) {
      // Look up the target element and its score.
      var length = this.content.length,
        element = this.content[n],
        elemScore = this.scoreFunction(element);

      while (true) {
        // Compute the indices of the child elements.
        var child2N = (n + 1) * 2,
          child1N = child2N - 1;
        // This is used to store the new position of the element,
        // if any.
        var swap = null;
        // If the first child exists (is inside the array)...
        if (child1N < length) {
          // Look it up and compute its score.
          var child1 = this.content[child1N],
            child1Score = this.scoreFunction(child1);
          // If the score is less than our element's, we need to swap.
          if (child1Score < elemScore) swap = child1N;
        }
        // Do the same checks for the other child.
        if (child2N < length) {
          var child2 = this.content[child2N],
            child2Score = this.scoreFunction(child2);
          if (child2Score < (swap == null ? elemScore : child1Score)) {
            swap = child2N;
          }
        }

        // If the element needs to be moved, swap it, and continue.
        if (swap != null) {
          this.content[n] = this.content[swap];
          this.content[swap] = element;
          n = swap;
        }
        // Otherwise, we are done.
        else {
          break;
        }
      }
    }
  };

  var dims = [];

  for (var i = 0; i < fpoint.length; i++) dims.push(i);

  var tree = new kdTree(
    fpoints,
    function(e1, e2) {
      var d = 0;
      var e3 = e1;
      if (!Array.isArray(e1)) {
        e3 = [];
        for (var key in e1) e3.push(e1[key]);

        e1 = e3;
      }
      e1.forEach(function(e, i) {
        var sqd = e1[i] - e2[i];
        d += sqd * sqd;
      });
      return d;
    },
    dims
  );

  return tree.nearest(fpoint, 1, 1000)[0][0];
}
```

</section>
