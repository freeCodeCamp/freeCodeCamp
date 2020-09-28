---
id: 5a23c84252665b21eecc803c
title: Sudoku
challengeType: 5
forumTopicId: 302329
---

## Description

<section id='description'>

Write a function to solve a partially filled-in normal 9x9 <a href="https://en.wikipedia.org/wiki/Sudoku" target="_blank">Sudoku</a> grid and return the result. The blank fields are represented by 0s.
<a href="https://en.wikipedia.org/wiki/Algorithmics_of_sudoku" target="_blank">Algorithmics of Sudoku</a> may help implement this.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>solveSudoku</code> should be a function.
    testString: assert(typeof solveSudoku == 'function');
  - text: <code>solveSudoku([[8, 1, 9, -1, -1, 5, -1, -1, -1],[-1, -1, 2, -1, -1, -1, 7, 5, -1],[-1, 3, 7, 1, -1, 4, -1, 6, -1],[4, -1, -1, 5, 9, -1, 1, -1, -1],[7, -1, -1, 3, -1, 8, -1, -1, 2],[-1, -1, 3, -1, 6, 2, -1, -1, 7],[-1, 5, -1, 7, -1, 9, 2, 1, -1],[-1, 6, 4, -1, -1, -1, 9, -1, -1],[-1, -1, -1, 2, -1, -1, 4, 3, 8]])</code> should return an array.
    testString: assert(Array.isArray(solveSudoku([[8, 1, 9, -1, -1, 5, -1, -1, -1], [-1, -1, 2, -1, -1, -1, 7, 5, -1], [-1, 3, 7, 1, -1, 4, -1, 6, -1], [4, -1, -1, 5, 9, -1, 1, -1, -1], [7, -1, -1, 3, -1, 8, -1, -1, 2], [-1, -1, 3, -1, 6, 2, -1, -1, 7], [-1, 5, -1, 7, -1, 9, 2, 1, -1], [-1, 6, 4, -1, -1, -1, 9, -1, -1], [-1, -1, -1, 2, -1, -1, 4, 3, 8]])));
  - text: <code>solveSudoku([[8, 1, 9, -1, -1, 5, -1, -1, -1],[-1, -1, 2, -1, -1, -1, 7, 5, -1],[-1, 3, 7, 1, -1, 4, -1, 6, -1],[4, -1, -1, 5, 9, -1, 1, -1, -1],[7, -1, -1, 3, -1, 8, -1, -1, 2],[-1, -1, 3, -1, 6, 2, -1, -1, 7],[-1, 5, -1, 7, -1, 9, 2, 1, -1],[-1, 6, 4, -1, -1, -1, 9, -1, -1],[-1, -1, -1, 2, -1, -1, 4, 3, 8]])</code> should return <code>[[8, 1, 9, 6, 7, 5, 3, 2, 4],[6, 4, 2, 9, 8, 3, 7, 5, 1],[5, 3, 7, 1, 2, 4, 8, 6, 9],[4, 2, 6, 5, 9, 7, 1, 8, 3],[7, 9, 5, 3, 1, 8, 6, 4, 2],[1, 8, 3, 4, 6, 2, 5, 9, 7],[3, 5, 8, 7, 4, 9, 2, 1, 6],[2, 6, 4, 8, 3, 1, 9, 7, 5],[9, 7, 1, 2, 5, 6, 4, 3, 8]]</code>.
    testString: assert.deepEqual(solveSudoku([[8, 1, 9, -1, -1, 5, -1, -1, -1], [-1, -1, 2, -1, -1, -1, 7, 5, -1], [-1, 3, 7, 1, -1, 4, -1, 6, -1], [4, -1, -1, 5, 9, -1, 1, -1, -1], [7, -1, -1, 3, -1, 8, -1, -1, 2], [-1, -1, 3, -1, 6, 2, -1, -1, 7], [-1, 5, -1, 7, -1, 9, 2, 1, -1], [-1, 6, 4, -1, -1, -1, 9, -1, -1], [-1, -1, -1, 2, -1, -1, 4, 3, 8]]), [[8, 1, 9, 6, 7, 5, 3, 2, 4], [6, 4, 2, 9, 8, 3, 7, 5, 1], [5, 3, 7, 1, 2, 4, 8, 6, 9], [4, 2, 6, 5, 9, 7, 1, 8, 3], [7, 9, 5, 3, 1, 8, 6, 4, 2], [1, 8, 3, 4, 6, 2, 5, 9, 7], [3, 5, 8, 7, 4, 9, 2, 1, 6], [2, 6, 4, 8, 3, 1, 9, 7, 5], [9, 7, 1, 2, 5, 6, 4, 3, 8]]);
  - text: <code>solveSudoku([[5, 3, -1, -1, 2, 4, 7, -1, -1],[-1, -1, 2, -1, -1, -1, 8, -1, -1],[1, -1, -1, 7, -1, 3, 9, -1, 2],[-1, -1, 8, -1, 7, 2, -1, 4, 9],[-1, 2, -1, 9, 8, -1, -1, 7, -1],[7, 9, -1, -1, -1, -1, -1, 8, -1],[-1, -1, -1, -1, 3, -1, 5, -1, 6],[9, 6, -1, -1, 1, -1, 3, -1, -1],[-1, 5, -1, 6, 9, -1, -1, 1, -1]])</code> should return <code>[[5, 3, 9, 8, 2, 4, 7, 6, 1],[6, 7, 2, 1, 5, 9, 8, 3, 4],[1, 8, 4, 7, 6, 3, 9, 5, 2],[3, 1, 8, 5, 7, 2, 6, 4, 9],[4, 2, 5, 9, 8, 6, 1, 7, 3],[7, 9, 6, 3, 4, 1, 2, 8, 5],[8, 4, 1, 2, 3, 7, 5, 9, 6],[9, 6, 7, 4, 1, 5, 3, 2, 8],[2, 5, 3, 6, 9, 8, 4, 1, 7]]</code>.
    testString: assert.deepEqual(solveSudoku([[5, 3, -1, -1, 2, 4, 7, -1, -1], [-1, -1, 2, -1, -1, -1, 8, -1, -1], [1, -1, -1, 7, -1, 3, 9, -1, 2], [-1, -1, 8, -1, 7, 2, -1, 4, 9], [-1, 2, -1, 9, 8, -1, -1, 7, -1], [7, 9, -1, -1, -1, -1, -1, 8, -1], [-1, -1, -1, -1, 3, -1, 5, -1, 6], [9, 6, -1, -1, 1, -1, 3, -1, -1], [-1, 5, -1, 6, 9, -1, -1, 1, -1]]), [[5, 3, 9, 8, 2, 4, 7, 6, 1], [6, 7, 2, 1, 5, 9, 8, 3, 4], [1, 8, 4, 7, 6, 3, 9, 5, 2], [3, 1, 8, 5, 7, 2, 6, 4, 9], [4, 2, 5, 9, 8, 6, 1, 7, 3], [7, 9, 6, 3, 4, 1, 2, 8, 5], [8, 4, 1, 2, 3, 7, 5, 9, 6], [9, 6, 7, 4, 1, 5, 3, 2, 8], [2, 5, 3, 6, 9, 8, 4, 1, 7]]);
  - text: <code>solveSudoku([[-1, -1, 3, -1, 2, -1, 6, -1, -1],[9, -1, -1, 3, -1, 5, -1, -1, 1],[-1, -1, 1, 8, -1, 6, 4, -1, -1],[-1, -1, 8, 1, -1, 2, 9, -1, -1],[7, -1, -1, -1, -1, -1, -1, -1, 8],[-1, -1, 6, 7, -1, 8, 2, -1, -1],[-1, -1, 2, 6, -1, 9, 5, -1, -1],[8, -1, -1, 2, -1, 3, -1, -1, 9],[-1, -1, 5, -1, 1, -1, 3, -1, -1]])</code> should return <code>[[4, 8, 3, 9, 2, 1, 6, 5, 7],[9, 6, 7, 3, 4, 5, 8, 2, 1],[2, 5, 1, 8, 7, 6, 4, 9, 3],[5, 4, 8, 1, 3, 2, 9, 7, 6],[7, 2, 9, 5, 6, 4, 1, 3, 8],[1, 3, 6, 7, 9, 8, 2, 4, 5],[3, 7, 2, 6, 8, 9, 5, 1, 4],[8, 1, 4, 2, 5, 3, 7, 6, 9],[6, 9, 5, 4, 1, 7, 3, 8, 2]]</code>.
    testString: assert.deepEqual(solveSudoku([[-1, -1, 3, -1, 2, -1, 6, -1, -1], [9, -1, -1, 3, -1, 5, -1, -1, 1], [-1, -1, 1, 8, -1, 6, 4, -1, -1], [-1, -1, 8, 1, -1, 2, 9, -1, -1], [7, -1, -1, -1, -1, -1, -1, -1, 8], [-1, -1, 6, 7, -1, 8, 2, -1, -1], [-1, -1, 2, 6, -1, 9, 5, -1, -1], [8, -1, -1, 2, -1, 3, -1, -1, 9], [-1, -1, 5, -1, 1, -1, 3, -1, -1]]), [[4, 8, 3, 9, 2, 1, 6, 5, 7], [9, 6, 7, 3, 4, 5, 8, 2, 1], [2, 5, 1, 8, 7, 6, 4, 9, 3], [5, 4, 8, 1, 3, 2, 9, 7, 6], [7, 2, 9, 5, 6, 4, 1, 3, 8], [1, 3, 6, 7, 9, 8, 2, 4, 5], [3, 7, 2, 6, 8, 9, 5, 1, 4], [8, 1, 4, 2, 5, 3, 7, 6, 9], [6, 9, 5, 4, 1, 7, 3, 8, 2]]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function solveSudoku(puzzle) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function solveSudoku(puzzle) {
  var solution;

  class DoX {
    constructor(V, H) {
      this.V = V;
      this.L = this;
      this.R = this;
      this.U = this;
      this.D = this;
      this.S = 1;
      this.H = H || this;
      H && (H.S += 1);
    }
  }

  const addRight = (e, n) => {
    n.R = e.R;
    n.L = e;
    e.R.L = n;
    return (e.R = n);
  };

  const addBelow = (e, n) => {
    n.D = e.D;
    n.U = e;
    e.D.U = n;
    return (e.D = n);
  };

  const search = function(h, s) {
    if (h.R == h) {
      printSol(s);
    } else {
      let c = chooseColumn(h);
      cover(c);
      for (let r = c.D; r != c; r = r.D) {
        s.push(r);
        for (let j = r.R; r != j; j = j.R) {
          cover(j.H);
        }
        search(h, s);
        r = s.pop();
        for (let j = r.R; j != r; j = j.R) {
          uncover(j.H);
        }
      }
      uncover(c);
    }
  };

  const chooseColumn = h => {
    let s = Number.POSITIVE_INFINITY;
    let c = h;
    for (let j = h.R; j != h; j = j.R) {
      if (j.S < s) {
        c = j;
        s = j.S;
      }
    }
    return c;
  };

  const cover = c => {
    c.L.R = c.R;
    c.R.L = c.L;
    for (let i = c.D; i != c; i = i.D) {
      for (let j = i.R; j != i; j = j.R) {
        j.U.D = j.D;
        j.D.U = j.U;
        j.H.S = j.H.S - 1;
      }
    }
  };

  const uncover = c => {
    for (let i = c.U; i != c; i = i.U) {
      for (let j = i.L; i != j; j = j.L) {
        j.H.S = j.H.S + 1;
        j.U.D = j;
        j.D.U = j;
      }
    }
    c.L.R = c;
    c.R.L = c;
  };

  const printSol = a => {
    solution = a.reduce((p, c) => {
      let [i, v] = c.V.split(':');
      p[i * 1] = v;
      return p;
    }, new Array(a.length).fill('.'));
  };

  const gridMeta = s => {
    const g = s.split('');
    const cellCount = g.length;
    const tokenCount = Math.sqrt(cellCount);
    const N = Math.sqrt(tokenCount);
    const g2D = g.map(e =>
      isNaN(e * 1)
        ? new Array(tokenCount).fill(1).map((_, i) => i + 1)
        : [e * 1]
    );
    return [cellCount, N, tokenCount, g2D];
  };

  const indexesN = n => i => {
    let c = Math.floor(i / (n * n));
    i %= n * n;
    return [c, i, Math.floor(c / n) * n + Math.floor(i / n)];
  };

  const reduceGrid = puzString => {
    const [
      numCells, // The total number of cells in a grid (81 for a 9x9 grid)
      N, // the 'n' value of the grid. (3 for a 9x9 grid)
      U, // The total number of unique tokens to be placed.
      g2D // A 2D array representation of the grid, with each element
      // being an array of candidates for a cell. Known cells are
      // single element arrays.
    ] = gridMeta(puzString);

    const getIndex = indexesN(N);

    const headRow = new Array(4 * numCells)
      .fill('')
      .map((_, i) => new DoX(`H${i}`));

    let H = new DoX('ROOT');
    headRow.reduce((p, c) => addRight(p, c), H);

    for (let i = 0; i < numCells; i++) {
      const [ri, ci, bi] = getIndex(i);
      g2D[i].forEach(num => {
        let id = `${i}:${num}`;
        let candIdx = num - 1;

        // The 4 columns that we will populate.
        const A = headRow[i];
        const B = headRow[numCells + candIdx + ri * U];
        const C = headRow[numCells * 2 + candIdx + ci * U];
        const D = headRow[numCells * 3 + candIdx + bi * U];

        // The Row-Column Constraint
        let rcc = addBelow(A.U, new DoX(id, A));

        // The Row-Number Constraint
        let rnc = addBelow(B.U, addRight(rcc, new DoX(id, B)));

        // The Column-Number Constraint
        let cnc = addBelow(C.U, addRight(rnc, new DoX(id, C)));

        // The Block-Number Constraint
        addBelow(D.U, addRight(cnc, new DoX(id, D)));
      });
    }
    search(H, []);
  };

  var stringPuzzle = '';

  for (var i = 0; i < puzzle.length; i++) {
    puzzle[i].forEach(function(e) {
      if (e == -1) stringPuzzle += '.';
      else stringPuzzle += e;
    });
  }

  reduceGrid(stringPuzzle);

  var result = [];

  for (var i = 0; i < 9; i++) {
    result.push(solution.slice(i * 9, (i + 1) * 9).map(e => parseInt(e)));
  }

  return result;
}
```

</section>
